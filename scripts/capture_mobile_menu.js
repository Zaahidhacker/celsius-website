#!/usr/bin/env node
/**
 * Verify the new mobile hamburger menu opens and renders correctly.
 */
import puppeteer from "puppeteer";
import { mkdirSync } from "fs";

const URL = "http://localhost:3000/v6?_cb=" + Date.now() + "menu";
const OUT_DIR = "/home/z/my-project/scripts/screenshots";
mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

await page.goto(URL, { waitUntil: "domcontentloaded" });

// Wait for loader to disappear
await page.waitForFunction(
  () => {
    const el = document.querySelector(".v6-loader");
    if (!el) return true;
    const cs = window.getComputedStyle(el);
    return cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.05;
  },
  { timeout: 5000 }
);
await new Promise((r) => setTimeout(r, 800));

// Screenshot 1: closed state (just the bar + burger icon)
await page.screenshot({ path: `${OUT_DIR}/menu-0-closed.png` });

// Tap the hamburger
const burgerSelector = ".v6-nav .v6-nav-burger";
await page.waitForSelector(burgerSelector);
// Verify it's actually displayed (not display:none) before clicking
const burgerStyle = await page.evaluate((sel) => {
  const el = document.querySelector(sel);
  if (!el) return null;
  const cs = window.getComputedStyle(el);
  const r = el.getBoundingClientRect();
  return {
    display: cs.display,
    visibility: cs.visibility,
    width: r.width,
    height: r.height,
    inViewport: r.top >= 0 && r.left >= 0 && r.bottom <= window.innerHeight && r.right <= window.innerWidth,
  };
}, burgerSelector);
console.log("Burger style:", JSON.stringify(burgerStyle, null, 2));
await page.click(burgerSelector);

// Wait for drawer animation (translateX 100% -> 0 over 500ms + stagger 80+i*50)
await new Promise((r) => setTimeout(r, 900));

// Screenshot 2: drawer open
await page.screenshot({ path: `${OUT_DIR}/menu-1-open.png` });

// Verify drawer panel is in viewport
const drawerGeo = await page.evaluate(() => {
  const panel = document.querySelector(".v6-mobile-menu-panel");
  const links = document.querySelectorAll(".v6-mobile-menu-link");
  if (!panel) return null;
  const r = panel.getBoundingClientRect();
  return {
    panelLeft: r.left,
    panelRight: r.right,
    panelWidth: r.width,
    visibleLinks: links.length,
    bodyOverflow: document.body.style.overflow,
    ariaExpanded: document.querySelector(".v6-nav-burger")?.getAttribute("aria-expanded"),
  };
});
console.log("Drawer geometry:", JSON.stringify(drawerGeo, null, 2));

// Screenshot 3: scroll down inside drawer to see all 8 links
const linksList = await page.$(".v6-mobile-menu-links");
if (linksList) {
  await linksList.evaluate((el) => el.scrollTo({ top: 200, behavior: "instant" }));
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: `${OUT_DIR}/menu-2-scrolled.png` });
}

// Click a nav link (Services) — should close drawer and scroll to #services
await page.evaluate(() => {
  const link = document.querySelector('.v6-mobile-menu-link[href="#services"]');
  if (link) link.click();
});
await new Promise((r) => setTimeout(r, 1200));

// Screenshot 4: after click — should show services section, drawer closed
await page.screenshot({ path: `${OUT_DIR}/menu-3-after-click.png` });

const afterClick = await page.evaluate(() => {
  const drawer = document.querySelector(".v6-mobile-menu");
  const services = document.querySelector("#services");
  const nav = document.querySelector(".v6-nav");
  if (!drawer || !services || !nav) return null;
  return {
    drawerOpen: drawer.classList.contains("is-open"),
    drawerVisibility: window.getComputedStyle(drawer).visibility,
    bodyOverflow: document.body.style.overflow,
    servicesTop: services.getBoundingClientRect().top,
    navbarBottom: nav.getBoundingClientRect().bottom,
    gap: services.getBoundingClientRect().top - nav.getBoundingClientRect().bottom,
  };
});
console.log("After-click state:", JSON.stringify(afterClick, null, 2));

await browser.close();
console.log("Screenshots saved to", OUT_DIR);
