"use client";

import { useEffect, useState } from "react";
import CelsiusLogo from "./CelsiusLogo";

/**
 * Navy intro loader (Baseline-inspired).
 * Shows the Celsius wordmark + a filling progress bar briefly, then fades out.
 *
 * Performance considerations:
 *   - Skipped entirely if prefers-reduced-motion is set.
 *   - Skipped if the page is loaded with a hash (e.g. #contact) — direct nav.
 *   - Shorter on slow connections (detected via navigator.connection).
 *   - Uses CSS animations only (no motion/react dependency) for instant paint.
 */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Skip on direct-anchor navigation (user wants to land on content, not intro).
    if (typeof window !== "undefined" && window.location.hash) {
      setDone(true);
      return;
    }

    // Respect reduced motion — skip the loader entirely.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDone(true);
      return;
    }

    // Detect slow connection — shorten or skip the loader.
    let minVisible = 900;
    let exit = 600;
    try {
      const conn = (navigator as any).connection;
      if (conn) {
        if (conn.saveData || conn.effectiveType === "2g" || conn.effectiveType === "slow-2g") {
          // Very slow — skip entirely.
          setDone(true);
          return;
        }
        if (conn.effectiveType === "3g") {
          minVisible = 500;
          exit = 400;
        }
      }
    } catch {
      /* ignore */
    }

    const t1 = window.setTimeout(() => setExiting(true), minVisible);
    const t2 = window.setTimeout(() => setDone(true), minVisible + exit);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-[#0f2f63] text-white flex flex-col items-center justify-center gap-8 ${
        exiting ? "celsius-curtain-exit" : ""
      }`}
      style={{
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
      }}
      aria-hidden="true"
    >
      {/* Ambient mesh gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(87, 144, 230, 0.25), transparent 60%)," +
            "radial-gradient(ellipse 50% 40% at 70% 70%, rgba(245, 166, 35, 0.15), transparent 55%)",
        }}
      />

      <div className="relative" style={{ animation: "celsius-fade-in 0.5s ease-out" }}>
        <CelsiusLogo variant="light" size="lg" />
      </div>

      <div className="relative w-40 h-px rounded-full bg-white/20 overflow-hidden">
        <div className="celsius-progress-fill w-full h-full bg-white" />
      </div>

      <span
        className="relative text-[10px] uppercase tracking-[0.3em] text-white/60"
        style={{ animation: "celsius-fade-in 0.6s 0.2s ease-out backwards" }}
      >
        Experts in keeping things cool
      </span>
    </div>
  );
}
