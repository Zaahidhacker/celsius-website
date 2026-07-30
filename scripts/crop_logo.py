"""Crop the Celsius logo from the high-res page-1 render using VLM-detected bbox.
Generates multiple variants with padding so we can pick the best one."""
from PIL import Image
import os

SRC = "/home/z/my-project/scripts/pdf_out/page_01_hires.png"
OUT_DIR = "/home/z/my-project/scripts/pdf_out/logo_crops"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC).convert("RGB")
W, H = img.size
print(f"Source image: {W}x{H}")

# VLM-detected bbox for the Celsius logo (icon + wordmark) inside the dark blue rectangle
# bbox was given as {349, 298, 692, 518} but on a 3508x2481 image that seems too small.
# Let's try multiple bboxes to find the actual logo location.

# Strategy: also crop the entire dark blue rectangle area to verify
candidates = [
    ("vlm_tight", (349, 298, 692, 518)),
    ("vlm_padded", (250, 200, 800, 600)),
    # The dark blue rectangle is likely the central column of the page.
    # The image is 3508 wide, 2481 tall. The blue rectangle appears central.
    ("blue_rect_center", (900, 200, 2600, 1500)),
    # The logo is centered horizontally in the blue rect, upper-middle vertical
    ("logo_wide_guess", (1100, 250, 2400, 900)),
]

for name, box in candidates:
    x1, y1, x2, y2 = box
    x1 = max(0, min(W-1, x1))
    y1 = max(0, min(H-1, y1))
    x2 = max(0, min(W, x2))
    y2 = max(0, min(H, y2))
    if x2 <= x1 or y2 <= y1:
        print(f"  SKIP {name}: invalid box {box}")
        continue
    crop = img.crop((x1, y1, x2, y2))
    out_path = os.path.join(OUT_DIR, f"{name}.png")
    crop.save(out_path)
    print(f"  Saved {name}: box={box} -> {crop.size}")

print("Done.")
