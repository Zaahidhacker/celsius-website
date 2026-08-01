"use client";

import { company, navLinks } from "@/lib/content";

/**
 * V3 FOOTER — Climate Atelier
 * Minimal, 1px borders, sky accent. Three-column layout.
 */
export default function V3Footer() {
  return (
    <footer className="border-t border-[var(--v3-line)] bg-[var(--v3-surface-2)]">
      <div className="v3-container py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--v3-sky)]" />
              <span className="v3-display text-lg text-[var(--v3-ink)]">Celsius</span>
            </div>
            <p className="text-sm text-[var(--v3-ink-soft)] leading-relaxed max-w-xs">
              {company.tagline}. Supply, installation &amp; service across Sri Lanka.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <span className="v3-eyebrow mb-1">Navigate</span>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="text-sm text-[var(--v3-ink-soft)] hover:text-[var(--v3-sky-deep)] transition-colors w-fit">
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="v3-eyebrow mb-1">Contact</span>
            <a href={company.phoneHref} className="text-sm text-[var(--v3-ink-soft)] hover:text-[var(--v3-sky-deep)] transition-colors">
              {company.phone}
            </a>
            <a href={company.emailHref} className="text-sm text-[var(--v3-ink-soft)] hover:text-[var(--v3-sky-deep)] transition-colors break-all">
              {company.email}
            </a>
            <span className="text-sm text-[var(--v3-ink-soft)]">
              {company.address[0]}
            </span>
            <span className="text-sm text-[var(--v3-ink-soft)]">
              {company.address[1]}
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-[var(--v3-line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="v3-mono text-[11px] text-[var(--v3-ink-faint)] uppercase tracking-wider">
            © {new Date().getFullYear()} Celsius / Aircon Celsius Pvt (Ltd)
          </span>
          <span className="v3-mono text-[11px] text-[var(--v3-ink-faint)] uppercase tracking-wider">
            Colombo · Sri Lanka
          </span>
        </div>
      </div>
    </footer>
  );
}
