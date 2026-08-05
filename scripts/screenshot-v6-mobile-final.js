const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-audit/mobile-full.png', fullPage: true });
  
  // Also capture just the hero on mobile
  await page.evaluate(() => {
    const el = document.querySelector('section.v6-hero');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-audit/mobile-hero.png' });
  
  console.log('Mobile screenshots done');
  await browser.close();
})();
