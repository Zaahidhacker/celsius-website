"use client";

/**
 * V6 Pricing — Square-foot pricing cards with animejs v4 3D scroll tilt.
 *
 * Each pricing card:
 * - Reveals with a staggered animejs animation when scrolled into view
 * - Has a 3D perspective tilt that responds to scroll progress (scrubbed)
 * - Featured ("Plus") card has a glow ring + lifts higher
 *
 * The grid uses CSS Grid with auto-fit minmax for responsive layout.
 */

import { useEffect, useRef } from "react";
import { animate, stagger, onScroll } from "animejs";
import Link from "next/link";
import { pricing } from "@/lib/content";
import V6Reveal from "./V6Reveal";

const TONE_VARS: Record<string, { bg: string; text: string; ring: string }> = {
  azure: { bg: "var(--v6-azure)", text: "var(--v6-white)", ring: "var(--v6-azure)" },
  cyan: { bg: "var(--v6-cyan)", text: "var(--v6-white)", ring: "var(--v6-cyan)" },
  sky: { bg: "var(--v6-sky)", text: "var(--v6-navy-deep)", ring: "var(--v6-sky)" },
  red: { bg: "var(--v6-red)", text: "var(--v6-white)", ring: "var(--v6-red)" },
  yellow: { bg: "var(--v6-yellow)", text: "var(--v6-navy-deep)", ring: "var(--v6-yellow)" },
  navy: { bg: "var(--v6-navy)", text: "var(--v6-white)", ring: "var(--v6-cyan-bright)" },
  // Keep old keys as aliases for backward compat
  amber: { bg: "var(--v6-azure)", text: "var(--v6-white)", ring: "var(--v6-azure)" },
  clay: { bg: "var(--v6-red)", text: "var(--v6-white)", ring: "var(--v6-red)" },
  blue: { bg: "var(--v6-cyan)", text: "var(--v6-white)", ring: "var(--v6-cyan)" },
  mint: { bg: "var(--v6-cyan)", text: "var(--v6-white)", ring: "var(--v6-cyan)" },
  lemon: { bg: "var(--v6-yellow)", text: "var(--v6-navy-deep)", ring: "var(--v6-yellow)" },
};

