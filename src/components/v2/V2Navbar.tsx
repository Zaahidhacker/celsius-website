"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import VersionSwitcher from "../VersionSwitcher";
import { navLinks } from "@/lib/content";

/**
 * V2 NAVBAR — Editorial magazine redesign.
 * - Warm cream palette (not white)
 * - Playfair Display serif logo (cursive italic accent)
 * - Floating pill (anti-slop: detached from top edge)
 * - Morphing hamburger
 * - Mobile-first responsive
 */
export default function V2Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-500 v2-font-sans ${
          scrolled
            ? "bg-[#FBF8F1]/90 backdrop-blur-xl border border-[rgba(26,31,46,0.08)] shadow-[0_12px_40px_-12px_rgba(26,31,46,0.12)]"
            : "bg-[#FBF8F1]/60 backdrop-blur-md border border-[rgba(26,31,46,0.06)]"
        }`}
        style={{ width: "calc(100% - 1.5rem)", maxWidth: "72rem", transitionTimingFunction: "var(--ease-out-expo)" }}
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5">
          {/* Logo — Playfair italic */}
          <Link href="/v2" className="flex items-baseline gap-2 group">
            <span className="v2-font-serif italic font-medium text-[var(--brand-deep)] tracking-tight" style={{ fontSize: "1.5rem" }}>
              Celsius
            </span>
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)]">
              Est. 2019
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 5).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium v2-ink-soft hover:text-[var(--brand-deep)] transition-colors celsius-link-underline celsius-sentence"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <VersionSwitcher theme="light" />
            <a
              href="#contact"
              className="hidden sm:inline-flex celsius-island-btn celsius-island-btn-light"
              style={{ padding: "0.5rem 0.5rem 0.5rem 1.125rem", fontSize: "0.75rem", background: "var(--brand-deep)", color: "white" }}
            >
              <span>Book demo</span>
              <span className="celsius-island-icon" style={{ width: "1.5rem", height: "1.5rem", background: "rgba(255,255,255,0.12)" }}>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-[var(--brand-deep)] text-white hover:bg-[var(--accent-amber)] hover:text-[var(--brand-deep)] transition-colors"
            >
              <span className="celsius-burger" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div aria-hidden className="h-20" />

      {/* Mobile menu — editorial dark with cream accents */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1A1F2E] text-white flex flex-col v2-font-sans transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: menuOpen ? "translateY(0)" : "translateY(-8px)", transitionTimingFunction: "var(--ease-out-expo)" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(245,166,35,0.4), transparent 60%)," +
            "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(87,144,230,0.4), transparent 55%)",
        }} />

        <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4">
          <span className="v2-font-serif italic font-medium" style={{ fontSize: "1.5rem" }}>Celsius</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 grid place-items-center rounded-full bg-white/10 border border-white/20 hover:bg-[var(--accent-amber)] hover:border-[var(--accent-amber)] hover:text-[var(--brand-deep)] transition-colors"
          >
            <span className="celsius-burger is-open" />
          </button>
        </div>

        <nav className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 overflow-y-auto">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline gap-3 sm:gap-4 py-2 sm:py-2.5 border-b border-white/10 hover:border-[var(--accent-amber)]/50 transition-colors"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ${0.1 + i * 0.06}s var(--ease-out-expo), transform 0.6s ${0.1 + i * 0.06}s var(--ease-out-expo)`,
              }}
            >
              <span className="text-[10px] font-mono text-[var(--accent-amber)] tabular-nums">0{i + 1}</span>
              <span className="v2-font-serif italic font-medium group-hover:text-[var(--accent-amber)] transition-colors celsius-sentence"
                    style={{ fontSize: "clamp(2rem, 9vw, 3.5rem)" }}>
                {l.label}
              </span>
              <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[var(--accent-amber)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ml-auto flex-shrink-0" />
            </a>
          ))}
        </nav>

        <div className="relative z-10 px-4 sm:px-6 py-5 border-t border-white/10 grid grid-cols-2 gap-3">
          <a href="tel:+94777136560" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center">
              <Phone className="w-4 h-4 text-[var(--accent-amber)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-wider text-white/45">Call</span>
              <span className="text-xs font-medium text-white">+94 777 136 560</span>
            </div>
          </a>
          <a href="mailto:ijazniyaz1234@gmail.com" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center">
              <Mail className="w-4 h-4 text-[var(--accent-amber)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-wider text-white/45">Email</span>
              <span className="text-xs font-medium text-white truncate">ijazniyaz1234@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
