import { chromium } from 'playwright';
const browser = await chromium.launch({
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  args: ['--no-sandbox']
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const allLogs = [];
page.on('console', msg => {
  const txt = msg.text();
  allLogs.push({ type: msg.type(), text: txt });
  if (txt.includes('V6-3D')) console.log('PAGE:', txt);
});

await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Scroll to manifesto
await page.evaluate(() => document.querySelector('#about')?.scrollIntoView({ block: 'center' }));
await page.waitForTimeout(1000);
// Scroll within manifesto
for (let i = 0; i < 5; i++) {
  await page.evaluate(() => window.scrollBy({ top: 100 }));
  await page.waitForTimeout(300);
}

console.log('\n=== All V6-3D logs ===');
allLogs.filter(l => l.text.includes('V6-3D')).forEach(l => console.log(l.text));

console.log('\n=== Errors ===');
allLogs.filter(l => l.type === 'error').forEach(l => console.log(l.text));

await browser.close();
