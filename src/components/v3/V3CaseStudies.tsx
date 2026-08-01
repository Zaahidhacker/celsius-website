"use client";

import { caseStudies } from "@/lib/content";

/**
 * V3 CASE STUDIES — 3-column grid with sharp corners, hazard stripe on hover
 */
export default function V3CaseStudies() {
  return (
    <section id="case-studies" className="v3-section">
      <div className="v3-container">
        <div className="v3-divider mb-12" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-14">
          <div className="flex flex-col gap-4">
            <span className="v3-eyebrow">/ 06 — PROJECTS</span>
            <h2 className="v3-display" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              Field <span className="v3-amber-text">work.</span>
            </h2>
          </div>
          <p className="v3-mono text-sm text-[var(--v3-ink-soft)] max-w-sm leading-relaxed">
            Real installations across Sri Lanka. Tangible results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ display: "grid", gap: "1px", background: "var(--v3-line)", border: "1px solid var(--v3-line)" }}>
          {caseStudies.map((c, i) => (
            <div
              key={c.title}
              className="group relative bg-[var(--v3-bg)] p-6 sm:p-7 flex flex-col gap-4 v3-lift"
            >
              <div className="flex items-center justify-between">
                <span className="v3-num">/ 0{i + 1}</span>
                <span className="v3-mono text-[9px] uppercase tracking-[0.16em] text-[var(--v3-amber)] px-2 py-0.5 border border-[rgba(245,166,35,0.4)]">
                  {c.tag}
                </span>
              </div>
              <h3 className="v3-display text-xl sm:text-2xl text-[var(--v3-ink)] group-hover:text-[var(--v3-amber)] transition-colors leading-tight">
                {c.title}
              </h3>
              <p className="v3-mono text-xs text-[var(--v3-ink-soft)] leading-relaxed">{c.summary}</p>
              <div className="mt-auto pt-4 border-t border-[var(--v3-line)]">
                <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.14em] block mb-1">/ RESULT</span>
                <span className="v3-mono text-sm text-[var(--v3-amber)]">{c.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
