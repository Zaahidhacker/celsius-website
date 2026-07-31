"use client";

import { brands } from "@/lib/content";

/**
 * V3 BRANDS — horizontal scroll rail with monospace tags
 */
export default function V3Brands() {
  return (
    <section id="products" className="v3-root border-y border-[var(--v3-line)] py-12 sm:py-16">
      <div className="v3-container mb-6 sm:mb-8 flex items-end justify-between">
        <div className="flex flex-col gap-3">
          <span className="v3-eyebrow">/ 03 — BRANDS</span>
          <h2 className="v3-display text-2xl sm:text-3xl">
            09 premium <span className="v3-amber-text">brands.</span>
          </h2>
        </div>
        <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em] hidden sm:inline-block">
          ← SCROLL →
        </span>
      </div>

      <div className="celsius-rail px-5 sm:px-8" style={{ scrollPaddingLeft: "2rem" }}>
        {brands.map((b, i) => (
          <div
            key={b.name}
            className="v3-card p-5 sm:p-6 w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="v3-num">0{i + 1}</span>
              <span className="v3-mono text-[9px] text-[var(--v3-amber)] uppercase tracking-[0.16em] px-2 py-0.5 border border-[var(--v3-amber)]/40">
                {b.tag}
              </span>
            </div>
            <h3 className="v3-display text-2xl sm:text-3xl text-[var(--v3-ink)]">{b.name}</h3>
            <p className="v3-mono text-xs text-[var(--v3-ink-soft)] leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
