"use client";

import { solutions } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 SOLUTIONS — Climate Atelier
 * 2-column zig-zag with sector icons (stitch-skill: no 3-col equal grids).
 * Sticky left header, alternating sector blocks on right.
 */
export default function V3Solutions() {
  return (
    <section id="solutions" className="v3-section">
      <div className="v3-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left sticky header */}
          <V3Reveal className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-32 self-start">
            <span className="v3-eyebrow">Sectors we serve</span>
            <h2 className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
              Three sectors,{" "}
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">one craft.</span>
            </h2>
            <p className="text-base text-[var(--v3-ink-soft)] leading-relaxed">
              Tailored cooling for every kind of space — from bedrooms to data centres.
            </p>
          </V3Reveal>

          {/* Right: sector blocks */}
          <div className="lg:col-span-8 flex flex-col">
            {solutions.map((s, i) => (
              <V3Reveal key={s.id} delay={i * 100}>
                <div className="group py-8 sm:py-10 border-t border-[var(--v3-line)] last:border-b transition-colors">
                  <div className="flex items-start gap-5 mb-5">
                    {/* Sector icon */}
                    <span className="w-12 h-12 rounded-xl bg-[var(--v3-sky-tint)] border border-[var(--v3-sky-soft)] grid place-items-center text-[var(--v3-sky-deep)] flex-shrink-0">
                      <SectorIcon name={s.icon} />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="v3-display text-2xl sm:text-3xl text-[var(--v3-ink)] group-hover:text-[var(--v3-sky-deep)] transition-colors">
                          {s.title}
                        </h3>
                        <span className="v3-tag-neutral v3-tag">{s.label}</span>
                      </div>
                      <p className="text-base text-[var(--v3-ink-soft)] leading-relaxed mb-4">
                        {s.body}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-17 sm:pl-[4.25rem]">
                    {s.features.map(f => (
                      <span key={f} className="v3-tag v3-tag-neutral">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </V3Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectorIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "home":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1v-9z" />
        </svg>
      );
    case "building":
      return (
        <svg {...common} aria-hidden>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
        </svg>
      );
    case "factory":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 21V11l6 4V11l6 4V7l6 3v11H3z" />
          <path d="M7 17h2M12 17h2M17 17h2" />
        </svg>
      );
    default:
      return null;
  }
}
