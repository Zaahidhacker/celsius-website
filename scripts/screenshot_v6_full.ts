import puppeteer from "puppeteer";

const URL = "http://localhost:3000/v6";

async function main() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // Block heavy assets to speed up load, keep CSS + fonts
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const t = req.resourceType();
    if (t === "media" || t === "font") {
      req.continue();
      return;
    }
    req.continue();
  });

  console.log("Navigating to", URL);
  await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });

  // Wait for loader to clear + first reveals to fire
  await new Promise((r) => setTimeout(r, 4000));

  // Smooth scroll to bottom in steps, capturing screenshots at each section
  const sections = [
    { name: "01_hero", selector: "#hero, .v6-hero, section:first-of-type" },
    { name: "02_manifesto", selector: "#manifesto, [id=manifesto]" },
    { name: "03_services", selector: "#services" },
    { name: "04_brands", selector: "#brands" },
    { name: "05_solutions", selector: "#solutions" },
    { name: "06_pricing", selector: "#pricing" },
    { name: "07_projects", selector: "#projects" },
    { name: "08_reviews", selector: "#reviews" },
    { name: "09_ceo", selector: "#ceo" },
    { name: "10_contact", selector: "#contact" },
    { name: "11_footer", selector: "footer, .v6-footer" },
  ];

  const fs = await import("fs");
  const outDir = "/home/z/my-project/scripts/shots";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Full page screenshot
  await page.screenshot({
    path: `${outDir}/full_page.png`,
    fullPage: true,
  });
  console.log("Saved full page screenshot");

  // Per-section screenshots
  for (const s of sections) {
    try {
      const el = await page.$(s.selector);
      if (el) {
        await el.scrollIntoView({ block: "start" });
        await new Promise((r) => setTimeout(r, 1500));
        await el.screenshot({ path: `${outDir}/${s.name}.png` });
        console.log(`Saved ${s.name}`);
      } else {
        console.log(`MISSING selector: ${s.selector}`);
      }
    } catch (e) {
      console.log(`ERROR on ${s.name}:`, (e as Error).message);
    }
  }

  // Also capture the SECTION BOUNDARIES to spot empty space between sections
  // Specifically: brands→solutions transition and solutions→pricing transition
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 800));

  // Measure section heights & gaps
  const measurements = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    return sections.map((s) => {
      const r = s.getBoundingClientRect();
      const cs = window.getComputedStyle(s);
      return {
        id: s.id || s.className,
        top: Math.round(r.top + window.scrollY),
        bottom: Math.round(r.bottom + window.scrollY),
        height: Math.round(r.height),
        padTop: cs.paddingTop,
        padBottom: cs.paddingBottom,
        bg: cs.backgroundColor,
      };
    });
  });
  console.log("\n=== SECTION MEASUREMENTS ===");
  console.log(JSON.stringify(measurements, null, 2));

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
