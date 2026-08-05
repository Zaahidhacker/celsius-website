const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));
  
  // Scroll to reviews
  await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 3500));
  
  const info = await page.evaluate(() => {
    const logoBlock = document.querySelector('.v6-reviews-logo-block');
    if (!logoBlock) return { found: false };
    const r = logoBlock.getBoundingClientRect();
    const style = window.getComputedStyle(logoBlock);
    const parent = logoBlock.parentElement;
    const parentStyle = parent ? window.getComputedStyle(parent) : null;
    return {
      found: true,
      rect: { top: r.top, bottom: r.bottom, height: r.height, width: r.width },
      opacity: style.opacity,
      display: style.display,
      visibility: style.visibility,
      parentOpacity: parentStyle?.opacity,
      parentTransform: parentStyle?.transform,
      scrollY: window.scrollY,
    };
  });
  console.log('Logo block info:', JSON.stringify(info, null, 2));
  
  // Scroll logo block into center view
  await page.evaluate(() => {
    const el = document.querySelector('.v6-reviews-logo-block');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 3500));
  
  const info2 = await page.evaluate(() => {
    const logoBlock = document.querySelector('.v6-reviews-logo-block');
    if (!logoBlock) return { found: false };
    const style = window.getComputedStyle(logoBlock);
    const parent = logoBlock.parentElement;
    const parentStyle = parent ? window.getComputedStyle(parent) : null;
    return {
      opacity: style.opacity,
      parentOpacity: parentStyle?.opacity,
      parentTransform: parentStyle?.transform,
    };
  });
  console.log('After scroll:', JSON.stringify(info2, null, 2));
  
  await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-logo-block-v2.png' });
  
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
