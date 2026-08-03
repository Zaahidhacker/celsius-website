import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

await page.evaluate(() => window.scrollTo({ top: 6480 * 0.5, behavior: 'instant' }));
await page.waitForTimeout(500);

// Walk ancestor chain to find what's breaking sticky
const diag = await page.evaluate(() => {
  const sticky = document.querySelector('.v10-frame-sticky');
  const results = [];
  let el = sticky;
  while (el && el !== document.documentElement) {
    const cs = getComputedStyle(el);
    results.push({
      tag: el.tagName,
      class: el.className?.toString?.() || '',
      id: el.id,
      position: cs.position,
      overflow: cs.overflow,
      overflowX: cs.overflowX,
      overflowY: cs.overflowY,
      transform: cs.transform,
      filter: cs.filter,
      willChange: cs.willChange,
      height: cs.height,
      display: cs.display,
    });
    el = el.parentElement;
  }
  return results;
});
console.log('ANCESTORS:');
diag.forEach(r => console.log(JSON.stringify(r)));

await browser.close();
