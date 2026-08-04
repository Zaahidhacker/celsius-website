import { chromium } from 'playwright';
const browser = await chromium.launch({
  headless: true,
  executablePath: '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000/v6', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

// Apply same overrides as main script
await page.evaluate(() => {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.setAttribute('loading', 'eager');
    const src = img.getAttribute('src');
    if (src && !img.complete) img.setAttribute('src', src);
  });
  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => el.classList.add('is-in'));
  document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]').forEach((el) => {
    if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; }
  });
});

// Scroll to footer
await page.evaluate(() => {
  const f = document.querySelector('footer.v6-footer');
  if (f) f.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(1500);

// Check footer state
const footerState = await page.evaluate(() => {
  const f = document.querySelector('footer.v6-footer');
  if (!f) return null;
  const rect = f.getBoundingClientRect();
  const cs = window.getComputedStyle(f);
  // Check all descendants for visibility
  const all = f.querySelectorAll('*');
  let invisibleCount = 0;
  let totalText = 0;
  all.forEach(el => {
    const ecs = window.getComputedStyle(el);
    if (ecs.opacity === '0' || ecs.visibility === 'hidden' || ecs.display === 'none') invisibleCount++;
    totalText += (el.textContent || '').length;
  });
  return {
    footerY: Math.round(rect.top + window.scrollY),
    footerH: Math.round(rect.height),
    footerOpacity: cs.opacity,
    footerBg: cs.backgroundColor,
    footerColor: cs.color,
    descendantCount: all.length,
    invisibleCount,
    totalTextLength: totalText,
    sampleText: f.innerText.slice(0, 300),
  };
});
console.log('Footer state:', JSON.stringify(footerState, null, 2));

// Add CSS override
await page.addStyleTag({ content: '*, *::before, *::after { opacity: 1 !important; transform: none !important; }' });
await page.waitForTimeout(300);

// Take viewport screenshot of footer
await page.screenshot({ path: '/home/z/my-project/scripts/screenshots/v6-footer-debug-desktop.png' });
console.log('Saved footer debug screenshot');

await browser.close();
