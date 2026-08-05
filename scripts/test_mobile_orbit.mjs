import { chromium } from "playwright";
const BROWSER = "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome";
const URL = "http://localhost:3000/v6";

const browser = await chromium.launch({ executablePath: BROWSER, args: ["--no-sandbox"] });
const errors = [];
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });

await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

// Test mobile screenshots at key sections
const sections = ["#services", "#brands", "#pricing", "#reviews", "#contact"];
for (const sel of sections) {
  await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, sel);
  await page.waitForTimeout(800);
  const name = sel.replace("#", "");
  await page.screenshot({ path: `/tmp/v6-mobile-${name}.png` });
  console.log(`Saved mobile screenshot: ${name}`);
}

console.log("\nErrors:", errors.length === 0 ? "✓ none" : errors);
await browser.close();
