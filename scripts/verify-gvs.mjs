// Verify GlobalVersionSwitcher renders visibly on all 6 version pages.
// Captures a screenshot of the bottom-right corner on each version.

import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const OUT = "/home/z/my-project/download/gvs-check";
fs.mkdirSync(OUT, { recursive: true });

const BASE = "http://localhost:3000";
const VERSIONS = [
  { label: "V1", href: "/" },
  { label: "V2", href: "/v2" },
  { label: "V3", href: "/v3" },
  { label: "V4", href: "/v4" },
  { label: "V5", href: "/v5" },
  { label: "V6", href: "/v6" },
];

(async () => {
  const browser = await chromium.launch({
    executablePath:
      "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome",
  });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  for (const v of VERSIONS) {
    const url = BASE + v.href;
    console.log(`\n→ ${v.label}  ${url}`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    } catch (e) {
      console.log("  (networkidle timeout, continuing)");
    }
    await page.waitForTimeout(1200);

    // 1. Check the GVS element exists & is visible
    const trigger = page.locator(".gvs-trigger").first();
    const visible = await trigger.isVisible().catch(() => false);
    const box = await trigger.boundingBox().catch(() => null);
    console.log(
      `  trigger visible: ${visible}` +
        (box ? `  box=${JSON.stringify({ x: Math.round(box.x), y: Math.round(box.y), w: Math.round(box.width), h: Math.round(box.height) })}` : "")
    );

    // 2. Screenshot the bottom-right corner
    const corner = await page.screenshot({
      clip: { x: 1080, y: 700, width: 360, height: 200 },
    });
    fs.writeFileSync(path.join(OUT, `${v.label}-corner.png`), corner);
    console.log(`  saved ${v.label}-corner.png`);

    // 3. Hover to expand, screenshot panel
    await trigger.hover();
    await page.waitForTimeout(450);
    const panel = page.locator(".gvs-panel").first();
    const panelVisible = await panel.isVisible().catch(() => false);
    console.log(`  panel visible after hover: ${panelVisible}`);
    const panelShot = await page.screenshot({
      clip: { x: 980, y: 380, width: 460, height: 520 },
    });
    fs.writeFileSync(path.join(OUT, `${v.label}-panel.png`), panelShot);
    console.log(`  saved ${v.label}-panel.png`);

    // move mouse away to collapse
    await page.mouse.move(20, 20);
    await page.waitForTimeout(300);
  }

  await browser.close();
  console.log(`\nAll screenshots saved to ${OUT}`);
})();
