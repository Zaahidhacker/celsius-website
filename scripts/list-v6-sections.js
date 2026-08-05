const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));
  const found = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('main.v6-root > section, main.v6-root > div > section, .v6-root > section, .v6-root section'));
    return all.map((s, i) => ({
      idx: i,
      tag: s.tagName,
      cls: s.className.slice(0, 100),
      id: s.id || null,
      top: Math.round(s.getBoundingClientRect().top + window.scrollY),
      height: Math.round(s.getBoundingClientRect().height),
    }));
  });
  console.log(JSON.stringify(found, null, 2));
  await browser.close();
})();
