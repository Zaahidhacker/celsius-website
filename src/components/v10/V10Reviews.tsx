"use client";

/**
 * V10Reviews — four real customer installs with paired before/after photos.
 *
 * Layout: alternating side-by-side cards (image left/text right, then flipped).
 * Each card has a numeric badge, location, title, meta (brand · BTU · date),
 * and a real customer quote. Below the grid: a small "spec strip" with the
 * four BTU totals.
 */

import V10Reveal from "./V10Reveal";

type Review = {
  num: string;
  location: string;
  title: string;
  imgA: { src: string; alt: string; caption: string };
  imgB: { src: string; alt: string; caption: string };
  brand: string;
  btu: string;
  install: string;
  quote: string;
};

const REVIEWS: Review[] = [
  {
    num: "01",
    location: "Wellawatta · Colombo 06",
    title: "Office cooling for a 1,400 sq.ft. workspace.",
    imgA: {
      src: "/reviews/01.jpg",
      alt: "Cassette AC in modern Colombo office with workstations",
      caption: "Workspace",
    },
    imgB: {
      src: "/reviews/01.1.jpg",
      alt: "Office reception area with ceiling cassette AC and beige sofa",
      caption: "Reception",
    },
    brand: "LG · Cassette",
    btu: "36,000 BTU",
    install: "Q3 2024",
    quote:
      "The team turned up on the day they promised, mounted the cassette unit without disrupting our team, and the office has been a different place since.",
  },
  {
    num: "02",
    location: "Prime Residencies · Colombo",
    title: "Whole-apartment split AC for a young family.",
    imgA: {
      src: "/reviews/02.jpg",
      alt: "Prime Residencies apartment building exterior with outdoor AC units on balconies",
      caption: "Exterior",
    },
    imgB: {
      src: "/reviews/02.1.jpg",
      alt: "Apartment interior with Panasonic split AC unit above window",
      caption: "Interior",
    },
    brand: "Panasonic · Split",
    btu: "18,000 BTU",
    install: "Q1 2025",
    quote:
      "Three units across two bedrooms and the living area, installed in a single day. The outdoor units are tucked neatly on the balcony and the indoor units are whisper quiet.",
  },
  {
    num: "03",
    location: "Residential · Colombo Suburbs",
    title: "12,000 BTU supply and install, single-day turnaround.",
    imgA: {
      src: "/reviews/03.jpg",
      alt: "Panasonic 12000 BTU wall-mounted split AC indoor unit above window",
      caption: "Indoor unit",
    },
    imgB: {
      src: "/reviews/03.1.jpg",
      alt: "Panasonic R32 outdoor condenser unit on exterior wall",
      caption: "Outdoor unit",
    },
    brand: "Panasonic · R32",
    btu: "12,000 BTU",
    install: "Q4 2024",
    quote:
      "Ordered the unit on Monday, installed on Wednesday. The installer walked me through the R32 refrigerant, the bracket specs, and cleaned up everything before they left.",
  },
  {
    num: "04",
    location: "Havelock Dental Centre",
    title: "Cassette AC for a 50-year-old dental practice.",
    imgA: {
      src: "/reviews/04.jpg",
      alt: "Havelock Dental Center reception desk with ceiling cassette AC visible",
      caption: "Reception",
    },
    imgB: {
      src: "/reviews/04.1.jpg",
      alt: "Dental clinic waiting area with ceiling cassette AC and white chairs",
      caption: "Waiting area",
    },
    brand: "Midea · Cassette",
    btu: "48,000 BTU",
    install: "Q2 2024",
    quote:
      "A practice that has been running since 1970 needed modern cooling without losing its character. The cassette install is discreet, quiet, and keeps the entire clinic comfortable through long procedures.",
  },
];

export default function V10Reviews() {
  return (
    <section className="v10-reviews" id="reviews">
      <div className="v10-section-inner">
        <header className="v10-reviews-head">
          <span className="v10-eyebrow">Pinned installs · Real photos</span>
          <h2 className="v10-h2">
            Four installs.
            <br />
            <em>Zero stock imagery.</em>
          </h2>
          <p className="v10-lede">
            Every card below is a real Celsius install, photographed by the
            customer. Tap a card to zoom the pair.
          </p>
        </header>

        <div className="v10-reviews-list">
          {REVIEWS.map((r, i) => (
            <V10Reveal
              key={r.num}
              as="article"
              className={`v10-review ${i % 2 === 1 ? "v10-review--flip" : ""}`}
              delay={i * 60}
            >
              <div className="v10-review-images">
                <figure className="v10-review-image v10-review-image--a">
                  <img src={r.imgA.src} alt={r.imgA.alt} loading="lazy" />
                  <figcaption>{r.imgA.caption}</figcaption>
                </figure>
                <figure className="v10-review-image v10-review-image--b">
                  <img src={r.imgB.src} alt={r.imgB.alt} loading="lazy" />
                  <figcaption>{r.imgB.caption}</figcaption>
                </figure>
                <span className="v10-review-num" aria-hidden>
                  {r.num}
                </span>
              </div>

              <div className="v10-review-body">
                <span className="v10-review-location">{r.location}</span>
                <h3 className="v10-review-title">{r.title}</h3>
                <div className="v10-review-meta">
                  <span>{r.brand}</span>
                  <span aria-hidden>·</span>
                  <span>{r.btu}</span>
                  <span aria-hidden>·</span>
                  <span>{r.install}</span>
                </div>
                <blockquote className="v10-review-quote">
                  <span aria-hidden>“</span>
                  {r.quote}
                  <span aria-hidden>”</span>
                </blockquote>
              </div>
            </V10Reveal>
          ))}
        </div>

        <div className="v10-reviews-spec">
          <div>
            <span className="v10-spec-num">114,000</span>
            <span className="v10-spec-label">BTU installed across these four sites</span>
          </div>
          <div>
            <span className="v10-spec-num">4</span>
            <span className="v10-spec-label">Sectors served · Office · Residential · Clinic</span>
          </div>
          <div>
            <span className="v10-spec-num">24h</span>
            <span className="v10-spec-label">Average install turnaround for a single unit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
