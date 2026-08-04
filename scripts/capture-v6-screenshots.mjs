// Full-page screenshot capture for V6 page using Playwright directly.
//
// The V6 page uses several mechanisms that defeat naive full-page screenshots:
//   - `loading="lazy"` on images (only loads when near viewport)
//   - V6ScrollProvider: IntersectionObserver adds `is-in` class to
//     `[data-reveal]` elements (CSS hides them at opacity:0 until then)
//   - V6Reveal: sets inline `opacity:0` + `transform` on mount, animates
//     back via animejs' IntersectionObserver — and keeps re-applying
//     opacity:0 on each animation frame
//
// Playwright's `fullPage: true` resizes the viewport to the entire page
// height, which (a) doesn't fire scroll events so IntersectionObservers
// never trigger, and (b) causes React re-renders that reset V6Reveal's
// hidden state. The result is a screenshot that's mostly blank below the
// first viewport.
//
// Strategy:
//   1. Force lazy images to eager, add `is-in` to all `[data-reveal]`,
//      and inject `* { opacity:1 !important; transform:none !important; }`
//      to override animejs' inline opacity:0.
//   2. For full-page captures, take viewport-sized screenshots at each
//      scroll position and stitch them together with sharp. This avoids
//      the fullPage resize issue entirely.
//   3. For section captures, scroll to the section and take a single
//      viewport screenshot.
import { chromium } from 'playwright';
import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { tmpdir } from 'node:os';

const URL = 'http://localhost:3000/v6';
const OUT_DIR = '/home/z/my-project/scripts/screenshots';
const TARGETS = [
  { name: 'v6-desktop-full.png', width: 1440, height: 900, fullPage: true },
  { name: 'v6-mobile-full.png', width: 390, height: 844, fullPage: true },
  { name: 'v6-reviews-desktop.png', width: 1440, height: 900, scrollTo: '#reviews' },
  { name: 'v6-reviews-mobile.png', width: 390, height: 844, scrollTo: '#reviews' },
  { name: 'v6-contact-desktop.png', width: 1440, height: 900, scrollTo: '#contact' },
];

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const CHROMIUM_EXEC = '/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome';
const browser = await chromium.launch({
  headless: true,
  executablePath: CHROMIUM_EXEC,
});

/**
 * Set up a freshly-loaded V6 page so every section is visible regardless of
 * lazy-loading or scroll-reveal animations. Returns once the page is ready
 * to be screenshotted.
 */
async function preparePage(page) {
  // Force lazy images to load immediately, reveal all IntersectionObserver-
  // driven elements, and inject a CSS override that forces opacity:1 and
  // transform:none on everything (overriding animejs' inline styles).
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.setAttribute('loading', 'eager');
      const src = img.getAttribute('src');
      if (src && !img.complete) img.setAttribute('src', src);
    });
    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
      el.classList.add('is-in');
    });
    document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]').forEach((el) => {
      const htmlEl = /** @type {HTMLElement} */ (el);
      if (htmlEl.style.opacity === '0') {
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'none';
      }
    });
  });
  await page.addStyleTag({
    content: '*, *::before, *::after { opacity: 1 !important; transform: none !important; }',
  });
}

/**
 * Wait for all images on the page to finish loading (or time out).
 */
async function waitForImages(page) {
  await page.evaluate(() => {
    const imgs = Array.from(document.images);
    return Promise.all(imgs.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise((res) => {
        img.onload = img.onerror = res;
        setTimeout(res, 4000);
      });
    }));
  });
}

/**
 * Capture a full-page screenshot by stitching together viewport-sized
 * screenshots taken at each scroll position. This avoids Playwright's
 * `fullPage: true` resize behavior, which breaks V6Reveal's animation
 * state and leaves sections blank.
 *
 * The sticky navbar (height ~68px) is hidden (visibility:hidden) for all
 * screenshots after the first, so it doesn't repeat at every viewport
 * boundary. visibility:hidden keeps the navbar in the document flow, so
 * scroll positions remain accurate.
 */
