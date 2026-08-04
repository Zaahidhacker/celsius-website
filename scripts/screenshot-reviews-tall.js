const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 1 });
  
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));
  
  // Scroll to reviews
  await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-reviews-tall.png' });
  console.log('Saved tall reviews');
  
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
