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

export default function V4Stats() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v4-stats .v4-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="v4-stats">
      <div className="v4-container">
        <div className="v4-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="v4-stat">
              <span className={`v4-stat-number ${s.amber ? "v4-stat-number-amber" : ""}`}>
                {s.number}
              </span>
              <span className="v4-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
