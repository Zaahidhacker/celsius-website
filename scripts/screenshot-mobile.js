const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));
  
  // Scroll to reviews on mobile
  await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-mobile-reviews.png' });
  console.log('Saved mobile reviews');
  
  // Scroll down to logo block
  await page.evaluate(() => {
    const el = document.querySelector('.v6-reviews-logo-block');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-mobile-logo-block.png' });
  console.log('Saved mobile logo block');
  
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
