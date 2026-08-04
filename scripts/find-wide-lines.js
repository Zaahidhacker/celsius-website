const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));

  const wide = await page.evaluate(() => {
    const results = [];
    const all = document.querySelectorAll('p, span, div, blockquote, li, h1, h2, h3, h4');
    all.forEach(el => {
      // Skip elements with aria-hidden
      if (el.getAttribute('aria-hidden') === 'true') return;
      // Skip elements with no direct text
      const text = el.textContent?.trim() || '';
      if (text.length < 50) return;
      // Check computed white-space
      const cs = window.getComputedStyle(el);
      if (cs.whiteSpace === 'nowrap') return;
      // Measure the actual line width
      const rect = el.getBoundingClientRect();
      if (rect.width > 600) {
        // Estimate chars per line based on font size
        const fontSize = parseFloat(cs.fontSize);
        const charsPerLine = Math.round(rect.width / (fontSize * 0.5));
        if (charsPerLine > 80) {
          results.push({
            tag: el.tagName,
            cls: el.className?.toString().slice(0, 60) || '',
            text: text.slice(0, 80),
            width: Math.round(rect.width),
            fontSize: Math.round(fontSize),
            estChars: charsPerLine,
            maxWidth: cs.maxWidth,
          });
        }
      }
    });
    return results.slice(0, 10);
  });
  console.log(JSON.stringify(wide, null, 2));
  await browser.close();
})();
