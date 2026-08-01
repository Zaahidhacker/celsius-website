"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const brands = [
  { name: "Midea", tag: "Energy Efficient" },
  { name: "Daikin", tag: "Quiet Comfort" },
  { name: "Panasonic", tag: "nanoe™ X" },
  { name: "Haier", tag: "Smart Convenience" },
  { name: "Mitsubishi", tag: "Hyper-Heating" },
  { name: "Samsung", tag: "Smart Filtration" },
  { name: "TCL", tag: "Simple & Portable" },
  { name: "Chigo", tag: "Turbo & Self-Clean" },
  { name: "LG", tag: "Dual Inverter" },
];

export default function V4Brands() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v4-brands-head > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.1,
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
    <section id="v4-brands" ref={root} className="v4-section">
      <div className="v4-container v4-brands-head">
        <div className="v4-section-head-row" style={{ marginBottom: "2rem" }}>
          <span className="v4-eyebrow">Authorised supplier</span>
          <span className="v4-eyebrow">9 brands</span>
        </div>
        <h2 className="v4-h2" style={{ maxWidth: "44rem" }}>
          The brands Sri Lanka trusts, supplied and serviced by us.
        </h2>
      </div>

      {/* Marquee 1 — brand names */}
      <div className="v4-marquee" style={{ marginTop: "4rem" }}>
        <div className="v4-marquee-inner">
          {brands.concat(brands).map((b, i) => (
            <span key={i} className="v4-marquee-item">
              {b.name}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee 2 — amber tags */}
      <div className="v4-marquee v4-marquee-amber">
        <div className="v4-marquee-inner" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
          {brands.concat(brands).map((b, i) => (
            <span key={i} className="v4-marquee-item">
              {b.tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
