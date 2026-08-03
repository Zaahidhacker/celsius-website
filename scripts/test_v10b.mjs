import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Test frame at various progress points within the frame section
const sectionHeight = 6480;
const testPoints = [0, 0.25, 0.5, 0.75, 0.95];

for (const p of testPoints) {
  const y = sectionHeight * p;
  await page.evaluate((yVal) => window.scrollTo({ top: yVal, behavior: 'instant' }), y);
  await page.waitForTimeout(800);
  
  const frameInfo = await page.evaluate(() => {
    const c = document.querySelector('.v10-frame-canvas');
    const ctx = c.getContext('2d');
    // Sample center pixel
    const cx = Math.floor(c.width / 2);
    const cy = Math.floor(c.height / 2);
    const data = ctx.getImageData(cx, cy, 1, 1).data;
    return {
      hasContent: data[3] > 0,
      r: data[0], g: data[1], b: data[2], a: data[3]
    };
  });
  console.log(`Scroll ${p*100}% (y=${y}px):`, JSON.stringify(frameInfo));
}

// Screenshot at 50% within frame section
await page.evaluate(() => window.scrollTo({ top: 6480 * 0.5, behavior: 'instant' }));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/v10-frame-mid.png' });

// Screenshot at 75% (should show later frames)
await page.evaluate(() => window.scrollTo({ top: 6480 * 0.75, behavior: 'instant' }));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/v10-frame-75.png' });

console.log('Done');
await browser.close();
