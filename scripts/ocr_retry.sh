#!/usr/bin/env bash
# Retry failed OCR pages with delays
set -e
PAGES_DIR="/home/z/my-project/scripts/pdf_out"
OUT_DIR="/home/z/my-project/scripts/pdf_out/ocr"
mkdir -p "$OUT_DIR"

FAILED_PAGES="16 17 18 19 20 21 22 23 24 25 26"

for p in $FAILED_PAGES; do
  # already done?
  if [ -f "$OUT_DIR/page_${p}.json" ] && [ -s "$OUT_DIR/page_${p}.json" ]; then
    # verify it has content
    if python3 -c "import json,sys; d=json.load(open('$OUT_DIR/page_${p}.json')); c=d['choices'][0]['message']['content']; sys.exit(0 if c and len(c)>5 else 1)" 2>/dev/null; then
      echo "[skip] page_${p} already has content"
      continue
    fi
  fi
  echo "[ocr retry] page_${p}"
  for attempt in 1 2 3; do
    if z-ai vision \
      -p "Extract ALL text from this brochure page verbatim. Include every heading, paragraph, caption, contact info, name, title, address, bullet list, table cell, and small print. Preserve structure with markdown. Be exhaustive — do not summarize." \
      -i "$PAGES_DIR/page_${p}.png" \
      -o "$OUT_DIR/page_${p}.json" > /dev/null 2>&1; then
      # verify content
      if python3 -c "import json,sys; d=json.load(open('$OUT_DIR/page_${p}.json')); c=d['choices'][0]['message']['content']; sys.exit(0 if c and len(c)>5 else 1)" 2>/dev/null; then
        echo "  [ok] attempt $attempt"
        break
      else
        echo "  [empty] attempt $attempt"
      fi
    else
      echo "  [fail] attempt $attempt"
    fi
    sleep 3
  done
  sleep 2
done
echo "done"
