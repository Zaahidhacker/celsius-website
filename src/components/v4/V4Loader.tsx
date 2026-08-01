"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V4 Loader — Overlay-inspired intro.
 * Big navy screen with "Celsius" sliding up, then fades out.
 */
export default function V4Loader() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      // Refresh ScrollTrigger after loader fades
      setTimeout(() => ScrollTrigger.refresh(), 700);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className={`v4-loader ${done ? "is-done" : ""}`}>
      <div className="v4-loader-text">
        <span className="v4-loader-text-inner">
          Celsius<span className="v4-loader-dot">.</span>
        </span>
      </div>
    </div>
  );
}
