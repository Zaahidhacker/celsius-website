/**
 * Extract shopify.design design DNA:
 *  - Full-page screenshots (desktop + mobile, multiple scroll positions)
 *  - Computed CSS tokens (colors, fonts, spacing)
 *  - Detected animation libraries (script tags, frameworks)
 *  - Section inventory (DOM structure)
 *  - Hover/scroll states captured as screenshots
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const OUT = '/home/z/my-project/download/v6-research';
fs.mkdirSync(OUT, { recursive: true });

const URL = 'https://shopify.design';

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // ============ DESKTOP ============
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const dp = await desktop.newPage();

  // Collect all script/link srcs while loading
  const scripts = [];
  const stylesheets = [];
  dp.on('response', async (res) => {
    const url = res.url();
    try {
      const ct = res.headers()['content-type'] || '';
      if (ct.includes('javascript')) {
        scripts.push({ url, status: res.status() });
      }
      if (ct.includes('css')) {
        stylesheets.push({ url, status: res.status() });
      }
    } catch {}
  });

  console.log('[desktop] navigating…');
  await dp.goto(URL, { waitUntil: 'domcontentloaded', timeout: 90_000 });
  await dp.waitForTimeout(8000); // let hero animations settle + WebGL load

  // 1) Hero screenshot (above the fold)
  await dp.screenshot({
    path: path.join(OUT, 'sd-desktop-hero.png'),
    fullPage: false,
  });
  console.log('[desktop] hero shot saved');

  // 2) Multiple scroll-position shots to capture mid-animation states
  const sections = [
    { name: 'hero', y: 0 },
    { name: 'image-grid', y: 900 },
    { name: 'commerce-better', y: 1800 },
    { name: 'design-in-public', y: 2700 },
    { name: 'carousel-1', y: 3600 },
    { name: 'carousel-2', y: 4500 },
    { name: 'locations', y: 5400 },
    { name: 'studio', y: 6300 },
    { name: 'careers-cta', y: 7200 },
  ];
  for (const s of sections) {
    await dp.evaluate((y) => window.scrollTo(0, y), s.y);
    await dp.waitForTimeout(1500);
    await dp.screenshot({
      path: path.join(OUT, `sd-desktop-${s.name}.png`),
      fullPage: false,
    });
    console.log(`[desktop] section ${s.name} shot saved`);
  }

  // 3) Full-page screenshot
  await dp.evaluate(() => window.scrollTo(0, 0));
  await dp.waitForTimeout(1000);
  await dp.screenshot({
    path: path.join(OUT, 'sd-desktop-FULL.png'),
    fullPage: true,
  });
  console.log('[desktop] full page shot saved');

  // 4) Extract design tokens — colors, fonts, sizes from key elements
  const tokens = await dp.evaluate(() => {
    const pick = (sel, props) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const out = {};
      for (const p of props) out[p] = cs.getPropertyValue(p);
      return out;
    };
    const all = (sel, props) => {
      return Array.from(document.querySelectorAll(sel)).slice(0, 5).map((el) => {
        const cs = getComputedStyle(el);
        const out = {};
        for (const p of props) out[p] = cs.getPropertyValue(p);
        return out;
      });
    };

    // Body / root tokens
    const body = pick('body', [
      'background-color', 'color', 'font-family',
      'font-size', 'line-height', 'letter-spacing',
    ]);

    // All unique background colors used on the page
    const seen = new Set();
    const colors = [];
    document.querySelectorAll('*').forEach((el) => {
      const cs = getComputedStyle(el);
      const bg = cs.getPropertyValue('background-color');
      const fg = cs.getPropertyValue('color');
      [bg, fg].forEach((c) => {
        if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent' && !seen.has(c)) {
          seen.add(c);
          colors.push(c);
        }
      });
    });

    // All unique font-families
    const fonts = new Set();
    document.querySelectorAll('h1,h2,h3,h4,p,a,span,div').forEach((el) => {
      const cs = getComputedStyle(el);
      fonts.add(cs.getPropertyValue('font-family'));
    });

    // Headings
    const h1 = pick('h1', [
      'font-family','font-size','font-weight','line-height',
      'letter-spacing','text-transform','color','font-style',
    ]);
    const h2 = pick('h2', [
      'font-family','font-size','font-weight','line-height',
      'letter-spacing','text-transform','color','font-style',
    ]);
    const h3 = pick('h3', [
      'font-family','font-size','font-weight','line-height',
      'letter-spacing','text-transform','color','font-style',
    ]);

    // Buttons / links
    const btn = all('a, button', [
      'font-family','font-size','font-weight','text-transform',
      'letter-spacing','color','background-color','border-radius',
      'padding','display','text-decoration',
    ]);

    return {
      body, colors: colors.slice(0, 30),
      fonts: Array.from(fonts),
      h1, h2, h3, btn,
      title: document.title,
      url: location.href,
    };
  });
  fs.writeFileSync(
    path.join(OUT, 'sd-tokens.json'),
    JSON.stringify(tokens, null, 2)
  );
  console.log('[desktop] tokens extracted:', Object.keys(tokens));

  // 5) Detect animation libraries by inspecting window + scripts
  const detected = await dp.evaluate(() => {
    const libs = {};
    libs.GSAP = !!(window.gsap || window.ScrollTrigger || window.ScrollSmoother);
    libs.FramerMotion = !!window.__framer_motion;
    libs.Lenis = !!window.Lenis;
    libs.Locomotive = !!window.locomotive;
    libs.Three = !!window.THREE;
    libs.React = !!(window.React || document.querySelector('[data-reactroot], [data-reactroot]') || document.querySelector('#__next'));
    libs.Next = !!document.querySelector('#__next');
    libs.Vue = !!window.Vue;
    libs.WebGL = (() => {
      try {
        const c = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
      } catch { return false; }
    })();
    libs.canvasCount = document.querySelectorAll('canvas').length;
    libs.videoCount = document.querySelectorAll('video').length;
    return libs;
  });
  fs.writeFileSync(
    path.join(OUT, 'sd-libraries.json'),
    JSON.stringify(detected, null, 2)
  );
  console.log('[desktop] libraries detected:', detected);

  // 6) Save script/stylesheet URLs
  fs.writeFileSync(
    path.join(OUT, 'sd-assets.json'),
    JSON.stringify({ scripts, stylesheets }, null, 2)
  );

  // 7) Save the rendered HTML for inspection
  const html = await dp.content();
  fs.writeFileSync(path.join(OUT, 'sd-rendered.html'), html);

  // 8) Section inventory — h1, h2, h3, all "section"-like elements
  const inventory = await dp.evaluate(() => {
    const out = { h1: [], h2: [], h3: [], sections: [] };
    document.querySelectorAll('h1').forEach((el) => out.h1.push(el.innerText.trim()));
    document.querySelectorAll('h2').forEach((el) => out.h2.push(el.innerText.trim()));
    document.querySelectorAll('h3').forEach((el) => out.h3.push(el.innerText.trim()));
    document.querySelectorAll('section, [class*="section"], [class*="Section"]').forEach((el) => {
      out.sections.push({
        tag: el.tagName,
        className: el.className?.toString?.()?.slice(0, 120),
        text: el.innerText?.trim()?.slice(0, 240),
      });
    });
    return out;
  });
  fs.writeFileSync(
    path.join(OUT, 'sd-inventory.json'),
    JSON.stringify(inventory, null, 2)
  );
  console.log('[desktop] inventory:', {
    h1: inventory.h1.length,
    h2: inventory.h2.length,
    h3: inventory.h3.length,
    sections: inventory.sections.length,
  });

  // ============ MOBILE ============
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const mp = await mobile.newPage();
  await mp.goto(URL, { waitUntil: 'domcontentloaded', timeout: 90_000 });
  await mp.waitForTimeout(8000);
  await mp.screenshot({ path: path.join(OUT, 'sd-mobile-hero.png') });
  await mp.screenshot({ path: path.join(OUT, 'sd-mobile-FULL.png'), fullPage: true });
  console.log('[mobile] screenshots saved');

  await browser.close();
  console.log('\n✅ Done. Output in', OUT);
})();
