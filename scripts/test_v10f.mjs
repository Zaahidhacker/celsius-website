import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Screenshot at top, 25%, 50%, 75%, 95% within frame section
const sectionHeight = 6480;
const points = [
  { p: 0, name: 'top' },
  { p: 0.25, name: '25' },
  { p: 0.5, name: '50' },
  { p: 0.75, name: '75' },
  { p: 0.95, name: '95' },
];

for (const { p, name } of points) {
  await page.evaluate((yVal) => window.scrollTo({ top: yVal, behavior: 'instant' }), sectionHeight * p);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `/tmp/v10-frame-${name}.png` });
  console.log(`Saved ${name}`);
}

// Then scroll to reviews
await page.evaluate(() => document.querySelector('#reviews')?.scrollIntoView());
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/v10-reviews-final.png' });
console.log('Saved reviews');

// Mobile test
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
const mp = await m.newPage();
await mp.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await mp.waitForTimeout(3000);
await mp.screenshot({ path: '/tmp/v10-mobile-top.png' });
await mp.evaluate(() => document.querySelector('#reviews')?.scrollIntoView());
await mp.waitForTimeout(1500);
await mp.screenshot({ path: '/tmp/v10-mobile-reviews.png' });
console.log('Saved mobile');

await browser.close();
