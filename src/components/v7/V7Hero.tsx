"use client";

/**
 * V7 Hero — Editorial Brutalist
 * - Mono meta row with date/issue/location
 * - Big serif headline with italic clay accent + amber strike highlight
 * - Asymmetric bento grid with hard 2px borders and no rounded corners
 * - Marquee strip of services
 */
const MARQUEE_ITEMS = [
  "Supply", "Install", "Maintain", "Repair", "VRF Systems",
  "Cassette", "Split", "Inverter", "Since 2019", "Colombo · LK",
];

export default function V7Hero() {
  return (
    <section className="v7-hero" id="top">
      <div className="v7-container">
        {/* Meta row — looks like a newspaper masthead */}
        <div className="v7-hero-meta">
          <span className="v7-hero-meta-item">VOL.07 · ISSUE 001</span>
          <span className="v7-hero-meta-item">EST. 2019 · COLOMBO · LK</span>
          <span className="v7-hero-meta-item">PRECISION COOLING JOURNAL</span>
        </div>

        {/* Headline */}
        <h1 className="v7-hero-headline">
          We make rooms <span className="v7-hero-headline-accent">cool</span>
          <br />
          on the <span className="v7-hero-headline-strike">hottest</span> days.
        </h1>

        <p className="v7-lede" style={{ maxWidth: "60ch" }}>
          Celsius supplies, installs, and services premium air conditioning
          across Sri Lanka. Brutally honest pricing. Quietly powerful units.
          No callout fee within Colombo.
        </p>

        {/* Bento grid — asymmetric cells */}
        <div className="v7-hero-grid">
          <div className="v7-hero-cell v7-hero-cell--img-a">
            <img
              src="/reviews/02.jpg"
              alt="Prime Residencies apartment building exterior with outdoor AC units on balconies"
              loading="eager"
            />
          </div>

          <div className="v7-hero-cell v7-hero-cell--amber">
            <div>
              <span className="v7-hero-cell-eyebrow">Domestic · Commercial</span>
              <p className="v7-hero-cell-title">
                Nine premium brands. One reliable installer.
              </p>
            </div>
            <span className="v7-hero-cell-eyebrow">Midea · Panasonic · LG · Daikin</span>
          </div>

          <div className="v7-hero-cell v7-hero-cell--img-b">
            <img
              src="/reviews/03.jpg"
              alt="Panasonic wall-mounted split AC unit installed in a residential room"
              loading="eager"
            />
          </div>

          <div className="v7-hero-cell v7-hero-cell--navy">
            <div>
              <span className="v7-hero-cell-eyebrow">Since 2019</span>
              <p className="v7-hero-cell-title">40+ business clients. 1,200+ installs.</p>
            </div>
            <a href="#work" className="v7-hero-cell-eyebrow" style={{ textDecoration: "none", color: "var(--v7-amber)" }}>
              See the work →
            </a>
          </div>

          <div className="v7-hero-cell v7-hero-cell--clay">
            <span className="v7-hero-cell-eyebrow">Service</span>
            <p className="v7-hero-cell-title">Same-week callouts.</p>
          </div>

          <div className="v7-hero-cell v7-hero-cell--mint">
            <span className="v7-hero-cell-eyebrow">Warranty</span>
            <p className="v7-hero-cell-title">5-year compressor cover.</p>
          </div>

          <div className="v7-hero-cell v7-hero-cell--paper">
            <span className="v7-hero-cell-eyebrow">Areas covered</span>
            <p className="v7-hero-cell-title">Colombo · Gampaha · Kalutara · Kandy.</p>
          </div>
        </div>

        {/* CTA row */}
        <div className="v7-hero-cta-row">
          <a href="#contact" className="v7-btn">
            Book a demo
            <span aria-hidden>→</span>
          </a>
          <a href="#work" className="v7-btn v7-btn--outline">
            See case files
          </a>
          <span className="v7-hero-meta-item" style={{ opacity: 0.7 }}>
            Or call <a href="tel:+9477300200" style={{ color: "var(--v7-navy)", textDecoration: "underline" }}>+94 77 300 2000</a>
          </span>
        </div>
      </div>

      {/* Marquee */}
      <div className="v7-marquee" aria-hidden="true">
        <div className="v7-marquee-track">
          {[0, 1].map((dup) => (
            <span key={dup}>
              {MARQUEE_ITEMS.map((m, i) => (
                <span key={`${dup}-${i}`}>{m}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
