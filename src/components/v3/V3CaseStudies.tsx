"use client";

import { caseStudies } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 CASE STUDIES — Climate Atelier
 * Asymmetric bento (NOT 3-col equal — banned by stitch-skill).
 * First card spans 2 columns on desktop; rest are single.
 */
export default function V3CaseStudies() {
  return (
    <section id="case-studies" className="v3-section">
      <div className="v3-container">
        {/* Header */}
        <V3Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 sm:mb-16">
          <div className="flex flex-col gap-4">
            <span className="v3-eyebrow">Field work</span>
            <h2 className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(1.875rem, 5vw, 3.75rem)" }}>
              Real installs,{" "}
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">real results.</span>
            </h2>
          </div>
          <p className="text-base text-[var(--v3-ink-soft)] max-w-sm leading-relaxed">
            A selection of installations across Sri Lanka — each with measurable outcomes.
          </p>
        </V3Reveal>

        {/* Asymmetric bento — 2-col on desktop, first card spans both */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((c, i) => {
            const isHero = i === 0;
            return (
              <V3Reveal
                key={c.title}
                delay={i * 80}
                className={isHero ? "md:col-span-2" : ""}
              >
                <div className={`v3-card v3-lift h-full p-5 sm:p-9 flex flex-col gap-4 ${isHero ? "md:flex-row md:items-center md:gap-10" : ""}`}>
                  <div className={`flex flex-col gap-4 ${isHero ? "md:flex-1" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="v3-mono text-[11px] text-[var(--v3-ink-faint)] uppercase tracking-wider">
                        0{i + 1}
                      </span>
                      <span className="v3-tag">{c.tag}</span>
                    </div>
                    <h3 className="v3-display text-2xl sm:text-3xl text-[var(--v3-ink)] leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--v3-ink-soft)] leading-relaxed">
                      {c.summary}
                    </p>
                  </div>
                  {/* Result block */}
                  <div className={`${isHero ? "md:w-72 md:flex-shrink-0 md:border-l md:border-[var(--v3-line)] md:pl-10" : "pt-4 border-t border-[var(--v3-line)] mt-auto"}`}>
                    <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)] block mb-2">
                      Result
                    </span>
                    <p className={`v3-display text-[var(--v3-sky-deep)] ${isHero ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                      {c.result}
                    </p>
                  </div>
                </div>
              </V3Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
