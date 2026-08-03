"use client";

/**
 * V8 Reviews — sticky scroll-stack.
 * Each review pins to the top of the viewport as you scroll, until the next
 * one pushes it out. Two images per review (the photo pair), arranged in a
 * staggered column on the right. Quote + meta on the left.
 *
 * On mobile (<=900px) the sticky behaviour collapses to a normal stack.
 */

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
    num: "01 / 04",
    location: "Wellawatta, Colombo 06",
    title: "Office cooling for a 1,400 sq.ft. workspace.",
    imgA: {
      src: "/reviews/01.jpg",
      alt: "Cassette AC unit in Colombo office with workstations and wooden slat partition",
      caption: "Workspace",
    },
    imgB: {
      src: "/reviews/01.1.jpg",
      alt: "Office reception area with ceiling cassette AC and beige sofa",
      caption: "Reception",
    },
    brand: "LG · Ceiling Cassette",
    btu: "36,000 BTU",
    install: "Q3 2024",
    quote:
      "The team turned up on the day they promised, mounted the cassette unit without disrupting our team, and the office has been a different place since.",
  },
  {
    num: "02 / 04",
    location: "Prime Residencies, Colombo",
    title: "Whole-apartment split AC for a young family.",
    imgA: {
      src: "/reviews/02.jpg",
      alt: "Prime Residencies apartment building exterior with outdoor AC condensers on balconies",
      caption: "Exterior",
    },
    imgB: {
      src: "/reviews/02.1.jpg",
      alt: "Apartment interior with Panasonic split AC unit above window",
      caption: "Interior",
    },
    brand: "Panasonic · Inverter Split",
    btu: "18,000 BTU",
    install: "Q1 2025",
    quote:
      "Three units across two bedrooms and the living area, installed in a single day. The outdoor units are tucked neatly on the balcony and the indoor units are whisper quiet.",
  },
  {
    num: "03 / 04",
    location: "Residential · Colombo Suburbs",
    title: "12,000 BTU supply and install, single-day turnaround.",
    imgA: {
      src: "/reviews/03.jpg",
      alt: "Panasonic 12000 BTU wall-mounted split AC unit above window with golden curtains",
      caption: "Indoor unit",
    },
    imgB: {
      src: "/reviews/03.1.jpg",
      alt: "Panasonic R32 outdoor condenser unit on exterior wall with bracket",
      caption: "Outdoor unit",
    },
    brand: "Panasonic · R32 Inverter",
    btu: "12,000 BTU",
    install: "Q4 2024",
    quote:
      "Ordered the unit on Monday, installed on Wednesday. The installer walked me through the R32 refrigerant, the bracket specs, and cleaned up everything before they left.",
  },
  {
    num: "04 / 04",
    location: "Havelock Dental Centre",
    title: "Cassette AC for a 50-year-old dental practice.",
    imgA: {
      src: "/reviews/04.jpg",
      alt: "Havelock Dental Center reception desk with ceiling cassette AC visible in upper corner",
      caption: "Reception",
    },
    imgB: {
      src: "/reviews/04.1.jpg",
      alt: "Dental clinic waiting area with ceiling cassette AC and white chairs",
      caption: "Waiting area",
    },
    brand: "Midea · Ceiling Cassette",
    btu: "48,000 BTU",
    install: "Q2 2024",
    quote:
      "A practice that has been running since 1970 needed modern cooling without losing its character. The cassette install is discreet, quiet, and keeps the entire clinic comfortable through long procedures.",
  },
];

export default function V8Reviews() {
  return (
    <section className="v8-reviews-stack" id="work">
      {REVIEWS.map((r) => (
        <article key={r.num} className="v8-review-panel">
          <div className="v8-review-grid">
            {/* Text */}
            <div>
              <span className="v8-review-num">{r.num}</span>
              <p className="v8-review-loc">{r.location}</p>
              <h2 className="v8-review-title">{r.title}</h2>
              <p className="v8-review-quote">“{r.quote}”</p>
              <div className="v8-review-meta">
                <span className="v8-review-meta-item">{r.brand}</span>
                <span className="v8-review-meta-item">{r.btu}</span>
                <span className="v8-review-meta-item">{r.install}</span>
              </div>
            </div>

            {/* Images */}
            <div className="v8-review-images">
              <figure className="v8-review-image">
                <img src={r.imgA.src} alt={r.imgA.alt} loading="lazy" />
                <figcaption className="v8-review-image-caption">{r.imgA.caption}</figcaption>
              </figure>
              <figure className="v8-review-image">
                <img src={r.imgB.src} alt={r.imgB.alt} loading="lazy" />
                <figcaption className="v8-review-image-caption">{r.imgB.caption}</figcaption>
              </figure>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
