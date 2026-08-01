"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const brands = ["Midea", "Daikin", "Panasonic", "Haier", "Mitsubishi", "Samsung", "TCL", "Chigo", "LG"];

/**
 * V5 TrustBar — brands strip below hero (Airstead-style logos row).
 */
export default function V5TrustBar() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-trustbar-logo",
        { opacity: 0, y: 10 },
        {
          opacity: 0.7, y: 0, duration: 0.6, ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: { trigger: root.current, start: "top 85%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="v5-trustbar">
      <div className="v5-container">
        <p className="v5-trustbar-label">Authorised supplier — 9 premium brands</p>
        <div className="v5-trustbar-logos">
          {brands.map((b) => (
            <span key={b} className="v5-trustbar-logo">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
