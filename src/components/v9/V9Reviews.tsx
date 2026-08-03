"use client";

/**
 * V9 Reviews — polaroid cards.
 * Each review is a polaroid with paper-tape, a numbered circle badge,
 * two photos in a side-by-side mini-grid, location label, title, meta
 * checklist (✓), and an italic quote at the bottom.
 *
 * Cards have alternating tilts (-2deg / +2deg) and straighten on hover.
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

export default function V9Reviews() {
  return (
    <section className="v9-section v9-section--paper-warm" id="work">
      <div className="v9-container">
        <div style={{ maxWidth: "65ch", marginBottom: "clamp(40px, 5vw, 72px)" }}>
          <span className="v9-eyebrow">Pinned to the wall</span>
          <h2 className="v9-h2" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Four installs. <span className="v9-italic v9-underline">Real photos.</span>
          </h2>
          <p className="v9-italic" style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5 }}>
            No stock imagery. Every polaroid below is a real customer install
            from across Sri Lanka, photographed before and after.
          </p>
        </div>

        <div className="v9-polaroids">
          {REVIEWS.map((r, i) => (
            <article
              key={r.num}
              className="v9-polaroid"
              style={{
                ["--v9-polaroid-tilt" as string]: i % 2 === 0 ? "-2deg" : "2deg",
              }}
            >
              <div className="v9-polaroid-tape" aria-hidden />
              <div className="v9-polaroid-num">{r.num}</div>

              <div className="v9-polaroid-images">
                <figure className="v9-polaroid-image">
                  <img src={r.imgA.src} alt={r.imgA.alt} loading="lazy" />
                  <figcaption className="v9-polaroid-image-caption">{r.imgA.caption}</figcaption>
                </figure>
                <figure className="v9-polaroid-image">
                  <img src={r.imgB.src} alt={r.imgB.alt} loading="lazy" />
                  <figcaption className="v9-polaroid-image-caption">{r.imgB.caption}</figcaption>
                </figure>
              </div>

              <p className="v9-polaroid-location">{r.location}</p>
              <h3 className="v9-polaroid-title">{r.title}</h3>
              <div className="v9-polaroid-meta">
                <span className="v9-polaroid-meta-item">{r.brand}</span>
                <span className="v9-polaroid-meta-item">{r.btu}</span>
                <span className="v9-polaroid-meta-item">{r.install}</span>
              </div>
              <p className="v9-polaroid-quote">“{r.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
