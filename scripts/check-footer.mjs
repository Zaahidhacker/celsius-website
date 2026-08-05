import { chromium } from 'playwright';
const browser = await chromium.launch({
  headless: true,
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

// Force lazy images and reveal elements
await page.evaluate(() => {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.setAttribute('loading', 'eager');
    const src = img.getAttribute('src');
    if (src && !img.complete) img.setAttribute('src', src);
  });
  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => el.classList.add('is-in'));
});

// Scroll to footer
const footerInfo = await page.evaluate(() => {
  const f = document.querySelector('footer.v6-footer');
  if (!f) return { found: false };
  f.scrollIntoView({ block: 'start' });
  const rect = f.getBoundingClientRect();
  const cs = window.getComputedStyle(f);
  return {
    found: true,
    y: Math.round(rect.top + window.scrollY),
    h: Math.round(rect.height),
    opacity: cs.opacity,
    display: cs.display,
    visibility: cs.visibility,
    position: cs.position,
    overflow: cs.overflow,
    bg: cs.backgroundColor,
    childCount: f.children.length,
    childrenInfo: Array.from(f.children).map(c => {
      const ccs = window.getComputedStyle(c);
      const crect = c.getBoundingClientRect();
      return {
        tag: c.tagName.toLowerCase(),
        cls: c.className,
        opacity: ccs.opacity,
        display: ccs.display,
        visibility: ccs.visibility,
        y: Math.round(crect.top + window.scrollY),
        h: Math.round(crect.height),
      };
    }),
  };
});
console.log('Footer info:', JSON.stringify(footerInfo, null, 2));

await page.waitForTimeout(2000);
await page.screenshot({ path: '/tmp/v6-footer-debug.png' });
console.log('Screenshot saved to /tmp/v6-footer-debug.png');

await browser.close();
