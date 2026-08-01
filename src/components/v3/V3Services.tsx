"use client";

import { services } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 SERVICES — Climate Atelier
 * 2-column zig-zag layout (stitch-skill bans generic 3-col equal card rows).
 * Each service is a full row: number + name on one side, desc + arrow on other.
 * Alternates left/right alignment.
 */
export default function V3Services() {
  return (
    <section id="services" className="v3-section">
      <div className="v3-container">
        {/* Header */}
        <V3Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 sm:mb-16">
          <div className="flex flex-col gap-4">
            <span className="v3-eyebrow">What we do</span>
            <h2 className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(1.875rem, 5vw, 3.75rem)" }}>
              Four capabilities,{" "}
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">one standard.</span>
            </h2>
          </div>
          <p className="text-base text-[var(--v3-ink-soft)] max-w-sm leading-relaxed">
            Supply, installation, maintenance, and industrial systems — across domestic, commercial, and industrial sectors.
          </p>
        </V3Reveal>

        {/* Zig-zag list */}
        <div className="flex flex-col">
          {services.map((s, i) => {
            return (
              <V3Reveal key={s.idx} delay={i * 80}>
                <a
                  href={s.href}
                  className="group block py-6 sm:py-10 border-t border-[var(--v3-line)] last:border-b transition-colors hover:bg-[var(--v3-surface-2)] -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-lg"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 sm:items-baseline sm:[direction:rtl]">
                    {/* Number */}
                    <div className="sm:col-span-2 [direction:ltr]">
                      <span className="v3-mono text-sm text-[var(--v3-sky-deep)] font-medium">
                        / {s.idx}
                      </span>
                    </div>
                    {/* Name */}
                    <div className="sm:col-span-5 [direction:ltr]">
                      <h3 className="v3-display text-xl sm:text-3xl text-[var(--v3-ink)] group-hover:text-[var(--v3-sky-deep)] transition-colors">
                        {s.name}
                      </h3>
                    </div>
                    {/* Desc + arrow */}
                    <div className="sm:col-span-5 [direction:ltr] flex items-start justify-between gap-4">
                      <p className="text-sm text-[var(--v3-ink-soft)] leading-relaxed">
                        {s.desc}
                      </p>
                      <span className="w-9 h-9 rounded-full border border-[var(--v3-line-strong)] grid place-items-center text-[var(--v3-ink-soft)] group-hover:border-[var(--v3-sky)] group-hover:text-[var(--v3-sky-deep)] group-hover:bg-[var(--v3-sky-tint)] transition-all flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </V3Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
