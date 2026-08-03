"use client";

import { useEffect, useRef } from "react";

/**
 * V7 Reviews — "Case Files"
 * Each review pair is presented as an evidence file:
 * - Header bar with case number + location
 * - Two side-by-side images (the photo pair)
 * - Tilted red "VERIFIED" stamp
 * - Mono meta strip with brand, BTU, install date
 * - Italic serif quote
 * - Footer with file ID + verification status
 *
 * Layout: alternating single-column / split rows to break monotony.
 */

type Review = {
  caseNum: string;
  location: string;
  title: string;
  imgA: { src: string; alt: string; tag: string };
  imgB: { src: string; alt: string; tag: string };
  brand: string;
  btu: string;
  install: string;
  quote: string;
  fileId: string;
  status: string;
  layout: "split" | "stacked";
};

const REVIEWS: Review[] = [
  {
    caseNum: "CASE FILE · 01",
    location: "Wellawatta, Colombo 06",
    title: "Office cooling for a 1,400 sq.ft. workspace.",
    imgA: {
      src: "/reviews/01.jpg",
      alt: "Cassette AC unit installed in modern Colombo office with workstations and wooden slat partition",
      tag: "BEFORE · WORKSPACE",
    },
    imgB: {
      src: "/reviews/01.1.jpg",
      alt: "Office reception area with ceiling cassette AC, beige sofa, and black office chairs at desks",
      tag: "AFTER · RECEPTION",
    },
    brand: "LG · Ceiling Cassette",
    btu: "36,000 BTU",
    install: "Q3 2024",
    quote:
      "The team turned up on the day they promised, mounted the cassette unit without disrupting our team, and the office has been a different place since.",
    fileId: "CF-2024-WLW-014",
    status: "VERIFIED",
    layout: "split",
  },
  {
    caseNum: "CASE FILE · 02",
    location: "Prime Residencies, Colombo",
    title: "Whole-apartment split AC install for a young family.",
    imgA: {
      src: "/reviews/02.jpg",
      alt: "Exterior of Prime Residencies apartment building showing multiple outdoor AC condenser units on balconies",
      tag: "EXTERIOR · CONDENSER",
    },
    imgB: {
      src: "/reviews/02.1.jpg",
      alt: "Interior of apartment living room with Panasonic split AC unit mounted on wall above window",
      tag: "INTERIOR · SPLIT UNIT",
    },
    brand: "Panasonic · Inverter Split",
    btu: "18,000 BTU",
    install: "Q1 2025",
    quote:
      "Three units across two bedrooms and the living area, installed in a single day. The outdoor units are tucked neatly on the balcony and the indoor units are whisper quiet.",
    fileId: "CF-2025-PR-022",
    status: "VERIFIED",
    layout: "stacked",
  },
  {
    caseNum: "CASE FILE · 03",
    location: "Residential · Colombo Suburbs",
    title: "12,000 BTU supply and install, single-day turnaround.",
    imgA: {
      src: "/reviews/03.jpg",
      alt: "Panasonic 12000 BTU wall-mounted split AC indoor unit installed above window with golden curtains",
      tag: "INDOOR · 12000 BTU",
    },
    imgB: {
      src: "/reviews/03.1.jpg",
      alt: "Panasonic R32 outdoor condenser unit mounted on exterior wall with bracket showing refrigerant label",
      tag: "OUTDOOR · R32",
    },
    brand: "Panasonic · R32 Inverter",
    btu: "12,000 BTU",
    install: "Q4 2024",
    quote:
      "Ordered the unit on Monday, installed on Wednesday. The installer walked me through the R32 refrigerant, the bracket specs, and cleaned up everything before they left.",
    fileId: "CF-2024-RSD-008",
    status: "VERIFIED",
    layout: "split",
  },
  {
    caseNum: "CASE FILE · 04",
    location: "Havelock Dental Centre",
    title: "Cassette AC for a 50-year-old dental practice.",
    imgA: {
      src: "/reviews/04.jpg",
      alt: "Havelock Dental Center reception desk with ceiling cassette AC unit visible in upper corner",
      tag: "RECEPTION · CASSETTE",
    },
    imgB: {
      src: "/reviews/04.1.jpg",
      alt: "Dental clinic waiting area with ceiling cassette AC, white chairs, and wooden slatted wall",
      tag: "WAITING · CASSETTE",
    },
    brand: "Midea · Ceiling Cassette",
    btu: "48,000 BTU",
    install: "Q2 2024",
    quote:
      "A practice that has been running since 1970 needed modern cooling without losing its character. The cassette install is discreet, quiet, and keeps the entire clinic comfortable through long procedures.",
    fileId: "CF-2024-HDC-031",
    status: "VERIFIED",
    layout: "stacked",
  },
];

