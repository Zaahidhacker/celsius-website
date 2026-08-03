import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});

// Mobile viewport
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
const page = await ctx.newPage();

await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Full page screenshot
await page.screenshot({ path: '/tmp/v10-mobile-full.png', fullPage: true });

// Test mobile reviews section
await page.evaluate(() => document.querySelector('#reviews')?.scrollIntoView());
await page.waitForTimeout(2000);
await page.screenshot({ path: '/tmp/v10-mobile-reviews2.png' });

// Check the version switcher is visible
const switcherVisible = await page.evaluate(() => {
  const s = document.querySelector('.gvs-root');
  if (!s) return false;
  const r = s.getBoundingClientRect();
  return r.width > 0 && r.height > 0;
});
console.log('Version switcher visible on mobile:', switcherVisible);

// Check reviews layout
const reviewLayout = await page.evaluate(() => {
  const review = document.querySelector('.v10-review');
  if (!review) return null;
  const cs = getComputedStyle(review);
  return {
    display: cs.display,
    gridTemplateColumns: cs.gridTemplateColumns,
  };
});
console.log('Mobile review layout:', JSON.stringify(reviewLayout));

await browser.close();
