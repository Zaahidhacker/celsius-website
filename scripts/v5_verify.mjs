/**
 * V5 Verification Script
 * Captures V5 (localhost:3000/v5) screenshots for every section
 * and checks V1/V2/V3/V4 still work.
 */
import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("/home/z/my-project/download/v5-verify", { recursive: true });
const OUT = "/home/z/my-project/download/v5-verify";

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

  console.log("\n[1] V5 Desktop capture...");
  const page = await desktopCtx.newPage();
  await page.goto("http://localhost:3000/v5", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2500); // wait for hero entry animations

  await page.screenshot({ path: `${OUT}/v5-desktop-hero.png`, fullPage: false });
  console.log("  ✓ Hero captured");

  const sections = [
    { name: "trustbar", y: 900 },
    { name: "services", y: 1500 },
    { name: "services-2", y: 2200 },
    { name: "about", y: 3000 },
    { name: "about-2", y: 3700 },
    { name: "stats", y: 4400 },
    { name: "process", y: 5100 },
    { name: "marquee", y: 5800 },
    { name: "testimonial", y: 6300 },
    { name: "cta-banner", y: 7100 },
    { name: "contact", y: 8000 },
    { name: "footer", y: 9000 },
  ];

  for (const s of sections) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), s.y);
    await page.waitForTimeout(1200); // wait for scroll-triggered animations
    await page.screenshot({ path: `${OUT}/v5-desktop-${s.name}.png`, fullPage: false });
    console.log(`  ✓ ${s.name} captured`);
  }

  // Full page (after all animations)
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/v5-desktop-full.png`, fullPage: true });
  console.log("  ✓ Full page captured");

  // Verify computed styles
  const tokens = await page.evaluate(() => {
    const get = (sel, props) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const out = {};
      for (const p of props) out[p] = cs[p];
      return out;
    };
    return {
      root: get(".v5-root", ["backgroundColor", "color", "fontFamily"]),
      heroTitle: get(".v5-hero-title", [
        "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "color",
      ]),
      navbar: get(".v5-navbar.is-scrolled", ["backgroundColor", "backdropFilter"]),
      primaryBtn: get(".v5-btn-primary", ["backgroundColor", "color", "borderRadius", "padding"]),
      secondaryBtn: get(".v5-btn-secondary", ["backgroundColor", "color", "borderRadius"]),
      trustPill: get(".v5-trust-pill", ["backgroundColor", "borderColor", "borderRadius", "padding"]),
      serviceCard: get(".v5-service-card", ["backgroundColor", "borderColor", "borderRadius"]),
    };
  });
  console.log("\n[2] V5 design tokens:");
  console.log(JSON.stringify(tokens, null, 2));

  // Check console errors
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  console.log("\n[3] V5 Mobile capture...");
  const mPage = await mobileCtx.newPage();
  await mPage.goto("http://localhost:3000/v5", { waitUntil: "networkidle", timeout: 30000 });
  await mPage.waitForTimeout(2000);
  await mPage.screenshot({ path: `${OUT}/v5-mobile-hero.png`, fullPage: false });
  await mPage.screenshot({ path: `${OUT}/v5-mobile-full.png`, fullPage: true });
  console.log("  ✓ Mobile captured");
  await mPage.close();

  console.log("\n[4] Verifying V1/V2/V3/V4 still work...");
  for (const v of ["/", "/v2", "/v3", "/v4"]) {
    try {
      const r = await page.goto(`http://localhost:3000${v}`, { waitUntil: "domcontentloaded", timeout: 15000 });
      console.log(`  ${v}: HTTP ${r?.status()}`);
    } catch (e) {
      console.log(`  ${v}: FAILED (${e.message})`);
    }
  }

  console.log("\n[5] Console errors during V5 capture:", errors.length ? errors : "(none)");

  await browser.close();
  console.log("\n✓ Done. Screenshots in:", OUT);
})();
