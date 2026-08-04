const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  
  // DO NOT disable animations — let reveal animations fire normally.
  
  console.log('Loading V6 page...');
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));
  
  // Scroll to reviews
  await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-reviews-top.png' });
  console.log('Saved reviews top');
  
  // Scroll to bottom of reviews section to trigger logo block reveal
  await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (el) {
      const r = el.getBoundingClientRect();
      window.scrollBy(0, r.height - 200);
    }
  });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-logo-block.png' });
  console.log('Saved logo block');
  
  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e); process.exit(1); });
