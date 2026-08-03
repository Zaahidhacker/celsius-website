import { chromium } from 'playwright';
const URL = 'https://celsius-lk.vercel.app/v6';
const OUT = '/home/z/my-project/download/v6-prod';
import fs from 'fs';
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch({ headless: true });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(URL, { waitUntil: 'load', timeout: 60000 });
  await p.waitForTimeout(6000);
  await p.screenshot({ path: `${OUT}/01-hero.png` });
  await p.screenshot({ path: `${OUT}/00-full.png`, fullPage: true });
  await b.close();
  console.log('PROD screenshots:', fs.readdirSync(OUT));
})();
