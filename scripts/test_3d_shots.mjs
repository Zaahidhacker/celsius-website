import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});

// Desktop screenshots at 0%, 50%, 100% of manifesto
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Get the manifesto section position
const aboutInfo = await page.evaluate(() => {
  const el = document.querySelector('#about');
  const r = el.getBoundingClientRect();
  return { top: r.top + window.scrollY, height: r.height };
});

// Scroll to manifesto start
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutInfo.top - 200);
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/v6-3d-start.png' });

// Scroll to middle of manifesto
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutInfo.top + aboutInfo.height * 0.5);
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/v6-3d-middle.png' });

// Scroll to end of manifesto
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), aboutInfo.top + aboutInfo.height + 100);
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/v6-3d-end.png' });

// Mobile screenshot
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
const mpage = await mctx.newPage();
await mpage.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await mpage.waitForTimeout(3000);
await mpage.evaluate(() => document.querySelector('#about')?.scrollIntoView({ block: 'center' }));
await mpage.waitForTimeout(2000);
await mpage.screenshot({ path: '/tmp/v6-3d-mobile.png' });

console.log('All screenshots saved');
await browser.close();
