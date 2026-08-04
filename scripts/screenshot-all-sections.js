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
  
  const sections = [
    { id: 'v6-hero', name: 'hero' },
    { id: 'about', name: 'about' },
    { id: 'services', name: 'services' },
    { id: 'brands', name: 'brands' },
    { id: 'solutions', name: 'solutions' },
    { id: 'pricing', name: 'pricing' },
    { id: 'projects', name: 'projects' },
    { id: 'reviews', name: 'reviews' },
    { id: 'ceo', name: 'ceo' },
    { id: 'contact', name: 'contact' },
  ];
  
  for (const s of sections) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, s.id);
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: `/home/z/my-project/scripts/screenshots/v6-section-${s.name}.png` });
    console.log(`Saved ${s.name}`);
  }
  
  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e); process.exit(1); });
