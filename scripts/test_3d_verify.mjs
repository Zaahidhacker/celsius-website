import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});

// Test all viewports
const viewports = [
  { name: 'desktop-1440', w: 1440, h: 900 },
  { name: 'tablet-768', w: 768, h: 1024 },
  { name: 'mobile-390', w: 390, h: 844 },
];

for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.w < 768 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Check 3D scene
  const sceneInfo = await page.evaluate(() => {
    const scene = document.querySelector('.v6-3d-scene');
    const stage = document.querySelector('.v6-3d-stage');
    if (!scene || !stage) return { found: false };
    const sceneRect = scene.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    return {
      found: true,
      sceneInView: sceneRect.top < window.innerHeight && sceneRect.bottom > 0,
      stageW: stageRect.width,
      stageH: stageRect.height,
    };
  });
  
  // Scroll to manifesto
  await page.evaluate(() => document.querySelector('#about')?.scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(1500);
  
  // Test animation transforms at different positions
  const transforms = [];
  const aboutInfo = await page.evaluate(() => {
    const el = document.querySelector('#about');
    const r = el.getBoundingClientRect();
    return { top: r.top + window.scrollY, height: r.height };
  });
  
  for (const p of [0.2, 0.5, 0.8]) {
    const y = aboutInfo.top + aboutInfo.height * p - vp.h/2;
    await page.evaluate((yVal) => window.scrollTo({ top: yVal, behavior: 'instant' }), y);
    await page.waitForTimeout(800);
    const t = await page.evaluate(() => getComputedStyle(document.querySelector('.v6-3d-scene')).transform.slice(0, 30));
    transforms.push({ p, t });
  }
  
  console.log(`${vp.name}: scene=${sceneInfo.found?'OK':'MISSING'} stage=${sceneInfo.stageW}x${sceneInfo.stageH} errors=${errors.length}`);
  transforms.forEach(t => console.log(`  p=${t.p}: ${t.t}`));
  errors.forEach(e => console.log(`  ERR: ${e}`));
  
  await ctx.close();
}

await browser.close();
