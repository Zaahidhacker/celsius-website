import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:3000/v4', { waitUntil: 'load' });
await p.waitForTimeout(4000);
const results = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('p, span, div, li, h1, h2, h3, h4, h5, h6, blockquote, label').forEach(el => {
    const text = el.innerText || el.textContent || '';
    if (!text || text.length < 50) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    // Get computed max-width and width
    const cs = getComputedStyle(el);
    const widthPx = rect.width;
    // Estimate chars per line: average char width ~ font-size * 0.5 for sans, * 0.6 for mono
    const fontSize = parseFloat(cs.fontSize);
    const isMono = cs.fontFamily.includes('mono') || cs.fontFamily.includes('Mono');
    const charWidth = fontSize * (isMono ? 0.6 : 0.5);
    const charsPerLine = Math.round(widthPx / charWidth);
    if (charsPerLine > 80 && charsPerLine < 200) {
      out.push({ tag: el.tagName, cls: el.className.substring(0,40), charsPerLine, widthPx, fontSize, text: text.substring(0,80) });
    }
  });
  return out.slice(0, 10);
});
console.log(JSON.stringify(results, null, 2));
await browser.close();
