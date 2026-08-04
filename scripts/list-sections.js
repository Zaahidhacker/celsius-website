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
  
  // Scroll through each section gradually so reveal animations fire
  const sections = ['hero', 'manifesto', 'services', 'brands', 'solutions', 'pricing', 'projects', 'reviews', 'about', 'contact'];
  // We don't have IDs for all — let me grab all sections
  const sectionIds = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, [id]')).map(el => ({
      id: el.id || el.className,
      tag: el.tagName,
      top: el.getBoundingClientRect().top + window.scrollY,
      height: el.getBoundingClientRect().height,
    })).filter(s => s.height > 50).slice(0, 20);
  });
  console.log('Sections:', JSON.stringify(sectionIds, null, 2));
  
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
