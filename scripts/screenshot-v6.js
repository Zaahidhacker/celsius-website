const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  
  // Disable animations for a stable screenshot
  await page.evaluateOnNewDocument(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      * { animation-duration: 0.001s !important; animation-delay: 0s !important; transition-duration: 0.001s !important; }
    `;
    document.documentElement.appendChild(style);
  });
  
  console.log('Loading V6 page...');
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  
  // Full page screenshot
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-desktop-full.png', fullPage: true });
  console.log('Saved desktop full');
  
  // Scroll to reviews
  const reviews = await page.$('#reviews');
  if (reviews) {
    await reviews.scrollIntoView();
    await new Promise(r => setTimeout(r, 1500));
    const box = await reviews.boundingBox();
    if (box) {
      await page.screenshot({
        path: '/home/z/my-project/scripts/screenshots/v6-reviews-desktop.png',
        clip: { x: 0, y: Math.max(0, box.y - 50), width: 1440, height: Math.min(1200, box.height + 100) }
      });
      console.log('Saved reviews section');
    }
  } else {
    console.log('Reviews section NOT FOUND');
  }
  
  // Mobile screenshots
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  
  const reviewsMobile = await page.$('#reviews');
  if (reviewsMobile) {
    await reviewsMobile.scrollIntoView();
    await new Promise(r => setTimeout(r, 1500));
    const box = await reviewsMobile.boundingBox();
    if (box) {
      await page.screenshot({
        path: '/home/z/my-project/scripts/screenshots/v6-reviews-mobile.png',
        fullPage: true
      });
      console.log('Saved mobile reviews');
    }
  }
  
  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e); process.exit(1); });
