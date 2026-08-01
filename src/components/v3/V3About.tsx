"use client";

import { about } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 ABOUT — Climate Atelier
 * Editorial split: Fraunces headline left, 4 pillars as 2x2 bento right.
 */
export default function V3About() {
  return (
    <section id="about" className="v3-section">
      <div className="v3-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + intro */}
          <V3Reveal className="lg:col-span-5 flex flex-col gap-5">
            <span className="v3-eyebrow">{about.eyebrow}</span>
            <h2 className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
              Where cooling meets{" "}
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">craft.</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--v3-ink-soft)] leading-relaxed max-w-md">
              {about.intro}
            </p>
            <div className="mt-4 p-5 border-l-2 border-[var(--v3-sky)] bg-[var(--v3-sky-tint)] rounded-r-lg">
              <p className="text-sm text-[var(--v3-ink)] leading-relaxed italic">
                &ldquo;{about.guarantee}&rdquo;
              </p>
            </div>
          </V3Reveal>

          {/* Right: 4 pillars as 2x2 bento */}
          <div className="lg:col-span-7">
            <div className="v3-bento grid grid-cols-1 sm:grid-cols-2">
              {about.pillars.map((p, i) => (
                <V3Reveal key={p.title} delay={i * 80} className="p-7 sm:p-8 flex flex-col gap-3">
                  {/* Custom SVG icon — minimalist-skill bans Lucide */}
                  <span className="w-10 h-10 rounded-lg bg-[var(--v3-sky-tint)] border border-[var(--v3-sky-soft)] grid place-items-center text-[var(--v3-sky-deep)]">
                    <PillarIcon name={p.icon} />
                  </span>
                  <h3 className="font-semibold text-base text-[var(--v3-ink)] mt-2">{p.title}</h3>
                  <p className="text-sm text-[var(--v3-ink-soft)] leading-relaxed">{p.body}</p>
                </V3Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Custom inline SVG icons — minimalist-skill bans generic icon libraries */
function PillarIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "snowflake":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2v20M4.5 7l15 10M19.5 7l-15 10" />
          <path d="M12 6l-2 2M12 6l2 2M12 18l-2-2M12 18l2-2M6 9l1 2.5M18 9l-1 2.5M6 15l1-2.5M18 15l-1-2.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3l8 3v6c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common} aria-hidden>
          <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
          <path d="M5 19c4-4 8-6 12-8" />
        </svg>
      );
    case "users":
      return (
        <svg {...common} aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
          <path d="M16 5.5a3 3 0 010 5M21 20c0-2.5-1.5-4-3.5-4.5" />
        </svg>
      );
    default:
      return null;
  }
}
