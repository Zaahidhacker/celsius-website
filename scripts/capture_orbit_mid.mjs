import { chromium } from "playwright";
const BROWSER = "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome";
const URL = "http://localhost:3000/v6";

const browser = await chromium.launch({ executablePath: BROWSER, args: ["--no-sandbox"] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

// Scroll to mid-progress of orbit
await page.evaluate(() => window.scrollTo({ top: 5400, behavior: "instant" }));
await page.waitForTimeout(1500);

// Take screenshot
await page.screenshot({ path: "/tmp/v6-brands-orbit-mid.png", fullPage: false });
console.log("Saved /tmp/v6-brands-orbit-mid.png");

// Also capture the manifesto 3D scene at mid-progress
const manifestoInfo = await page.evaluate(() => {
  const stage = document.querySelector(".v6-3d-stage");
  if (!stage) return null;
  const rect = stage.getBoundingClientRect();
  return {
    docTop: rect.top + window.scrollY,
    docBottom: rect.bottom + window.scrollY,
    height: rect.height,
  };
});
console.log("Manifesto 3D stage:", manifestoInfo);

// Manifesto is tall (220vh) - find its full range
const manifestoSection = await page.evaluate(() => {
  const sec = document.querySelector(".v6-manifesto");
  if (!sec) return null;
  const rect = sec.getBoundingClientRect();
  return {
    docTop: rect.top + window.scrollY,
    docBottom: rect.bottom + window.scrollY,
  };
});
console.log("Manifesto section:", manifestoSection);

// Scroll to middle of manifesto section
const midScroll = (manifestoSection.docTop + manifestoSection.docBottom) / 2 - 450;
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), midScroll);
await page.waitForTimeout(1500);
await page.screenshot({ path: "/tmp/v6-manifesto-mid.png", fullPage: false });
console.log("Saved /tmp/v6-manifesto-mid.png at scrollY=" + midScroll);

await browser.close();
