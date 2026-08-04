// Test V6 page for console errors, structure, and animation setup
import { chromium } from "playwright";

const BROWSER = "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome";
const URL = "http://localhost:3000/v6";

async function main() {
  const browser = await chromium.launch({
    executablePath: BROWSER,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const errors = [];
  const warnings = [];

  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await ctx.newPage();

  page.on("console", (msg) => {
    const type = msg.type();
    const text = msg.text();
    if (type === "error") errors.push(text);
    else if (type === "warning") warnings.push(text);
  });
  page.on("pageerror", (err) => errors.push(`PAGE ERROR: ${err.message}`));

  console.log("Loading:", URL);
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(3000);

  // Take screenshot of hero
  await page.screenshot({ path: "/tmp/v6-hero.png", fullPage: false });

  // Check for key elements
  const checks = await page.evaluate(() => {
    const results = {};
    results.hasHero = !!document.querySelector(".v6-hero");
    results.hasManifesto = !!document.querySelector(".v6-manifesto");
    results.has3DScene = !!document.querySelector(".v6-3d-scene");
    results.hasServices = !!document.querySelector("#services");
    results.hasBrands = !!document.querySelector("#brands");
    results.hasBrandsOrbit = !!document.querySelector(".v6-brands-orbit-stage");
    results.hasSolutions = !!document.querySelector("#solutions");
    results.hasPricing = !!document.querySelector("#pricing");
    results.pricingCards = document.querySelectorAll(".v6-pricing-card").length;
    results.hasProjects = !!document.querySelector("#projects");
    results.hasReviews = !!document.querySelector("#reviews");
    results.reviewCards = document.querySelectorAll(".v6-review-card").length;
    results.hasCeo = !!document.querySelector("#ceo");
    results.hasContact = !!document.querySelector("#contact");
    results.hasFooter = !!document.querySelector(".v6-footer");
    results.hasSocialsInContact = document.querySelectorAll(".v6-cta-social").length;
    results.hasSocialsInFooter = document.querySelectorAll(".v6-footer-social").length;
    results.hasStatsCounter = !!document.querySelector("[data-countup]");
    results.statsCount = document.querySelectorAll("[data-countup]").length;
    results.hasNavbar = !!document.querySelector(".v6-nav");
    results.navLinks = document.querySelectorAll(".v6-nav-links a").length;
    results.newEmail = document.body.innerText.includes("aircon.celsius@gmail.com");
    results.oldEmail = document.body.innerText.includes("ijazniyaz1234");
    results.hasInstagram = document.body.innerHTML.includes("instagram.com/aircon.celsius");
    results.hasFacebook = document.body.innerHTML.includes("facebook.com/share/1DMuxTvG7F");
    results.hasWhatsApp = document.body.innerHTML.includes("wa.me/94777136560");
    results.noV7 = !document.querySelector('[href="/v7"]');
    results.noV8 = !document.querySelector('[href="/v8"]');
    results.noV9 = !document.querySelector('[href="/v9"]');
    results.noGVS = !document.querySelector(".gvs-root");
    return results;
  });
  console.log("\n=== STRUCTURE CHECKS ===");
  console.log(JSON.stringify(checks, null, 2));

  // Scroll through the page to trigger animejs animations
  console.log("\n=== SCROLLING TO TRIGGER ANIMATIONS ===");
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page total height: ${totalHeight}px`);

  for (let i = 0; i < 12; i++) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), i * (totalHeight / 12));
    await page.waitForTimeout(400);
  }

  // Check that the 3D scene has a transform (i.e. animejs is animating)
  const sceneTransform = await page.evaluate(() => {
    const scene = document.querySelector(".v6-3d-scene");
    if (!scene) return null;
    return window.getComputedStyle(scene).transform;
  });
  console.log("\n=== 3D SCENE TRANSFORM (after scroll) ===");
  console.log(sceneTransform);

  // Check that count-up has populated
  const statValues = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("[data-countup]")).map((el) => ({
      final: el.dataset.final,
      current: el.textContent,
    }));
  });
  console.log("\n=== STATS COUNTER (after scroll) ===");
  console.log(JSON.stringify(statValues, null, 2));

  // Take full page screenshot
  await page.screenshot({ path: "/tmp/v6-fullpage.png", fullPage: true });

  // Take screenshots at different sections
  for (const [name, sel] of [
    ["manifesto", "#about"],
    ["brands", "#brands"],
    ["pricing", "#pricing"],
    ["reviews", "#reviews"],
    ["contact", "#contact"],
  ]) {
    try {
      const el = await page.$(sel);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(800);
        await page.screenshot({ path: `/tmp/v6-${name}.png` });
        console.log(`Screenshot: v6-${name}.png`);
      }
    } catch (e) {
      console.log(`Could not screenshot ${name}: ${e.message}`);
    }
  }

  // Test mobile viewport
  console.log("\n=== MOBILE TEST (390x844) ===");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "/tmp/v6-mobile.png", fullPage: false });

  console.log("\n=== ERRORS ===");
  if (errors.length === 0) {
    console.log("✓ No console errors");
  } else {
    console.log(`✗ ${errors.length} errors:`);
    errors.forEach((e) => console.log(" -", e));
  }

  console.log("\n=== WARNINGS ===");
  if (warnings.length === 0) {
    console.log("✓ No console warnings");
  } else {
    console.log(`${warnings.length} warnings (first 5):`);
    warnings.slice(0, 5).forEach((w) => console.log(" -", w));
  }

  await browser.close();
  process.exit(errors.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
