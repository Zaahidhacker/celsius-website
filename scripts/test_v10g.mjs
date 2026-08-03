import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const consoleErrors = [];
page.on('console', msg => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', err => consoleErrors.push('PAGE ERROR: ' + err.message));

await page.goto('http://localhost:3000/v10', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Scroll through entire page
const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
for (let p = 0; p <= 1; p += 0.1) {
  await page.evaluate((yVal) => window.scrollTo({ top: yVal, behavior: 'instant' }), bodyHeight * p);
  await page.waitForTimeout(300);
}
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));

console.log('Console errors:', consoleErrors.length);
consoleErrors.forEach(e => console.log(' -', e));

// Test all sections visible
const sections = await page.evaluate(() => {
  const ids = ['reviews', 'services', 'brands', 'contact'];
  return ids.map(id => {
    const el = document.querySelector(`#${id}`);
    if (!el) return { id, found: false };
    const r = el.getBoundingClientRect();
    return { id, found: true, top: r.top, height: r.height };
  });
});
console.log('SECTIONS:', JSON.stringify(sections, null, 2));

// Check that V10Reveal works (after scrolling to reviews)
await page.evaluate(() => document.querySelector('#reviews')?.scrollIntoView());
await page.waitForTimeout(2000);
const reviewOpacity = await page.evaluate(() => {
  const r = document.querySelector('.v10-review');
  return r ? getComputedStyle(r).opacity : null;
});
console.log('First review opacity after scroll:', reviewOpacity);

await browser.close();
