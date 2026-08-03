"use client";

const KINETIC = ["Cool rooms.", "Quiet units.", "Honest pricing.", "Since 2019."];

export default function V8Hero() {
  return (
    <section className="v8-hero" id="top">
      <div className="v8-container">
        <div className="v8-hero-meta">
          <span className="v8-hero-meta-item">VOL.08 · KINETIC EDITION</span>
          <span className="v8-hero-meta-item">EST. 2019 · COLOMBO · LK</span>
          <span className="v8-hero-meta-item">PRECISION COOLING JOURNAL</span>
        </div>

        <h1 className="v8-hero-headline">
          We design
          <br />
          <span className="v8-hero-headline-italic v8-hero-underline">cool rooms</span>
          <br />
          for a hot island.
        </h1>

        <p className="v8-hero-lede">
          Celsius supplies, installs, and services premium air conditioning
          across Sri Lanka. Quiet units, honest pricing, same-week callouts
          within the Western Province.
        </p>

        {/* Kinetic marquee */}
        <div className="v8-hero-kinetic" aria-hidden="true">
          <div className="v8-hero-kinetic-track">
            {[0, 1].map((dup) => (
              <span key={dup} style={{ display: "inline-flex", alignItems: "center", gap: "2rem" }}>
                {KINETIC.map((k, i) => (
                  <span key={`${dup}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: "2rem" }}>
                    <span>{k}</span>
                    <span className="v8-dot" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="v8-cta-row">
          <a href="#contact" className="v8-btn">
            Book a demo <span aria-hidden>→</span>
          </a>
          <a href="#work" className="v8-btn v8-btn--outline">
            See the work
          </a>
          <span className="v8-hero-meta-item" style={{ opacity: 0.7 }}>
            Or call <a href="tel:+9477300200" style={{ color: "var(--v8-navy)", textDecoration: "underline" }}>+94 77 300 2000</a>
          </span>
        </div>

        {/* Stats inline */}
        <div className="v8-hero-stats">
          <div className="v8-hero-stat">
            <div className="v8-hero-stat-num">2019</div>
            <div className="v8-hero-stat-label">Established</div>
          </div>
          <div className="v8-hero-stat">
            <div className="v8-hero-stat-num">1,200+</div>
            <div className="v8-hero-stat-label">Installs</div>
          </div>
          <div className="v8-hero-stat">
            <div className="v8-hero-stat-num">9</div>
            <div className="v8-hero-stat-label">AC brands</div>
          </div>
          <div className="v8-hero-stat">
            <div className="v8-hero-stat-num">40+</div>
            <div className="v8-hero-stat-label">Business clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
