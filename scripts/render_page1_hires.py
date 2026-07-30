"""Render PDF page 1 at higher resolution and crop the logo region more generously,
using VLM to confirm bounds in the new render."""
import subprocess
import os
from PIL import Image

PDF = "/home/z/my-project/upload/Brochure.pdf"
OUT_DIR = "/home/z/my-project/scripts/pdf_out"
os.makedirs(OUT_DIR, exist_ok=True)

# Use pdftoppm at 400 DPI for higher quality
out_prefix = os.path.join(OUT_DIR, "page1_400dpi")
result = subprocess.run(
    ["pdftoppm", "-r", "400", "-f", "1", "-l", "1", "-png", PDF, out_prefix],
    capture_output=True, text=True
)
print("stdout:", result.stdout)
print("stderr:", result.stderr)
# pdftoppm appends -NN
import glob
files = sorted(glob.glob(out_prefix + "*.png"))
print("Generated:", files)
if files:
    img = Image.open(files[0])
    print("Size:", img.size)
