import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

const aboutInfo = await page.evaluate(() => {
  const el = document.querySelector('#about');
  const r = el.getBoundingClientRect();
  return { top: r.top + window.scrollY, height: r.height };
});
console.log('About:', JSON.stringify(aboutInfo));

// Take screenshots at 6 positions through the manifesto
const positions = [0, 0.2, 0.4, 0.6, 0.8, 1.0];
for (let i = 0; i < positions.length; i++) {
  const p = positions[i];
  const y = aboutInfo.top + aboutInfo.height * p - 450; // center viewport on section
  await page.evaluate((yVal) => window.scrollTo({ top: yVal, behavior: 'instant' }), y);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `/tmp/v6-3d-frame-${i}.png` });
  
  const transform = await page.evaluate(() => {
    const scene = document.querySelector('.v6-3d-scene');
    return scene ? getComputedStyle(scene).transform.slice(0, 60) : null;
  });
  console.log(`Frame ${i} (p=${p}): transform=${transform}`);
}

// Mobile
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
const mpage = await mctx.newPage();
await mpage.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await mpage.waitForTimeout(3000);
await mpage.evaluate(() => document.querySelector('#about')?.scrollIntoView({ block: 'center' }));
await mpage.waitForTimeout(2000);
await mpage.screenshot({ path: '/tmp/v6-3d-mobile-final.png' });

console.log('Done');
await browser.close();
