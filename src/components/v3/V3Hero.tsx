"use client";

import { hero } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 HERO — Climate Atelier
 * Asymmetric 7+5 split (stitch-skill: centered heroes banned).
 * Inline image typography — small photo embedded in headline (stitch signature).
 * Air-flow drift lines in background (HVAC motif).
 * Temperature gradient stat (blue → amber).
 */
export default function V3Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100dvh - 5rem)" }}
    >
      {/* Ambient sky orb — top right */}
      <div
        className="v3-orb"
        style={{
          top: "-10rem",
          right: "-8rem",
          width: "32rem",
          height: "32rem",
          background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 60%)",
        }}
      />
      {/* Warm amber orb — bottom left, subtle */}
      <div
        className="v3-orb"
        style={{
          bottom: "-12rem",
          left: "-10rem",
          width: "28rem",
          height: "28rem",
          background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Air-flow drift lines — HVAC motif */}
      <div className="v3-airflow">
        <span /><span /><span /><span /><span />
      </div>

      {/* Content layer */}
      <div
        className="relative z-10 v3-container flex flex-col justify-center"
        style={{ minHeight: "calc(100dvh - 5rem)", paddingTop: "2rem", paddingBottom: "3rem" }}
      >
        {/* Top row — eyebrow + status */}
        <V3Reveal className="flex flex-wrap items-center justify-between gap-3 mb-12 sm:mb-16">
          <span className="v3-eyebrow">{hero.badge}</span>
          <div className="flex items-center gap-3 v3-mono text-[11px] text-[var(--v3-ink-faint)] uppercase tracking-wider">
            <span>Colombo · LK</span>
            <span className="w-1 h-1 rounded-full bg-[var(--v3-ink-faint)]" />
            <span className="text-[var(--v3-sky-deep)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--v3-sky)] animate-pulse" />
              Available now
            </span>
          </div>
        </V3Reveal>

        {/* Massive display headline — Fraunces serif, with inline image typography */}
        <V3Reveal delay={80}>
          <h1 className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(2.25rem, 9vw, 7rem)" }}>
            <span className="block">Precision cooling,</span>
            <span className="block">
              engineered for{" "}
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">
                comfort.
              </span>
            </span>
          </h1>
        </V3Reveal>

        {/* Subline + CTAs + stat — asymmetric grid */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left: subline + CTAs (7 cols) */}
          <V3Reveal delay={160} className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-base sm:text-xl text-[var(--v3-ink-soft)] max-w-xl leading-relaxed">
              {hero.description} Domestic, commercial, and industrial — across Sri Lanka since 2019.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="v3-btn v3-btn-primary">
                {hero.cta.primary}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#services" className="v3-btn v3-btn-ghost">
                {hero.cta.secondary}
              </a>
            </div>
          </V3Reveal>

          {/* Right: temperature gradient stat card (5 cols) */}
          <V3Reveal delay={240} className="lg:col-span-5 lg:pl-4">
            <div className="v3-card p-5 sm:p-7">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--v3-line)]">
                <span className="v3-eyebrow">By the numbers</span>
                <span className="v3-tag">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--v3-sky)]" />
                  Live
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="v3-stat-num v3-temp-grad" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
                  {hero.stat.number}
                </span>
                <span className="v3-mono text-xs text-[var(--v3-ink-faint)] uppercase tracking-wider">
                  clients
                </span>
              </div>
              <p className="text-sm text-[var(--v3-ink-soft)] leading-relaxed mb-5">
                {hero.stat.label} trust Celsius to keep their spaces comfortable year-round.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-[var(--v3-line)]">
                <div className="flex flex-col gap-1">
                  <span className="v3-mono text-[10px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Est.</span>
                  <span className="v3-mono text-sm text-[var(--v3-ink)] font-medium">2019</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="v3-mono text-[10px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Brands</span>
                  <span className="v3-mono text-sm text-[var(--v3-ink)] font-medium">09</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="v3-mono text-[10px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Sectors</span>
                  <span className="v3-mono text-sm text-[var(--v3-ink)] font-medium">03</span>
                </div>
              </div>
            </div>
          </V3Reveal>
        </div>

        {/* Bottom — brand strip */}
        <V3Reveal delay={320} className="mt-14 sm:mt-20 pt-6 border-t border-[var(--v3-line)]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--v3-ink-soft)]">
            <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)] mr-2">
              Trusted brands
            </span>
            {["Daikin", "Mitsubishi", "LG", "Panasonic", "Midea", "Samsung"].map(b => (
              <span key={b} className="font-medium text-[var(--v3-ink)]">{b}</span>
            ))}
          </div>
        </V3Reveal>
      </div>
    </section>
  );
}
