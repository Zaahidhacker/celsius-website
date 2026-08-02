import { chromium } from 'playwright';
import fs from 'fs';

const OUT = '/home/z/my-project/download/final-shots';
fs.mkdirSync(OUT, { recursive: true });

const versions = [
  { name: 'v1-editorial-newsroom', url: 'http://localhost:3000/' },
  { name: 'v2-swiss-brutalist', url: 'http://localhost:3000/v2' },
  { name: 'v3-warm-forest-studio', url: 'http://localhost:3000/v3' },
  { name: 'v4-tech-noir-terminal', url: 'http://localhost:3000/v4' },
  { name: 'v5-kinetic-magazine', url: 'http://localhost:3000/v5' },
  { name: 'v6-bauhaus-color-blocks', url: 'http://localhost:3000/v6' },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const v of versions) {
  const p = await ctx.newPage();
  await p.goto(v.url, { waitUntil: 'load', timeout: 60000 });
  await p.waitForTimeout(4000);
  await p.screenshot({ path: `${OUT}/${v.name}-hero.png` });
  await p.screenshot({ path: `${OUT}/${v.name}-full.png`, fullPage: true });
  await p.close();
  console.log(`Captured ${v.name}`);
}

// Mobile shots of each
const m = await browser.newContext({ viewport: { width: 390, height: 844 } });
for (const v of versions) {
  const p = await m.newPage();
  await p.goto(v.url, { waitUntil: 'load', timeout: 60000 });
  await p.waitForTimeout(3000);
  await p.screenshot({ path: `${OUT}/${v.name}-mobile.png` });
  await p.close();
}

await browser.close();
console.log('All screenshots captured to', OUT);
console.log(fs.readdirSync(OUT).join('\n'));
