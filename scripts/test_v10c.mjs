import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Sample 5x5 grid of pixels at 50% scroll
await page.evaluate(() => window.scrollTo({ top: 6480 * 0.5, behavior: 'instant' }));
await page.waitForTimeout(1000);

const grid = await page.evaluate(() => {
  const c = document.querySelector('.v10-frame-canvas');
  const ctx = c.getContext('2d');
  const samples = [];
  for (let yi = 0; yi < 5; yi++) {
    for (let xi = 0; xi < 5; xi++) {
      const x = Math.floor((c.width / 4) * xi);
      const y = Math.floor((c.height / 4) * yi);
      const d = ctx.getImageData(x, y, 1, 1).data;
      samples.push({ x, y, r: d[0], g: d[1], b: d[2] });
    }
  }
  return samples;
});
console.log('GRID at 50%:');
grid.forEach(s => console.log(`  (${s.x},${s.y}): rgb(${s.r},${s.g},${s.b})`));

// Take a screenshot of just the canvas area
const canvasBox = await page.evaluate(() => {
  const c = document.querySelector('.v10-frame-canvas');
  const r = c.getBoundingClientRect();
  return { x: r.x, y: r.y, w: r.width, h: r.height };
});
console.log('CANVAS BOX:', JSON.stringify(canvasBox));

// Screenshot just the canvas
await page.screenshot({ path: '/tmp/v10-canvas-50.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

// Also try scrolling to 0% and screenshot
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/v10-canvas-0.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

console.log('Done');
await browser.close();
