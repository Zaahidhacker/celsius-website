import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

// Check pillars initial state (should be opacity 0 since they haven't been revealed)
const initialPillar = await page.evaluate(() => {
  const p = document.querySelector('.v10-pillar');
  return p ? getComputedStyle(p).opacity : null;
});
console.log('Pillar opacity BEFORE scroll into view:', initialPillar);

// Scroll to manifesto
await page.evaluate(() => {
  document.querySelector('.v10-manifesto')?.scrollIntoView({ behavior: 'instant', block: 'center' });
});
await page.waitForTimeout(2000);

const afterPillar = await page.evaluate(() => {
  const p = document.querySelector('.v10-pillar');
  return p ? getComputedStyle(p).opacity : null;
});
console.log('Pillar opacity AFTER scroll into view:', afterPillar);

// Check that animejs module is loaded
const animeLoaded = await page.evaluate(() => {
  // We can't directly check, but we can verify the animation happened by checking style.transform
  const p = document.querySelector('.v10-pillar');
  return p ? getComputedStyle(p).transform : null;
});
console.log('Pillar transform after reveal:', animeLoaded);

await browser.close();
