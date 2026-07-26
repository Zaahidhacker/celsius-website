#!/usr/bin/env bash
# OCR all PDF pages, write each result to a separate JSON file
set -e
PAGES_DIR="/home/z/my-project/scripts/pdf_out"
OUT_DIR="/home/z/my-project/scripts/pdf_out/ocr"
mkdir -p "$OUT_DIR"

for p in $(seq -w 1 26); do
  if [ -f "$OUT_DIR/page_${p}.json" ]; then
    echo "[skip] page_${p}.json already exists"
    continue
  fi
  echo "[ocr] page_${p}.png"
  z-ai vision \
    -p "Extract ALL text from this brochure page verbatim. Include every heading, paragraph, caption, contact info, name, title, address, bullet list, table cell, and small print. Preserve structure with markdown. Be exhaustive — do not summarize." \
    -i "$PAGES_DIR/page_${p}.png" \
    -o "$OUT_DIR/page_${p}.json" > /dev/null 2>&1 || echo "  [error] page_${p}"
done
echo "done"
