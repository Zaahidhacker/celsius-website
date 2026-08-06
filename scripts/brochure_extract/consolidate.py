#!/usr/bin/env python3
"""Consolidate all brochure page extractions into a single text file."""
import json
import os
import sys
from pathlib import Path

src_dir = Path("/home/z/my-project/scripts/brochure_extract")
out_file = src_dir / "brochure_content.md"

pages = sorted(src_dir.glob("page-*.json"))
print(f"Found {len(pages)} page JSON files", file=sys.stderr)

with open(out_file, "w") as out:
    out.write("# Celsius Brochure - Extracted Content\n\n")
    out.write("Source: /home/z/my-project/upload/Brochure (1).pdf (26 pages)\n\n")
    out.write("---\n\n")
    for page_json in pages:
        page_name = page_json.stem  # e.g. page-01
        try:
            data = json.loads(page_json.read_text())
            content = data["choices"][0]["message"]["content"]
        except Exception as e:
            content = f"[ERROR EXTRACTING: {e}]"
        out.write(f"## {page_name.upper()}\n\n")
        out.write(content)
        out.write("\n\n---\n\n")

print(f"Saved to {out_file}", file=sys.stderr)
print(f"Size: {out_file.stat().st_size} bytes", file=sys.stderr)
