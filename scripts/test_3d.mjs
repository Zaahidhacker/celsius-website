import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});

const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on('console', msg => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', err => errors.push('PAGE: ' + err.message));

await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

// Scroll to manifesto section
await page.evaluate(() => document.querySelector('#about')?.scrollIntoView({ block: 'center' }));
await page.waitForTimeout(1500);

// Check 3D scene exists
const sceneInfo = await page.evaluate(() => {
  const scene = document.querySelector('.v6-3d-scene');
  const stage = document.querySelector('.v6-3d-stage');
  const core = document.querySelector('.v6-3d-core');
  const faces = document.querySelectorAll('.v6-3d-face').length;
  const ticks = document.querySelectorAll('.v6-3d-tick').length;
  const dots = document.querySelectorAll('.v6-3d-ring-dot').length;
  
  if (!scene) return { found: false };
  
  const sceneStyle = getComputedStyle(scene);
  const stageStyle = getComputedStyle(stage);
  return {
    found: true,
    sceneTransform: sceneStyle.transform,
    sceneTransformStyle: sceneStyle.transformStyle,
    stagePerspective: stageStyle.perspective,
    coreTransform: getComputedStyle(core).transform,
    faces,
    ticks,
    dots,
  };
});
console.log('SCENE:', JSON.stringify(sceneInfo, null, 2));

// Screenshot the manifesto
await page.screenshot({ path: '/tmp/v6-3d-manifesto.png' });

// Scroll through manifesto to test animation
const aboutRect = await page.evaluate(() => {
  const el = document.querySelector('#about');
  const r = el.getBoundingClientRect();
  return { top: r.top + window.scrollY, height: r.height };
});

// Scroll to top of manifesto
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutRect.top - 100);
await page.waitForTimeout(800);
const transform1 = await page.evaluate(() => getComputedStyle(document.querySelector('.v6-3d-scene')).transform);
console.log('Transform at TOP of manifesto:', transform1);

// Scroll to middle of manifesto
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutRect.top + aboutRect.height * 0.5);
await page.waitForTimeout(800);
const transform2 = await page.evaluate(() => getComputedStyle(document.querySelector('.v6-3d-scene')).transform);
console.log('Transform at MIDDLE of manifesto:', transform2);

// Scroll to bottom of manifesto
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutRect.top + aboutRect.height + 100);
await page.waitForTimeout(800);
const transform3 = await page.evaluate(() => getComputedStyle(document.querySelector('.v6-3d-scene')).transform);
console.log('Transform at BOTTOM of manifesto:', transform3);

await page.screenshot({ path: '/tmp/v6-3d-bottom.png' });

console.log('\nErrors:', errors.length);
errors.forEach(e => console.log(' -', e));

await browser.close();
