"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CelsiusLogoSVG from "@/components/CelsiusLogoSVG";

/**
 * V6 Navbar — Inspired by shopify.design's editorial nav.
 * Sticky, shrinks on scroll, brand wordmark with cyan dot, mono nav links.
 *
 * Mobile: shows a hamburger button below 900px that opens a full-screen
 * drawer with the nav links stacked vertically. Body scroll is locked
 * while the drawer is open. Escape key + click-outside close it.
 *
 * Updated: uses new SVG logo with airflow icon + tagline. Cyan accent.
 */
const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#brands", label: "Brands" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function V6Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink nav on scroll (visual cue + frees up vertical space).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer is open + wire Escape to close.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`v6-nav ${scrolled ? "is-scrolled" : ""}`}>
        <Link href="/v6" className="v6-nav-brand" aria-label="Celsius home">
          <CelsiusLogoSVG variant="navy" size="sm" showTagline={false} />
        </Link>

        <nav aria-label="Primary">
          <ul className="v6-nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="v6-nav-actions">
          <Link href="#contact" className="v6-pill v6-pill--amber">
            Book a Demo
          </Link>

          {/* Hamburger — only visible at max-width: 900px (see v6.css). */}
          <button
            type="button"
            className={`v6-nav-burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="v6-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        id="v6-mobile-menu"
        className={`v6-mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        onClick={(e) => {
          // Click on backdrop (not on a link) closes the drawer.
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="v6-mobile-menu-panel">
          <div className="v6-mobile-menu-head">
            <Link
              href="/v6"
              onClick={() => setOpen(false)}
              aria-label="Celsius home"
            >
              <CelsiusLogoSVG variant="navy" size="sm" showTagline={false} />
            </Link>
            <button
              type="button"
              className="v6-nav-burger is-open"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="v6-mobile-menu-links">
              {NAV_LINKS.map((l, i) => (
                <li
                  key={l.href}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="v6-mobile-menu-link"
                  >
                    <span className="v6-mobile-menu-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="v6-mobile-menu-label">{l.label}</span>
                    <svg
                      className="v6-mobile-menu-arrow"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 10h10M10 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="v6-mobile-menu-foot">
            <Link
              href="#contact"
              className="v6-pill v6-pill--amber"
              onClick={() => setOpen(false)}
            >
              Book a Demo
            </Link>
            <p className="v6-mobile-menu-tag">
              Colombo · Sri Lanka
              <br />
              Experts in keeping things cool
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
