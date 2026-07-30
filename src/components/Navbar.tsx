"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import CelsiusLogo from "./CelsiusLogo";

const navLinks = [
  {
    label: "Services",
    href: "#services",
    desc: "Supply, installation & maintenance",
  },
  {
    label: "Solutions",
    href: "#solutions",
    desc: "Domestic, commercial & industrial",
  },
  {
    label: "Brands",
    href: "#brands",
    desc: "9 premium AC brands we carry",
  },
  {
    label: "Projects",
    href: "#case-studies",
    desc: "Real installations across Sri Lanka",
  },
  {
    label: "About",
    href: "#about",
    desc: "Celsius since 2019",
  },
  {
    label: "Contact",
    href: "#contact",
    desc: "Talk to a specialist today",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Lock Escape to close the menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "celsius-header-blur border-b border-[rgba(15,47,99,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
          {/* Left: desktop nav links */}
          <div className="flex-1 hidden lg:flex items-center gap-8 text-[13px] font-normal text-[rgba(15,47,99,0.85)]">
            {navLinks.slice(0, 3).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative hover:text-[rgba(15,47,99,1)] transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--accent-amber)] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Center: logo — white over dark hero, navy when scrolled onto light bg */}
          <a
            href="#top"
            className="flex-shrink-0 flex justify-center"
            aria-label="Celsius home"
          >
            <CelsiusLogo variant={scrolled ? "default" : "light"} />
          </a>

          {/* Right: book demo + burger */}
          <div className="flex-1 flex items-center justify-end gap-3 md:gap-5">
            <a
              href="#contact"
              className="hidden md:inline-flex celsius-pill celsius-pill-amber text-[12px] py-2.5 px-5 celsius-shadow-amber"
            >
              <span>Book Demo</span>
              <ArrowUpRight className="w-4 h-4 celsius-pill-arrow" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="group relative w-11 h-11 grid place-items-center rounded-full bg-white/70 backdrop-blur-md border border-[rgba(15,47,99,0.12)] hover:border-[var(--accent-amber)] hover:bg-white transition-all celsius-shadow-soft"
            >
              <Menu className="w-5 h-5 text-[rgba(15,47,99,0.85)] transition-colors group-hover:text-[var(--accent-amber-deep)]" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen premium menu overlay — pure CSS transitions (no motion dep) */}
      <div
        className={`fixed inset-0 z-[100] bg-[#0a1d3f] text-white flex flex-col overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        {/* Mesh gradient backdrop (static CSS gradients — fast, no WebGL) */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4 }}>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(87, 144, 230, 0.45), transparent 60%)," +
                "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(245, 166, 35, 0.35), transparent 55%)," +
                "radial-gradient(ellipse 70% 60% at 60% 80%, rgba(37, 99, 201, 0.40), transparent 60%)," +
                "radial-gradient(ellipse 60% 50% at 30% 75%, rgba(11, 110, 151, 0.35), transparent 55%)",
            }}
          />
        </div>

        {/* Animated amber orb (CSS-only animation) */}
        <div
          className="absolute top-1/3 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 166, 35, 0.35) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: menuOpen ? "celsius-float-orb 14s ease-in-out infinite" : "none",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(87, 144, 230, 0.30) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: menuOpen ? "celsius-float-orb 18s ease-in-out infinite reverse" : "none",
          }}
        />

        {/* Subtle dot grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top bar — logo + close button */}
        <div className="relative z-10 px-5 md:px-10 py-5 flex items-center justify-between">
          <CelsiusLogo variant="light" />
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="group relative w-11 h-11 grid place-items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[var(--accent-amber)] hover:border-[var(--accent-amber)] transition-all"
            >
              <X className="w-5 h-5 text-white transition-transform group-hover:rotate-90" />
            </button>
          </div>
        </div>

        {/* Main split layout: nav links (left) + contact card (right) */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row min-h-0">
          {/* Left: nav links */}
          <nav className="flex-1 flex flex-col justify-center px-5 md:px-10 lg:px-14 py-6 lg:py-0 overflow-y-auto celsius-scroll">
            <span className="celsius-chip-light mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Navigation
            </span>
            <div className="flex flex-col gap-1 md:gap-2">
              {navLinks.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="group relative flex items-baseline gap-4 md:gap-6 py-1.5 md:py-2 border-b border-white/[0.06] hover:border-[var(--accent-amber)]/40 transition-colors"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ${0.05 + i * 0.05}s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s ${0.05 + i * 0.05}s cubic-bezier(0.16, 1, 0.3, 1)`,
                  }}
                >
                  <span className="text-[10px] md:text-xs font-mono text-[var(--accent-amber)]/80 tabular-nums">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 flex-1 min-w-0">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1] group-hover:text-[var(--accent-amber)] transition-colors duration-300">
                      {l.label}
                    </span>
                    <span className="text-[11px] md:text-sm text-white/45 group-hover:text-white/70 transition-colors font-normal mt-1 md:mt-0 md:ml-auto md:text-right">
                      {l.desc}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/30 group-hover:text-[var(--accent-amber)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </a>
              ))}
            </div>
          </nav>

          {/* Right: contact card with glassmorphism */}
          <aside
            className="lg:w-[420px] xl:w-[460px] flex-shrink-0 p-5 md:p-10 lg:p-8 xl:p-10 flex flex-col gap-5 lg:border-l border-white/10"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="celsius-glass-dark rounded-3xl p-6 md:p-7 flex flex-col gap-5">
              <div>
                <span className="celsius-chip-light mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  Get in touch
                </span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                  Ready to transform your space?
                </h3>
                <p className="text-sm text-white/55 mt-2 leading-relaxed">
                  Talk to a Celsius specialist for a personalized
                  consultation.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+94777136560"
                  className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent-amber)]/40 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[var(--accent-amber)]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-white/45">
                      Call us
                    </span>
                    <span className="text-sm font-medium text-white truncate group-hover:text-[var(--accent-amber)] transition-colors">
                      +94 777 136 560
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:ijazniyaz1234@gmail.com"
                  className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent-amber)]/40 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[var(--accent-amber)]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-white/45">
                      Email
                    </span>
                    <span className="text-sm font-medium text-white truncate group-hover:text-[var(--accent-amber)] transition-colors">
                      ijazniyaz1234@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[var(--accent-amber)]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-white/45">
                      Visit
                    </span>
                    <span className="text-sm font-medium text-white leading-snug">
                      No. 47/3 Srimaha Vihara Road,
                      <br />
                      Kalubowila, Dehiwala
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 grid place-items-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[var(--accent-amber)]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-white/45">
                      Hours
                    </span>
                    <span className="text-sm font-medium text-white">
                      Mon – Sat · 8:30am – 6:30pm
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="celsius-pill celsius-pill-amber celsius-shadow-amber mt-1 justify-center"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-4 h-4 celsius-pill-arrow" />
              </a>
            </div>
          </aside>
        </div>

        {/* Bottom strip — marquee with stats */}
        <div
          className="relative z-10 overflow-hidden border-t border-white/10 py-3 celsius-accent-strip"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.6s 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="flex items-center gap-8 whitespace-nowrap celsius-marquee-track">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-8 flex-shrink-0">
                {[
                  "Excellence in Cooling Since 2019",
                  "9 Premium Brands",
                  "40+ Business Clients",
                  "Domestic · Commercial · Industrial",
                  "Transparent Pricing",
                ].map((s) => (
                  <span
                    key={s + k}
                    className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold"
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
