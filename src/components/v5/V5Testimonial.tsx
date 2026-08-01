"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V5 Testimonial — Airstead-style testimonial block on dark bg.
 * Split: quote left, image right.
 */
export default function V5Testimonial() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-testimonial > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "expo.out",
          stagger: 0.15,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="v5-testimonial" ref={root} className="v5-section v5-section-dark">
      <div className="v5-container">
        <div className="v5-testimonial">
          <div>
            <span className="v5-eyebrow-mono" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>
              / Testimonial
            </span>
            <blockquote className="v5-testimonial-quote">
              Their prompt service, transparent pricing, and follow-through were
              exactly what our hotel needed. Three years on, every unit still runs
              like the day it was installed.
            </blockquote>
            <div className="v5-testimonial-author">
              <div className="v5-testimonial-avatar">M</div>
              <div className="v5-testimonial-author-info">
                <span className="v5-testimonial-author-name">Max Hunter</span>
                <span className="v5-testimonial-author-role">Operations Manager · boutique hotel, Colombo 03</span>
              </div>
            </div>
          </div>
          <div
            className="v5-testimonial-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=70')",
            }}
          />
        </div>
      </div>
    </section>
  );
}