async function captureStitchedFullPage(page, target, outPath) {
  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = target.height;
  const numShots = Math.max(1, Math.ceil(totalHeight / vh));
  process.stderr.write(`[${target.name}] Stitching ${numShots} viewport screenshots (${totalHeight}px / ${vh}px)...\n`);

  // Determine the navbar height so we can hide it after the first shot.
  const navHeight = await page.evaluate(() => {
    const nav = document.querySelector('.v6-nav') || document.querySelector('nav');
    if (!nav) return 0;
    return Math.round(nav.getBoundingClientRect().height);
  });

  const tmpDir = path.join(tmpdir(), `v6-shots-${Date.now()}`);
  mkdirSync(tmpDir, { recursive: true });
  const shotPaths = [];

  for (let i = 0; i < numShots; i++) {
    // For the last shot, scroll so the bottom of the page aligns with the
    // bottom of the viewport (avoids capturing a half-empty viewport).
    let scrollY;
    if (i === numShots - 1 && totalHeight > vh) {
      scrollY = totalHeight - vh;
    } else {
      scrollY = i * vh;
    }
    await page.evaluate((yy) => window.scrollTo(0, yy), scrollY);
    await page.waitForTimeout(400);

    // After the first shot, hide the sticky navbar so it doesn't repeat.
    if (i > 0 && navHeight > 0) {
      await page.evaluate(() => {
        const nav = document.querySelector('.v6-nav') || document.querySelector('nav');
        if (nav) nav.style.visibility = 'hidden';
      });
    }

    const shotPath = path.join(tmpDir, `shot-${String(i).padStart(3, '0')}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    shotPaths.push(shotPath);
  }

  // Restore navbar visibility (clean up).
  await page.evaluate(() => {
    const nav = document.querySelector('.v6-nav') || document.querySelector('nav');
    if (nav) nav.style.visibility = '';
  });

  // Stitch with sharp.
  process.stderr.write(`[${target.name}] Stitching ${shotPaths.length} images...\n`);
  const images = shotPaths.map((p) => sharp(p).raw().toBuffer({ resolveWithObject: true }));
  const buffers = await Promise.all(images);

  const width = buffers[0].info.width;
  const channels = buffers[0].info.channels;
  const totalStitchedHeight = buffers.reduce((sum, b) => sum + b.info.height, 0);

  const combined = Buffer.concat(buffers.map((b) => b.data));
  await sharp(combined, {
    raw: { width, height: totalStitchedHeight, channels },
  })
    .png()
    .toFile(outPath);

  // Clean up temp files.
  for (const p of shotPaths) unlinkSync(p);
  try { unlinkSync(tmpDir); } catch {}

  process.stderr.write(`[${target.name}] Stitched image: ${width}x${totalStitchedHeight}\n`);
}

try {
  for (const target of TARGETS) {
    const context = await browser.newContext({
      viewport: { width: target.width, height: target.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    process.stderr.write(`\n[${target.name}] Opening ${URL} at ${target.width}x${target.height}...\n`);

    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2500);
    await preparePage(page);

    if (target.fullPage) {
      // Scroll through the page first so any remaining IntersectionObservers
      // fire and images start loading.
      const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      const step = Math.max(Math.floor(target.height * 0.6), 400);
      for (let y = 0; y <= totalHeight + step; y += step) {
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(200);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      await waitForImages(page);
      // Re-apply the CSS override in case scrolling caused any re-renders.
      await page.addStyleTag({
        content: '*, *::before, *::after { opacity: 1 !important; transform: none !important; }',
      });
      await page.waitForTimeout(300);

      await captureStitchedFullPage(page, target, path.join(OUT_DIR, target.name));
    } else if (target.scrollTo) {
      process.stderr.write(`[${target.name}] Scrolling to ${target.scrollTo}...\n`);
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (el) el.scrollIntoView({ block: 'start' });
      }, target.scrollTo);
      await page.waitForTimeout(1200);
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return Promise.resolve();
        const imgs = Array.from(el.querySelectorAll('img'));
        return Promise.all(imgs.map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise((res) => {
            img.onload = img.onerror = res;
            setTimeout(res, 4000);
          });
        }));
      }, target.scrollTo);
      await page.waitForTimeout(300);
      await page.screenshot({
        path: path.join(OUT_DIR, target.name),
        fullPage: false,
      });
    }
    process.stderr.write(`[${target.name}] Saved.\n`);
    await context.close();
  }
} finally {
  await browser.close();
}
console.log('Done.');