export default function V6Pricing() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const section = sectionRef.current;
    if (!grid || !section) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // 3D tilt on the whole grid — scrubbed by scroll progress.
    // Cards appear to fan out as you scroll past.
    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".v6-pricing-card")
    );

    // Per-card scrubbed rotation: each card rotates based on scroll progress
    // AND its index in the grid (so they don't all rotate in lockstep).
    const cardAnims = cards.map((card, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      return animate(card, {
        rotateY: [dir * 8, dir * -8, dir * 8],
        rotateX: [-4, 4, -4],
        translateY: [10, -10, 10],
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
    <section
      ref={sectionRef}
      className="v6-section v6-pricing-section"
      id="pricing"
      data-reveal
      style={{
        background: "var(--v6-cream)",
        paddingBlock: "clamp(40px, 5vw, 64px)",
      }}
    >
      <div className="v6-container">
        <V6Reveal y={40} rotate={4}>
          <div className="v6-row" style={{ marginBottom: "12px" }}>
            <span className="v6-eyebrow" style={{ color: "var(--v6-azure-deep)" }}>
              {pricing.eyebrow}
            </span>
            <span className="v6-eyebrow">{pricing.perSqFtNote}</span>
          </div>

          <h2 className="v6-h2" style={{ marginBottom: "8px" }}>
            {pricing.title}{" "}
            <em style={{
              fontStyle: "italic",
              background: "var(--v6-gradient-cool)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>{pricing.titleAccent}</em>
          </h2>

          <p
            className="v6-lede"
            style={{ maxWidth: "65ch", marginTop: "8px" }}
          >
            {pricing.subtitle}
          </p>
        </V6Reveal>

        {/* Pricing grid — 3D tilted cards */}
        <div
          ref={gridRef}
          className="v6-pricing-grid"
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 30%",
          }}
        >
          {pricing.plans.map((plan, i) => {
            const tone = TONE_VARS[plan.tone] || TONE_VARS.amber;
            return (
              <V6Reveal
                key={i}
                y={60}
                rotate={12}
                delay={i * 80}
                duration={900}
                ease="outExpo"
              >
                <article
                  className={`v6-pricing-card v6-card-accent ${plan.featured ? "is-featured" : ""}`}
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    background: plan.featured ? tone.bg : "var(--v6-white)",
                    color: plan.featured ? tone.text : "var(--v6-ink)",
                    borderColor: plan.featured ? "transparent" : "rgba(10,29,63,0.1)",
                  }}
                >
                  {plan.featured && (
                    <span
                      className="v6-pricing-badge"
                      style={{ background: "var(--v6-cyan-bright)", color: "var(--v6-navy-deep)" }}
                    >
                      Most popular
                    </span>
                  )}

                  <div className="v6-pricing-card-header">
                    <p
                      className="v6-pricing-tier"
                      style={{
                        color: plan.featured ? "rgba(255,255,255,0.7)" : "var(--v6-grey)",
                      }}
                    >
                      {plan.tier}
                    </p>
                    <p
                      className="v6-pricing-range"
                      style={{ color: plan.featured ? "var(--v6-white)" : "var(--v6-ink)" }}
                    >
                      {plan.range}
                    </p>
                  </div>

                  <div className="v6-pricing-price-row">
                    <span
                      className="v6-pricing-btu"
                      style={{
                        color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--v6-grey)",
                      }}
                    >
                      {plan.btu}
                    </span>
                    <div className="v6-pricing-price">
                      {plan.price !== "Custom" && (
                        <span
                          className="v6-pricing-price-currency"
                          style={{
                            color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--v6-grey)",
                          }}
                        >
                          Rs.
                        </span>
                      )}
                      <span className="v6-pricing-price-value">{plan.price}</span>
                      <span
                        className="v6-pricing-price-suffix"
                        style={{
                          color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--v6-grey)",
                        }}
                      >
                        {plan.priceSuffix}
                      </span>
                    </div>
                  </div>

                  <div
                    className="v6-pricing-divider"
                    style={{
                      background: plan.featured ? "rgba(255,255,255,0.18)" : "rgba(10,29,63,0.08)",
                    }}
                  />

                  <p
                    className="v6-pricing-ideal"
                    style={{
                      color: plan.featured ? "rgba(255,255,255,0.85)" : "var(--v6-ink-soft)",
                    }}
                  >
                    {plan.ideal}
                  </p>
                  <p
                    className="v6-pricing-brands"
                    style={{
                      color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--v6-grey)",
                    }}
                  >
                    {plan.brands}
                  </p>

                  <Link
                    href={pricing.cta.href}
                    className="v6-pill v6-pill--outline v6-pricing-cta"
                    style={{
                      borderColor: plan.featured ? "rgba(255,255,255,0.5)" : "var(--v6-ink)",
                      color: plan.featured ? "var(--v6-white)" : "var(--v6-ink)",
                      marginTop: "auto",
                    }}
                  >
                    {plan.price === "Custom" ? "Request quote" : "Get started"}
                  </Link>
                </article>
              </V6Reveal>
            );
          })}
        </div>

        {/* Inclusions + footnote */}
        <V6Reveal y={40} delay={200} style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
          <div className="v6-pricing-inclusions">
            <div className="v6-row" style={{ marginBottom: "20px" }}>
              <span className="v6-eyebrow" style={{ color: "var(--v6-azure-deep)" }}>
                Every quote includes
              </span>
            </div>
            <ul className="v6-pricing-inclusions-list">
              {pricing.inclusions.map((inc, i) => (
                <li key={i}>
                  <span className="v6-pricing-check" aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {inc}
                </li>
              ))}
            </ul>
          </div>

          <p className="v6-pricing-footnote">{pricing.footnote}</p>
        </V6Reveal>
      </div>
    </section>
  );
}
