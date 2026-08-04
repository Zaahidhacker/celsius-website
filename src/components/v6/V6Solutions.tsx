"use client";

/**
 * V6 Solutions / Remote — Inspired by shopify.design's "Remote by design" section.
 *
 * Updates (animejs):
 * - Headline reveals with V6Reveal
 * - Solution cards reveal with staggered V6Reveal + 3D scroll tilt
 */

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import Link from "next/link";
import V6Reveal from "./V6Reveal";

export default function V6Solutions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const solutions = [
    {
      city: "Domestic",
      region: "Homes · Apartments · Villas",
      desc: "Energy-efficient, smart cooling for modern homes. Brands: Midea, Haier, Panasonic, LG.",
      tone: "var(--v6-amber)",
      features: ["Smart integration", "Energy efficiency", "Improved air quality"],
    },
    {
      city: "Commercial",
      region: "Offices · Retail · Hotels",
      desc: "Multi-split zoning for offices, retail, restaurants, and hotels. Brands: LG, Panasonic, Daikin.",
      tone: "var(--v6-clay)",
      features: ["Multi-split zoning", "Smart connectivity", "Air purification"],
    },
    {
      city: "Industrial",
      region: "Plants · Data centres",
      desc: "VRF systems for manufacturing, storage, and high-density computing. Brands: Mitsubishi, Daikin, Samsung.",
      tone: "var(--v6-blue)",
      features: ["VRF systems", "Precise regulation", "Robust reliability"],
    },
    {
      city: "Aftercare",
      region: "Maintenance · Repairs",
      desc: "Scheduled service plans, gas leak repair, and rapid-response breakdown support across Sri Lanka.",
      tone: "var(--v6-mint)",
      features: ["Scheduled plans", "Rapid response", "Genuine parts"],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // 3D tilt on each solution card — scrubbed by scroll
    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".v6-remote-card")
    );

    const cardAnims = cards.map((card, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      return animate(card, {
        rotateY: [dir * 4, dir * -4, dir * 4],
        rotateX: [-2, 2, -2],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      });
    });

    const obs = onScroll({
      target: section,
      enter: "bottom top",
      leave: "top bottom",
      sync: 60,
      onUpdate: (o) => {
        const p = Math.max(0, Math.min(1, o.progress));
        cardAnims.forEach((a) => a.seek(p * a.duration));
      },
    });

    return () => {
      obs.revoke?.();
      cardAnims.forEach((a) => a.pause());
    };
  }, []);

  return (
    <section ref={sectionRef} className="v6-remote" id="solutions" data-reveal>
      <div className="v6-remote-inner">
        <V6Reveal y={40} rotate={4}>
          <div className="v6-row" style={{ marginBottom: "12px" }}>
            <span className="v6-eyebrow">Sectors we serve</span>
            <span className="v6-eyebrow">3 sectors · 1 standard</span>
          </div>

          <h2 className="v6-remote-headline">
            Engineered <em className="v6-remote-accent">by sector.</em>
          </h2>

          <p className="v6-lede" style={{ maxWidth: "65ch", marginTop: "8px" }}>
            Different spaces demand different cooling strategies. We&apos;ve built specialist teams for
            each sector — so every install gets the right hardware, the right sizing, and the right
            aftercare.
          </p>
        </V6Reveal>

        <div
          ref={gridRef}
          className="v6-remote-grid"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 30%" }}
        >
          {solutions.map((s, i) => (
            <V6Reveal key={i} y={60} rotate={10} delay={i * 100}>
              <div
                className="v6-remote-card"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <p className="v6-remote-card-region">{s.region}</p>
                <h3 className="v6-remote-card-city">{s.city}</h3>
                <p className="v6-body" style={{ marginTop: "12px", marginBottom: "16px" }}>{s.desc}</p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "12px 0 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {s.features.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "var(--v6-mono)",
                        fontSize: "13px",
                        letterSpacing: "0.02em",
                        color: "var(--v6-grey)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          background: s.tone,
                          borderRadius: "50%",
                          display: "inline-block",
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="v6-pill v6-pill--outline"
                  style={{ borderColor: "var(--v6-ink)", color: "var(--v6-ink)" }}
                >
                  Talk to a specialist
                </Link>
              </div>
            </V6Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
