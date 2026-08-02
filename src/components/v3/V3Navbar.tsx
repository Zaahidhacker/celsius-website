"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, company } from "@/lib/content";

/**
 * V3 NAVBAR — Climate Atelier
 * Light glass pill, sky accent dot, segmented version switcher.
 * Clean full-screen mobile menu with staggered cascade.
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
    { label: "V4", href: "/v4" },
    { label: "V5", href: "/v5" },
    { label: "V6", href: "/v6" },
  ];
  const activeVersion = versions.find(v => v.href === pathname)?.label ?? "V3";

  return (
    <>
      <header
        className={`v3-nav ${scrolled ? "is-scrolled" : ""}`}
        style={{ width: "calc(100% - 1.5rem)", maxWidth: "72rem" }}
      >
        <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-3">
          {/* Logo — wordmark + sky dot */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative w-2.5 h-2.5 flex-shrink-0">
              <span className="absolute inset-0 rounded-full bg-[var(--v3-sky)]" />
              <span className="absolute inset-0 rounded-full bg-[var(--v3-sky)] animate-ping opacity-40" />
            </span>
            <span className="v3-display text-lg tracking-tight text-[var(--v3-ink)]">
              Celsius
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 5).map((l) => (
              <a key={l.label} href={l.href} className="v3-nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: version switcher + CTA + burger */}
          <div className="flex items-center gap-2.5">
            <div className="v3-version-pill hidden sm:inline-flex">
              {versions.map(v => (
                <Link
                  key={v.label}
                  href={v.href}
                  className={v.label === activeVersion ? "is-active" : ""}
                >
                  {v.label}
                </Link>
              ))}
            </div>

            <a href="#contact" className="v3-btn v3-btn-primary hidden md:inline-flex" style={{ padding: "0.625rem 1.125rem", fontSize: "0.8125rem" }}>
              Book demo
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 grid place-items-center text-[var(--v3-ink)] hover:text-[var(--v3-sky-deep)] transition-colors"
            >
              <span className="v3-burger" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div aria-hidden className="h-20" />

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="v3-menu flex flex-col"
          style={{ animation: "v3-menu-in 0.5s var(--ease-out-expo) both" }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[var(--v3-line)]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--v3-sky)]" />
              <span className="v3-display text-lg">Celsius</span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 grid place-items-center text-[var(--v3-ink)] hover:text-[var(--v3-sky-deep)] transition-colors"
            >
              <span className="v3-burger is-open" />
            </button>
          </div>

          {/* Nav links — staggered cascade */}
          <nav className="flex-1 flex flex-col justify-center px-5 sm:px-6 overflow-y-auto">
            <span className="v3-eyebrow mb-6">Navigation</span>
            <div className="flex flex-col">
              {navLinks.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 py-4 border-b border-[var(--v3-line)] hover:border-[var(--v3-sky)] transition-colors"
                  style={{
                    animation: `v3-link-in 0.5s ${0.1 + i * 0.06}s var(--ease-out-expo) both`,
                  }}
                >
                  <span className="v3-mono text-xs text-[var(--v3-sky-deep)] font-medium">
                    0{i + 1}
                  </span>
                  <span className="v3-display text-3xl sm:text-4xl text-[var(--v3-ink)] group-hover:text-[var(--v3-sky-deep)] transition-colors">
                    {l.label}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          {/* Bottom contact */}
          <div className="px-5 sm:px-6 py-5 border-t border-[var(--v3-line)] grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="v3-mono text-[10px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Phone</span>
              <a href={company.phoneHref} className="text-sm text-[var(--v3-ink)] hover:text-[var(--v3-sky-deep)] transition-colors">
                {company.phone}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="v3-mono text-[10px] uppercase tracking-wider text-[var(--v3-ink-faint)]">Location</span>
              <span className="text-sm text-[var(--v3-ink)]">Colombo, LK</span>
            </div>
          </div>

          {/* Version switcher in menu */}
          <div className="px-5 sm:px-6 pb-6">
            <div className="v3-version-pill w-full justify-between" style={{ display: "flex" }}>
              {versions.map(v => (
                <Link
                  key={v.label}
                  href={v.href}
                  className={v.label === activeVersion ? "is-active flex-1 text-center" : "flex-1 text-center"}
                >
                  {v.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
