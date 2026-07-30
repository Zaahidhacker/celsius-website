"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CelsiusLogo from "./CelsiusLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Brands", href: "#brands" },
  { label: "Projects", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
                className="relative hover:text-[rgba(15,47,99,1)] transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[rgba(15,47,99,0.4)] hover:after:w-full after:transition-all"
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
              className="hidden md:inline-flex celsius-pill celsius-pill-solid text-[12px] py-2.5 px-5"
            >
              <span>Book Demo</span>
              <ArrowUpRight className="w-4 h-4 celsius-pill-arrow" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="w-10 h-10 grid place-items-center rounded-full bg-[rgba(15,47,99,0.06)] border border-[rgba(15,47,99,0.1)] hover:bg-[rgba(15,47,99,0.12)] transition-colors"
            >
              <Menu className="w-5 h-5 text-[rgba(15,47,99,0.85)]" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#0f2f63] text-white flex flex-col"
          >
            <div className="px-5 md:px-10 py-5 flex items-center justify-between">
              <CelsiusLogo variant="light" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-5 md:px-10 gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.5 }}
                  className="text-5xl md:text-7xl font-medium tracking-tight hover:text-[#5790e6] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-5 md:px-10 py-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="celsius-pill celsius-pill-light"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-4 h-4 celsius-pill-arrow" />
              </a>
              <div className="flex items-center gap-5 text-sm text-white/70">
                <a href="tel:+94777136560" className="hover:text-white">+94 777 136 560</a>
                <a
                  href="mailto:ijazniyaz1234@gmail.com"
                  className="hover:text-white"
                >
                  ijazniyaz1234@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
