import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

await page.evaluate(() => window.scrollTo({ top: 6480 * 0.5, behavior: 'instant' }));
await page.waitForTimeout(1000);

const boxes = await page.evaluate(() => {
  const section = document.querySelector('.v10-frame-section');
  const sticky = document.querySelector('.v10-frame-sticky');
  const canvas = document.querySelector('.v10-frame-canvas');
  const hero = document.querySelector('.v10-hero-overlay');
  return {
    section: section.getBoundingClientRect(),
    sticky: sticky.getBoundingClientRect(),
    canvas: canvas.getBoundingClientRect(),
    hero: hero ? hero.getBoundingClientRect() : null,
    stickyPos: getComputedStyle(sticky).position,
    canvasPos: getComputedStyle(canvas).position,
  };
});
console.log(JSON.stringify(boxes, null, 2));

await browser.close();
