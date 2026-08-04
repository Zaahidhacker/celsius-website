import { chromium } from "playwright";
const BROWSER = "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome";
const URL = "http://localhost:3000/v6";

const browser = await chromium.launch({ executablePath: BROWSER, args: ["--no-sandbox"] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

// Find the orbit stage's document position
const orbitInfo = await page.evaluate(() => {
  const stage = document.querySelector(".v6-brands-orbit-stage");
  if (!stage) return null;
  const rect = stage.getBoundingClientRect();
  return {
    docTop: rect.top + window.scrollY,
    docBottom: rect.bottom + window.scrollY,
    height: rect.height,
    scrollY: window.scrollY,
    viewportH: window.innerHeight,
  };
});
console.log("Orbit stage position:", orbitInfo);

// Scroll through the orbit stage in fine-grained steps
const orbitTop = orbitInfo.docTop;
const orbitBottom = orbitInfo.docBottom;
const viewportH = orbitInfo.viewportH;

// Start scrolling from before the orbit stage enters to after it leaves
const startScroll = Math.max(0, orbitTop - viewportH - 100);
const endScroll = orbitBottom + 100;
const steps = 15;

console.log(`\nScrolling from ${startScroll} to ${endScroll} in ${steps} steps`);
for (let i = 0; i <= steps; i++) {
  const y = startScroll + ((endScroll - startScroll) * i) / steps;
  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
  await page.waitForTimeout(300);
  const data = await page.evaluate(() => {
    const orbit = document.querySelector(".v6-brands-orbit");
    return {
      progress: orbit?.dataset.progress ?? "no data",
      transform: orbit ? window.getComputedStyle(orbit).transform.substring(0, 80) : "none",
      scrollY: window.scrollY,
    };
  });
  console.log(`  step ${i}: scrollY=${data.scrollY}, progress=${data.progress}, transform=${data.transform}...`);
}

await browser.close();
