// Diagnose why position:fixed isn't working for the GVS.
// Checks computed style of GVS root and walks up the ancestor chain
// looking for the property that breaks fixed positioning
// (transform, filter, perspective, backdrop-filter, will-change, contain).

import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const PAGES = [
  { label: "V1", href: "/" },
  { label: "V4", href: "/v4" },
  { label: "V6", href: "/v6" },
];

(async () => {
  const browser = await chromium.launch({
    executablePath:
      "/home/z/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome",
  });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await ctx.newPage();

  for (const p of PAGES) {
    console.log(`\n=== ${p.label} (${p.href}) ===`);
    await page.goto(BASE + p.href, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);

    const report = await page.evaluate(() => {
      const el = document.querySelector(".gvs-root");
      if (!el) return { found: false };

      const computed = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const docHeight = document.documentElement.scrollHeight;

      // Walk ancestors looking for the breaking property
      const breakers = [];
      let node = el.parentElement;
      while (node && node !== document.documentElement) {
        const cs = window.getComputedStyle(node);
        const checks = {
          transform: cs.transform,
          filter: cs.filter,
          perspective: cs.perspective,
          backdropFilter: cs.backdropFilter || cs.webkitBackdropFilter,
          willChange: cs.willChange,
          contain: cs.contain,
          overflow: cs.overflow,
          overflowX: cs.overflowX,
          overflowY: cs.overflowY,
        };
        const suspicious = Object.entries(checks).filter(([k, v]) => {
          if (k === "overflow" || k === "overflowX" || k === "overflowY") {
            return v && v !== "visible";
          }
          if (k === "willChange") return v && v !== "auto";
          if (k === "contain") return v && v !== "none";
          if (k === "filter") return v && v !== "none";
          if (k === "transform") return v && v !== "none";
          if (k === "perspective") return v && v !== "none";
          if (k === "backdropFilter") return v && v !== "none";
          return false;
        });
        if (suspicious.length > 0) {
          breakers.push({
            tag: node.tagName,
            class: node.className?.toString?.() || "",
            id: node.id || "",
            suspicious: Object.fromEntries(suspicious),
          });
        }
        node = node.parentElement;
      }

      // Also check html and body
      const html = document.documentElement;
      const body = document.body;
      const htmlCS = window.getComputedStyle(html);
      const bodyCS = window.getComputedStyle(body);

      return {
        found: true,
        position: computed.position,
        top: computed.top,
        right: computed.right,
        bottom: computed.bottom,
        left: computed.left,
        zIndex: computed.zIndex,
        rect: {
          x: Math.round(rect.x),
          y: Math.round(rect.y),
          w: Math.round(rect.width),
          h: Math.round(rect.height),
        },
        viewportW: window.innerWidth,
        viewportH: window.innerHeight,
        docHeight,
        scrollY: window.scrollY,
        html: {
          transform: htmlCS.transform,
          filter: htmlCS.filter,
          overflow: htmlCS.overflow,
          overflowX: htmlCS.overflowX,
        },
        body: {
          transform: bodyCS.transform,
          filter: bodyCS.filter,
          overflow: bodyCS.overflow,
          overflowX: bodyCS.overflowX,
          overflowY: bodyCS.overflowY,
        },
        breakers,
      };
    });

    console.log(JSON.stringify(report, null, 2));
  }

  await browser.close();
})();
