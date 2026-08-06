import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
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
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= totalHeight + 200; y += 250) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await new Promise((r) => setTimeout(r, 60));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));
  const overflow = await page.evaluate(() => ({
    bodyWidth: document.body.scrollWidth,
    winWidth: window.innerWidth,
    overflow: document.body.scrollWidth - window.innerWidth,
  }));
  console.log("Mobile overflow check:", JSON.stringify(overflow));
  console.log("Total height:", totalHeight);
  await page.screenshot({
    path: "scripts/shots/mobile_full_v2.png",
    fullPage: true,
  });
  console.log("Saved mobile_full_v2.png");
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
