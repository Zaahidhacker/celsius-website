"""Programmatic logo extraction:
1. Find the dark blue rectangle on page 1 (the brand panel).
2. Within the blue rectangle, find the white logo (icon + wordmark).
3. Use brightness + color thresholds to mask, then crop tightly.
"""
from PIL import Image
import numpy as np
import os

SRC = "/home/z/my-project/scripts/pdf_out/page1_400dpi-01.png"
OUT_DIR = "/home/z/my-project/scripts/pdf_out/logo_final2"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC).convert("RGB")
arr = np.array(img)
H, W, _ = arr.shape
print(f"Image: {W}x{H}")

# 1. Find dark blue rectangle. Dark blue: low R, low-medium G, high B
R, G, B = arr[:,:,0], arr[:,:,1], arr[:,:,2]
dark_blue_mask = (R < 60) & (G < 80) & (B > 60) & (B < 200)
# Find rows/cols where dark blue is dense
row_density = dark_blue_mask.sum(axis=1)
col_density = dark_blue_mask.sum(axis=0)

# The blue rect should be a contiguous block of high-density rows and cols
threshold_row = row_density.max() * 0.3
threshold_col = col_density.max() * 0.3
blue_rows = np.where(row_density > threshold_row)[0]
blue_cols = np.where(col_density > threshold_col)[0]
if len(blue_rows) == 0 or len(blue_cols) == 0:
    print("ERROR: No dark blue rectangle found")
    exit(1)

blue_top = blue_rows[0]
blue_bottom = blue_rows[-1]
blue_left = blue_cols[0]
blue_right = blue_cols[-1]
print(f"Blue rectangle: ({blue_left}, {blue_top}) to ({blue_right}, {blue_bottom})")
print(f"Blue rect size: {blue_right - blue_left} x {blue_bottom - blue_top}")

# Save the blue rect for verification
blue_crop = img.crop((blue_left, blue_top, blue_right, blue_bottom))
blue_crop.save(os.path.join(OUT_DIR, "blue_rect.png"))
print(f"Saved blue_rect.png: {blue_crop.size}")

# 2. Within the blue rect, find white pixels (the logo)
blue_arr = np.array(blue_crop)
bR, bG, bB = blue_arr[:,:,0], blue_arr[:,:,1], blue_arr[:,:,2]
# White: high R, G, B (>= 200)
white_mask = (bR > 200) & (bG > 200) & (bB > 200)
# Save white mask as image for verification
white_vis = Image.fromarray((white_mask * 255).astype(np.uint8))
white_vis.save(os.path.join(OUT_DIR, "white_mask.png"))

# 3. Find bbox of the white mask
# But the white mask may include other things (like the AC unit at top, the bright blue border, etc.)
# The logo is in the lower-middle of the blue rect (icon + wordmark).
# Tagline "Experts in keeping things cool" is BELOW the logo and is also light.
# Strategy: scan rows top-down to find first row with significant white pixels,
# and look for the END of the logo (before the tagline starts).
# The tagline is smaller / lighter, so it should have fewer white pixels per row.
bH, bW = white_mask.shape
row_white_count = white_mask.sum(axis=1)
# Find rows with significant white presence (logo rows should have many white pixels)
sig_threshold = bW * 0.05  # at least 5% of width is white
sig_rows = np.where(row_white_count > sig_threshold)[0]
if len(sig_rows) == 0:
    print("ERROR: No white logo found in blue rect")
    exit(1)

print(f"Significant white rows: {sig_rows[0]} to {sig_rows[-1]} (of {bH})")
print(f"  Row counts at boundaries: {row_white_count[sig_rows[0]]}, ..., {row_white_count[sig_rows[-1]]}")

# Look for the gap between the logo and the tagline (a row with very low white count)
# Find consecutive runs of significant rows
gaps = np.diff(sig_rows)
gap_indices = np.where(gaps > 30)[0]  # gaps of more than 30 pixels
print(f"Found {len(gap_indices)} gaps: {[sig_rows[g] for g in gap_indices]}")

if len(gap_indices) > 0:
    # The logo is the first run; the tagline is the second run
    logo_top = sig_rows[0]
    logo_bottom = sig_rows[gap_indices[0]]
else:
    logo_top = sig_rows[0]
    logo_bottom = sig_rows[-1]

# Within the logo rows, find the column extent
logo_row_mask = white_mask[logo_top:logo_bottom+1, :]
col_white_count = logo_row_mask.sum(axis=0)
sig_cols = np.where(col_white_count > 0)[0]
if len(sig_cols) == 0:
    print("ERROR: No white columns in logo rows")
    exit(1)
logo_left = sig_cols[0]
logo_right = sig_cols[-1]

print(f"Logo bbox within blue rect: ({logo_left}, {logo_top}) to ({logo_right}, {logo_bottom})")
print(f"Logo size: {logo_right - logo_left} x {logo_bottom - logo_top}")

# Add small padding
pad = 30
logo_left = max(0, logo_left - pad)
logo_top = max(0, logo_top - pad)
logo_right = min(bW, logo_right + pad)
logo_bottom = min(bH, logo_bottom + pad)

logo_crop = blue_crop.crop((logo_left, logo_top, logo_right, logo_bottom))
logo_crop.save(os.path.join(OUT_DIR, "logo_dark_bg.png"))
print(f"Saved logo_dark_bg.png: {logo_crop.size}")

# 4. Create transparent white version
logo_arr = np.array(logo_crop).astype(np.int32)
brightness = logo_arr.mean(axis=2)
# alpha based on brightness — white gets full alpha, dark blue gets zero
alpha = np.clip((brightness - 80) * (255 / (220 - 80)), 0, 255).astype(np.uint8)
# Force RGB to white (so logo is solid white where alpha > 0)
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

# Autocrop to trim transparent edges
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
print("Copied to /public/")
