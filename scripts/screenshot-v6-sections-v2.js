const puppeteer = require('puppeteer');

const sections = [
  { id: '01-hero', sel: 'section.v6-hero' },
  { id: '02-manifesto', sel: '#about' },
  { id: '03-services', sel: '#services' },
  { id: '04-brands', sel: '#brands' },
  { id: '05-solutions', sel: '#solutions' },
  { id: '06-pricing', sel: '#pricing' },
  { id: '07-projects', sel: '#projects' },
  { id: '08-reviews', sel: '#reviews' },
  { id: '09-ceo', sel: '#ceo' },
  { id: '10-contact', sel: '#contact' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));

  for (const sec of sections) {
    try {
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, sec.sel);
      await new Promise(r => setTimeout(r, 1500));
      // smooth scroll back to top of section to trigger reveals
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, sec.sel);
      await new Promise(r => setTimeout(r, 2500));

      const box = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { y: r.y, h: r.height };
      }, sec.sel);
      if (!box) { console.log(`MISS ${sec.id}`); continue; }

      const h = Math.min(box.h, 2400);
      await page.screenshot({
        path: `/home/z/my-project/scripts/screenshots/v6-audit/${sec.id}.png`,
        clip: { x: 0, y: Math.max(0, box.y), width: 1440, height: h }
      });
      console.log(`OK ${sec.id} h=${Math.round(box.h)}`);
    } catch (e) {
      console.log(`ERR ${sec.id}: ${e.message}`);
    }
  }
  await browser.close();
})();
