"use client";

import { stats } from "@/lib/content";

/**
 * V3 STATS — massive monospace numbers in a 4-column grid with crosshair markers
 */
export default function V3Stats() {
  return (
    <section className="v3-root border-y border-[var(--v3-line)]">
      <div className="v3-container py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ display: "grid", gap: "1px", background: "var(--v3-line)" }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative bg-[var(--v3-bg)] p-6 sm:p-8 flex flex-col gap-3"
            >
              {/* Crosshair at top-left of each cell */}
              <span className="absolute top-2 left-2 v3-crosshair w-3 h-3 opacity-50" />
              <span className="v3-num">0{i + 1}</span>
              <span className="v3-stat-num text-[var(--v3-ink)]" style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}>
                {s.number}
              </span>
              <span className="v3-mono text-[10px] uppercase tracking-[0.16em] text-[var(--v3-ink-faint)]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
