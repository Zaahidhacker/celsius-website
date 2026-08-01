"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V5 Hero — Airstead-inspired split layout.
 * - Full-bleed background image on right (55%)
 * - Dark gradient overlay (bg-dark on left → transparent on right)
 * - Trust pills above headline
 * - Massive H1 with "fade-out" last word
 * - Dual CTAs: amber primary + dark translucent secondary
 * - Scroll hint at bottom
 */
export default function V5Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal trust pills + title + sub + CTAs in sequence
      gsap.fromTo(
        ".v5-hero-trust .v5-trust-pill",
        { opacity: 0, y: 12 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          stagger: 0.08, delay: 0.3,
        }
      );

      gsap.fromTo(
        ".v5-hero-title",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out", delay: 0.5 }
      );

      gsap.fromTo(
        ".v5-hero-sub, .v5-hero-cta-row",
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          stagger: 0.12, delay: 0.8,
        }
      );

      // Parallax on bg image (subtle)
      gsap.to(".v5-hero-bg-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade content out as you scroll
      gsap.to(".v5-hero-content", {
        yPercent: -10,
        opacity: 0.3,
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
    <section id="top" ref={root} className="v5-hero">
      <div
        className="v5-hero-bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80')",
        }}
      />
      <div className="v5-hero-bg-overlay" />

      <div className="v5-container">
        <div className="v5-hero-content">
          {/* Trust badges (Airstead signature) */}
          <div className="v5-hero-trust">
            <span className="v5-trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              Licensed technicians
            </span>
            <span className="v5-trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Upfront estimates
            </span>
            <span className="v5-trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              24/7 emergency support
            </span>
          </div>

          {/* Hero title — Airstead signature "fade-out" last word */}
          <h1 className="v5-hero-title">
            Year-round cooling <br />
            <span className="v5-fade">engineered for Sri Lanka.</span>
          </h1>

          <p className="v5-hero-sub">
            Premium AC supply, installation, and service — for homes, businesses,
            and industrial spaces. Backed by 9 brands and 40+ clients across the island.
          </p>

          <div className="v5-hero-cta-row">
            <a href="#v5-contact" className="v5-btn v5-btn-primary">
              <span className="v5-btn-square" />
              Talk to our team
            </a>
            <a href="#v5-services" className="v5-btn v5-btn-secondary">
              View our services
            </a>
          </div>
        </div>
      </div>

      <div className="v5-hero-scroll">
        <span>Scroll</span>
        <span className="v5-hero-scroll-line" />
      </div>
    </section>
  );
}
