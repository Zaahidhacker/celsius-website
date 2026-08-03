import { chromium } from 'playwright';
import fs from 'fs';

const OUT = '/home/z/my-project/download/prod-shots';
fs.mkdirSync(OUT, { recursive: true });

const versions = [
  { name: 'v1', url: 'https://celsius-lk.vercel.app/' },
  { name: 'v2', url: 'https://celsius-lk.vercel.app/v2' },
  { name: 'v3', url: 'https://celsius-lk.vercel.app/v3' },
  { name: 'v4', url: 'https://celsius-lk.vercel.app/v4' },
  { name: 'v5', url: 'https://celsius-lk.vercel.app/v5' },
  { name: 'v6', url: 'https://celsius-lk.vercel.app/v6' },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const v of versions) {
  try {
    const p = await ctx.newPage();
    await p.goto(v.url, { waitUntil: 'load', timeout: 60000 });
    await p.waitForTimeout(4000);
    await p.screenshot({ path: `${OUT}/${v.name}-hero.png` });
    await p.close();
    console.log(`✓ ${v.name} captured`);
  } catch (e) {
    console.log(`✗ ${v.name} failed: ${e.message}`);
  }
}

await browser.close();
console.log('Production screenshots captured to', OUT);
