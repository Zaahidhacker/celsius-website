import puppeteer from "puppeteer";

const URL = "http://localhost:3000/v6";

async function main() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  console.log("Navigating to", URL);
  await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });

  // Wait for loader
  await new Promise((r) => setTimeout(r, 3500));

  // Slowly scroll through entire page so every IntersectionObserver fires
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log("Total page height:", totalHeight);
  const step = 300;
  for (let y = 0; y <= totalHeight + 200; y += step) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await new Promise((r) => setTimeout(r, 120));
  }
  // Scroll back to top to be safe for sections above
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));

  const fs = await import("fs");
  const outDir = "/home/z/my-project/scripts/shots2";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const sections = [
    { name: "04_brands", selector: "#brands" },
    { name: "05_solutions", selector: "#solutions" },
    { name: "06_pricing", selector: "#pricing" },
    { name: "07_projects", selector: "#projects" },
    { name: "08_reviews", selector: "#reviews" },
  ];

  for (const s of sections) {
    const el = await page.$(s.selector);
    if (el) {
      // Scroll the element into view first, then back to top so reveals fire
      await el.scrollIntoView({ block: "start" });
      await new Promise((r) => setTimeout(r, 1800));
      await el.screenshot({ path: `${outDir}/${s.name}.png` });
      console.log(`Saved ${s.name}`);
    }
  }

  // Also capture section-to-section transitions (top of next section to bottom of prev)
  // Capture brands→solutions transition
  const transitions = [
    { name: "transition_brands_to_solutions", from: "#brands", to: "#solutions" },
    { name: "transition_solutions_to_pricing", from: "#solutions", to: "#pricing" },
  ];
  for (const t of transitions) {
    const fromEl = await page.$(t.from);
    const toEl = await page.$(t.to);
    if (fromEl && toEl) {
      const fromBox = await fromEl.boundingBox();
      const toBox = await toEl.boundingBox();
      if (fromBox && toBox) {
        // Capture the last 200px of `from` + first 600px of `to`
        const y = fromBox.y + fromBox.height - 200;
        await page.screenshot({
          path: `${outDir}/${t.name}.png`,
          clip: { x: 0, y, width: 1440, height: 800 },
        });
        console.log(`Saved ${t.name} at y=${y}`);
      }
    }
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
