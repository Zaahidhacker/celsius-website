"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, company } from "@/lib/content";

/**
 * V3 NAVBAR — Tactical Telemetry / Dark Tech
 * - Sharp 90° corners (no rounded pill) — brutalist
 * - Monospace nav labels with › prefix
 * - Morphing 2-line → X hamburger
 * - Full-screen vantablack mobile menu with staggered reveal
 * - V1/V2/V3 switcher in monospace
 */
export default function V3Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const versions = [
    { label: "V1", href: "/" },
    { label: "V2", href: "/v2" },
    { label: "V3", href: "/v3" },
  ];
  const activeVersion = versions.find(v => v.href === pathname)?.label ?? "V3";

  return (
    <>
      <header
        className={`v3-nav ${scrolled ? "is-scrolled" : ""}`}
        style={{ width: "calc(100% - 1.5rem)", maxWidth: "80rem" }}
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3">
          {/* Logo — monospace wordmark + status dot */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 bg-[var(--v3-amber)]" />
              <span className="absolute inset-0 bg-[var(--v3-amber)] animate-ping opacity-60" />
            </span>
            <span className="v3-display text-base sm:text-lg tracking-tight">
              CELSIUS
            </span>
            <span className="v3-mono text-[9px] text-[var(--v3-ink-faint)] uppercase tracking-[0.2em] hidden sm:inline-block">
              / EST. 2019
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.slice(0, 5).map((l) => (
              <a key={l.label} href={l.href} className="v3-nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: version switcher + CTA + burger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Version switcher — monospace, sharp corners */}
            <div className="flex items-center border border-[var(--v3-line-strong)]">
              {versions.map(v => (
                <Link
                  key={v.label}
                  href={v.href}
                  className={`v3-mono text-[10px] font-medium uppercase tracking-[0.16em] px-2.5 py-1.5 transition-colors ${
                    v.label === activeVersion
                      ? "bg-[var(--v3-amber)] text-[var(--v3-bg)]"
                      : "text-[var(--v3-ink-soft)] hover:text-[var(--v3-amber)]"
                  }`}
                >
                  {v.label}
                </Link>
              ))}
            </div>

            <a href="#contact" className="v3-btn v3-btn-primary hidden md:inline-flex" style={{ padding: "0.625rem 1rem", fontSize: "0.6875rem" }}>
              Book demo
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 grid place-items-center border border-[var(--v3-line-strong)] text-[var(--v3-ink)] hover:border-[var(--v3-amber)] hover:text-[var(--v3-amber)] transition-colors"
            >
              <span className="v3-burger" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div aria-hidden className="h-20" />

      {/* Full-screen mobile menu — conditionally rendered to skip compositing when closed */}
      {menuOpen && (
      <div
        className="v3-menu flex flex-col"
        style={{ animation: "v3-menu-in 0.5s var(--ease-out-expo) both" }}
      >
        {/* Amber hazard top stripe */}
        <div className="v3-hazard h-1.5" />

        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[var(--v3-line)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[var(--v3-amber)]" />
            <span className="v3-display text-base">CELSIUS</span>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 grid place-items-center border border-[var(--v3-line-strong)] text-[var(--v3-ink)] hover:border-[var(--v3-amber)] hover:text-[var(--v3-amber)] transition-colors"
          >
            <span className="v3-burger is-open" />
          </button>
        </div>

        {/* Nav links — staggered reveal */}
        <nav className="flex-1 flex flex-col justify-center px-4 sm:px-6 overflow-y-auto">
          <span className="v3-eyebrow mb-6">/ NAVIGATION</span>
          <div className="flex flex-col">
            {navLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 sm:gap-6 py-3 sm:py-4 border-b border-[var(--v3-line)] hover:border-[var(--v3-amber)] transition-colors"
                style={{
                  animation: `v3-link-in 0.5s ${0.1 + i * 0.06}s var(--ease-out-expo) both`,
                }}
              >
                <span className="v3-num">0{i + 1}</span>
                <span className="v3-display group-hover:text-[var(--v3-amber)] transition-colors"
                      style={{ fontSize: "clamp(2rem, 9vw, 3.5rem)" }}>
                  {l.label}
                </span>
                <span className="v3-mono text-[10px] text-[var(--v3-ink-faint)] ml-auto hidden sm:inline-block">
                  {l.desc}
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom contact data */}
        <div className="px-4 sm:px-6 py-5 border-t border-[var(--v3-line)] v3-grid-dividers grid-cols-2 sm:grid-cols-3" style={{ display: "grid" }}>
          <div className="flex flex-col gap-1">
            <span className="v3-data-label">PHONE</span>
            <a href={company.phoneHref} className="v3-data-value text-left hover:text-[var(--v3-amber)] transition-colors">
              {company.phone}
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="v3-data-label">EMAIL</span>
            <a href={company.emailHref} className="v3-data-value text-left hover:text-[var(--v3-amber)] transition-colors truncate">
              {company.email}
            </a>
          </div>
          <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
            <span className="v3-data-label">LOCATION</span>
            <span className="v3-data-value text-left">Colombo, LK</span>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
