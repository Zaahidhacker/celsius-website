"use client";

import { useState } from "react";

/**
 * V3 CONTACT — split layout, monospace form inputs, telemetry info panel
 */
export default function V3Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="v3-section">
      <div className="v3-container">
        <div className="v3-divider mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="v3-eyebrow">/ 07 — CONTACT</span>
            <h2 className="v3-display" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              Start a <span className="v3-amber-text">project.</span>
            </h2>
            <p className="v3-mono text-sm text-[var(--v3-ink-soft)] max-w-md leading-relaxed">
              Tell us about your space. We&apos;ll respond within 24 hours.
            </p>

            <div className="v3-card p-6 mt-2">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--v3-line)]">
                <span className="v3-eyebrow">/ CHANNELS</span>
                <span className="v3-mono text-[10px] text-[var(--v3-amber)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[var(--v3-amber)] animate-pulse" />
                  ONLINE
                </span>
              </div>
              <div className="flex flex-col">
                <a href="tel:+94777136560" className="v3-data-row hover:bg-[rgba(17,20,24,0.3)] -mx-2 px-2 transition-colors">
                  <span className="v3-data-label">› PHONE</span>
                  <span className="v3-data-value hover:text-[var(--v3-amber)] transition-colors">+94 777 136 560</span>
                </a>
                <a href="mailto:ijazniyaz1234@gmail.com" className="v3-data-row hover:bg-[rgba(17,20,24,0.3)] -mx-2 px-2 transition-colors">
                  <span className="v3-data-label">› EMAIL</span>
                  <span className="v3-data-value hover:text-[var(--v3-amber)] transition-colors truncate">ijazniyaz1234@gmail.com</span>
                </a>
                <div className="v3-data-row">
                  <span className="v3-data-label">› HOURS</span>
                  <span className="v3-data-value">MON – SAT · 08:30 – 18:30</span>
                </div>
                <div className="v3-data-row">
                  <span className="v3-data-label">› LOCATION</span>
                  <span className="v3-data-value text-right leading-tight">47/3 Srimaha Vihara Rd<br />Kalubowila, Dehiwala</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 lg:pl-6">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="v3-card p-6 sm:p-8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between mb-2 pb-3 border-b border-[var(--v3-line)]">
                <span className="v3-eyebrow">/ TRANSMISSION</span>
                <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em]">FORM.PROTOCOL</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="v3-mono text-[10px] uppercase tracking-[0.14em] text-[var(--v3-ink-faint)]">/ NAME</span>
                  <input type="text" required placeholder="Enter name" className="v3-input" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="v3-mono text-[10px] uppercase tracking-[0.14em] text-[var(--v3-ink-faint)]">/ PHONE</span>
                  <input type="tel" required placeholder="Enter phone" className="v3-input" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="v3-mono text-[10px] uppercase tracking-[0.14em] text-[var(--v3-ink-faint)]">/ EMAIL</span>
                <input type="email" required placeholder="Enter email" className="v3-input" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="v3-mono text-[10px] uppercase tracking-[0.14em] text-[var(--v3-ink-faint)]">/ REQUIREMENTS</span>
                <textarea required rows={4} placeholder="Describe your space" className="v3-input resize-none" />
              </label>

              <div className="flex items-center justify-between gap-4 pt-2 mt-2 border-t border-[var(--v3-line)]">
                <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.14em]">
                  {submitted ? "› TRANSMISSION RECEIVED" : "› AWAITING INPUT"}
                </span>
                <button type="submit" className="v3-btn v3-btn-primary">
                  {submitted ? "Sent" : "Send transmission"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
