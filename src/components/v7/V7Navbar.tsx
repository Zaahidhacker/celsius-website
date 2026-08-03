"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * V7 Navbar — Editorial Brutalist
 * Sticky paper bar with the real Celsius logo, mono nav links with amber
 * underline-grow on hover, amber-shadowed navy CTA, full-screen mobile menu.
 */
const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function V7Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="v7-nav">
        <div className="v7-nav-inner">
          <Link href="/v7" className="v7-nav-brand" aria-label="Celsius home">
            <img src="/celsius-logo-navy.png" alt="Celsius" />
          </Link>

          <ul className="v7-nav-links">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="v7-nav-cta">
            Book a demo
            <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            className="v7-nav-burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className={`v7-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="v7-menu-header">
          <img
            src="/celsius-logo-white.png"
            alt="Celsius"
            style={{ height: 36, width: "auto" }}
          />
          <button
            type="button"
            className="v7-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <ul className="v7-menu-links">
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="v7-menu-cta"
          onClick={() => setMenuOpen(false)}
        >
          Book a demo →
        </a>
      </div>
    </>
  );
}
