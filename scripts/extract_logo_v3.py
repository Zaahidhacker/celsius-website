"""Better logo extraction:
1. Use a wider dark-blue color range to capture the entire branding panel (not just the AC unit).
2. Find the LARGEST contiguous dark-blue region.
3. Within that region, find white logo pixels.
"""
from PIL import Image
import numpy as np
import os
from scipy import ndimage

SRC = "/home/z/my-project/scripts/pdf_out/page1_400dpi-01.png"
OUT_DIR = "/home/z/my-project/scripts/pdf_out/logo_final3"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC).convert("RGB")
arr = np.array(img)
H, W, _ = arr.shape
print(f"Image: {W}x{H}")

R, G, B = arr[:,:,0], arr[:,:,1], arr[:,:,2]

# Dark navy panel: low brightness, blue dominant
# Try: brightness < 100, and B > R, B > G
brightness = arr.mean(axis=2)
navy_mask = (brightness < 120) & (B > R + 10) & (B > G - 10)

# Label connected components and find the largest
labeled, num_features = ndimage.label(navy_mask)
print(f"Found {num_features} dark blue regions")
sizes = ndimage.sum(navy_mask, labeled, range(1, num_features + 1))
if len(sizes) == 0:
    print("ERROR: No dark blue regions found")
    exit(1)

# Pick the largest
largest_idx = np.argmax(sizes) + 1
print(f"Largest region: #{largest_idx} with {sizes[largest_idx-1]} pixels")

# Get bbox of largest region
slices = ndimage.find_objects(labeled == largest_idx)[0]
ys, xs = slices
panel_top = ys.start
panel_bottom = ys.stop
panel_left = xs.start
panel_right = xs.stop
print(f"Brand panel: ({panel_left}, {panel_top}) to ({panel_right}, {panel_bottom})")
print(f"Panel size: {panel_right - panel_left} x {panel_bottom - panel_top}")

# Save the panel
panel_crop = img.crop((panel_left, panel_top, panel_right, panel_bottom))
panel_crop.save(os.path.join(OUT_DIR, "panel.png"))
print(f"Saved panel.png: {panel_crop.size}")

# Now within the panel, find white pixels
panel_arr = np.array(panel_crop)
pR, pG, pB = panel_arr[:,:,0], panel_arr[:,:,1], panel_arr[:,:,2]
# White: very high R, G, B
white_mask = (pR > 220) & (pG > 220) & (pB > 220)
print(f"White pixels in panel: {white_mask.sum()}")

# Save white mask for inspection
Image.fromarray((white_mask * 255).astype(np.uint8)).save(os.path.join(OUT_DIR, "panel_white_mask.png"))

# Find row profile — the logo is in the middle of the panel, between the AC unit (top) and tagline (lower)
row_white = white_mask.sum(axis=1)
# Find rows with significant white presence
print("Row white count profile (every 100 rows):")
for i in range(0, len(row_white), 100):
    print(f"  row {i}: {row_white[i]}")

# The logo should be the LARGEST contiguous block of high-white-count rows in the middle of the panel
# Use a high threshold to find only big white regions (the wordmark + icon)
threshold = white_mask.shape[1] * 0.15  # at least 15% of width
big_white_rows = np.where(row_white > threshold)[0]
print(f"\nBig white rows: {len(big_white_rows)} total")
if len(big_white_rows) > 0:
    print(f"  First: {big_white_rows[0]}, Last: {big_white_rows[-1]}")
    # Find gaps to separate logo from tagline
    if len(big_white_rows) > 1:
        gaps = np.diff(big_white_rows)
        big_gap_idx = np.where(gaps > 50)[0]
        print(f"  Big gaps at indices: {big_gap_idx}")
        if len(big_gap_idx) > 0:
            # Logo is the first contiguous run
            logo_top = big_white_rows[0]
            logo_bottom = big_white_rows[big_gap_idx[0]]
            print(f"  Logo rows: {logo_top} to {logo_bottom}")
        else:
            logo_top = big_white_rows[0]
            logo_bottom = big_white_rows[-1]
    else:
        logo_top = big_white_rows[0]
        logo_bottom = big_white_rows[0]
else:
    print("No big white rows found")
    exit(1)

# Find column extent within logo rows
logo_row_mask = white_mask[logo_top:logo_bottom+1, :]
col_white = logo_row_mask.sum(axis=0)
sig_cols = np.where(col_white > 5)[0]
if len(sig_cols) == 0:
    print("ERROR: No logo columns")
    exit(1)
logo_left = sig_cols[0]
logo_right = sig_cols[-1]
print(f"Logo bbox: ({logo_left}, {logo_top}) to ({logo_right}, {logo_bottom})")
print(f"Logo size: {logo_right - logo_left} x {logo_bottom - logo_top}")

# Crop with padding
pad = 40
logo_left = max(0, logo_left - pad)
logo_top = max(0, logo_top - pad)
logo_right = min(panel_crop.width, logo_right + pad)
logo_bottom = min(panel_crop.height, logo_bottom + pad)
logo_crop = panel_crop.crop((logo_left, logo_top, logo_right, logo_bottom))
logo_crop.save(os.path.join(OUT_DIR, "logo_dark_bg.png"))
print(f"Saved logo_dark_bg.png: {logo_crop.size}")

# Create transparent white version
logo_arr = np.array(logo_crop).astype(np.int32)
lbrightness = logo_arr.mean(axis=2)
alpha = np.clip((lbrightness - 80) * (255 / (220 - 80)), 0, 255).astype(np.uint8)
out_white = np.full_like(logo_arr, 255, dtype=np.uint8)
out_white_rgba = np.dstack([out_white, alpha])
logo_white = Image.fromarray(out_white_rgba, "RGBA")
logo_white.save(os.path.join(OUT_DIR, "logo_white_transparent.png"))

# Navy version
out_navy = np.full_like(logo_arr, 0, dtype=np.uint8)
out_navy[:,:] = [30, 50, 90]
out_navy_rgba = np.dstack([out_navy, alpha])
logo_navy = Image.fromarray(out_navy_rgba, "RGBA")
logo_navy.save(os.path.join(OUT_DIR, "logo_navy_transparent.png"))

# Autocrop
def autocrop_alpha(im, threshold=10):
    arr = np.array(im)
    alpha = arr[:,:,3]
    rows = np.where((alpha > threshold).any(axis=1))[0]
    cols = np.where((alpha > threshold).any(axis=0))[0]
    if len(rows) == 0 or len(cols) == 0:
        return im
    return im.crop((cols[0], rows[0], cols[-1]+1, rows[-1]+1))

logo_white_trim = autocrop_alpha(logo_white)
logo_white_trim.save(os.path.join(OUT_DIR, "logo_white_trim.png"))
print(f"Trimmed white logo: {logo_white_trim.size}")

logo_navy_trim = autocrop_alpha(logo_navy)
logo_navy_trim.save(os.path.join(OUT_DIR, "logo_navy_trim.png"))
print(f"Trimmed navy logo: {logo_navy_trim.size}")

# Save to public/
logo_white_trim.save("/home/z/my-project/public/celsius-logo-white.png")
logo_navy_trim.save("/home/z/my-project/public/celsius-logo-navy.png")
print("Saved to /public/")
