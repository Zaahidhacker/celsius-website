import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

// Inject debug script before page loads
await page.addInitScript(() => {
  window.__debug = { logs: [], observerCreated: false };
});

const errors = [];
page.on('console', msg => {
  const txt = msg.text();
  if (msg.type() === 'error') errors.push(txt);
  else if (txt.includes('[V6-3D]')) console.log('PAGE:', txt);
});

await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Check if animejs module loaded and the component ran
const debugInfo = await page.evaluate(() => {
  const scene = document.querySelector('.v6-3d-scene');
  const about = document.querySelector('#about');
  if (!scene || !about) return { error: 'elements not found' };
  
  const aboutRect = about.getBoundingClientRect();
  return {
    sceneFound: !!scene,
    aboutTop: aboutRect.top + window.scrollY,
    aboutHeight: aboutRect.height,
    aboutBottom: aboutRect.bottom + window.scrollY,
    viewportHeight: window.innerHeight,
    sceneInitialTransform: getComputedStyle(scene).transform,
  };
});
console.log('DEBUG INFO:', JSON.stringify(debugInfo, null, 2));

// Scroll to top of manifesto, wait, sample
await page.evaluate(() => {
  const about = document.querySelector('#about');
  about.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(2000);

const transforms = [];
for (let i = 0; i <= 10; i++) {
  await page.evaluate((pct) => {
    const about = document.querySelector('#about');
    const r = about.getBoundingClientRect();
    const target = r.top + window.scrollY + r.height * pct - window.innerHeight * 0.5;
    window.scrollTo({ top: target, behavior: 'instant' });
  }, i / 10);
  await page.waitForTimeout(400);
  const t = await page.evaluate(() => getComputedStyle(document.querySelector('.v6-3d-scene')).transform);
  transforms.push({ pct: i * 10, transform: t.slice(0, 50) + '...' });
}

console.log('\nTransforms at scroll positions:');
transforms.forEach(t => console.log(`  ${t.pct}%: ${t.transform}`));

console.log('\nErrors:', errors.length);
errors.forEach(e => console.log(' -', e));

await browser.close();
