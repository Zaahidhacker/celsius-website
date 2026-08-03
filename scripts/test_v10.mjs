import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Check canvas exists and has dimensions
const canvasInfo = await page.evaluate(() => {
  const c = document.querySelector('.v10-frame-canvas');
  if (!c) return { found: false };
  const ctx = c.getContext('2d');
  return {
    found: true,
    width: c.width,
    height: c.height,
    cssWidth: c.style.width,
    cssHeight: c.style.height,
    hasContent: ctx ? ctx.getImageData(0, 0, 10, 10).data.some(v => v > 0) : false
  };
});
console.log('CANVAS:', JSON.stringify(canvasInfo));

// Check hero text
const heroText = await page.evaluate(() => {
  const h1 = document.querySelector('.v10-h1');
  return h1 ? h1.textContent.trim().slice(0, 80) : null;
});
console.log('HERO:', heroText);

// Check section heights
const dims = await page.evaluate(() => {
  const section = document.querySelector('.v10-frame-section');
  const sticky = document.querySelector('.v10-frame-sticky');
  return {
    sectionHeight: section?.offsetHeight,
    stickyHeight: sticky?.offsetHeight,
    bodyScrollHeight: document.body.scrollHeight
  };
});
console.log('DIMS:', JSON.stringify(dims));

// Check loader state
const loaderVisible = await page.evaluate(() => {
  const l = document.querySelector('.v10-frame-loader');
  if (!l) return null;
  return l.textContent.trim();
});
console.log('LOADER:', loaderVisible);

// Take screenshot at top
await page.screenshot({ path: '/tmp/v10-top.png', fullPage: false });

// Scroll to 50%
await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight * 0.5, behavior: 'instant' }));
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/v10-mid.png', fullPage: false });

// Scroll to reviews
await page.evaluate(() => document.querySelector('#reviews')?.scrollIntoView());
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/v10-reviews.png', fullPage: false });

console.log('Screenshots saved');
await browser.close();
