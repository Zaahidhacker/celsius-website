#!/usr/bin/env node
/**
 * Quick tablet (768px) check.
 */
import puppeteer from "puppeteer";
import { mkdirSync } from "fs";

const URL = "http://localhost:3000/v6?_cb=" + Date.now() + "tab";
const OUT = "/home/z/my-project/scripts/screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });

await page.goto(URL, { waitUntil: "domcontentloaded" });
await page.waitForFunction(
  () => {
    const el = document.querySelector(".v6-loader");
    if (!el) return true;
    const cs = window.getComputedStyle(el);
    return cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.05;
  },
  { timeout: 5000 }
);
await new Promise((r) => setTimeout(r, 1200));

await page.screenshot({ path: `${OUT}/tablet-1-hero.png` });

// Check that burger is visible at 768px (should be, since max-width: 900px)
const burgerVisible = await page.evaluate(() => {
  const b = document.querySelector(".v6-nav-burger");
  if (!b) return null;
  const cs = window.getComputedStyle(b);
  const r = b.getBoundingClientRect();
  return {
    display: cs.display,
    width: r.width,
    height: r.height,
  };
});
console.log("Tablet burger:", JSON.stringify(burgerVisible, null, 2));

// Check no horizontal overflow
const overflow = await page.evaluate(() => ({
  docWidth: document.documentElement.scrollWidth,
  bodyWidth: document.body.scrollWidth,
  winWidth: window.innerWidth,
}));
console.log("Tablet overflow check:", JSON.stringify(overflow, null, 2));

// Scroll to pricing
await page.evaluate(() => {
  const sec = document.querySelector("#pricing");
  if (sec) sec.scrollIntoView({ behavior: "instant", block: "start" });
});
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: `${OUT}/tablet-2-pricing.png` });

await browser.close();
console.log("Tablet screenshots saved");
