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

await page.goto('http://localhost:3000/v6', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(5000);

const sceneFound = await page.evaluate(() => {
  return !!document.querySelector('.v6-3d-scene');
});
console.log('Scene found:', sceneFound);

const allClasses = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('[class*="v6-3d"]')).slice(0, 5).map(el => el.className);
});
console.log('3D elements:', allClasses);

console.log('Errors:', errors.length);
errors.forEach(e => console.log(' -', e));

await browser.close();
