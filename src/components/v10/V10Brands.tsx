"use client";

/**
 * V10Brands — 9 premium brands in a marquee grid.
 */

import { brands } from "@/lib/content";

export default function V10Brands() {
  const doubled = [...brands, ...brands];
  return (
    <section className="v10-brands" id="brands">
      <div className="v10-section-inner">
        <header className="v10-brands-head">
          <span className="v10-eyebrow">Premium brands</span>
          <h2 className="v10-h2">
            Nine brands.
            <br />
            <em>One installer.</em>
          </h2>
        </header>
      </div>

      <div className="v10-brands-marquee" aria-hidden>
        <div className="v10-brands-track">
          {doubled.map((b, i) => (
            <div className="v10-brand-chip" key={`${b.name}-${i}`}>
              <span className="v10-brand-name">{b.name}</span>
              <span className="v10-brand-tag">{b.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="v10-section-inner">
        <div className="v10-brands-grid">
          {brands.map((b) => (
            <div className="v10-brand-card" key={b.name}>
              <h3 className="v10-brand-card-name">{b.name}</h3>
              <span className="v10-brand-card-tag">{b.tag}</span>
              <p className="v10-brand-card-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
