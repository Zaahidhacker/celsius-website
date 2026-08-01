"use client";

import { brands } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 BRANDS — Climate Atelier
 * Horizontal scroll rail with pale-blue tags. Clean cards, 1px borders.
 */
export default function V3Brands() {
  return (
    <section id="products" className="border-y border-[var(--v3-line)] py-14 sm:py-20">
      <div className="v3-container mb-8 sm:mb-10 flex items-end justify-between">
        <V3Reveal className="flex flex-col gap-3">
          <span className="v3-eyebrow">Brands we carry</span>
          <h2 className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Nine premium <span className="v3-display-italic text-[var(--v3-sky-deep)]">brands.</span>
          </h2>
        </V3Reveal>
        <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)] hidden sm:flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Scroll
        </span>
      </div>

      <V3Reveal className="overflow-x-auto pb-4" style={{ scrollPaddingLeft: "2rem" }}>
        <div className="flex gap-4 px-6 sm:px-10" style={{ scrollSnapType: "x mandatory" }}>
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="v3-card v3-lift p-5 sm:p-6 w-[240px] sm:w-[300px] flex-shrink-0 flex flex-col gap-3"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center justify-between">
                <span className="v3-mono text-[11px] text-[var(--v3-ink-faint)] uppercase tracking-wider">
                  0{i + 1}
                </span>
                <span className="v3-tag">{b.tag}</span>
              </div>
              <h3 className="v3-display text-2xl text-[var(--v3-ink)] mt-1">{b.name}</h3>
              <p className="text-sm text-[var(--v3-ink-soft)] leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </V3Reveal>
    </section>
  );
}