export default function V7Reviews() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".v7-reveal");
    if (!els || !els.length) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.05 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="v7-section v7-section--paper-deep" id="work" ref={rootRef}>
      <div className="v7-container">
        {/* Section header */}
        <div
          className="v7-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "2rem",
            alignItems: "end",
            marginBottom: "clamp(40px, 5vw, 72px)",
            paddingBottom: "2rem",
            borderBottom: "2px solid var(--v7-navy)",
          }}
        >
          <div>
            <span className="v7-eyebrow">Evidence locker</span>
            <span className="v7-numeral" style={{ fontSize: "clamp(80px, 12vw, 160px)", marginTop: "0.5rem" }}>
              04
            </span>
          </div>
          <div>
            <h2 className="v7-h2" style={{ marginBottom: "1rem" }}>
              Case files from <span className="v7-italic">real installs.</span>
            </h2>
            <p className="v7-lede" style={{ maxWidth: "55ch" }}>
              Four jobs. Four pairs of photos. No stock imagery. Every install
              below is verifiable, dated, and stamped.
            </p>
          </div>
        </div>

        {/* Case files */}
        <div style={{ display: "grid", gap: "clamp(48px, 7vw, 96px)" }}>
          {REVIEWS.map((r, i) => (
            <article
              key={r.caseNum}
              className={`v7-casefile v7-reveal ${r.layout === "stacked" ? "v7-casefile--stacked" : ""}`}
              style={{ transitionDelay: `${Math.min(i * 60, 240)}ms` }}
            >
              {/* Stamp */}
              <span className="v7-casefile-stamp">{r.status}</span>

              {/* Header */}
              <header className="v7-casefile-header">
                <span className="v7-casefile-num">{r.caseNum}</span>
                <span className="v7-casefile-location">{r.location}</span>
              </header>

              {/* Body — alternating layout */}
              {r.layout === "split" ? (
                <div className="v7-casefile-body">
                  <div className="v7-casefile-images">
                    <div className="v7-casefile-image">
                      <img src={r.imgA.src} alt={r.imgA.alt} loading="lazy" />
                      <span className="v7-casefile-image-tag">{r.imgA.tag}</span>
                    </div>
                    <div className="v7-casefile-image">
                      <img src={r.imgB.src} alt={r.imgB.alt} loading="lazy" />
                      <span className="v7-casefile-image-tag">{r.imgB.tag}</span>
                    </div>
                  </div>
                  <div className="v7-casefile-content">
                    <h3 className="v7-casefile-title">{r.title}</h3>
                    <div className="v7-casefile-meta">
                      <span className="v7-casefile-meta-item">{r.brand}</span>
                      <span className="v7-casefile-meta-item">{r.btu}</span>
                      <span className="v7-casefile-meta-item">{r.install}</span>
                    </div>
                    <p className="v7-casefile-quote">“{r.quote}”</p>
                  </div>
                </div>
              ) : (
                <div
                  className="v7-casefile-body"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", borderRight: "2px solid var(--v7-navy)" }}>
                    <div className="v7-casefile-image" style={{ borderBottom: "2px solid var(--v7-navy)" }}>
                      <img src={r.imgA.src} alt={r.imgA.alt} loading="lazy" />
                      <span className="v7-casefile-image-tag">{r.imgA.tag}</span>
                    </div>
                    <div className="v7-casefile-image">
                      <img src={r.imgB.src} alt={r.imgB.alt} loading="lazy" />
                      <span className="v7-casefile-image-tag">{r.imgB.tag}</span>
                    </div>
                  </div>
                  <div className="v7-casefile-content">
                    <h3 className="v7-casefile-title">{r.title}</h3>
                    <div className="v7-casefile-meta">
                      <span className="v7-casefile-meta-item">{r.brand}</span>
                      <span className="v7-casefile-meta-item">{r.btu}</span>
                      <span className="v7-casefile-meta-item">{r.install}</span>
                    </div>
                    <p className="v7-casefile-quote">“{r.quote}”</p>
                  </div>
                </div>
              )}

              {/* Footer */}
              <footer className="v7-casefile-footer">
                <span className="v7-casefile-footer-label">FILE ID</span>
                <span className="v7-casefile-footer-num">{r.fileId}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .v7-casefile--stacked .v7-casefile-body {
            grid-template-columns: 1fr !important;
          }
          .v7-casefile--stacked .v7-casefile-body > div:first-child {
            border-right: none !important;
            border-bottom: 2px solid var(--v7-navy) !important;
          }
          .v7-casefile--stacked .v7-casefile-image {
            aspect-ratio: 4 / 3 !important;
          }
        }
      `}</style>
    </section>
  );
}
