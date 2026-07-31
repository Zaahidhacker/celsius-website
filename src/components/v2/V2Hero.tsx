"use client";

import { ArrowUpRight, Snowflake } from "lucide-react";

/**
 * V2 HERO — Editorial magazine redesign.
 * - Warm cream background (not pure white — anti-slop)
 * - Playfair Display cursive italic for headline (the "cursive font" requirement)
 * - Asymmetric 12-col split (7+5, not 6+6)
 * - Double-bezel nested stat card on the right
 * - Massive ghost serif "C" floating in background
 * - Mobile-first: collapses to single column under lg
 * - Simplified copy — no yap, just the facts
 */
export default function V2Hero() {
  return (
    <section
      id="top"
      className="relative w-full v2-cream-bg v2-font-sans overflow-hidden"
      style={{ minHeight: "calc(100dvh - 5rem)" }}
    >
      {/* Ambient radial gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(37, 99, 201, 0.08), transparent 60%)," +
          "radial-gradient(ellipse 50% 40% at 10% 80%, rgba(245, 166, 35, 0.06), transparent 55%)",
      }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--brand-deep) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      {/* Decorative giant ghost letter */}
      <div
        className="absolute -right-12 sm:-right-20 top-1/4 v2-font-serif italic font-bold leading-none pointer-events-none select-none"
        style={{ color: "rgba(15, 47, 99, 0.04)", fontSize: "clamp(20rem, 50vw, 40rem)" }}
        aria-hidden="true"
      >
        C
      </div>

      {/* Main content — asymmetric 12-col grid */}
      <div className="relative z-10 celsius-min-screen flex items-center">
        <div className="celsius-container py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left — text block (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
              {/* Eyebrow */}
              <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber">
                <span className="w-1 h-1 rounded-full bg-current" />
                Excellence in cooling · Since 2019
              </div>

              {/* Headline — Playfair Display cursive italic accent */}
              <h1 className="v2-font-serif font-medium leading-[0.96] tracking-[-0.025em] v2-ink celsius-sentence"
                  style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}>
                <span className="block">Precision</span>
                <span className="block celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">
                  cooling,
                </span>
                <span className="block">engineered.</span>
              </h1>

              {/* Subline — short, direct */}
              <p className="celsius-lede v2-ink-soft" style={{ maxWidth: "32rem" }}>
                Premium AC supply, install &amp; service. Domestic, commercial, industrial — across Sri Lanka.
              </p>

              {/* CTAs — button-in-button */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a href="#contact" className="celsius-island-btn celsius-shadow-soft">
                  <span>Book demo</span>
                  <span className="celsius-island-icon">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="#services"
                   className="celsius-island-btn"
                   style={{ background: "transparent", color: "var(--brand-deep)", border: "1px solid rgba(15,47,99,0.18)" }}>
                  <span>Explore services</span>
                  <span className="celsius-island-icon" style={{ background: "rgba(15,47,99,0.06)" }}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right — double-bezel stat card (5 cols) */}
            <div className="lg:col-span-5 lg:pl-6">
              <div className="celsius-bezel-dark celsius-shadow-navy" style={{ "--bezel-radius": "1.5rem" } as React.CSSProperties}>
                <div className="celsius-bezel-dark-inner p-6 sm:p-8 text-white">
                  {/* Amber glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                       style={{ background: "radial-gradient(circle, rgba(245,166,35,0.4), transparent 70%)", filter: "blur(40px)" }} />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-6">
                      <Snowflake className="w-4 h-4 text-[var(--accent-amber)]" />
                      <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">At a glance</span>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                      <div>
                        <div className="v2-font-serif italic font-medium leading-none celsius-numeric"
                             style={{ fontSize: "clamp(2.5rem, 6vw, 3.25rem)" }}>2019</div>
                        <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Established</div>
                      </div>
                      <div>
                        <div className="v2-font-serif italic font-medium leading-none text-[var(--accent-amber)] celsius-numeric"
                             style={{ fontSize: "clamp(2.5rem, 6vw, 3.25rem)" }}>40+</div>
                        <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Clients</div>
                      </div>
                      <div>
                        <div className="v2-font-serif italic font-medium leading-none celsius-numeric"
                             style={{ fontSize: "clamp(2.5rem, 6vw, 3.25rem)" }}>9</div>
                        <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Brands</div>
                      </div>
                      <div>
                        <div className="v2-font-serif italic font-medium leading-none celsius-numeric"
                             style={{ fontSize: "clamp(2.5rem, 6vw, 3.25rem)" }}>3</div>
                        <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Sectors</div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-7 pt-6 border-t border-white/15">
                      <p className="v2-font-serif italic text-base text-white/80 leading-relaxed">
                        “If your facility’s air isn’t perfect, we pledge to fix it.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative z-10 border-t border-[rgba(15,47,99,0.1)] py-4 overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap celsius-marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 flex-shrink-0">
              {["Domestic", "Commercial", "Industrial", "9 brands", "40+ clients", "Since 2019"].map((s) => (
                <span key={s + k} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold v2-ink-soft v2-font-sans celsius-sentence">
                  <span className="w-1 h-1 rounded-full bg-[var(--accent-amber)]" />
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
