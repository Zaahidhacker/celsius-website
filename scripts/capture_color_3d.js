#!/usr/bin/env node
/**
 * Capture hero + services + pricing on desktop AND mobile to verify the
 * new color/3D enhancements look right.
 */
import puppeteer from "puppeteer";
import { mkdirSync } from "fs";

const URL = "http://localhost:3000/v6?_cb=" + Date.now() + "color";
const OUT = "/home/z/my-project/scripts/screenshots";
mkdirSync(OUT, { recursive: true });

async function shoot(viewport, suffix) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(URL, { waitUntil: "domcontentloaded" });

  // Wait for loader to disappear
  await page.waitForFunction(
    () => {
      const el = document.querySelector(".v6-loader");
      if (!el) return true;
      const cs = window.getComputedStyle(el);
      return cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.05;
    },
    { timeout: 5000 }
  );
  await new Promise((r) => setTimeout(r, 1200));  // hero animations

  // Hero
  await page.screenshot({ path: `${OUT}/color-${suffix}-1-hero.png` });

  // Scroll to services
  await page.evaluate(() => {
    const sec = document.querySelector("#services");
    if (sec) sec.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: `${OUT}/color-${suffix}-2-services.png` });

  // Scroll to pricing
  await page.evaluate(() => {
    const sec = document.querySelector("#pricing");
    if (sec) sec.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: `${OUT}/color-${suffix}-3-pricing.png` });

  // Scroll to CEO
  await page.evaluate(() => {
    const sec = document.querySelector("#ceo");
    if (sec) sec.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: `${OUT}/color-${suffix}-4-ceo.png` });

  await browser.close();
  console.log(`Captured ${suffix} screenshots`);
}

await shoot(
  { width: 1440, height: 900, deviceScaleFactor: 1 },
  "desktop"
);
await shoot(
  { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  "mobile"
);

console.log("All screenshots saved to", OUT);
