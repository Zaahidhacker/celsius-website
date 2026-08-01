"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Supply & Installation",
    desc: "Premium branded AC units, expertly installed for any sector — domestic, commercial, or industrial.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="8" rx="1" />
        <path d="M3 8h18M7 4v4M17 4v4M5 12v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3" />
        <circle cx="9" cy="18" r="1" />
        <circle cx="15" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Service & Maintenance",
    desc: "Proactive maintenance plans that extend system lifespan and keep cooling performance optimal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Gas & Breakdown",
    desc: "Skilled diagnostics for refrigerant leaks, electrical faults, and emergency breakdowns — fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "VRF & Industrial",
    desc: "Variable Refrigerant Flow systems for plants, data centres, cold storage, and processing facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="1" />
        <rect x="2" y="14" width="20" height="8" rx="1" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Smart Integration",
    desc: "Wi-Fi enabled units with app control, scheduling, and home automation integration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    title: "Air Purification",
    desc: "nanoe™ X, HEPA, and UV-C solutions that deliver measurably healthier indoor air.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    ),
  },
  {
    title: "Commercial Zoning",
    desc: "Multi-split zoning systems for offices, retail, and hospitality — comfort tuned per room.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Cold Storage",
    desc: "Walk-in cold rooms, freezer rooms, and refrigeration for restaurants, pharma, and agriculture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 5h20M2 5l5 5M22 5l-5 5M2 19l5-5M22 19l-5-5" />
      </svg>
    ),
  },
];

/**
 * V5 Services — Airstead-style 4-column card grid with plus icons in corners.
 */
export default function V5Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-service-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="v5-services" ref={root} className="v5-section v5-section-cream">
      <div className="v5-container">
        <div className="v5-section-head">
          <div className="v5-section-head-row">
            <span className="v5-eyebrow-mono">/ What we do</span>
            <span className="v5-section-head-meta">08 services</span>
          </div>
          <h2 className="v5-h2" style={{ maxWidth: "44rem" }}>
            A complete cooling studio —{" "}
            <span className="v5-fade">supply, install, service, repair.</span>
          </h2>
        </div>

        <div className="v5-services-grid">
          {services.map((s, i) => (
            <article key={i} className="v5-service-card">
              <span className="v5-service-card-plus" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
              <div className="v5-service-card-icon">{s.icon}</div>
              <h3 className="v5-service-card-title">{s.title}</h3>
              <p className="v5-service-card-desc">{s.desc}</p>
              <a href="#v5-contact" className="v5-service-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
