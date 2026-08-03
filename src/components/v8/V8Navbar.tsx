"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function V8Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="v8-nav">
        <div className="v8-nav-inner">
          <Link href="/v8" aria-label="Celsius home">
            <img src="/celsius-logo-navy.png" alt="Celsius" />
          </Link>

          <ul className="v8-nav-links">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="v8-nav-cta">
            Book a demo <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            className="v8-nav-burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className={`v8-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="v8-menu-header">
          <img
            src="/celsius-logo-white.png"
            alt="Celsius"
            style={{ height: 34, width: "auto" }}
          />
          <button
            type="button"
            className="v8-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <ul className="v8-menu-links">
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
