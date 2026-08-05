// Diagnose why the stats counter IO isn't firing
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

  page.on("console", (msg) => {
    const text = msg.text();
    if (text.includes("V6StatsCounter") || text.includes("V6Reveal")) {
      console.log(`[PAGE ${msg.type()}]`, text);
    }
  });

  console.log("Loading:", URL);
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2500); // wait for loader to fade

  // Find the stats counter position
  const statsInfo = await page.evaluate(() => {
    const el = document.querySelector(".v6-stats-row");
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height,
      windowScrollY: window.scrollY,
      viewportH: window.innerHeight,
      offsetTop: el.offsetTop,
      computedStyle: {
        opacity: window.getComputedStyle(el).opacity,
        visibility: window.getComputedStyle(el).visibility,
        display: window.getComputedStyle(el).display,
        transform: window.getComputedStyle(el).transform,
      },
    };
  });
  console.log("\n=== STATS COUNTER INFO (initial) ===");
  console.log(JSON.stringify(statsInfo, null, 2));

  // Scroll to the manifesto stats area
  console.log("\n=== SCROLLING TO MANIFESTO ===");
  await page.evaluate(() => {
    const el = document.querySelector(".v6-stats-row");
    if (el) el.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await page.waitForTimeout(1500);

  // Re-check stats counter
  const statsInfo2 = await page.evaluate(() => {
    const el = document.querySelector(".v6-stats-row");
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      height: rect.height,
      windowScrollY: window.scrollY,
      viewportH: window.innerHeight,
      isVisible:
        rect.top < window.innerHeight && rect.bottom > 0,
      computedStyle: {
        opacity: window.getComputedStyle(el).opacity,
        visibility: window.getComputedStyle(el).visibility,
        display: window.getComputedStyle(el).display,
      },
      countValues: Array.from(
        document.querySelectorAll("[data-countup]")
      ).map((el) => ({
        final: el.dataset.final,
        current: el.textContent,
      })),
    };
  });
  console.log("\n=== STATS COUNTER INFO (after scrollIntoView) ===");
  console.log(JSON.stringify(statsInfo2, null, 2));

  // Wait 3 more seconds to give IO time to fire
  await page.waitForTimeout(3000);

  const statsInfo3 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("[data-countup]")).map((el) => ({
      final: el.dataset.final,
      current: el.textContent,
    }));
  });
  console.log("\n=== STATS COUNTER (after 3s wait) ===");
  console.log(JSON.stringify(statsInfo3, null, 2));

  await browser.close();
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
