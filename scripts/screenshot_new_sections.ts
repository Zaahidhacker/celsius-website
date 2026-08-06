import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000/v6", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await new Promise((r) => setTimeout(r, 4000));

  // Scroll through page to trigger reveals
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= totalHeight + 200; y += 250) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await new Promise((r) => setTimeout(r, 80));
  }

  const sections = [
    { name: "selection-guide", selector: "#selection-guide" },
    { name: "clients-marquee", selector: "section[style*='var(--v6-navy)']" },
  ];

  for (const s of sections) {
    const el = await page.$(s.selector);
    if (el) {
      await el.scrollIntoView({ block: "start" });
      await new Promise((r) => setTimeout(r, 1500));
      await el.screenshot({ path: `/home/z/my-project/scripts/shots2/${s.name}.png` });
      console.log(`Saved ${s.name}`);
    } else {
      console.log(`MISSING: ${s.selector}`);
    }
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
