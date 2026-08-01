"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#v5-services" },
  { label: "About", href: "#v5-about" },
  { label: "Process", href: "#v5-process" },
  { label: "Work", href: "#v5-testimonial" },
  { label: "Contact", href: "#v5-contact" },
];

export default function V5Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`v5-navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="v5-container">
          <div className="v5-navbar-inner">
            <a href="#top" className="v5-navbar-brand" aria-label="Celsius home">
              <span className="v5-navbar-brand-mark">C</span>
              Celsius
            </a>
            <div className="v5-navbar-links">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="v5-navbar-link">
                  {l.label}
                </a>
              ))}
            </div>
            <a href="#v5-contact" className="v5-btn v5-btn-white v5-navbar-cta">
              <span className="v5-btn-square" />
              Contact us
            </a>
            <button
              type="button"
              className={`v5-navbar-burger ${menuOpen ? "is-open" : ""}`}
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`v5-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="v5-mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#v5-contact"
          className="v5-btn v5-btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: "2rem" }}
        >
          <span className="v5-btn-square" />
          Contact us
        </a>
      </div>
    </>
  );
}
