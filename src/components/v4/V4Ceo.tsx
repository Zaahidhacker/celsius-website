"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function V4Ceo() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v4-ceo-quote",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="v4-ceo">
      <div className="v4-container">
        <div className="v4-ceo-inner">
          <div>
            <span className="v4-eyebrow" style={{ marginBottom: "2rem", display: "inline-flex" }}>
              From the founder
            </span>
            <blockquote className="v4-ceo-quote">
              We didn't build Celsius to sell air conditioners. We built it to give Sri Lankan
              homes and businesses the <span style={{ fontStyle: "italic", color: "var(--v4-amber-deep)" }}>comfort they deserve</span> —
              engineered with precision, delivered with integrity.
            </blockquote>
            <div className="v4-ceo-author">
              <div className="v4-ceo-avatar">I</div>
              <div className="v4-ceo-author-info">
                <span className="v4-ceo-author-name">Ijaz Niyaz</span>
                <span className="v4-ceo-author-role">Founder & CEO, Celsius</span>
              </div>
            </div>
          </div>
          <div>
            <p className="v4-body" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              A HVAC specialist with over a decade in the field, Ijaz founded Celsius in 2019 to
              raise the bar for cooling standards across Sri Lanka. The studio operates from
              Kalubowila, serving clients across the island.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
