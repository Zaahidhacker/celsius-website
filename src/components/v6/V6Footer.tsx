"use client";

/**
 * V6 Footer — Inspired by shopify.design's mega wordmark footer.
 *
 * Updates (animejs):
 * - Mega "Celsius." wordmark reveal with animejs (scales + slides up)
 * - Footer columns reveal with staggered V6Reveal
 * - NEW: Social media icons row (Instagram, Facebook, WhatsApp, Email)
 * - 3D tilt on the mega wordmark driven by scroll
 */

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import Link from "next/link";
import { company, navLinks, socials } from "@/lib/content";
import V6Reveal from "./V6Reveal";

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.973-1.041zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M3 6l9 7 9-7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function V6Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const megaRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const mega = megaRef.current;
    if (!footer || !mega) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // 3D tilt on the mega wordmark — scrubbed by scroll progress
    const anim = animate(mega, {
      rotateX: [8, -4, 8],
      scale: [1.04, 0.96, 1.04],
      duration: 1000,
      ease: "linear",
      autoplay: false,
    });

    const obs = onScroll({
      target: footer,
      enter: "bottom top",
      leave: "top bottom",
      sync: 80,
      onUpdate: (o) => {
        const p = Math.max(0, Math.min(1, o.progress));
        anim.seek(p * anim.duration);
      },
    });

    return () => {
      obs.revoke?.();
      anim.pause();
    };
  }, []);

  const socialItems = [
    { ...socials.instagram, icon: "instagram" as const },
    { ...socials.facebook, icon: "facebook" as const },
    { ...socials.whatsapp, icon: "whatsapp" as const },
    { ...socials.email, icon: "email" as const },
  ];

  return (
    <footer ref={footerRef} className="v6-footer" style={{ perspective: "1200px" }}>
      <h2
        ref={megaRef}
        className="v6-footer-mega"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        Celsius.
      </h2>

      <V6Reveal stagger={80} y={40} rotate={6}>
        <div className="v6-footer-grid">
          <div className="v6-footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <a href={company.emailHref}>{company.email}</a>
              </li>
              <li>
                <a
                  href={socials.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <span>{company.address[0]}</span>
              </li>
              <li>
                <span>{company.address[1]}</span>
              </li>
              <li>
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>

          <div className="v6-footer-col">
            <h3>Navigation</h3>
            <ul>
              {navLinks.slice(0, 5).map((l, i) => (
                <li key={i}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="v6-footer-col">
            <h3>Sectors</h3>
            <ul>
              <li>
                <Link href="#solutions">Domestic</Link>
              </li>
              <li>
                <Link href="#solutions">Commercial</Link>
              </li>
              <li>
                <Link href="#solutions">Industrial</Link>
              </li>
              <li>
                <Link href="#services">Aftercare</Link>
              </li>
            </ul>
          </div>

          <div className="v6-footer-col">
            <h3>Brands</h3>
            <ul>
              <li>
                <Link href="#brands">Midea · Daikin</Link>
              </li>
              <li>
                <Link href="#brands">Panasonic · LG</Link>
              </li>
              <li>
                <Link href="#brands">Mitsubishi · Samsung</Link>
              </li>
              <li>
                <Link href="#brands">Haier · TCL · Chigo</Link>
              </li>
            </ul>
          </div>
        </div>
      </V6Reveal>

      {/* Social icons row */}
      <V6Reveal y={40} delay={200}>
        <div className="v6-footer-socials">
          <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
            Connect with Celsius
          </span>
          <div className="v6-footer-socials-row">
            {socialItems.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="v6-footer-social"
                aria-label={`${s.label}: ${s.handle}`}
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </V6Reveal>

      <div className="v6-footer-bottom">
        <span>
          © {new Date().getFullYear()} Celsius HVAC (Pvt) Ltd · All rights reserved
        </span>
        <span>
          Colombo · Sri Lanka · Since {company.established}
        </span>
      </div>
    </footer>
  );
}
