"""Final logo extraction v7: use the verified wider crop (2100x750) which contains
the complete logo. Programmatically remove the tagline at the bottom, then create
transparent white + navy + black versions.
"""
from PIL import Image
import numpy as np
import os

SRC = "/tmp/logo_wider.png"  # 2100x750
OUT_DIR = "/home/z/my-project/scripts/pdf_out/logo_final7"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC).convert("RGB")
arr = np.array(img).astype(np.int32)
H, W, _ = arr.shape
print(f"Source: {W}x{H}")

R, G, B = arr[:,:,0], arr[:,:,1], arr[:,:,2]
brightness = arr.mean(axis=2)

# White mask: pure white pixels (logo + maybe partial tagline)
white_mask = (R >= 200) & (G >= 200) & (B >= 200)
# Tagline pixels are light blue (B > R+30, B > G+30, brightness > 150) — they're NOT white
# So white_mask should isolate only the logo, not the tagline
print(f"White pixels: {white_mask.sum()}")

# Save white mask
Image.fromarray((white_mask * 255).astype(np.uint8)).save(os.path.join(OUT_DIR, "white_mask.png"))

# Row profile
row_white = white_mask.sum(axis=1)
print("Row profile (every 30):")
for i in range(0, H, 30):
    bar = '#' * (int(row_white[i]) // 20)
    print(f"  row {i:4d}: {row_white[i]:5d} {bar}")

# Find rows with significant white (at least 3 white pixels in row)
sig_rows = np.where(row_white > 3)[0]
if len(sig_rows) == 0:
    print("ERROR: No white rows")
    exit(1)
logo_top = sig_rows[0]
logo_bottom = sig_rows[-1]
print(f"\nLogo rows: {logo_top} to {logo_bottom}")

# Within logo rows, find cols
logo_row_mask = white_mask[logo_top:logo_bottom+1, :]
col_white = logo_row_mask.sum(axis=0)
sig_cols = np.where(col_white > 0)[0]
logo_left = sig_cols[0]
logo_right = sig_cols[-1]
print(f"Logo cols: {logo_left} to {logo_right}")
print(f"Logo size: {logo_right - logo_left} x {logo_bottom - logo_top}")

# Padding
pad = 50
logo_left = max(0, logo_left - pad)
logo_top = max(0, logo_top - pad)
logo_right = min(W, logo_right + pad)
logo_bottom = min(H, logo_bottom + pad)

logo_crop = img.crop((logo_left, logo_top, logo_right, logo_bottom))
logo_crop.save(os.path.join(OUT_DIR, "logo_dark_bg.png"))
print(f"\nSaved logo_dark_bg.png: {logo_crop.size}")

# Create transparent versions
logo_arr = np.array(logo_crop).astype(np.int32)
lbrightness = logo_arr.mean(axis=2)
alpha = np.clip((lbrightness - 60) * (255 / (220 - 60)), 0, 255).astype(np.uint8)

# White version
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

# Autocrop with high threshold (so we don't trim faint icon edges)
def autocrop_alpha(im, threshold=40):
    arr = np.array(im)
    alpha = arr[:,:,3]
    rows = np.where((alpha > threshold).any(axis=1))[0]
    cols = np.where((alpha > threshold).any(axis=0))[0]
    if len(rows) == 0 or len(cols) == 0:
        return im
    return im.crop((cols[0], rows[0], cols[-1]+1, rows[-1]+1))

logo_white_trim = autocrop_alpha(logo_white, threshold=30)
logo_white_trim.save(os.path.join(OUT_DIR, "logo_white_trim.png"))
print(f"Trimmed white logo: {logo_white_trim.size}")

logo_navy_trim = autocrop_alpha(logo_navy, threshold=30)
logo_navy_trim.save(os.path.join(OUT_DIR, "logo_navy_trim.png"))
print(f"Trimmed navy logo: {logo_navy_trim.size}")

logo_black_trim = autocrop_alpha(logo_black, threshold=30)
logo_black_trim.save(os.path.join(OUT_DIR, "logo_black_trim.png"))
print(f"Trimmed black logo: {logo_black_trim.size}")

# Save to public/
logo_white_trim.save("/home/z/my-project/public/celsius-logo-white.png")
logo_navy_trim.save("/home/z/my-project/public/celsius-logo-navy.png")
logo_black_trim.save("/home/z/my-project/public/celsius-logo-black.png")
print("\nSaved to /public/")
