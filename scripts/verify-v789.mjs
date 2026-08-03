// Comprehensive visual + responsive verification for V7, V8, V9.
// Captures full-page screenshots at mobile (375x812), tablet (768x1024),
// and desktop (1440x900) for each version, plus logs any console errors.

import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const OUT = "/home/z/my-project/download/v-check";
fs.mkdirSync(OUT, { recursive: true });

const BASE = "http://localhost:3000";
const VERSIONS = [
  { label: "V7", href: "/v7" },
  { label: "V8", href: "/v8" },
  { label: "V9", href: "/v9" },
  { label: "V6", href: "/v6" },
];
const BREAKPOINTS = [
  { name: "mobile", w: 375, h: 812 },
  { name: "tablet", w: 768, h: 1024 },
  { name: "desktop", w: 1440, h: 900 },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome",
  });

  const summary = [];

  for (const v of VERSIONS) {
    for (const bp of BREAKPOINTS) {
      const ctx = await browser.newContext({
        viewport: { width: bp.w, height: bp.h },
        deviceScaleFactor: 2,
      });
      const page = await ctx.newPage();

      const errors = [];
      page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(`console.error: ${msg.text()}`);
      });

      const url = BASE + v.href;
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      } catch {
        try {
          await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
        } catch (e) {
          errors.push(`goto: ${e.message}`);
        }
      }
      await page.waitForTimeout(1500);

      // Verify reviews images are present
      const reviewImgCount = await page.locator('img[src*="/reviews/"]').count().catch(() => 0);

      // Verify Celsius logo is present
      const logoCount = await page.locator('img[src*="celsius-logo"]').count().catch(() => 0);

      // Capture a hero screenshot (above the fold)
      const heroShot = await page.screenshot({ fullPage: false });
      fs.writeFileSync(path.join(OUT, `${v.label}-${bp.name}-hero.png`), heroShot);

      // Capture full-page screenshot
      const fullShot = await page.screenshot({ fullPage: true });
      fs.writeFileSync(path.join(OUT, `${v.label}-${bp.name}-full.png`), fullShot);

      // Check that the GlobalVersionSwitcher is visible
      const gvsVisible = await page.locator(".gvs-trigger").first().isVisible().catch(() => false);

      summary.push({
        version: v.label,
        breakpoint: bp.name,
        url,
        reviewImgCount,
        logoCount,
        gvsVisible,
        errors: errors.slice(0, 5),
      });

      console.log(
        `${v.label} ${bp.name.padEnd(8)}: reviews=${reviewImgCount} logos=${logoCount} gvs=${gvsVisible} errors=${errors.length}`
      );
      if (errors.length > 0) {
        console.log("  first error:", errors[0]);
      }

      await ctx.close();
    }
  }

  fs.writeFileSync(
    path.join(OUT, "summary.json"),
    JSON.stringify(summary, null, 2)
  );

  await browser.close();
  console.log(`\nAll screenshots saved to ${OUT}`);
  console.log(`Summary written to ${OUT}/summary.json`);
})();
