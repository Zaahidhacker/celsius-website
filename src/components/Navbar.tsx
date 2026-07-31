"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import CelsiusLogo from "./CelsiusLogo";
import VersionSwitcher from "./VersionSwitcher";
import { navLinks } from "@/lib/content";

/**
 * V1 NAVBAR — Redesigned with taste-skill anti-slop principles.
 * - Floating glass pill detached from top edge (not edge-to-edge sticky)
 * - Morphing hamburger (2 lines → X via pure CSS transform)
 * - Staggered mask reveal on mobile menu items
 * - Mobile-first responsive (single column under 768px, full pill on desktop)
 * - Simplified copy ("Book demo" instead of "Book a Demo")
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      {/* Floating glass pill nav — detached from top edge */}
      <header
        className={`celsius-floating-nav ${scrolled ? "is-scrolled" : ""}`}
        style={{ width: "calc(100% - 1.5rem)", maxWidth: "72rem" }}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2.5">
          {/* Logo */}
          <a href="#top" className="flex-shrink-0 flex items-center" aria-label="Celsius home">
            <CelsiusLogo variant={scrolled ? "default" : "default"} />
          </a>

          {/* Desktop nav links (lg+) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[rgba(15,47,99,0.7)]">
            {navLinks.slice(0, 5).map((l) => (
              <a key={l.label} href={l.href} className="celsius-link-underline hover:text-[var(--brand-deep)] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: version + CTA + burger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="hidden xs:block sm:block">
              <VersionSwitcher theme="light" />
            </div>
            <a href="#contact" className="hidden md:inline-flex celsius-island-btn celsius-island-btn-light celsius-shadow-soft" style={{ padding: "0.5rem 0.5rem 0.5rem 1.125rem", fontSize: "0.75rem" }}>
              <span>Book demo</span>
              <span className="celsius-island-icon" style={{ width: "1.5rem", height: "1.5rem" }}>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="group lg:hidden w-10 h-10 grid place-items-center rounded-full bg-[var(--brand-deep)] text-white hover:bg-[var(--accent-amber)] hover:text-[var(--brand-deep)] transition-colors"
            >
              <span className="celsius-burger" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to offset fixed nav height */}
      <div aria-hidden className="h-20" />

      {/* Fullscreen mobile menu — staggered mask reveal */}
      <div
        className={`fixed inset-0 z-[100] bg-[#0a1d3f] text-white flex flex-col overflow-hidden transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ transform: menuOpen ? "translateY(0)" : "translateY(-8px)", transitionTimingFunction: "var(--ease-out-expo)" }}
        aria-hidden={!menuOpen} role="dialog" aria-modal="true" aria-label="Site navigation"
      >
        {/* Ambient mesh gradient backdrop */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4 }}>
          <div className="absolute inset-0" style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(87, 144, 230, 0.45), transparent 60%)," +
              "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(245, 166, 35, 0.35), transparent 55%)," +
              "radial-gradient(ellipse 70% 60% at 60% 80%, rgba(37, 99, 201, 0.40), transparent 60%)",
          }} />
        </div>

        <div className="celsius-orb-amber" style={{ top: "20%", left: "-12rem" }} />
        <div className="celsius-orb-blue" style={{ bottom: "10%", right: "-12rem" }} />

        {/* Top bar */}
        <div className="relative z-10 px-4 sm:px-6 py-4 flex items-center justify-between">
          <CelsiusLogo variant="light" />
          <div className="flex items-center gap-2 sm:gap-3">
            <VersionSwitcher theme="dark" />
            <button
              type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"
              className="w-10 h-10 sm:w-11 sm:h-11 grid place-items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[var(--accent-amber)] hover:border-[var(--accent-amber)] hover:text-[var(--brand-deep)] transition-colors"
            >
              <span className="celsius-burger is-open" />
            </button>
          </div>
        </div>

        {/* Nav links — staggered mask reveal */}
        <nav className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-10 overflow-y-auto celsius-scroll">
          <span className="celsius-eyebrow-pill celsius-eyebrow-pill-amber-light mb-5 w-fit">Navigation</span>
          <div className="flex flex-col">
            {navLinks.map((l, i) => (
              <a
                key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="group relative flex items-baseline gap-3 sm:gap-5 py-2 sm:py-2.5 border-b border-white/[0.06] hover:border-[var(--accent-amber)]/40 transition-colors"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ${0.1 + i * 0.06}s var(--ease-out-expo), transform 0.6s ${0.1 + i * 0.06}s var(--ease-out-expo)`,
                }}
              >
                <span className="text-[10px] sm:text-xs font-mono text-[var(--accent-amber)]/80 tabular-nums">0{i + 1}</span>
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1] group-hover:text-[var(--accent-amber)] transition-colors duration-300 celsius-sentence">
                  {l.label}
                </span>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/30 group-hover:text-[var(--accent-amber)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-auto" />
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom contact strip */}
        <div className="relative z-10 px-4 sm:px-6 py-5 border-t border-white/10 grid grid-cols-2 gap-3 sm:gap-4">
          <a href="tel:+94777136560" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center">
              <Phone className="w-4 h-4 text-[var(--accent-amber)]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-white/45">Call</span>
              <span className="text-xs sm:text-sm font-medium text-white truncate">+94 777 136 560</span>
            </div>
          </a>
          <a href="mailto:ijazniyaz1234@gmail.com" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center">
              <Mail className="w-4 h-4 text-[var(--accent-amber)]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-white/45">Email</span>
              <span className="text-xs sm:text-sm font-medium text-white truncate">ijazniyaz1234@gmail.com</span>
            </div>
          </a>
          <div className="col-span-2 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center">
              <MapPin className="w-4 h-4 text-[var(--accent-amber)]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-white/45">Visit</span>
              <span className="text-xs sm:text-sm font-medium text-white">47/3 Srimaha Vihara Rd, Kalubowila</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
