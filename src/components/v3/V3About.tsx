"use client";

import { about } from "@/lib/content";

/**
 * V3 ABOUT — split layout, massive display type left, telemetry pillars right
 */
export default function V3About() {
  return (
    <section id="about" className="v3-section v3-root">
      <div className="v3-container">
        {/* Top divider */}
        <div className="v3-divider mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: heading */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="v3-eyebrow">/ 01 — ABOUT</span>
            <h2 className="v3-display" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              Cooling meets <span className="v3-amber-text">craft.</span>
            </h2>
            <p className="v3-mono text-sm sm:text-base text-[var(--v3-ink-soft)] max-w-xl leading-relaxed">
              Celsius has engineered comfort across Sri Lanka since 2019 — pairing premium brands with seasoned expertise.
            </p>
            <div className="mt-4 p-5 border-l-2 border-[var(--v3-amber)] bg-[var(--v3-surface)]/40">
              <p className="v3-mono text-xs sm:text-sm text-[var(--v3-ink)] leading-relaxed">
                &gt; {about.guarantee}
              </p>
            </div>
          </div>

          {/* Right: pillars as telemetry rows */}
          <div className="lg:col-span-5 lg:pl-6">
            <div className="v3-card p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[var(--v3-line)]">
                <span className="v3-eyebrow">/ PILLARS</span>
                <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em]">04 ITEMS</span>
              </div>
              <div className="flex flex-col">
                {about.pillars.map((p, i) => (
                  <div key={p.title} className="v3-data-row flex-col items-start gap-1.5 py-4">
                    <div className="flex items-center justify-between w-full">
                      <span className="v3-data-label">0{i + 1} / {p.title.toUpperCase()}</span>
                      <span className="v3-num">›</span>
                    </div>
                    <p className="v3-mono text-xs text-[var(--v3-ink-soft)] leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
