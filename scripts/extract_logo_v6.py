"""Final logo extraction v6: Keep the wider logo region but use a much lower
threshold for column detection to capture the thin wind-icon curves.
"""
from PIL import Image
import numpy as np
import os

SRC = "/tmp/mid_center_wide.png"  # 2700x800
OUT_DIR = "/home/z/my-project/scripts/pdf_out/logo_final6"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC).convert("RGB")
arr = np.array(img)
H, W, _ = arr.shape

# Use the full logo region from row 130 to 580 (start higher to catch full icon, above tagline)
logo_top_y = 130
logo_bottom_y = 590
logo_region = img.crop((0, logo_top_y, W, logo_bottom_y))
logo_region.save(os.path.join(OUT_DIR, "logo_region.png"))
print(f"Logo region: {logo_region.size}")

reg_arr = np.array(logo_region).astype(np.int32)
rR, rG, rB = reg_arr[:,:,0], reg_arr[:,:,1], reg_arr[:,:,2]
brightness = reg_arr.mean(axis=2)

# White mask (looser to catch anti-aliased icon edges)
white_mask = (rR >= 180) & (rG >= 180) & (rB >= 180)
print(f"White pixels: {white_mask.sum()}")

# Column profile - lower threshold to catch thin icon curves
col_white = white_mask.sum(axis=0)
# Use threshold of 1 pixel (any column with a white pixel counts)
sig_cols = np.where(col_white > 0)[0]
if len(sig_cols) == 0:
    print("ERROR: No white cols")
    exit(1)

# But we want to exclude columns that are ONLY from the AC unit (top).
# Within the logo region (rows 0-410 relative), the AC unit shouldn't be present
# (we already cropped at row 170, below the AC unit which ends around row 130).
# So sig_cols should be all logo columns.
logo_left = sig_cols[0]
logo_right = sig_cols[-1]
print(f"Logo cols: {logo_left} to {logo_right} (width: {logo_right - logo_left})")

# Find rows with white pixels WITHIN the column range
logo_col_mask = white_mask[:, logo_left:logo_right+1]
row_white_in_cols = logo_col_mask.sum(axis=1)
sig_rows = np.where(row_white_in_cols > 0)[0]
if len(sig_rows) == 0:
    print("ERROR: No white rows in cols")
    exit(1)
logo_top_rel = sig_rows[0]
logo_bottom_rel = sig_rows[-1]
print(f"Logo rows (rel): {logo_top_rel} to {logo_bottom_rel} (height: {logo_bottom_rel - logo_top_rel})")

# Add padding
pad = 50
logo_left = max(0, logo_left - pad)
logo_right = min(W, logo_right + pad)
logo_top_rel = max(0, logo_top_rel - pad)
logo_bottom_rel = min(logo_region.height, logo_bottom_rel + pad)

logo_crop = logo_region.crop((logo_left, logo_top_rel, logo_right, logo_bottom_rel))
logo_crop.save(os.path.join(OUT_DIR, "logo_dark_bg.png"))
print(f"Saved logo_dark_bg.png: {logo_crop.size}")

# Create transparent white version
logo_arr = np.array(logo_crop).astype(np.int32)
lbrightness = logo_arr.mean(axis=2)
alpha = np.clip((lbrightness - 60) * (255 / (220 - 60)), 0, 255).astype(np.uint8)

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

# Black version
out_black = np.full_like(logo_arr, 0, dtype=np.uint8)
out_black[:,:] = [40, 40, 45]
out_black_rgba = np.dstack([out_black, alpha])
logo_black = Image.fromarray(out_black_rgba, "RGBA")
logo_black.save(os.path.join(OUT_DIR, "logo_black_transparent.png"))

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

logo_black_trim = autocrop_alpha(logo_black)
logo_black_trim.save(os.path.join(OUT_DIR, "logo_black_trim.png"))
print(f"Trimmed black logo: {logo_black_trim.size}")

# Save to public/
logo_white_trim.save("/home/z/my-project/public/celsius-logo-white.png")
logo_navy_trim.save("/home/z/my-project/public/celsius-logo-navy.png")
logo_black_trim.save("/home/z/my-project/public/celsius-logo-black.png")
print("Saved to /public/")
