"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V5 CTA Banner — Airstead-style centered CTA with amber radial glow.
 */
export default function V5CtaBanner() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-cta-banner-inner > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 80%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="v5-cta-banner">
      <div className="v5-container">
        <div className="v5-cta-banner-inner">
          <span className="v5-eyebrow-mono">/ Ready when you are</span>
          <h2 className="v5-cta-banner-title">
            Let&apos;s engineer your{" "}
            <span className="v5-italic-amber">cooling</span>.
          </h2>
          <p className="v5-cta-banner-sub">
            From a single split unit to a full VRF install — tell us about your space.
            We&apos;ll send a specialist within 48 hours.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#v5-contact" className="v5-btn v5-btn-primary">
              <span className="v5-btn-square" />
              Talk to our team
            </a>
            <a href="tel:+94777136560" className="v5-btn v5-btn-secondary">
              +94 777 136 560
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
