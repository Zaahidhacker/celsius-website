#!/usr/bin/env python3
"""Extract text and images from Celsius Brochure.pdf"""
import pdfplumber
import os
from pathlib import Path

PDF_PATH = "/home/z/my-project/upload/Brochure.pdf"
OUT_DIR = Path("/home/z/my-project/scripts/pdf_out")
OUT_DIR.mkdir(exist_ok=True, parents=True)
IMG_DIR = OUT_DIR / "images"
IMG_DIR.mkdir(exist_ok=True)

all_text = []

with pdfplumber.open(PDF_PATH) as pdf:
    print(f"Total pages: {len(pdf.pages)}")
    for i, page in enumerate(pdf.pages, start=1):
        text = page.extract_text() or ""
        all_text.append(f"\n========== PAGE {i} ==========\n{text}\n")
        # Save page image (full render)
        try:
            img = page.to_image(resolution=120)
            img.save(str(OUT_DIR / f"page_{i:02d}.png"))
        except Exception as e:
            print(f"  page image {i}: {e}")
        # Save embedded images
        try:
            for j, im in enumerate(page.images, start=1):
                bbox = (im["x0"], im["top"], im["x1"], im["bottom"])
                cropped = page.within_bbox(bbox)
                pil = cropped.to_image(resolution=150)
                pil.save(str(IMG_DIR / f"p{i:02d}_img_{j:02d}.png"))
        except Exception as e:
            print(f"  embedded image {i}/{j}: {e}")

text_path = OUT_DIR / "all_text.txt"
text_path.write_text("".join(all_text), encoding="utf-8")
print(f"\nWrote {text_path}")
print(f"Page renders in {OUT_DIR}")
print(f"Embedded images in {IMG_DIR}")
