"use client";

import Link from "next/link";
import CelsiusLogoSVG from "@/components/CelsiusLogoSVG";

/**
 * V6 Navbar — Inspired by shopify.design's editorial nav.
 * Sticky, shrinks on scroll, brand wordmark with cyan dot, mono nav links.
 *
 * Updated: uses new SVG logo with airflow icon + tagline. Cyan accent.
 */
export default function V6Navbar() {
  return (
    <header className="v6-nav">
      <Link href="/v6" className="v6-nav-brand" aria-label="Celsius home">
        <CelsiusLogoSVG variant="navy" size="sm" showTagline={false} />
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
