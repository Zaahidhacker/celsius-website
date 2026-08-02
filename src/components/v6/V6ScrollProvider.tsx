"use client";

import { useEffect } from "react";

/**
 * V6 ScrollProvider — Inspired by shopify.design's depth-parallax motion.
 * Uses native IntersectionObserver for reveals (no heavy GSAP needed for this style).
 * Also adds a "scrolled" class to the navbar on scroll.
 */
export default function V6ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // === Reveal on scroll ===
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]");
    if (revealEls.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    revealEls.forEach((el) => io.observe(el));

    // === Navbar scrolled state ===
    const nav = document.querySelector<HTMLElement>(".v6-nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 20) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // === Depth parallax — light-touch translateY on [data-depth] ===
    const depthEls = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const onMove = () => {
      const vh = window.innerHeight;
      depthEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const depth = parseFloat(el.dataset.depth || "0");
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..1
        const offset = -progress * depth * 0.4;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };
    window.addEventListener("scroll", onMove, { passive: true });
    onMove();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onMove);
    };
  }, []);

  return <>{children}</>;
}
