"""Final logo extraction: use the center_wide crop (1000,0,3700,800) of the middle band.
The logo is centered in this crop. Find the white wind icon + wordmark block.
Exclude the tagline which is BELOW the logo and is light-blue, not white.
"""
from PIL import Image
import numpy as np
import os
from scipy import ndimage

SRC = "/tmp/mid_center_wide.png"  # 2700x800
OUT_DIR = "/home/z/my-project/scripts/pdf_out/logo_final4"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC).convert("RGB")
arr = np.array(img)
H, W, _ = arr.shape
print(f"Crop: {W}x{H}")

R, G, B = arr[:,:,0], arr[:,:,1], arr[:,:,2]
brightness = arr.mean(axis=2)

# True white pixels (logo): R,G,B all >= 230
white_mask = (R >= 230) & (G >= 230) & (B >= 230)
print(f"White pixels: {white_mask.sum()}")

# Tagline is light blue (B > R, B > G, but not pure white)
# So white_mask should isolate the logo primarily

# Save white mask
Image.fromarray((white_mask * 255).astype(np.uint8)).save(os.path.join(OUT_DIR, "white_mask.png"))

# Row profile
row_white = white_mask.sum(axis=1)
print("Row profile (every 50):")
for i in range(0, H, 50):
    bar = '#' * (int(row_white[i]) // 20)
    print(f"  row {i:4d}: {row_white[i]:5d} {bar}")

# Find significant rows (at least 5% width)
threshold = W * 0.05
sig_rows = np.where(row_white > threshold)[0]
if len(sig_rows) == 0:
    print("No significant white rows")
    exit(1)

print(f"\nSignificant rows: {sig_rows[0]} to {sig_rows[-1]} ({len(sig_rows)} total)")

# Find gaps
if len(sig_rows) > 1:
    gaps = np.diff(sig_rows)
    gap_idx = np.where(gaps > 30)[0]
    print(f"Gap indices: {gap_idx}")
    if len(gap_idx) > 0:
        # Logo is the first run; tagline is the second (but tagline is light blue, not white, so shouldn't show up here)
        logo_top = sig_rows[0]
        logo_bottom = sig_rows[gap_idx[0]]
    else:
        logo_top = sig_rows[0]
        logo_bottom = sig_rows[-1]
else:
    logo_top = sig_rows[0]
    logo_bottom = sig_rows[0]

print(f"Logo rows: {logo_top} to {logo_bottom}")

# Column extent in logo rows
logo_row_mask = white_mask[logo_top:logo_bottom+1, :]
col_white = logo_row_mask.sum(axis=0)
sig_cols = np.where(col_white > 5)[0]
if len(sig_cols) == 0:
    print("ERROR: No logo columns")
    exit(1)
logo_left = sig_cols[0]
logo_right = sig_cols[-1]
print(f"Logo cols: {logo_left} to {logo_right}")
print(f"Logo size: {logo_right - logo_left} x {logo_bottom - logo_top}")

# Crop with padding
pad = 50
logo_left = max(0, logo_left - pad)
logo_top = max(0, logo_top - pad)
logo_right = min(W, logo_right + pad)
logo_bottom = min(H, logo_bottom + pad)
logo_crop = img.crop((logo_left, logo_top, logo_right, logo_bottom))
logo_crop.save(os.path.join(OUT_DIR, "logo_dark_bg.png"))
print(f"Saved logo_dark_bg.png: {logo_crop.size}")

# Create transparent white version
logo_arr = np.array(logo_crop).astype(np.int32)
lbrightness = logo_arr.mean(axis=2)
# alpha: white = 255, dark blue = 0
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
