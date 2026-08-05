// Specifically test the brands orbit ring
import { chromium } from "playwright";

const BROWSER = "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome";
const URL = "http://localhost:3000/v6";

async function main() {
  const browser = await chromium.launch({
    executablePath: BROWSER,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await ctx.newPage();

  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2500); // loader

  // Scroll to brands orbit stage specifically
  await page.evaluate(() => {
    const el = document.querySelector(".v6-brands-orbit-stage");
    if (el) el.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await page.waitForTimeout(2000);

  // Check orbit state
  const orbitInfo = await page.evaluate(() => {
    const orbit = document.querySelector(".v6-brands-orbit");
    const stage = document.querySelector(".v6-brands-orbit-stage");
    const items = document.querySelectorAll(".v6-brand-orbit-item");
    if (!orbit || !stage) return { error: "orbit not found" };
    return {
      orbitTransform: window.getComputedStyle(orbit).transform,
      orbitSize: {
        w: orbit.clientWidth,
        h: orbit.clientHeight,
      },
      stageSize: {
        w: stage.clientWidth,
        h: stage.clientHeight,
      },
      itemCount: items.length,
      firstItemText: items[0]?.textContent,
      firstItemTransform: items[0]
        ? window.getComputedStyle(items[0]).transform
        : null,
      firstItemRect: items[0]
        ? items[0].getBoundingClientRect()
        : null,
    };
  });
  console.log("=== ORBIT INFO ===");
  console.log(JSON.stringify(orbitInfo, null, 2));

  // Take screenshot of just the orbit
  await page.screenshot({ path: "/tmp/v6-brands-orbit.png", fullPage: false });

  // Now scroll through the brands section to trigger orbit rotation
  console.log("\n=== SCROLLING THROUGH BRANDS SECTION ===");
  const brandsSection = await page.$("#brands");
  const box = await brandsSection.boundingBox();
  console.log("Brands section box:", box);

  // Scroll from top of brands to bottom in steps
  const startScroll = await page.evaluate(() => window.scrollY);
  for (let i = 0; i <= 10; i++) {
    const targetY = (box.y + (box.height * i) / 10) - 400;
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), Math.max(0, targetY));
    await page.waitForTimeout(300);
    const orbitTransform = await page.evaluate(() => {
      const o = document.querySelector(".v6-brands-orbit");
      return o ? window.getComputedStyle(o).transform : "none";
    });
    console.log(`  step ${i}: scrollY=${await page.evaluate(() => window.scrollY)}, orbit=${orbitTransform.substring(0, 60)}...`);
  }

  // Final screenshot mid-scroll
  await page.evaluate(() => {
    const el = document.querySelector(".v6-brands-orbit-stage");
    if (el) el.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "/tmp/v6-brands-orbit-mid.png", fullPage: false });

  await browser.close();
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
