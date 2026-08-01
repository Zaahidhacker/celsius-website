"use client";

import { services } from "@/lib/content";

/**
 * V3 SERVICES — bento grid with sharp 2px corners, monospace indices
 */
export default function V3Services() {
  return (
    <section id="services" className="v3-section">
      <div className="v3-container">
        <div className="v3-divider mb-12" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-14">
          <div className="flex flex-col gap-4">
            <span className="v3-eyebrow">/ 02 — SERVICES</span>
            <h2 className="v3-display" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              What we <span className="v3-amber-text">do.</span>
            </h2>
          </div>
          <p className="v3-mono text-sm text-[var(--v3-ink-soft)] max-w-sm leading-relaxed">
            Supply, install, service. Four core capabilities across domestic, commercial, and industrial sectors.
          </p>
        </div>

        {/* Bento grid — 2x2 with 1px dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: "grid", gap: "1px", background: "var(--v3-line)", border: "1px solid var(--v3-line)" }}>
          {services.map((s) => (
            <a
              key={s.idx}
              href={s.href}
              className="group relative bg-[var(--v3-bg)] p-7 sm:p-9 flex flex-col gap-4 v3-lift hover:bg-[rgba(17,20,24,0.4)]"
            >
              <div className="flex items-center justify-between">
                <span className="v3-num">/ {s.idx}</span>
                <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em] group-hover:text-[var(--v3-amber)] transition-colors">
                  › VIEW
                </span>
              </div>
              <h3 className="v3-display text-2xl sm:text-3xl text-[var(--v3-ink)] group-hover:text-[var(--v3-amber)] transition-colors">
                {s.name}
              </h3>
              <p className="v3-mono text-xs sm:text-sm text-[var(--v3-ink-soft)] leading-relaxed">
                {s.desc}
              </p>
              {/* Bottom hazard stripe — reveals on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 v3-hazard opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
