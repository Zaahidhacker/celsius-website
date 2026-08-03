/**
 * Airstead.webflow.io — full design DNA extraction (pure JS, no TS annotations)
 *
 * Captures: screenshots, computed CSS tokens, animation library detection,
 * section structure, hover states, mobile.
 *
 * Output: /home/z/my-project/download/airstead-extract/
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "fs";

const OUT = "/home/z/my-project/download/airstead-extract";
mkdirSync(`${OUT}/screens`, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });

  console.log("\n=== AIRSTEAD DESKTOP EXTRACTION ===\n");
  const page = await desktop.newPage();

  const libSignals = {
    gsap: false, scrollTrigger: false, lenis: false, locomotive: false,
    framer: false, lottie: false, webflowIx: false, spline: false,
    aminis: false, barba: false, swup: false, motion: false,
  };
  const scriptUrls = [];
  page.on("response", (r) => {
    const u = r.url();
    if (r.request().resourceType() === "script") scriptUrls.push(u);
    if (u.includes("gsap")) libSignals.gsap = true;
    if (u.includes("scrolltrigger")) libSignals.scrollTrigger = true;
    if (u.includes("lenis")) libSignals.lenis = true;
    if (u.includes("locomotive")) libSignals.locomotive = true;
    if (u.includes("framer")) libSignals.framer = true;
    if (u.includes("lottie")) libSignals.lottie = true;
    if (u.includes("webflow") && (u.includes("ix2") || u.endsWith(".js"))) libSignals.webflowIx = true;
    if (u.includes("spline")) libSignals.spline = true;
    if (u.includes("anime")) libSignals.aminis = true;
    if (u.includes("barba")) libSignals.barba = true;
    if (u.includes("swup")) libSignals.swup = true;
    if (u.includes("motion")) libSignals.motion = true;
  });

  console.log("[1] Navigating to https://airstead.webflow.io ...");
  await page.goto("https://airstead.webflow.io", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(3000);

  await page.screenshot({ path: `${OUT}/screens/01-hero-top.png`, fullPage: false });
  console.log("  ✓ Hero captured");

  // ---------- EXTRACT DESIGN TOKENS (no TS annotations inside evaluate) ----------
  console.log("\n[2] Extracting design tokens...");
  const tokens = await page.evaluate(() => {
    const computed = (sel, props) => {
      const el = document.querySelector(sel);
      if (!el) return { _sel: sel, _found: false };
      const cs = getComputedStyle(el);
      const out = { _sel: sel, _found: true };
      for (const p of props) out[p] = cs[p];
      out._class = el.className?.toString?.() || "";
      out._tag = el.tagName.toLowerCase();
      return out;
    };

    const props = [
      "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing",
      "color", "backgroundColor", "padding", "margin", "borderRadius",
      "border", "boxShadow", "textTransform", "display", "gap", "alignItems",
      "justifyContent", "width", "height",
    ];

    const out = {};
    out.body = computed("body", [...props, "-webkit-font-smoothing", "overflow"]);
    out.nav = computed("nav, .navbar, [class*='nav']", props);
    out.hero_h1 = computed("h1, .h1, [class*='heading-hero'], [class*='hero-heading']", props);
    out.hero_h2 = computed("h2, .h2", props);
    out.section_h = computed("section h2, section h3, [class*='heading']", props);
    out.button_primary = computed(
      "a[class*='button'][class*='primary'], a[class*='btn'][class*='primary'], .button-primary, .btn-primary, a.w-button:first-of-type",
      props
    );
    out.button_secondary = computed(
      "a[class*='button'][class*='secondary'], a[class*='btn'][class*='secondary'], .button-secondary, .btn-secondary",
      props
    );
    out.button_ghost = computed(
      "a[class*='button'][class*='ghost'], a[class*='btn'][class*='ghost']",
      props
    );
    out.badge = computed("[class*='badge'], [class*='pill'], [class*='tag']", props);
    out.link = computed("a:not([class])", props);

    // Section structure
    const sections = Array.from(document.querySelectorAll("section, [class*='section']"))
      .slice(0, 25)
      .map((s) => {
        const cs = getComputedStyle(s);
        const r = s.getBoundingClientRect();
        return {
          tag: s.tagName.toLowerCase(),
          class: s.className?.toString?.().slice(0, 200) || "",
          bg: cs.backgroundColor,
          pad: cs.padding,
          h: Math.round(r.height),
          top: Math.round(r.top + window.scrollY),
        };
      });
    out._sections = sections;

    const navLinks = Array.from(document.querySelectorAll("nav a, [class*='nav'] a"))
      .map((a) => ({ text: a.textContent?.trim(), href: a.href }))
      .filter((l) => l.text && l.text.length < 30)
      .slice(0, 20);
    out._navLinks = navLinks;

    // Top colors
    const colorCounts = {};
    document.querySelectorAll("*").forEach((el) => {
      const cs = getComputedStyle(el);
      [cs.color, cs.backgroundColor, cs.borderColor].forEach((c) => {
        if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent" && !c.includes("rgb(0, 0, 0)")) {
          colorCounts[c] = (colorCounts[c] || 0) + 1;
        }
      });
    });
    out._topColors = Object.entries(colorCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 25)
      .map(([c, n]) => ({ color: c, count: n }));

    // Top fonts
    const fontCounts = {};
    document.querySelectorAll("h1, h2, h3, h4, p, a, span, div").forEach((el) => {
      const cs = getComputedStyle(el);
      const f = cs.fontFamily;
      fontCounts[f] = (fontCounts[f] || 0) + 1;
    });
    out._topFonts = Object.entries(fontCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([f, n]) => ({ font: f, count: n }));

    const rootCs = getComputedStyle(document.documentElement);
    const cssVars = {};
    ["--color-primary", "--color-accent", "--color-bg", "--brand", "--accent",
     "--primary", "--bg", "--text", "--dark", "--light"].forEach((v) => {
      const val = rootCs.getPropertyValue(v).trim();
      if (val) cssVars[v] = val;
    });
    out._cssVars = cssVars;

    out._animLibs = {
      gsap: typeof window.gsap !== "undefined",
      ScrollTrigger: typeof window.ScrollTrigger !== "undefined",
      Lenis: typeof window.Lenis !== "undefined",
      LocomotiveScroll: typeof window.LocomotiveScroll !== "undefined",
      Webflow: typeof window.Webflow !== "undefined",
      Motion: typeof window.Motion !== "undefined",
    };

    out._title = document.title;
    out._metaDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";

    return out;
  });

  console.log("  ✓ Tokens extracted");
  writeFileSync(`${OUT}/tokens.json`, JSON.stringify(tokens, null, 2));

  // ---------- SCROLL & CAPTURE EVERY SECTION ----------
  console.log("\n[3] Scrolling through page to capture each section...");

  const sectionInfo = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section, [class*='section'], header, footer"));
    return sections.map((s, i) => {
      const r = s.getBoundingClientRect();
      return {
        idx: i,
        tag: s.tagName.toLowerCase(),
        class: s.className?.toString?.().slice(0, 80) || "",
        top: Math.round(r.top + window.scrollY),
        height: Math.round(r.height),
      };
    }).filter((s) => s.height > 100);
  });
  writeFileSync(`${OUT}/sections.json`, JSON.stringify(sectionInfo, null, 2));
  console.log(`  Found ${sectionInfo.length} sections`);

  for (let i = 0; i < sectionInfo.length; i++) {
    const s = sectionInfo[i];
    await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), s.top - 50);
    await page.waitForTimeout(1200);
    const safeClass = s.class.replace(/[^a-z0-9]/gi, "_").slice(0, 30) || "section";
    await page.screenshot({
      path: `${OUT}/screens/${String(i + 1).padStart(2, "0")}-${s.tag}-${safeClass}.png`,
      fullPage: false,
    });
    console.log(`  ✓ ${String(i + 1).padStart(2, "0")} ${s.tag} ${s.class.slice(0, 40)} (top=${s.top}, h=${s.height})`);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/screens/00-full-page.png`, fullPage: true });
  console.log("  ✓ Full page captured");

  // ---------- HOVER STATE CAPTURES ----------
  console.log("\n[4] Capturing hover states...");
  try {
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(500);
    const primaryBtn = await page.$("a[class*='button'][class*='primary'], a.w-button");
    if (primaryBtn) {
      await primaryBtn.hover();
      await page.waitForTimeout(400);
      await page.screenshot({ path: `${OUT}/screens/hover-primary-btn.png`, fullPage: false });
      const btnHover = await primaryBtn.evaluate((el) => {
        const cs = getComputedStyle(el);
        return {
          bg: cs.backgroundColor, color: cs.color, borderRadius: cs.borderRadius,
          transform: cs.transform, boxShadow: cs.boxShadow, transition: cs.transition,
        };
      });
      console.log("  Primary btn hover:", JSON.stringify(btnHover));
      writeFileSync(`${OUT}/hover-states.json`, JSON.stringify({ primaryBtn: btnHover }, null, 2));
    }
  } catch (e) {
    console.log("  ! Hover capture failed:", e.message);
  }

  console.log("\n[5] Animation library detection:");
  console.log("  Script URL signals:", libSignals);
  console.log("  Window globals:", tokens._animLibs);
  writeFileSync(`${OUT}/anim-libs.json`, JSON.stringify({
    scriptSignals: libSignals,
    windowGlobals: tokens._animLibs,
    scriptUrls: scriptUrls.slice(0, 50),
  }, null, 2));

  // ---------- MOBILE CAPTURE ----------
  console.log("\n[6] Mobile capture...");
  const mPage = await mobile.newPage();
  await mPage.goto("https://airstead.webflow.io", { waitUntil: "networkidle", timeout: 60000 });
  await mPage.waitForTimeout(2500);
  await mPage.screenshot({ path: `${OUT}/screens/mobile-01-hero.png`, fullPage: false });
  await mPage.screenshot({ path: `${OUT}/screens/mobile-00-full.png`, fullPage: true });
  console.log("  ✓ Mobile captured");
  await mPage.close();

  console.log("\n[7] Saving HTML for reference...");
  const html = await page.content();
  writeFileSync(`${OUT}/airstead.html`, html);
  console.log(`  ✓ HTML saved (${html.length} chars)`);

  await browser.close();
  console.log("\n=== DONE ===");
  console.log(`All artifacts in: ${OUT}`);
})();
