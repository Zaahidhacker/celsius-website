"use client";

import { useEffect, useState } from "react";

/**
 * ScrollProgress — thin top-of-page progress bar that fills as the user scrolls.
 *
 * - Pure rAF + scroll listener (no motion/react dependency) → fast even on slow wifi.
 * - Uses CSS transform on a single fixed element → 60fps with zero layout thrash.
 * - Amber gradient fill matches the Celsius warm accent.
 * - z-index 1000 sits above the navbar so it's always visible.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      setProgress(pct);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 1000,
        pointerEvents: "none",
        background: "rgba(15, 47, 99, 0.06)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          transformOrigin: "left center",
          transform: `scaleX(${progress})`,
          transition: "transform 80ms linear",
          background:
            "linear-gradient(90deg, #2563c9 0%, #5790e6 35%, #f5a623 70%, #ffce7a 100%)",
          boxShadow: "0 0 8px rgba(245, 166, 35, 0.4)",
        }}
      />
    </div>
  );
}
