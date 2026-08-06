#!/bin/bash
cd /home/z/my-project/scripts/brochure_extract

PROMPT='Extract ALL text content from this brochure page. Include: headlines, body text, captions, contact info, brand names, model numbers, technical specs, pricing, addresses, phone numbers, emails, social handles. Be exhaustive. Also describe any LOGO, color swatches, icons. Format: SECTION > content.'

for i in 08 09 10 11 12 15 16 17 18 19 20 21 22 23 24 25 26; do
  if [ ! -f "page-${i}.json" ]; then
    echo "Extracting page $i..."
    # Retry up to 3 times on rate limit
    for attempt in 1 2 3; do
      result=$(timeout 60 z-ai vision -p "$PROMPT" -i "./page-${i}.jpg" -o "page-${i}.json" 2>&1 | tail -1)
      if [[ "$result" == *"saved"* ]]; then
        echo "  OK"
        break
      else
        echo "  attempt $attempt failed: $result"
        sleep 15
      fi
    done
    sleep 8
  fi
done
echo "DONE"
ls *.json | wc -l
