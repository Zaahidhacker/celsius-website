const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  
  console.log('Loading V6 page...');
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2500));
  
  // Scroll to reviews, then scroll down within reviews to find the logo block
  await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1500));
  
  // Scroll down by ~800px to reach the logo block
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-reviews-mid.png' });
  console.log('Saved mid-reviews');
  
  // Scroll down more to reach the logo + socials block
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-logo-socials.png' });
  console.log('Saved logo + socials');
  
  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e); process.exit(1); });
