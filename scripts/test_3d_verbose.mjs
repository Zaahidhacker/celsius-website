import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

page.on('console', msg => console.log(`[${msg.type()}]`, msg.text()));
page.on('pageerror', err => console.log('[PAGEERROR]', err.message, err.stack));

await page.goto('http://localhost:3000/v6', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(5000);

await browser.close();
