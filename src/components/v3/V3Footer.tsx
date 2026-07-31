"use client";

import { company, navLinks } from "@/lib/content";

/**
 * V3 FOOTER — minimal monospace, hazard stripe top, telemetry layout
 */
export default function V3Footer() {
  return (
    <footer className="v3-root border-t border-[var(--v3-line)]">
      {/* Hazard top stripe */}
      <div className="v3-hazard h-1.5" />

      <div className="v3-container py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[var(--v3-amber)]" />
              <span className="v3-display text-lg">CELSIUS</span>
            </div>
            <p className="v3-mono text-xs text-[var(--v3-ink-soft)] leading-relaxed max-w-xs">
              {company.tagline}. Supply, install &amp; service across Sri Lanka.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="v3-eyebrow mb-2">/ NAVIGATE</span>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="v3-nav-link w-fit">{l.label}</a>
            ))}
          </div>

          {/* Contact data */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="v3-eyebrow mb-2">/ CONTACT</span>
            <a href={company.phoneHref} className="v3-mono text-xs text-[var(--v3-ink-soft)] hover:text-[var(--v3-amber)] transition-colors">
              › {company.phone}
            </a>
            <a href={company.emailHref} className="v3-mono text-xs text-[var(--v3-ink-soft)] hover:text-[var(--v3-amber)] transition-colors break-all">
              › {company.email}
            </a>
            <span className="v3-mono text-xs text-[var(--v3-ink-soft)]">
              › {company.address[0]}
            </span>
            <span className="v3-mono text-xs text-[var(--v3-ink-soft)]">
              › {company.address[1]}
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-5 border-t border-[var(--v3-line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em]">
            © {new Date().getFullYear()} CELSIUS / AIRCON CELSIUS PVT (LTD)
          </span>
          <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em]">
            REV 3.0 / COLOMBO · LK
          </span>
        </div>
      </div>
    </footer>
  );
}
