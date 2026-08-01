"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V5 About — Airstead-style asymmetric masonry on dark background.
 * Mixes image tiles and content tiles in a 3-column grid.
 */
export default function V5About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-masonry-tile",
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="v5-about" ref={root} className="v5-section v5-section-dark">
      <div className="v5-container">
        <div className="v5-section-head">
          <div className="v5-section-head-row">
            <span className="v5-eyebrow-mono">/ Why Celsius</span>
            <span className="v5-section-head-meta">Est. 2019 · Colombo</span>
          </div>
          <h2 className="v5-h2" style={{ maxWidth: "44rem" }}>
            Cooling, delivered with{" "}
            <span className="v5-italic-amber">precision</span> and{" "}
            <span className="v5-fade">care.</span>
          </h2>
        </div>

        <div className="v5-masonry">
          {/* Tile 1: Image - tall */}
          <div
            className="v5-masonry-tile is-img is-tall"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1631545806609-29ea0c81e6e8?auto=format&fit=crop&w=600&q=70')",
            }}
          />

          {/* Tile 2: Content - Clear communication */}
          <div className="v5-masonry-tile">
            <svg className="v5-masonry-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
            <h3 className="v5-masonry-tile-title">Clear communication</h3>
            <p className="v5-masonry-tile-body">
              Upfront estimates, plain-English explanations, and no surprises on the invoice — ever.
            </p>
          </div>

          {/* Tile 3: Content - Long-term comfort */}
          <div className="v5-masonry-tile">
            <svg className="v5-masonry-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h3 className="v5-masonry-tile-title">Long-term comfort</h3>
            <p className="v5-masonry-tile-body">
              We plan for decades, not seasons. Maintenance-first thinking that protects your investment.
            </p>
          </div>

          {/* Tile 4: Image - wide */}
          <div
            className="v5-masonry-tile is-img is-wide"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70')",
            }}
          />

          {/* Tile 5: Content - Licensed & insured */}
          <div className="v5-masonry-tile">
            <svg className="v5-masonry-tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <h3 className="v5-masonry-tile-title">Licensed & insured</h3>
            <p className="v5-masonry-tile-body">
              Certified technicians, full liability coverage, and manufacturer-trained installs across all 9 brands.
            </p>
          </div>

          {/* Tile 6: Image */}
          <div
            className="v5-masonry-tile is-img"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=70')",
            }}
          />
        </div>
      </div>
    </section>
  );
}
