"use client";

/**
 * V6 Footer — Inspired by shopify.design's mega wordmark footer.
 */
import Link from "next/link";
import { company, navLinks } from "@/lib/content";

export default function V6Footer() {
  return (
    <footer className="v6-footer">
      <h2 className="v6-footer-mega" data-depth="-200">Celsius.</h2>

      <div className="v6-footer-grid">
        <div className="v6-footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href={company.phoneHref}>{company.phone}</a></li>
            <li><a href={company.emailHref}>{company.email}</a></li>
            <li><span>{company.address[0]}</span></li>
            <li><span>{company.address[1]}</span></li>
            <li><span>{company.hours}</span></li>
          </ul>
        </div>

        <div className="v6-footer-col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.slice(0, 4).map((l, i) => (
              <li key={i}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="v6-footer-col">
          <h4>Sectors</h4>
          <ul>
            <li><Link href="#solutions">Domestic</Link></li>
            <li><Link href="#solutions">Commercial</Link></li>
            <li><Link href="#solutions">Industrial</Link></li>
            <li><Link href="#services">Aftercare</Link></li>
          </ul>
        </div>

        <div className="v6-footer-col">
          <h4>Brands</h4>
          <ul>
            <li><Link href="#brands">Midea · Daikin</Link></li>
            <li><Link href="#brands">Panasonic · LG</Link></li>
            <li><Link href="#brands">Mitsubishi · Samsung</Link></li>
            <li><Link href="#brands">Haier · TCL · Chigo</Link></li>
          </ul>
        </div>
      </div>

      <div className="v6-footer-bottom">
        <span>© {new Date().getFullYear()} Celsius HVAC (Pvt) Ltd · All rights reserved</span>
        <span>Colombo · Sri Lanka · Since {company.established}</span>
      </div>
    </footer>
  );
}
