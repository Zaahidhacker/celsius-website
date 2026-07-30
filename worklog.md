
---
Task ID: final-logo-extraction
Agent: main
Task: Extract the real Celsius logo from the PDF brochure cover and integrate it into the website, plus add the missing sections (VisionMission, ProductRange, SelectionGuide) to page.tsx so all brochure content is included.

Work Log:
- Re-rendered PDF page 1 at 400 DPI using pdftoppm for high-quality logo extraction.
- Used VLM (z-ai vision) to identify the logo location: white "wind/airflow" icon (three curved horizontal lines) + "Celsius" wordmark on a dark navy panel.
- Built a programmatic extraction pipeline (extract_logo_v7.py) that:
  1. Crops the logo region from the high-res page render.
  2. Applies white-pixel threshold mask to isolate logo from navy bg.
  3. Generates 3 transparent variants: white-on-transparent, navy-on-transparent, black-on-transparent.
- VLM verified all 3 variants score 9-10/10 with full wind icon visible and "Celsius" wordmark readable.
- Saved final assets to /home/z/my-project/public/celsius-logo-{white,navy,black}.png (1582×678 px each).
- Updated CelsiusLogo.tsx to use the real PNG logo image instead of the abstract SVG placeholder. Component now supports "default" (navy), "light" (white), and "dark" (black) variants with sizes sm/md/lg/xl.
- Updated Navbar.tsx to use variant="light" (white) over the dark hero, and variant="default" (navy) when scrolled onto the light background.
- Added the three missing sections to page.tsx that were created in earlier sessions but never wired up:
  - VisionMissionSection (Vision, Mission, 4 pledges: Transparent Pricing, Competitive Rates, No Hidden Costs, High-Quality Installations)
  - ProductRangeSection (9 brand cards: Midea, Daikin, Panasonic, Haier, Mitsubishi, Samsung, TCL, Chigo, LG — each with tag + description from PDF page 9)
  - SelectionGuideSection (3 cards: Domestic/Commercial/Industrial with exact BTU ranges, room area sq ft, AC types, considerations, and recommended models from PDF page 10)
- Verified all sections render correctly via VLM checks (8.5-9/10 polish across the board).

Stage Summary:
- Real Celsius logo (wind icon + wordmark) now used throughout the site.
- All brochure content is now represented on the site (About, Vision/Mission, Brands/Trust, Product Range, Services, Solutions, Selection Guide with BTU/sq ft data, Stats, CEO, Case Studies, Testimonials, Clients, Contact).
- Final page.tsx section order: Hero → About → VisionMission → Trust → ProductRange → Services → Solutions → SelectionGuide → Stats → CEO → CaseStudies → Testimonials → Clients → Contact → Footer.
- Lint passes clean. Dev server runs at http://localhost:3000.
- Logo assets at /public/celsius-logo-{white,navy,black}.png (PNG, 1582×678, transparent bg).
