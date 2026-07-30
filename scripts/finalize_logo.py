"""Crop the Celsius logo tightly from the blue_rect_center crop using VLM bbox.
Then save multiple variants: dark-bg version + white-bg version + transparent PNG."""
from PIL import Image
import os
import numpy as np

CROP = "/home/z/my-project/scripts/pdf_out/logo_crops/blue_rect_center.png"
OUT_DIR = "/home/z/my-project/scripts/pdf_out/logo_final"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(CROP).convert("RGB")
W, H = img.size
print(f"Crop: {W}x{H}")

# VLM bbox (within this crop) for the logo only (no tagline)
x1, y1, x2, y2 = 193, 427, 882, 818
# Add small padding
pad = 20
x1 = max(0, x1 - pad)
y1 = max(0, y1 - pad)
x2 = min(W, x2 + pad)
y2 = min(H, y2 + pad)

logo = img.crop((x1, y1, x2, y2))
print(f"Logo crop: {logo.size}")
logo.save(os.path.join(OUT_DIR, "logo_dark_bg.png"))

# Now create a transparent version: white pixels become opaque, dark blue bg becomes transparent.
logo_arr = np.array(logo).astype(np.int32)
# White pixels: R, G, B all > 180
white_mask = (logo_arr[:,:,0] > 170) & (logo_arr[:,:,1] > 170) & (logo_arr[:,:,2] > 170)
# Intermediate pixels (anti-aliased edges) get partial alpha based on brightness
brightness = logo_arr.mean(axis=2)
# alpha = how "white" the pixel is, scaled
alpha = np.clip((brightness - 60) * (255 / (240 - 60)), 0, 255).astype(np.uint8)
# For non-white pixels, force RGB to white (so logo shows up white on any bg)
out = np.zeros_like(logo_arr, dtype=np.uint8)
out[:,:,0] = 255
out[:,:,1] = 255
out[:,:,2] = 255
out_rgba = np.dstack([out, alpha])
logo_white = Image.fromarray(out_rgba, mode="RGBA")
logo_white.save(os.path.join(OUT_DIR, "logo_white_transparent.png"))

# Also create a navy version (replace white with navy) for light backgrounds
navy = np.array([30, 50, 90], dtype=np.uint8)
out_navy = np.zeros_like(logo_arr, dtype=np.uint8)
out_navy[:,:] = navy
out_navy_rgba = np.dstack([out_navy, alpha])
logo_navy = Image.fromarray(out_navy_rgba, mode="RGBA")
logo_navy.save(os.path.join(OUT_DIR, "logo_navy_transparent.png"))

# Trim transparent edges (autocrop based on alpha)
def autocrop_alpha(im, threshold=10):
    arr = np.array(im)
    if arr.shape[2] == 4:
        alpha = arr[:,:,3]
    else:
        alpha = arr.mean(axis=2)
    rows = np.where((alpha > threshold).any(axis=1))[0]
    cols = np.where((alpha > threshold).any(axis=0))[0]
    if len(rows) == 0 or len(cols) == 0:
        return im
    top, bottom = rows[0], rows[-1] + 1
    left, right = cols[0], cols[-1] + 1
    return im.crop((left, top, right, bottom))

logo_white_trim = autocrop_alpha(logo_white)
logo_white_trim.save(os.path.join(OUT_DIR, "logo_white_trim.png"))
print(f"Trimmed white logo: {logo_white_trim.size}")

logo_navy_trim = autocrop_alpha(logo_navy)
logo_navy_trim.save(os.path.join(OUT_DIR, "logo_navy_trim.png"))
print(f"Trimmed navy logo: {logo_navy_trim.size}")

# Save final public assets - high quality
logo_white_trim.save("/home/z/my-project/public/celsius-logo-white.png")
logo_navy_trim.save("/home/z/my-project/public/celsius-logo-navy.png")
print("Saved to /public/")
