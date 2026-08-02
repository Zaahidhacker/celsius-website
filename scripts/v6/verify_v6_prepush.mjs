import { chromium } from 'playwright';
import fs from 'fs';

const OUT = '/home/z/my-project/download/v6-prepush';
const URL = 'http://localhost:3000/v6';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(6000);

  // Hero
  await page.screenshot({ path: `${OUT}/01-hero.png` });

  // Scroll through sections
  const sections = [
    { name: '02-manifesto', y: 900 },
    { name: '03-services', y: 1900 },
    { name: '04-brands', y: 2900 },
    { name: '05-solutions', y: 3900 },
    { name: '06-projects', y: 4900 },
    { name: '07-ceo', y: 5900 },
    { name: '08-contact', y: 6900 },
    { name: '09-footer', y: 7700 },
  ];
  for (const s of sections) {
    await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), s.y);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `${OUT}/${s.name}.png` });
  }

  // Full page
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/00-full.png`, fullPage: true });

  // Mobile
  const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const mp = await m.newPage();
  await mp.goto(URL, { waitUntil: 'load', timeout: 60000 });
  await mp.waitForTimeout(5000);
  await mp.screenshot({ path: `${OUT}/10-mobile-hero.png` });
  await mp.screenshot({ path: `${OUT}/11-mobile-full.png`, fullPage: true });

  await browser.close();
  console.log('V6 screenshots captured to', OUT);
  console.log(fs.readdirSync(OUT).join('\n'));
})();
