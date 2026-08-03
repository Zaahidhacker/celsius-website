"use client";

/**
 * V10Hero — overlay hero pinned over the first frame of the 3D sequence.
 *
 * Big editorial display type, navy/amber on the dark studio background.
 * Marquee under the headline + small meta row at the top.
 */

import Link from "next/link";

export default function V10Hero() {
  return (
    <div className="v10-hero-overlay">
      <div className="v10-hero-top">
        <span className="v10-eyebrow">Celsius · Est. 2019 · Colombo</span>
        <span className="v10-eyebrow v10-eyebrow--dot">
          <span className="v10-dot" /> Scroll to begin
        </span>
      </div>

      <div className="v10-hero-bottom">
        <h1 className="v10-h1">
          <span className="v10-h1-line">Precision cooling,</span>
          <span className="v10-h1-line v10-h1-line--accent">
            <em>engineered</em> frame by frame.
          </span>
        </h1>

        <div className="v10-hero-meta">
          <p className="v10-hero-desc">
            Supply, installation & maintenance of premium AC systems across Sri
            Lanka. Drag the page — the unit disassembles itself as you scroll.
          </p>
          <div className="v10-hero-cta">
            <Link href="#reviews" className="v10-btn v10-btn--primary">
              See real installs →
            </Link>
            <Link href="#contact" className="v10-btn v10-btn--ghost">
              Talk to a specialist
            </Link>
          </div>
        </div>
      </div>

      <div className="v10-marquee" aria-hidden>
        <div className="v10-marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="v10-marquee-item">
              Make the new normal · Excellence in cooling · 9 premium brands · 40+ business clients ·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
