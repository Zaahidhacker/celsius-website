/**
 * Capture V6 screenshots for VLM comparison.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const OUT = '/home/z/my-project/download/v6-verify';
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // DESKTOP
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  ctx.setDefaultTimeout(45_000);
  ctx.setDefaultNavigationTimeout(60_000);
  const p = await ctx.newPage();

  console.log('[d] goto /v6...');
  await p.goto('http://localhost:3000/v6', { waitUntil: 'load', timeout: 60_000 });
  // Wait extra for loader + hero rise animation
  await p.waitForTimeout(4000);

  // Hero (above fold)
  await p.screenshot({ path: path.join(OUT,'v6-desktop-hero.png') });
  console.log('[d] hero saved');

  // Sections
  const ys = [0, 800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200, 8000, 8800];
  for (let i=0;i<ys.length;i++) {
    try {
      await p.evaluate((y) => window.scrollTo({top:y, behavior:'instant'}), ys[i]);
      await p.waitForTimeout(1500);
      await p.screenshot({ path: path.join(OUT,`v6-desktop-${String(i).padStart(2,'0')}.png`) });
      console.log(`[d] section ${i} (y=${ys[i]}) saved`);
    } catch(e) {
      console.log(`[d] section ${i} err:`, e.message.slice(0,80));
    }
  }

  // Full page
  await p.evaluate(() => window.scrollTo({top:0, behavior:'instant'}));
  await p.waitForTimeout(1000);
  try {
    await p.screenshot({ path: path.join(OUT,'v6-desktop-FULL.png'), fullPage: true });
    console.log('[d] FULL saved');
  } catch(e) { console.log('[d] FULL err:', e.message.slice(0,120)); }

  // MOBILE
  const mctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1, isMobile: true, hasTouch: true,
  });
  const mp = await mctx.newPage();
  try {
    await mp.goto('http://localhost:3000/v6', { waitUntil: 'load', timeout: 60_000 });
    await mp.waitForTimeout(4000);
    await mp.screenshot({ path: path.join(OUT,'v6-mobile-hero.png') });
    await mp.screenshot({ path: path.join(OUT,'v6-mobile-FULL.png'), fullPage: true });
    console.log('[m] saved');
  } catch(e) { console.log('[m] err:', e.message.slice(0,160)); }

  await browser.close();
  console.log('DONE');
})();
