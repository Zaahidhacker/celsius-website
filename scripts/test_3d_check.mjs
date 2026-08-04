import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Scroll to manifesto with section centered in viewport
const aboutInfo = await page.evaluate(() => {
  const el = document.querySelector('#about');
  const r = el.getBoundingClientRect();
  return { top: r.top + window.scrollY, height: r.height };
});
console.log('About section:', JSON.stringify(aboutInfo));

// Scroll to where the manifesto section's top is at viewport top
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutInfo.top);
await page.waitForTimeout(2000);

// Check 3D scene is visible
const sceneInfo = await page.evaluate(() => {
  const stage = document.querySelector('.v6-3d-stage');
  const scene = document.querySelector('.v6-3d-scene');
  if (!stage || !scene) return { found: false };
  const stageRect = stage.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();
  const left = document.querySelector('.v6-manifesto-left');
  const leftRect = left?.getBoundingClientRect();
  return {
    found: true,
    stageRect: { x: stageRect.x, y: stageRect.y, w: stageRect.width, h: stageRect.height },
    sceneRect: { x: sceneRect.x, y: sceneRect.y, w: sceneRect.width, h: sceneRect.height },
    leftRect: leftRect ? { x: leftRect.x, y: leftRect.y, w: leftRect.width, h: leftRect.height } : null,
    leftStyle: left ? {
      position: getComputedStyle(left).position,
      top: getComputedStyle(left).top,
      height: getComputedStyle(left).height,
    } : null,
  };
});
console.log('Scene info:', JSON.stringify(sceneInfo, null, 2));

// Screenshot
await page.screenshot({ path: '/tmp/v6-3d-test.png' });

// Scroll a bit to test animation
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutInfo.top + 400);
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/v6-3d-test2.png' });

await browser.close();
