/**
 * V4 Verification Script
 * 1. Visits overlay.com to confirm design DNA
 * 2. Visits localhost:3000/v4 to capture V4 screenshots (desktop + mobile)
 * 3. Captures overlay.com screenshots for reference
 * 4. Dumps overlay.com's computed CSS for key elements (typography, colors, animations)
 */
import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("/home/z/my-project/download/v4-verify", { recursive: true });

const OUT = "/home/z/my-project/download/v4-verify";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const desktopCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const mobileCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });

  // ---------- 1. Capture overlay.com for reference ----------
  console.log("\n[1/4] Capturing overlay.com (reference)...");
  try {
    const page = await desktopCtx.newPage();
    await page.goto("https://overlay.com", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2500);

    await page.screenshot({ path: `${OUT}/overlay-desktop-full.png`, fullPage: true });
    await page.screenshot({ path: `${OUT}/overlay-desktop-top.png`, fullPage: false });

    // Extract design tokens
    const overlayTokens = await page.evaluate(() => {
      const get = (sel, props) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const cs = getComputedStyle(el);
        const out = {};
        for (const p of props) out[p] = cs[p];
        return out;
      };
      return {
        body: get("body", [
          "backgroundColor", "color", "fontFamily", "fontSize", "lineHeight",
          "letterSpacing", "-webkit-font-smoothing",
        ]),
        h1: get("h1, h2", [
          "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing",
          "color", "textTransform",
        ]),
        nav: get("nav, header", [
          "backgroundColor", "color", "fontFamily", "fontSize", "padding",
        ]),
        button: get("a[href*='contact'], button", [
          "backgroundColor", "color", "borderRadius", "padding", "fontFamily",
          "fontSize", "fontWeight",
        ]),
      };
    });
    console.log("  ✓ overlay.com tokens captured");
    console.log(JSON.stringify(overlayTokens, null, 2));

    // Check for animation libraries
    const overlayAnimInfo = await page.evaluate(() => {
      const hasGsap = typeof window.gsap !== "undefined" || !!window.ScrollTrigger;
      const hasLenis = typeof window.Lenis !== "undefined" || !!document.querySelector('[data-lenis]');
      const hasLocomotive = typeof window.LocomotiveScroll !== "undefined";
      const hasFramerMotion = !!document.querySelector('[class*="motion"]');
      return { hasGsap, hasLenis, hasLocomotive, hasFramerMotion };
    });
    console.log("  Animation libs:", overlayAnimInfo);

    // Mobile snapshot of overlay
    const mobilePage = await mobileCtx.newPage();
    await mobilePage.goto("https://overlay.com", { waitUntil: "networkidle", timeout: 30000 });
    await mobilePage.waitForTimeout(1500);
    await mobilePage.screenshot({ path: `${OUT}/overlay-mobile-top.png` });
    await mobilePage.close();
  } catch (e) {
    console.log("  ! overlay.com capture failed:", e.message);
  }

  // ---------- 2. Capture V4 (localhost) ----------
  console.log("\n[2/4] Capturing V4 desktop...");
  try {
    const page = await desktopCtx.newPage();
    await page.goto("http://localhost:3000/v4", { waitUntil: "networkidle", timeout: 30000 });

    // Wait for loader to fade
    await page.waitForTimeout(2500);

    // Hero screenshot
    await page.screenshot({ path: `${OUT}/v4-desktop-hero.png`, fullPage: false });
    console.log("  ✓ Hero captured");

    // Scroll through and capture each section
    const sections = [
      { name: "hero", y: 0 },
      { name: "brands", y: 900 },
      { name: "vision-1", y: 1800 },
      { name: "vision-2", y: 2700 },
      { name: "vision-3", y: 3600 },
      { name: "manifesto", y: 4500 },
      { name: "services", y: 5400 },
      { name: "stats", y: 6300 },
      { name: "ceo", y: 7000 },
      { name: "contact", y: 7800 },
      { name: "footer", y: 8600 },
    ];

    for (const s of sections) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), s.y);
      await page.waitForTimeout(800);
      await page.screenshot({ path: `${OUT}/v4-desktop-${s.name}.png`, fullPage: false });
      console.log(`  ✓ Section "${s.name}" captured`);
    }

    // Full page (after all animations triggered)
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/v4-desktop-full.png`, fullPage: true });
    console.log("  ✓ Full page captured");

    // Capture computed styles to verify design tokens are applied
    const v4Tokens = await page.evaluate(() => {
      const get = (sel, props) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const cs = getComputedStyle(el);
        const out = {};
        for (const p of props) out[p] = cs[p];
        return out;
      };
      return {
        root: get(".v4-root", ["backgroundColor", "color", "fontFamily"]),
        heroTitle: get(".v4-hero-title", [
          "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "color",
        ]),
        navbar: get(".v4-navbar", ["backgroundColor", "color", "padding"]),
        eyebrow: get(".v4-eyebrow", ["fontFamily", "fontSize", "letterSpacing", "textTransform"]),
        amberBtn: get(".v4-btn-amber", ["backgroundColor", "color", "borderRadius", "padding"]),
      };
    });
    console.log("  V4 design tokens:");
    console.log(JSON.stringify(v4Tokens, null, 2));

    // Check console errors
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
    console.log("  Console errors after reload:", errors.length ? errors : "(none)");

    await page.close();
  } catch (e) {
    console.log("  ! V4 desktop capture failed:", e.message);
  }

  // ---------- 3. Capture V4 mobile ----------
  console.log("\n[3/4] Capturing V4 mobile...");
  try {
    const page = await mobileCtx.newPage();
    await page.goto("http://localhost:3000/v4", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2500);

    await page.screenshot({ path: `${OUT}/v4-mobile-hero.png`, fullPage: false });
    console.log("  ✓ Mobile hero captured");

    // Mobile full page
    await page.screenshot({ path: `${OUT}/v4-mobile-full.png`, fullPage: true });
    console.log("  ✓ Mobile full page captured");

    await page.close();
  } catch (e) {
    console.log("  ! V4 mobile capture failed:", e.message);
  }

  // ---------- 4. Check V1/V2/V3 still work ----------
  console.log("\n[4/4] Verifying V1/V2/V3 still work...");
  const page = await desktopCtx.newPage();
  for (const v of ["/", "/v2", "/v3"]) {
    try {
      const r = await page.goto(`http://localhost:3000${v}`, { waitUntil: "domcontentloaded", timeout: 15000 });
      console.log(`  ${v}: HTTP ${r?.status()}`);
    } catch (e) {
      console.log(`  ${v}: FAILED (${e.message})`);
    }
  }

  await browser.close();
  console.log("\n✓ Done. Screenshots in:", OUT);
})();
