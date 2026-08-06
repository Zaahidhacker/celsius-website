#!/usr/bin/env node
/**
 * Verify loader + nav on mobile viewport (390px wide).
 */
import puppeteer from "puppeteer";
import { mkdirSync } from "fs";

const URL = "http://localhost:3000/v6?_cb=" + Date.now() + "m";
const OUT_DIR = "/home/z/my-project/scripts/screenshots";
mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

await page.goto(URL, { waitUntil: "domcontentloaded" });
await page.waitForSelector(".v6-loader-logo", { visible: true, timeout: 3000 });
await new Promise((r) => setTimeout(r, 700));
await page.screenshot({ path: `${OUT_DIR}/loader-mobile-700ms.png` });

// Wait for loader to hide
await page.waitForFunction(
  () => {
    const el = document.querySelector(".v6-loader");
    if (!el) return true;
    const cs = window.getComputedStyle(el);
    return cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.05;
  },
  { timeout: 5000 }
);
await new Promise((r) => setTimeout(r, 800));
await page.screenshot({ path: `${OUT_DIR}/nav-mobile-after-loader.png` });

// Check that the navbar isn't overflowing horizontally
const overflow = await page.evaluate(() => {
  const nav = document.querySelector(".v6-nav");
  if (!nav) return null;
  const rect = nav.getBoundingClientRect();
  return {
    navWidth: rect.width,
    viewportWidth: window.innerWidth,
    rightEdge: rect.right,
    overflowsViewport: rect.right > window.innerWidth,
  };
});
console.log("Mobile nav geometry:", JSON.stringify(overflow, null, 2));

await browser.close();
console.log("Mobile screenshots saved to", OUT_DIR);
