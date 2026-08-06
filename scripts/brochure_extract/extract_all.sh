#!/bin/bash
# Extract text from all brochure pages in parallel batches
cd /home/z/my-project/scripts/brochure_extract

PROMPT='Extract ALL text content from this brochure page. Include: headlines, body text, captions, contact info, brand names, model numbers, technical specs, pricing, addresses, phone numbers, emails, social handles. Be exhaustive. Also describe any LOGO, color swatches, icons. Format: SECTION > content.'

# Run 6 at a time to avoid rate limits
for i in 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26; do
  (z-ai vision -p "$PROMPT" -i "./page-${i}.jpg" -o "page-${i}.json" 2>&1 | tail -1) &
  # Batch of 5
  if (( $(jobs -r | wc -l) >= 5 )); then
    wait -n
  fi
done
wait
echo "DONE"
ls *.json | wc -l
