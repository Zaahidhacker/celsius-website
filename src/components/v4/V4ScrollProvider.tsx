"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V4 Smooth Scroll + GSAP ScrollTrigger setup.
 * Inspired by overlay.com's stack: Lenis + GSAP/ScrollTrigger.
 */
export default function V4ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after fonts load
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener("load", refresh);
    const refreshTimer = setTimeout(refresh, 1000);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.removeEventListener("load", refresh);
      clearTimeout(refreshTimer);
    };
  }, []);

  return <>{children}</>;
}
