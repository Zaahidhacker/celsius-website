import { chromium } from 'playwright';
const browser = await chromium.launch({
  headless: true,
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
const navInfo = await page.evaluate(() => {
  const nav = document.querySelector('.v6-nav') || document.querySelector('nav');
  if (!nav) return { found: false };
  const cs = window.getComputedStyle(nav);
  const rect = nav.getBoundingClientRect();
  return {
    found: true,
    position: cs.position,
    y: Math.round(rect.top),
    h: Math.round(rect.height),
    z: cs.zIndex,
  };
});
console.log('Nav info:', JSON.stringify(navInfo, null, 2));
await browser.close();
