"use client";

/**
 * V10Navbar — minimal sticky top nav.
 *
 * Logo lockup on the left (Celsius wordmark + snowflake mark),
 * small nav links on the right (Work · Services · Brands · Contact).
 * Translucent dark glass so it sits over the canvas without clashing.
 */

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#reviews" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export default function V10Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`v10-nav ${scrolled ? "is-scrolled" : ""}`}>
      <Link href="/v10" className="v10-nav-logo" aria-label="Celsius home">
        <svg viewBox="0 0 32 32" className="v10-nav-mark" aria-hidden>
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M16 7v18M7 16h18M10 10l12 12M22 10L10 22"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        <span className="v10-nav-word">Celsius</span>
      </Link>

      <nav className={`v10-nav-links ${open ? "is-open" : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="v10-nav-link"
          >
            {l.label}
          </a>
        ))}
        <a href="tel:+94777136560" className="v10-nav-cta">
          +94 777 136 560
        </a>
      </nav>

      <button
        className={`v10-nav-burger ${open ? "is-open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
