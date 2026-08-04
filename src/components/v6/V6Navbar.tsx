"use client";

import Link from "next/link";

/**
 * V6 Navbar — Inspired by shopify.design's editorial nav.
 * Sticky, shrinks on scroll, brand wordmark with amber dot, mono nav links.
 *
 * Updated: includes Pricing + Reviews links in the nav.
 */
export default function V6Navbar() {
  return (
    <header className="v6-nav">
      <Link href="/v6" className="v6-nav-brand">
        Celsius<span className="v6-nav-brand-dot" />
      </Link>

      <nav>
        <ul className="v6-nav-links">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#solutions">Solutions</Link></li>
          <li><Link href="#pricing">Pricing</Link></li>
          <li><Link href="#brands">Brands</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#reviews">Reviews</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      <Link href="#contact" className="v6-pill v6-pill--amber">
        Book a Demo
      </Link>
    </header>
  );
}
