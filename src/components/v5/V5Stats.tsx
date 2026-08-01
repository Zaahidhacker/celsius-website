"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { number: "2019", label: "Established", amber: false },
  { number: "40+", label: "Business clients", amber: true },
  { number: "9", label: "Premium brands", amber: false },
  { number: "3", label: "Sectors served", amber: true },
];

/**
 * V5 Stats — Airstead-style 4-column stats row on dark bg.
 */
export default function V5Stats() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-stat",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 85%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="v5-section v5-section-dark" style={{ padding: "4rem 0" }}>
      <div className="v5-container">
        <div className="v5-stats">
          {stats.map((s, i) => (
            <div key={i} className="v5-stat">
              <span className={`v5-stat-num ${s.amber ? "v5-stat-num-amber" : ""}`}>
                {s.number}
              </span>
              <span className="v5-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
