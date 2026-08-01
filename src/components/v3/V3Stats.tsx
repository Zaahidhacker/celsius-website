"use client";

import { stats } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 STATS — Climate Atelier
 * Temperature-gradient numbers in asymmetric bento (not 4-col equal).
 * First stat is the hero stat (larger, gradient); rest are smaller.
 */
export default function V3Stats() {
  return (
    <section className="border-y border-[var(--v3-line)]">
      <div className="v3-container py-14 sm:py-20">
        <div className="v3-bento grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const isHero = i === 0;
            return (
              <V3Reveal
                key={s.label}
                delay={i * 60}
                className={`flex flex-col gap-2 ${isHero ? "p-8 sm:p-10" : "p-6 sm:p-8"}`}
              >
                <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)]">
                  0{i + 1}
                </span>
                <span
                  className={`v3-stat-num ${isHero ? "v3-temp-grad" : "text-[var(--v3-ink)]"}`}
                  style={{ fontSize: isHero ? "clamp(3rem, 6vw, 4.5rem)" : "clamp(2.25rem, 4vw, 3rem)" }}
                >
                  {s.number}
                </span>
                <span className="text-sm text-[var(--v3-ink-soft)] font-medium">
                  {s.label}
                </span>
              </V3Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
