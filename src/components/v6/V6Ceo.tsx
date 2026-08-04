"use client";

/**
 * V6 CEO — Inspired by shopify.design's editorial pull-quote section.
 *
 * Updates (animejs):
 * - Headline + quote reveal with V6Reveal
 * - Whole blockquote has a 3D tilt that responds to scroll progress
 */

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import { ceo } from "@/lib/content";
import V6Reveal from "./V6Reveal";

export default function V6Ceo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const quoteRef = useRef<HTMLQuoteElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const quote = quoteRef.current;
    if (!section || !quote) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // Subtle 3D rotation on the quote — scrubbed by scroll
    const anim = animate(quote, {
      rotateX: [4, -4, 4],
      rotateY: [-2, 2, -2],
      duration: 1000,
      ease: "linear",
      autoplay: false,
    });

    const obs = onScroll({
      target: section,
      enter: "bottom top",
      leave: "top bottom",
      sync: 60,
      onUpdate: (o) => {
        const p = Math.max(0, Math.min(1, o.progress));
        anim.seek(p * anim.duration);
      },
    });

    return () => {
      obs.revoke?.();
      anim.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="v6-section"
      id="ceo"
      style={{ background: "var(--v6-clay)", color: "var(--v6-white)" }}
      data-reveal
    >
      <div className="v6-container" style={{ maxWidth: "1100px", perspective: "1200px" }}>
        <V6Reveal y={50} rotate={6}>
          <div className="v6-row" style={{ marginBottom: "32px" }}>
            <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
              {ceo.eyebrow}
            </span>
            <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              {ceo.role}
            </span>
          </div>
        </V6Reveal>

        <blockquote
          ref={quoteRef}
          style={{
            margin: 0,
            fontFamily: "var(--v6-serif)",
            fontSize: "clamp(32px, 4.4vw, 72px)",
            fontWeight: 500,
            lineHeight: 1.32,
            letterSpacing: "-0.02em",
            color: "var(--v6-white)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <span style={{ color: "var(--v6-amber)", fontStyle: "italic" }}>&ldquo;</span>
          {ceo.quote}
          <span style={{ color: "var(--v6-amber)", fontStyle: "italic" }}>&rdquo;</span>
        </blockquote>

        <div
          style={{
            marginTop: "clamp(40px, 6vw, 80px)",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--v6-serif)",
                fontSize: "28px",
                fontWeight: 500,
                margin: 0,
                color: "var(--v6-white)",
              }}
            >
              {ceo.name}
            </p>
            <p
              className="v6-eyebrow"
              style={{ marginTop: "6px", color: "rgba(255,255,255,0.7)" }}
            >
              {ceo.role}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--v6-sans)",
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              maxWidth: "480px",
            }}
          >
            {ceo.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
