import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});

// Test multiple viewports
const viewports = [
  { name: 'desktop-1440', w: 1440, h: 900 },
  { name: 'tablet-768', w: 768, h: 1024 },
  { name: 'mobile-390', w: 390, h: 844 },
  { name: 'mobile-360', w: 360, h: 800 },
];

for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.w < 768 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  
  await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Check canvas exists and is full-screen
  const canvasInfo = await page.evaluate(() => {
    const c = document.querySelector('.v10-frame-canvas');
    if (!c) return null;
    const r = c.getBoundingClientRect();
    return { width: r.width, height: r.height, top: r.top };
  });
  
  // Check hero text visible
  const heroText = await page.evaluate(() => {
    const h1 = document.querySelector('.v10-h1');
    if (!h1) return null;
    const r = h1.getBoundingClientRect();
    return { visible: r.top < window.innerHeight && r.bottom > 0, top: r.top };
  });
  
  // Check no horizontal scroll
  const horizontalScroll = await page.evaluate(() => {
    return document.body.scrollWidth > window.innerWidth;
  });
  
  console.log(`${vp.name}: canvas=${canvasInfo?.width}x${canvasInfo?.height} hero=${heroText?.visible} hScroll=${horizontalScroll} errors=${errors.length}`);
  errors.forEach(e => console.log(`  ERR: ${e}`));
  
  await ctx.close();
}

await browser.close();
