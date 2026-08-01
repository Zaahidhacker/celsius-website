"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#v4-services" },
  { label: "Vision", href: "#v4-vision" },
  { label: "Brands", href: "#v4-brands" },
  { label: "Work", href: "#v4-work" },
  { label: "Contact", href: "#v4-contact" },
];

export default function V4Navbar() {
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
      <nav className={`v4-navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="v4-container">
          <div className="v4-navbar-inner">
            <a href="#top" className="v4-navbar-brand" aria-label="Celsius home">
              Celsius<span className="v4-navbar-brand-dot" />
            </a>
            <div className="v4-navbar-links">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="v4-navbar-link">
                  {l.label}
                </a>
              ))}
            </div>
            <a href="#v4-contact" className="v4-btn v4-btn-primary v4-navbar-cta">
              Book a demo
            </a>
            <button
              type="button"
              className="v4-navbar-burger"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`v4-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="v4-mobile-menu-header">
          <a href="#top" className="v4-navbar-brand" onClick={() => setMenuOpen(false)}>
            Celsius<span className="v4-navbar-brand-dot" />
          </a>
          <button
            type="button"
            className="v4-mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <div className="v4-mobile-menu-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="v4-mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
          <a
            href="#v4-contact"
            className="v4-btn v4-btn-amber"
            onClick={() => setMenuOpen(false)}
          >
            Book a demo →
          </a>
        </div>
      </div>
    </>
  );
}
