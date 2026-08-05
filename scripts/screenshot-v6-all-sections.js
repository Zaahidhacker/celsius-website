const puppeteer = require('puppeteer');

const sections = [
  { id: 'hero', selector: '#v6-hero, section.v6-hero, [data-section="hero"]' },
  { id: 'manifesto', selector: '#v6-manifesto, section.v6-manifesto, [data-section="manifesto"]' },
  { id: 'services', selector: '#v6-services, section.v6-services, [data-section="services"]' },
  { id: 'brands', selector: '#v6-brands, section.v6-brands, [data-section="brands"]' },
  { id: 'solutions', selector: '#v6-solutions, section.v6-solutions, [data-section="solutions"]' },
  { id: 'pricing', selector: '#v6-pricing, section.v6-pricing, [data-section="pricing"]' },
  { id: 'projects', selector: '#v6-projects, section.v6-projects, [data-section="projects"]' },
  { id: 'reviews', selector: '#v6-reviews, section.v6-reviews, [data-section="reviews"]' },
  { id: 'ceo', selector: '#v6-ceo, section.v6-ceo, [data-section="ceo"]' },
  { id: 'contact', selector: '#v6-contact, section.v6-contact, [data-section="contact"]' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));

  // Capture full page first
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-audit/00-full-desktop.png', fullPage: true });

  // List all top-level section elements on the page
  const found = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('main.v6-root > section, main.v6-root > div > section, .v6-root section'));
    return all.map((s, i) => ({
      idx: i,
      tag: s.tagName,
      cls: s.className.slice(0, 80),
      id: s.id,
      top: Math.round(s.getBoundingClientRect().top + window.scrollY),
      height: Math.round(s.getBoundingClientRect().height),
    }));
  });
  console.log('Sections found:', JSON.stringify(found, null, 2));

  // Scroll to each section and capture viewport screenshot
  for (const sec of sections) {
    try {
      const el = await page.$(sec.selector);
      if (!el) {
        console.log(`MISSING: ${sec.id} (${sec.selector})`);
        continue;
      }
      await el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      await new Promise(r => setTimeout(r, 1800));
      const box = await el.boundingBox();
      // Screenshot the section element itself, padded by 100px above and below to catch spacing
      const sh = Math.min(box.height + 200, 4000);
      await page.screenshot({
        path: `/home/z/my-project/scripts/screenshots/v6-audit/${sec.id}.png`,
        clip: { x: 0, y: Math.max(0, box.y - 100), width: 1440, height: sh }
      });
      console.log(`OK: ${sec.id} (h=${Math.round(box.height)})`);
    } catch (e) {
      console.log(`ERR ${sec.id}: ${e.message}`);
    }
  }

  // Mobile viewport
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-audit/99-full-mobile.png', fullPage: true });
  console.log('Mobile done');
  await browser.close();
})();
