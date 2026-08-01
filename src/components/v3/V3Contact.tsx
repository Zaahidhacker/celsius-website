"use client";

import { useState } from "react";
import { company } from "@/lib/content";
import V3Reveal from "./V3Reveal";

/**
 * V3 CONTACT — Climate Atelier
 * Split layout: info panel left, clean form right with sky focus rings.
 */
export default function V3Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="v3-section">
      <div className="v3-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: info */}
          <V3Reveal className="lg:col-span-5 flex flex-col gap-6">
            <span className="v3-eyebrow">Start a project</span>
            <h2 className="v3-display text-[var(--v3-ink)]" style={{ fontSize: "clamp(1.875rem, 5vw, 3.75rem)" }}>
              Let&apos;s talk{" "}
              <span className="v3-display-italic text-[var(--v3-sky-deep)]">cooling.</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--v3-ink-soft)] leading-relaxed max-w-md">
              Tell us about your space. We&apos;ll respond within 24 hours with a tailored recommendation.
            </p>

            <div className="v3-card p-6 mt-2 flex flex-col gap-1">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--v3-line)]">
                <span className="v3-eyebrow">Channels</span>
                <span className="v3-tag">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--v3-sky)] animate-pulse" />
                  Online
                </span>
              </div>
              <a href={company.phoneHref} className="flex items-center justify-between py-3 border-b border-[var(--v3-line)] hover:text-[var(--v3-sky-deep)] transition-colors group">
                <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Phone</span>
                <span className="text-sm font-medium text-[var(--v3-ink)] group-hover:text-[var(--v3-sky-deep)] transition-colors">{company.phone}</span>
              </a>
              <a href={company.emailHref} className="flex items-center justify-between py-3 border-b border-[var(--v3-line)] hover:text-[var(--v3-sky-deep)] transition-colors group">
                <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Email</span>
                <span className="text-sm font-medium text-[var(--v3-ink)] group-hover:text-[var(--v3-sky-deep)] transition-colors truncate ml-4">{company.email}</span>
              </a>
              <div className="flex items-center justify-between py-3 border-b border-[var(--v3-line)]">
                <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Hours</span>
                <span className="text-sm text-[var(--v3-ink)]">{company.hours}</span>
              </div>
              <div className="flex items-start justify-between py-3">
                <span className="v3-mono text-[11px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Location</span>
                <span className="text-sm text-[var(--v3-ink)] text-right leading-snug">
                  {company.address[0]}<br />{company.address[1]}
                </span>
              </div>
            </div>
          </V3Reveal>

          {/* Right: form */}
          <V3Reveal delay={120} className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="v3-card p-5 sm:p-8 flex flex-col gap-4 sm:gap-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[var(--v3-line)]">
                <span className="v3-eyebrow">Project brief</span>
                <span className="v3-mono text-[11px] text-[var(--v3-ink-faint)] uppercase tracking-wider">
                  Step 1 / 1
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-[var(--v3-ink)]">Name</span>
                  <input type="text" required placeholder="Your name" className="v3-input" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-[var(--v3-ink)]">Phone</span>
                  <input type="tel" required placeholder="+94 ..." className="v3-input" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-[var(--v3-ink)]">Email</span>
                <input type="email" required placeholder="you@example.com" className="v3-input" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-[var(--v3-ink)]">Requirements</span>
                <textarea required rows={4} placeholder="Tell us about your space — size, sector, current setup..." className="v3-input resize-none" />
              </label>

              <div className="flex items-center justify-between gap-4 pt-3 mt-1 border-t border-[var(--v3-line)]">
                <span className="text-sm text-[var(--v3-ink-soft)]">
                  {submitted ? "Thanks — we'll be in touch shortly." : "We respond within 24 hours."}
                </span>
                <button type="submit" className="v3-btn v3-btn-primary">
                  {submitted ? "Sent" : "Send brief"}
                  {!submitted && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </V3Reveal>
        </div>
      </div>
    </section>
  );
}
