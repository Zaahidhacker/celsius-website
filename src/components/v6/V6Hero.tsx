"use client";

/**
 * V6 Hero — Inspired by shopify.design's hero.
 *
 * Updates (animejs):
 * - Headline lines animate up with animejs stagger (rotateX + translateY)
 * - LIVE marquee bar fades in
 * - Bento cards reveal with animejs stagger + 3D perspective flip
 * - Whole grid has a subtle 3D parallax tilt that responds to scroll
 */

import { useEffect, useRef } from "react";
import { animate, stagger, onScroll } from "animejs";
import Link from "next/link";

export default function V6Hero() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const liveRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // 1. Headline reveal — line 1 + line 2 stagger up with 3D rotation
    if (headlineRef.current) {
      const lines = headlineRef.current.querySelectorAll<HTMLElement>(
        ".v6-hero-line-inner"
      );
      lines.forEach((l) => {
        l.style.opacity = "0";
        l.style.transform = "translateY(120%) rotateX(-40deg)";
        l.style.transformOrigin = "center bottom";
        l.style.willChange = "transform, opacity";
        l.style.display = "inline-block";
      });

      animate(lines, {
        opacity: [0, 1],
        translateY: ["120%", "0%"],
        rotateX: [-40, 0],
        duration: 1400,
        ease: "outExpo",
        delay: stagger(180, { start: 400 }),
        onComplete: () => {
          lines.forEach((l) => (l.style.willChange = "auto"));
        },
      });
    }

    // 2. LIVE marquee fade + slide
    if (liveRef.current) {
      liveRef.current.style.opacity = "0";
      liveRef.current.style.transform = "translateY(20px)";
      animate(liveRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        ease: "outCubic",
        delay: 1100,
      });
    }

    // 3. Bento grid — stagger reveal of each card
    if (gridRef.current) {
      const cards = Array.from(
        gridRef.current.querySelectorAll<HTMLElement>(".v6-hero-card")
      );
      cards.forEach((c) => {
        c.style.opacity = "0";
        c.style.transform = "translateY(60px) rotateX(20deg) scale(0.94)";
        c.style.transformOrigin = "center top";
        c.style.willChange = "transform, opacity";
      });

      animate(cards, {
        opacity: [0, 1],
        translateY: [60, 0],
        rotateX: [20, 0],
        scale: [0.94, 1],
        duration: 1100,
        ease: "outExpo",
        delay: stagger(90, { start: 900 }),
        onComplete: () => {
          cards.forEach((c) => (c.style.willChange = "auto"));
        },
      });

      // 3D parallax on the whole grid — scrubbed by scroll
      const gridAnim = animate(gridRef.current, {
        rotateX: [6, -4],
        rotateY: [-2, 2],
        scale: [1.02, 0.98],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      });

      const obs = onScroll({
        target: sectionRef.current,
        enter: "bottom top",
        leave: "top bottom",
        sync: 80,
        onUpdate: (o) => {
          const p = Math.max(0, Math.min(1, o.progress));
          gridAnim.seek(p * gridAnim.duration);
        },
      });

      // 4. CTA row — fade + slide
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "0";
        ctaRef.current.style.transform = "translateY(30px)";
        animate(ctaRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 900,
          ease: "outCubic",
          delay: 1500,
        });
      }

      return () => {
        obs.revoke?.();
        gridAnim.pause();
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="v6-hero" style={{ perspective: "1400px" }}>
      {/* Hero meta row */}
      <div className="v6-row" style={{ marginTop: "clamp(20px, 3vw, 40px)" }}>
        <span className="v6-eyebrow">Excellence in cooling since 2019</span>
        <span className="v6-eyebrow">Colombo · Sri Lanka</span>
      </div>

      {/* Hero headline — line 1 + line 2 (rises) */}
      <h1 ref={headlineRef} className="v6-h1 v6-hero-headline">
        <span className="v6-hero-line v6-hero-line-1">
          <span className="v6-hero-line-inner">Precision cooling,</span>
        </span>
        <span className="v6-hero-line v6-hero-line-2">
          <span className="v6-hero-line-inner">
            <span className="v6-hero-accent">engineered.</span>
          </span>
        </span>
      </h1>

      {/* LIVE marquee bar */}
      <div ref={liveRef} className="v6-hero-live" aria-hidden="true">
        <span className="v6-hero-live-dot" />
        <div className="v6-hero-live-track">
          <span>
            <span>SHOW UP</span><span>·</span>
            <span>STAY COOL</span><span>·</span>
            <span>Supply</span><span>·</span>
            <span>Install</span><span>·</span>
            <span>MAINTAIN</span><span>·</span>
            <span>REPAIR</span><span>·</span>
            <span>Since 2019</span><span>·</span>
            <span>SHOW UP</span><span>·</span>
            <span>STAY COOL</span><span>·</span>
            <span>Supply</span><span>·</span>
            <span>Install</span><span>·</span>
            <span>MAINTAIN</span><span>·</span>
            <span>REPAIR</span><span>·</span>
            <span>Since 2019</span><span>·</span>
          </span>
        </div>
      </div>

      {/* Bento grid of cards — 3D tilted, scroll-parallaxed */}
      <div
        ref={gridRef}
        className="v6-hero-grid"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Image card A — wide */}
        <Link href="#solutions" className="v6-hero-card v6-hero-card--a">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Modern air conditioner installed in a luxury living room"
            loading="lazy"
          />
        </Link>

        {/* Amber text card B */}
        <div className="v6-hero-card v6-hero-card--amber v6-hero-card--b">
          <div>
            <p className="v6-card-eyebrow">Domestic</p>
            <p className="v6-card-title">Home comfort, redefined.</p>
            <p className="v6-card-desc">Inverter split units from 12,000 to 24,000 BTU, sized for bedrooms, living rooms, and home offices.</p>
          </div>
          <p className="v6-card-eyebrow">
            Midea · Haier · Panasonic · LG
          </p>
        </div>

        {/* Image card C */}
        <Link href="#solutions" className="v6-hero-card v6-hero-card--c">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
            alt="HVAC technician servicing commercial AC unit"
            loading="lazy"
          />
        </Link>

        {/* Navy text card D */}
        <div className="v6-hero-card v6-hero-card--text v6-hero-card--d">
          <div>
            <p className="v6-card-eyebrow">Commercial</p>
            <p className="v6-card-title">Offices, retail & hospitality.</p>
            <p className="v6-card-desc">Multi-split zoning, VRF, and ducted systems for hotels, restaurants, and office towers across Colombo.</p>
          </div>
          <p className="v6-card-eyebrow">
            LG · Daikin · Samsung
          </p>
        </div>

        {/* Image card E — wide */}
        <Link href="#solutions" className="v6-hero-card v6-hero-card--e">
          <img
            src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=1200&q=80"
            alt="Industrial VRF HVAC system installation"
            loading="lazy"
          />
        </Link>

        {/* Clay text card F */}
        <div className="v6-hero-card v6-hero-card--clay v6-hero-card--f">
          <div>
            <p className="v6-card-eyebrow">Industrial</p>
            <p className="v6-card-title">VRF systems for plants & data centres.</p>
            <p className="v6-card-desc">High-capacity VRF and precision cooling for factories, server rooms, and cold storage facilities.</p>
          </div>
          <p className="v6-card-eyebrow">
            Mitsubishi · Daikin · Samsung
          </p>
        </div>

        {/* Image card G */}
        <Link href="#brands" className="v6-hero-card v6-hero-card--g">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80"
            alt="Modern AC unit interior view"
            loading="lazy"
          />
        </Link>

        {/* Beige text card H */}
        <div className="v6-hero-card v6-hero-card--beige v6-hero-card--h">
          <div>
            <p className="v6-card-eyebrow">Since 2019</p>
            <p className="v6-card-title">9 premium brands. 40+ business clients.</p>
            <p className="v6-card-desc">Five years of installs, servicing, and emergency repairs across Sri Lanka.</p>
          </div>
          <Link href="#about" className="v6-pill v6-pill--outline" style={{ alignSelf: "flex-start" }}>
            About Celsius
          </Link>
        </div>
      </div>

      {/* CTA row — marquee pill + arrow icon */}
      <div ref={ctaRef} className="v6-row" style={{ marginTop: "clamp(30px, 4vw, 50px)" }}>
        <div className="v6-btn-group">
          <Link href="#contact" className="v6-pill-marquee">
            <div className="v6-pill-marquee-track">
              <span>
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
              </span>
              <span>
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
                <span>Book a demo · </span><span className="v6-pill-marquee-dot" />
              </span>
            </div>
          </Link>
          <Link href="#contact" className="v6-pill-icon" aria-label="Talk to a specialist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <span className="v6-eyebrow">Talk to a specialist</span>
      </div>
    </section>
  );
}
