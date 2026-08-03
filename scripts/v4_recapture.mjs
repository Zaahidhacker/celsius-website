/**
 * V4 Hero Re-capture — wait for all animations to complete before screenshot.
 */
import { chromium } from "playwright";

const OUT = "/home/z/my-project/download/v4-verify";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/v4", { waitUntil: "networkidle", timeout: 30000 });

  // Wait long enough for: loader (1.8s) + fade (0.7s) + hero title reveal (delay 1.6s + duration 1.1s + stagger 0.16s) + meta (delay 2.4s + duration 0.9s)
  // Total: ~5 seconds minimum
  await page.waitForTimeout(6000);

  await page.screenshot({ path: `${OUT}/v4-desktop-hero-FULL.png`, fullPage: false });
  console.log("✓ Hero (post-animation) captured");

  // Also capture mid-page sections with longer waits
  const sections = [
    { name: "brands", y: 900 },
    { name: "vision-1", y: 1800 },
    { name: "manifesto", y: 4500 },
    { name: "services", y: 5400 },
    { name: "ceo", y: 7000 },
    { name: "contact", y: 7800 },
  ];

  for (const s of sections) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), s.y);
    await page.waitForTimeout(1500); // longer wait for scroll-triggered animations
    await page.screenshot({ path: `${OUT}/v4-desktop-${s.name}-FULL.png`, fullPage: false });
    console.log(`✓ ${s.name} captured (post-animation)`);
  }

  // Full page
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/v4-desktop-full-FULL.png`, fullPage: true });
  console.log("✓ Full page (post-animation) captured");

  await browser.close();
})();
