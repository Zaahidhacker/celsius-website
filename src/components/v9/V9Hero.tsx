"use client";

/**
 * V9 Hero — off-kilter bento.
 * Each cell has a slight tilt (-2deg to +2deg) applied via CSS variable.
 * Hover straightens the cell to 0deg.
 */
export default function V9Hero() {
  return (
    <section className="v9-hero" id="top">
      <div className="v9-container">
        <div className="v9-hero-meta">
          <span className="v9-hero-meta-item">VOL.09 · BENTO EDITION</span>
          <span className="v9-hero-meta-item">EST. 2019 · COLOMBO · LK</span>
          <span className="v9-hero-meta-item">PRECISION COOLING JOURNAL</span>
        </div>

        <h1 className="v9-hero-headline">
          Cool rooms,
          <br />
          <span className="v9-hero-headline-italic v9-underline">tilted</span>{" "}
          differently.
        </h1>

        <p className="v9-hero-lede">
          Celsius supplies, installs, and services premium air conditioning
          across Sri Lanka. Quiet units, honest pricing, same-week callouts
          within the Western Province.
        </p>

        {/* Bento */}
        <div className="v9-bento">
          {/* Image A — wide */}
          <div
            className="v9-bento-cell v9-bento-cell--img v9-cell-a"
            style={{ ["--v9-tilt" as string]: "-1.5deg" }}
          >
            <img
              src="/reviews/02.jpg"
              alt="Prime Residencies apartment building exterior with outdoor AC units"
              loading="eager"
            />
          </div>

          {/* Amber text */}
          <div
            className="v9-bento-cell v9-bento-cell--amber v9-cell-b"
            style={{ ["--v9-tilt" as string]: "1.5deg", minHeight: 180 }}
          >
            <div>
              <span className="v9-bento-cell-eyebrow">Domestic · Commercial</span>
              <p className="v9-bento-cell-title">9 premium brands. 1 installer.</p>
            </div>
            <span className="v9-bento-cell-eyebrow">Midea · Panasonic · LG · Daikin</span>
          </div>

          {/* Navy text */}
          <div
            className="v9-bento-cell v9-bento-cell--navy v9-cell-c"
            style={{ ["--v9-tilt" as string]: "-1deg", minHeight: 180 }}
          >
            <div>
              <span className="v9-bento-cell-eyebrow">Since 2019</span>
              <p className="v9-bento-cell-title">1,200+ installs.</p>
            </div>
            <a href="#work" className="v9-bento-cell-eyebrow" style={{ textDecoration: "none", color: "var(--v9-amber)" }}>
              See the work →
            </a>
          </div>

          {/* Mint */}
          <div
            className="v9-bento-cell v9-bento-cell--mint v9-cell-d"
            style={{ ["--v9-tilt" as string]: "1deg", minHeight: 160 }}
          >
            <span className="v9-bento-cell-eyebrow">Service</span>
            <p className="v9-bento-cell-title">Same-week callouts.</p>
          </div>

          {/* Lemon */}
          <div
            className="v9-bento-cell v9-bento-cell--lemon v9-cell-e"
            style={{ ["--v9-tilt" as string]: "-1deg", minHeight: 160 }}
          >
            <span className="v9-bento-cell-eyebrow">Warranty</span>
            <p className="v9-bento-cell-title">5-year compressor cover.</p>
          </div>

          {/* Pink */}
          <div
            className="v9-bento-cell v9-bento-cell--pink v9-cell-f"
            style={{ ["--v9-tilt" as string]: "1.5deg", minHeight: 160 }}
          >
            <span className="v9-bento-cell-eyebrow">Coverage</span>
            <p className="v9-bento-cell-title">Colombo · Gampaha · Kalutara · Kandy</p>
          </div>

          {/* Image B */}
          <div
            className="v9-bento-cell v9-bento-cell--img v9-cell-g"
            style={{ ["--v9-tilt" as string]: "1deg", aspectRatio: "16/10" }}
          >
            <img
              src="/reviews/03.jpg"
              alt="Panasonic wall-mounted split AC unit in residential room"
              loading="lazy"
            />
          </div>

          {/* Paper */}
          <div
            className="v9-bento-cell v9-bento-cell--paper v9-cell-h"
            style={{ ["--v9-tilt" as string]: "-1.5deg", minHeight: 160 }}
          >
            <span className="v9-bento-cell-eyebrow">No callout fee</span>
            <p className="v9-bento-cell-title">Within Colombo, for warranty clients.</p>
          </div>
        </div>

        {/* CTA row */}
        <div className="v9-hero-cta-row">
          <a href="#contact" className="v9-btn">
            Book a demo <span aria-hidden>→</span>
          </a>
          <a href="#work" className="v9-btn v9-btn--outline">
            See case files
          </a>
          <span className="v9-hero-meta-item" style={{ opacity: 0.7 }}>
            Or call <a href="tel:+9477300200" style={{ color: "var(--v9-navy)", textDecoration: "underline" }}>+94 77 300 2000</a>
          </span>
        </div>
      </div>
    </section>
  );
}
