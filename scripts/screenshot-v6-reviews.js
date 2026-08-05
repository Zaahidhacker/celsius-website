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
  
  // Scroll to reviews and wait
  await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 2000));
  
  // Take viewport screenshot
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-reviews-viewport.png' });
  console.log('Saved reviews viewport');
  
  // Scroll to top of reviews section, then take a tall screenshot including everything below
  const reviewsBox = await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { top: r.top, height: r.height, scrollY: window.scrollY };
  });
  console.log('Reviews box:', reviewsBox);
  
  if (reviewsBox) {
    // Scroll back to top of reviews
    await page.evaluate((y) => window.scrollTo(0, y), reviewsBox.scrollY + reviewsBox.top - 50);
    await new Promise(r => setTimeout(r, 1500));
    
    // Take full viewport after scrolling
    await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-reviews-after-scroll.png', fullPage: false });
    console.log('Saved reviews after scroll');
  }
  
  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e); process.exit(1); });
