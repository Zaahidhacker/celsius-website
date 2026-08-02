import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const OUT = '/home/z/my-project/download/v6-research';
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

  const scripts = new Set();
  const styles = new Set();
  p.on('response', async (res) => {
    try {
      const ct = res.headers()['content-type'] || '';
      if (ct.includes('javascript')) scripts.add(res.url());
      if (ct.includes('css')) styles.add(res.url());
    } catch {}
  });

  console.log('[d] goto...');
  try {
    await p.goto('https://shopify.design', { waitUntil: 'load', timeout: 60_000 });
  } catch (e) {
    console.log('[d] goto err:', e.message.slice(0,120));
  }
  await p.waitForTimeout(8000);
  console.log('[d] ready');

  // Hero
  await p.screenshot({ path: path.join(OUT,'sd-desktop-hero.png') });
  console.log('[d] hero saved');

  // Sections
  const ys = [0, 800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200, 8000];
  for (let i=0;i<ys.length;i++) {
    try {
      await p.evaluate((y) => window.scrollTo({top:y, behavior:'instant'}), ys[i]);
      await p.waitForTimeout(1500);
      await p.screenshot({ path: path.join(OUT,`sd-desktop-${String(i).padStart(2,'0')}.png`) });
      console.log(`[d] section ${i} (y=${ys[i]}) saved`);
    } catch(e) {
      console.log(`[d] section ${i} err:`, e.message.slice(0,80));
    }
  }

  // Full page
  await p.evaluate(() => window.scrollTo({top:0, behavior:'instant'}));
  await p.waitForTimeout(1000);
  try {
    await p.screenshot({ path: path.join(OUT,'sd-desktop-FULL.png'), fullPage: true });
    console.log('[d] FULL saved');
  } catch(e) { console.log('[d] FULL err:', e.message.slice(0,120)); }

  // Tokens
  try {
    const t = await p.evaluate(() => {
      const pick = (sel, props) => {
        const el = document.querySelector(sel); if(!el) return null;
        const cs = getComputedStyle(el); const o = {};
        for(const p of props) o[p] = cs.getPropertyValue(p);
        return o;
      };
      const all = (sel, props) => Array.from(document.querySelectorAll(sel)).slice(0,5).map(el => {
        const cs = getComputedStyle(el); const o = {};
        for(const p of props) o[p] = cs.getPropertyValue(p);
        return o;
      });
      const seen = new Set(); const colors = [];
      document.querySelectorAll('*').forEach(el => {
        const cs = getComputedStyle(el);
        ['background-color','color'].forEach(p => {
          const v = cs.getPropertyValue(p);
          if (v && v!=='rgba(0, 0, 0, 0)' && v!=='transparent' && !seen.has(v+p)) {
            seen.add(v+p); colors.push({ prop:p, value:v });
          }
        });
      });
      const fonts = new Set();
      document.querySelectorAll('h1,h2,h3,h4,p,a,span,div').forEach(el => {
        fonts.add(getComputedStyle(el).getPropertyValue('font-family'));
      });
      return {
        body: pick('body', ['background-color','color','font-family','font-size','line-height']),
        h1: pick('h1', ['font-family','font-size','font-weight','line-height','letter-spacing','text-transform','color']),
        h2: pick('h2', ['font-family','font-size','font-weight','line-height','letter-spacing','text-transform','color']),
        h3: pick('h3', ['font-family','font-size','font-weight','line-height','letter-spacing','text-transform','color']),
        btn: all('a, button', ['font-family','font-size','font-weight','text-transform','letter-spacing','color','background-color','border-radius','padding','display']),
        colors: colors.slice(0, 50),
        fonts: Array.from(fonts),
        title: document.title,
      };
    });
    fs.writeFileSync(path.join(OUT,'sd-tokens.json'), JSON.stringify(t,null,2));
    console.log('[d] tokens saved');
  } catch(e) { console.log('[d] tokens err:', e.message.slice(0,160)); }

  // Libraries
  try {
    const l = await p.evaluate(() => ({
      GSAP: !!(window.gsap || window.ScrollTrigger),
      Lenis: !!window.Lenis,
      Three: !!window.THREE,
      Next: !!document.querySelector('#__next'),
      canvasCount: document.querySelectorAll('canvas').length,
      videoCount: document.querySelectorAll('video').length,
      iframeCount: document.querySelectorAll('iframe').length,
    }));
    fs.writeFileSync(path.join(OUT,'sd-libraries.json'), JSON.stringify(l,null,2));
    console.log('[d] libraries:', l);
  } catch(e) {}

  fs.writeFileSync(path.join(OUT,'sd-assets.json'), JSON.stringify({
    scripts: Array.from(scripts), styles: Array.from(styles),
  }, null, 2));

  // Inventory
  try {
    const inv = await p.evaluate(() => {
      const out = { h1:[], h2:[], h3:[], sections:[] };
      document.querySelectorAll('h1').forEach(el => out.h1.push(el.innerText.trim().slice(0,200)));
      document.querySelectorAll('h2').forEach(el => out.h2.push(el.innerText.trim().slice(0,200)));
      document.querySelectorAll('h3').forEach(el => out.h3.push(el.innerText.trim().slice(0,200)));
      return out;
    });
    fs.writeFileSync(path.join(OUT,'sd-inventory.json'), JSON.stringify(inv,null,2));
    console.log('[d] inventory:', {h1:inv.h1.length,h2:inv.h2.length,h3:inv.h3.length});
  } catch(e) {}

  // HTML
  try {
    const html = await p.content();
    fs.writeFileSync(path.join(OUT,'sd-rendered.html'), html);
    console.log('[d] html saved, len=', html.length);
  } catch(e) {}

  // MOBILE
  const mctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1, isMobile: true, hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
  });
  const mp = await mctx.newPage();
  try {
    await mp.goto('https://shopify.design', { waitUntil: 'load', timeout: 60_000 });
    await mp.waitForTimeout(5000);
    await mp.screenshot({ path: path.join(OUT,'sd-mobile-hero.png') });
    await mp.screenshot({ path: path.join(OUT,'sd-mobile-FULL.png'), fullPage: true });
    console.log('[m] saved');
  } catch(e) { console.log('[m] err:', e.message.slice(0,160)); }

  await browser.close();
  console.log('DONE');
})();
