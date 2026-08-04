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

  // Scroll through page to trigger all reveals
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const step = 300;
  for (let y = 0; y <= totalHeight + 200; y += step) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await new Promise((r) => setTimeout(r, 80));
  }

  // Inspect solutions section's children heights
  const info = await page.evaluate(() => {
    const sec = document.querySelector("#solutions");
    if (!sec) return { error: "no solutions section" };
    const cs = window.getComputedStyle(sec);
    const children = Array.from(sec.children) as HTMLElement[];
    const childInfo = children.map((c) => {
      const r = c.getBoundingClientRect();
      const ccs = window.getComputedStyle(c);
      return {
        tag: c.tagName,
        cls: c.className,
        top: Math.round(r.top + window.scrollY),
        bottom: Math.round(r.bottom + window.scrollY),
        height: Math.round(r.height),
        padTop: ccs.paddingTop,
        padBottom: ccs.paddingBottom,
        marginTop: ccs.marginTop,
        marginBottom: ccs.marginBottom,
      };
    });
    // Also inspect descendants of the inner container
    const inner = sec.querySelector(".v6-remote-inner");
    const innerChildren = inner
      ? Array.from(inner.children).map((c: HTMLElement) => {
          const r = c.getBoundingClientRect();
          return {
            tag: c.tagName,
            cls: c.className,
            top: Math.round(r.top + window.scrollY),
            bottom: Math.round(r.bottom + window.scrollY),
            height: Math.round(r.height),
          };
        })
      : null;
    return {
      secTop: Math.round(sec.getBoundingClientRect().top + window.scrollY),
      secBottom: Math.round(sec.getBoundingClientRect().bottom + window.scrollY),
      secHeight: Math.round(sec.getBoundingClientRect().height),
      padTop: cs.paddingTop,
      padBottom: cs.paddingBottom,
      childInfo,
      innerChildren,
    };
  });
  console.log(JSON.stringify(info, null, 2));

  // Also check the grid card heights
  const gridInfo = await page.evaluate(() => {
    const cards = document.querySelectorAll("#solutions .v6-remote-card");
    return Array.from(cards).map((c: HTMLElement) => {
      const r = c.getBoundingClientRect();
      return {
        height: Math.round(r.height),
        width: Math.round(r.width),
        top: Math.round(r.top + window.scrollY),
      };
    });
  });
  console.log("\n=== SOLUTIONS CARDS ===");
  console.log(JSON.stringify(gridInfo, null, 2));

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
