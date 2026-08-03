"use client";

/**
 * V10Footer — minimal sign-off with logo, nav, social.
 */

import Link from "next/link";
import { company } from "@/lib/content";

export default function V10Footer() {
  return (
    <footer className="v10-footer">
      <div className="v10-section-inner v10-footer-inner">
        <div className="v10-footer-brand">
          <Link href="/v10" className="v10-nav-logo">
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
          <p className="v10-footer-tag">{company.tagline}</p>
        </div>

        <nav className="v10-footer-nav">
          <a href="#reviews">Work</a>
          <a href="#services">Services</a>
          <a href="#brands">Brands</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="v10-footer-meta">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>Built in Colombo · Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
