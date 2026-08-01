"use client";

import { ceo } from "@/lib/content";

/**
 * V3 CEO — massive pull quote with monospace attribution
 */
export default function V3Ceo() {
  return (
    <section className="border-y border-[var(--v3-line)] v3-section">
      <div className="v3-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <span className="v3-eyebrow">/ 05 — FOUNDER</span>
            <blockquote className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)", lineHeight: 1.05 }}>
              <span className="v3-amber-text">&ldquo;</span>
              {ceo.quote}
              <span className="v3-amber-text">&rdquo;</span>
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--v3-line)]">
              <div className="w-12 h-12 border border-[var(--v3-amber)] grid place-items-center v3-display text-lg text-[var(--v3-amber)]">
                {ceo.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="v3-display text-base text-[var(--v3-ink)]">{ceo.name}</span>
                <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em]">{ceo.role}</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <div className="v3-card p-6">
              <span className="v3-eyebrow mb-4 block">/ BIO</span>
              <p className="v3-mono text-xs text-[var(--v3-ink-soft)] leading-relaxed">{ceo.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
