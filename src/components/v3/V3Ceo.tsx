"use client";

import { ceo } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 CEO — Climate Atelier
 * Editorial pull quote with Fraunces italic. Split layout: quote + bio card.
 */
export default function V3Ceo() {
  return (
    <section className="border-y border-[var(--v3-line)] v3-section">
      <div className="v3-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: quote */}
          <V3Reveal className="lg:col-span-8 flex flex-col gap-6">
            <span className="v3-eyebrow">{ceo.eyebrow}</span>
            <blockquote
              className="v3-display text-[var(--v3-ink)]"
              style={{ fontSize: "clamp(1.375rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
            >
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">&ldquo;</span>
              {ceo.quote}
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">&rdquo;</span>
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--v3-line)]">
              <div className="w-12 h-12 rounded-full bg-[var(--v3-sky-tint)] border border-[var(--v3-sky-soft)] grid place-items-center v3-display text-lg text-[var(--v3-sky-deep)]">
                {ceo.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base text-[var(--v3-ink)]">{ceo.name}</span>
                <span className="text-sm text-[var(--v3-ink-soft)]">{ceo.role}</span>
              </div>
            </div>
          </V3Reveal>

          {/* Right: bio card */}
          <V3Reveal delay={120} className="lg:col-span-4">
            <div className="v3-card v3-card-tint p-5 sm:p-7">
              <span className="v3-eyebrow mb-4 block">Background</span>
              <p className="text-sm text-[var(--v3-ink-soft)] leading-relaxed">{ceo.bio}</p>
            </div>
          </V3Reveal>
        </div>
      </div>
    </section>
  );
}
