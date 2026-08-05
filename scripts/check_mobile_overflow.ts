import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Test on iPhone 14 Pro size
  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });

  await page.goto("http://localhost:3000/v6", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await new Promise((r) => setTimeout(r, 4000));

  // Scroll through to trigger all reveals
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log("Mobile total height:", totalHeight);
  for (let y = 0; y <= totalHeight + 200; y += 250) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await new Promise((r) => setTimeout(r, 60));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));

  // Measure horizontal overflow
  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const bodyWidth = document.body.scrollWidth;
    const winWidth = window.innerWidth;
    return {
      docWidth,
      bodyWidth,
      winWidth,
      scrollWidth: document.documentElement.scrollWidth,
      overflow: bodyWidth - winWidth,
    };
  });
  console.log("\n=== MOBILE WIDTH MEASUREMENTS ===");
  console.log(JSON.stringify(overflow, null, 2));

  // Find any element wider than viewport
  const wideElements = await page.evaluate(() => {
    const vw = window.innerWidth;
    const offenders: Array<{
      tag: string;
      id: string;
      cls: string;
      width: number;
      left: number;
      right: number;
      overflowX: string;
    }> = [];
    document.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > vw + 5 || r.right > vw + 5 || r.left < -5) {
        // Skip elements that have overflow:hidden / overflow-x:hidden as those
        // are intentionally clipping their children (e.g. marquee strips).
        offenders.push({
          tag: el.tagName,
          id: el.id || "",
          cls: (el.className || "").toString().slice(0, 80),
          width: Math.round(r.width),
          left: Math.round(r.left),
          right: Math.round(r.right),
          overflowX: window.getComputedStyle(el).overflowX,
        });
      }
    });
    // Filter to top-level offenders (those whose overflow is NOT hidden,
    // i.e. they actually push the page wider instead of being contained).
    const realOffenders = offenders.filter(
      (o) => o.overflowX !== "hidden" && o.overflowX !== "clip"
    );
    // Sort by width descending so the biggest offenders come first
    realOffenders.sort((a, b) => b.width - a.width);
    // For each top offender, capture parent context to find what's containing it
    const top = realOffenders.slice(0, 5);
    const detailed = top.map((o) => {
      // Re-find the element by walking the DOM and matching tag+cls+left
      let parent: Element | null = null;
      let parentCls = "";
      let parentTag = "";
      let grandparentCls = "";
      let grandparentTag = "";
      // Just walk offenders by re-querying for elements matching tag/cls
      const matches = document.querySelectorAll(o.tag.toLowerCase());
      for (let i = 0; i < matches.length; i++) {
        const el = matches[i];
        const c = (el.className || "").toString();
        if (c.slice(0, 80) === o.cls) {
          const r = el.getBoundingClientRect();
          if (Math.abs(r.width - o.width) < 5) {
            parent = el.parentElement;
            if (parent) {
              parentCls = (parent.className || "").toString().slice(0, 80);
              parentTag = parent.tagName;
              const gp = parent.parentElement;
              if (gp) {
                grandparentCls = (gp.className || "").toString().slice(0, 80);
                grandparentTag = gp.tagName;
              }
            }
            break;
          }
        }
      }
      return { ...o, parentTag, parentCls, grandparentTag, grandparentCls };
    });
    return detailed;
  });
  console.log("\n=== ELEMENTS WIDER THAN VIEWPORT (first 30) ===");
  console.log(JSON.stringify(wideElements, null, 2));

  await page.screenshot({
    path: "/home/z/my-project/scripts/shots/mobile_full.png",
    fullPage: true,
  });

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
