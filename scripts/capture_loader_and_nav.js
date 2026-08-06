#!/usr/bin/env node
/**
 * Capture the V6 loader overlay at the very start of page load.
 * We hit a fresh URL with a cache-busting query so the loader
 * animation always plays from the beginning.
 */
import puppeteer from "puppeteer";

const URL = "http://localhost:3000/v6?_cb=" + Date.now();
const OUT_DIR = "/home/z/my-project/scripts/screenshots";
import { mkdirSync } from "fs";
mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

// Navigate but DON'T wait for networkidle — we want to catch the loader.
await page.goto(URL, { waitUntil: "domcontentloaded" });

// Snap immediately (loader should be visible).
await page.waitForSelector(".v6-loader-logo", { visible: true, timeout: 3000 });
await new Promise((r) => setTimeout(r, 200));
await page.screenshot({ path: `${OUT_DIR}/loader-0-immediate.png` });

// Snap again at ~700ms — entrance animation should be in flight.
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: `${OUT_DIR}/loader-1-700ms.png` });

// Wait until loader is hidden, then capture the actual page.
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
await page.screenshot({ path: `${OUT_DIR}/loader-2-after.png` });

// Now click a nav link and screenshot to verify the navbar isn't covering
// the section heading. Click "Services".
await page.evaluate(() => {
  const link = Array.from(document.querySelectorAll('.v6-nav-links a')).find(
    (a) => a.textContent.trim().toLowerCase() === "services"
  );
  if (link) link.click();
});
await new Promise((r) => setTimeout(r, 1200));  // smooth scroll
await page.screenshot({ path: `${OUT_DIR}/nav-services-jump.png` });

// Read out where the #services section starts relative to viewport.
const rect = await page.evaluate(() => {
  const sec = document.querySelector("#services");
  const nav = document.querySelector(".v6-nav");
  if (!sec || !nav) return null;
  const s = sec.getBoundingClientRect();
  const n = nav.getBoundingClientRect();
  return {
    sectionTop: s.top,
    sectionHeadingTop: s.top,  // first child is usually the heading area
    navbarBottom: n.bottom,
    gap: s.top - n.bottom,
    navbarHeight: n.height,
  };
});
console.log("Geometry after #services jump:", JSON.stringify(rect, null, 2));

await browser.close();
console.log("Screenshots saved to", OUT_DIR);
