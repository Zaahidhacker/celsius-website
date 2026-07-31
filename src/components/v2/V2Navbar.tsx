"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import VersionSwitcher from "../VersionSwitcher";
import { navLinks } from "@/lib/content";

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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 v2-font-sans ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[rgba(15,47,99,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/v2" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-[28px] v2-font-serif italic font-medium text-[var(--brand-deep)] tracking-tight">
              Celsius
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] mt-1.5">
              Est. 2019
            </span>
          </Link>

          {/* Center: nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 5).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium text-[rgba(15,47,99,0.7)] hover:text-[var(--brand-deep)] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--accent-amber)] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: version switcher + CTA + burger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <VersionSwitcher theme="light" />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--brand-deep)] text-white text-xs font-semibold hover:bg-[var(--accent-amber)] hover:text-[var(--brand-deep)] transition-colors"
            >
              Book Demo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-[rgba(15,47,99,0.15)] hover:border-[var(--accent-amber)] hover:bg-[var(--accent-amber)]/10 transition-all"
            >
              <Menu className="w-5 h-5 text-[var(--brand-deep)]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] bg-[var(--brand-deep)] text-white flex flex-col v2-font-sans transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: menuOpen ? "translateY(0)" : "translateY(-8px)" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(245,166,35,0.4), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(87,144,230,0.4), transparent 55%)",
        }} />

        <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-5">
          <span className="text-2xl v2-font-serif italic font-medium">Celsius</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 grid place-items-center rounded-full bg-white/10 border border-white/20 hover:bg-[var(--accent-amber)] hover:border-[var(--accent-amber)] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline gap-4 py-3 border-b border-white/10 hover:border-[var(--accent-amber)]/50 transition-colors"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ${0.05 + i * 0.05}s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s ${0.05 + i * 0.05}s cubic-bezier(0.16, 1, 0.3, 1)`,
              }}
            >
              <span className="text-[11px] font-mono text-[var(--accent-amber)] tabular-nums">0{i + 1}</span>
              <span className="text-4xl sm:text-5xl v2-font-serif italic font-medium group-hover:text-[var(--accent-amber)] transition-colors">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="relative z-10 px-5 sm:px-8 py-6 border-t border-white/10">
          <a href="tel:+94777136560" className="block text-sm text-white/70 mb-2">+94 777 136 560</a>
          <a href="mailto:ijazniyaz1234@gmail.com" className="block text-sm text-white/70">ijazniyaz1234@gmail.com</a>
        </div>
      </div>
    </>
  );
}
