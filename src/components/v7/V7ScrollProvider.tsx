"use client";

import { useEffect } from "react";

/**
 * V7 ScrollProvider — lightweight IntersectionObserver reveal.
 * No Lenis / no GSAP — keeps the brutalist page lean and avoids
 * the `position: fixed` breaking transform issue we hit on V4.
 */
export default function V7ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".v7-reveal");
    if (!els.length) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.05 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return <>{children}</>;
}
