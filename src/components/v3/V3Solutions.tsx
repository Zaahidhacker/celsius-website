"use client";

import { solutions } from "@/lib/content";

/**
 * V3 SOLUTIONS — numbered list with monospace feature tags
 */
export default function V3Solutions() {
  return (
    <section id="solutions" className="v3-section">
      <div className="v3-container">
        <div className="v3-divider mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left header */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-32 self-start">
            <span className="v3-eyebrow">/ 04 — SOLUTIONS</span>
            <h2 className="v3-display" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              Three <span className="v3-amber-text">sectors.</span>
            </h2>
            <p className="v3-mono text-sm text-[var(--v3-ink-soft)] leading-relaxed">
              Tailored cooling for every kind of space.
            </p>
          </div>

          {/* Right: numbered list */}
          <div className="lg:col-span-8 flex flex-col">
            {solutions.map((s, i) => (
              <div
                key={s.id}
                className="group relative py-8 sm:py-10 border-b border-[var(--v3-line)] last:border-b-0 transition-colors hover:bg-[rgba(17,20,24,0.3)]"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 mb-4">
                  <span className="v3-num">/ 0{i + 1}</span>
                  <h3 className="v3-display text-3xl sm:text-4xl text-[var(--v3-ink)] group-hover:text-[var(--v3-amber)] transition-colors">
                    {s.title}
                  </h3>
                  <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em] ml-auto">
                    {s.label}
                  </span>
                </div>
                <p className="v3-mono text-sm text-[var(--v3-ink-soft)] leading-relaxed pl-0 sm:pl-12 mb-4 max-w-2xl">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2 pl-0 sm:pl-12">
                  {s.features.map(f => (
                    <span
                      key={f}
                      className="v3-mono text-[10px] uppercase tracking-[0.14em] text-[var(--v3-ink-soft)] px-2.5 py-1 border border-[var(--v3-line-strong)]"
                    >
                      › {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
