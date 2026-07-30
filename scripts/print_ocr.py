#!/usr/bin/env python3
"""Print extracted text from all OCR JSON files."""
import json
from pathlib import Path

OCR_DIR = Path("/home/z/my-project/scripts/pdf_out/ocr")
files = sorted(OCR_DIR.glob("page_*.json"))
out_lines = []
for f in files:
    try:
        d = json.loads(f.read_text())
        content = d["choices"][0]["message"]["content"]
        page_num = f.stem.split("_")[1]
        out_lines.append(f"\n\n========== PAGE {page_num} ==========\n{content}")
    except Exception as e:
        out_lines.append(f"\n========== PAGE {f.stem} ERROR: {e} ==========\n")

text = "".join(out_lines)
out_path = Path("/home/z/my-project/scripts/pdf_out/ocr_combined.md")
out_path.write_text(text, encoding="utf-8")
print(f"Wrote {out_path} ({len(text)} chars)")
print(text)
