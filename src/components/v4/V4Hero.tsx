"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V4 Hero — Overlay-inspired.
 * - Massive editorial-serif H1 with word-by-word reveal (translateY 110% -> 0)
 * - Inline meta column (top-right): "Colombo / Since 2019 / 9 brands"
 * - Parallax background grid
 * - Bottom row: lede + CTAs
 */
export default function V4Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word reveal
      gsap.fromTo(
        ".v4-hero-title .v4-word-inner",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.08,
          delay: 1.6, // wait for loader
        }
      );

      gsap.fromTo(
        ".v4-hero-meta, .v4-hero-lede, .v4-hero-cta-row",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 2.4,
        }
      );

      // Parallax background grid (subtle)
      gsap.to(".v4-hero-grid", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Hero content parallax (fade + slight rise as you scroll past)
      gsap.to(".v4-hero-content", {
        yPercent: -8,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="v4-hero">
      <div className="v4-hero-bg" />
      <div className="v4-hero-grid" />

      <div className="v4-container v4-hero-content">
        {/* Top meta row */}
        <div className="v4-hero-top">
          <div className="v4-hero-meta">
            <div className="v4-hero-meta-row">
              <span className="v4-hero-meta-label">Studio:</span>
              <span className="v4-hero-meta-value">Colombo, LK</span>
            </div>
            <div className="v4-hero-meta-row">
              <span className="v4-hero-meta-label">Established:</span>
              <span className="v4-hero-meta-value">2019</span>
            </div>
            <div className="v4-hero-meta-row">
              <span className="v4-hero-meta-label">Brands:</span>
              <span className="v4-hero-meta-value">9 premium</span>
            </div>
          </div>
          <div className="v4-hero-meta" style={{ alignItems: "flex-end" }}>
            <div className="v4-hero-meta-row">
              <span className="v4-hero-meta-label">Sectors:</span>
              <span className="v4-hero-meta-value">Domestic / Commercial / Industrial</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="v4-hero-title">
          <span className="v4-word">
            <span className="v4-word-inner">Precision</span>
          </span>{" "}
          <span className="v4-word">
            <span className="v4-word-inner">cooling,</span>
          </span>
          <br />
          <span className="v4-word">
            <span className="v4-word-inner v4-italic">engineered.</span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="v4-hero-bottom">
          <p className="v4-hero-lede">
            AC supply, install &amp; service for domestic, commercial, and industrial spaces —
            delivered with the precision of a studio.
          </p>
          <div className="v4-hero-cta-row">
            <a href="#v4-contact" className="v4-btn v4-btn-amber">
              Book a demo →
            </a>
            <a href="#v4-services" className="v4-btn v4-btn-ghost">
              See what we do
            </a>
          </div>
        </div>
      </div>

      <div className="v4-hero-scroll-hint">
        <span>Scroll</span>
        <span className="v4-hero-scroll-line" />
      </div>
    </section>
  );
}
