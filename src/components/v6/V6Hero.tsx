"use client";

/**
 * V6 Hero — Inspired by shopify.design's hero.
 * - Massive serif H1 "Make the / new normal" — line 2 has accent + rises after load
 * - LIVE marquee bar with pulsing dot
 * - Bento grid of image + color-blocked cards
 * - Marquee pill button ("Book a Demo · Book a Demo · ...") + arrow icon
 */
import Link from "next/link";

export default function V6Hero() {
  return (
    <section className="v6-hero">
      {/* Hero meta row */}
      <div className="v6-row" style={{ marginTop: "clamp(20px, 3vw, 40px)" }}>
        <span className="v6-eyebrow">Excellence in Cooling Since 2019</span>
        <span className="v6-eyebrow">Colombo · Sri Lanka</span>
      </div>

      {/* Hero headline — line 1 + line 2 (rises) */}
      <h1 className="v6-h1 v6-hero-headline">
        <span className="v6-hero-line v6-hero-line-1">
          <span className="v6-hero-line-inner">Precision cooling,</span>
        </span>
        <span className="v6-hero-line v6-hero-line-2">
          <span className="v6-hero-line-inner">
            <span className="v6-hero-accent">engineered</span> for Sri Lanka.
          </span>
        </span>
      </h1>

      {/* LIVE marquee bar */}
      <div className="v6-hero-live" aria-hidden="true">
        <span className="v6-hero-live-dot" />
        <div className="v6-hero-live-track">
          <span>
            <span>SHOW UP</span><span>·</span>
            <span>STAY COOL</span><span>·</span>
            <span>SUPPLY</span><span>·</span>
            <span>INSTALL</span><span>·</span>
            <span>MAINTAIN</span><span>·</span>
            <span>REPAIR</span><span>·</span>
            <span>SINCE 2019</span><span>·</span>
            <span>SHOW UP</span><span>·</span>
            <span>STAY COOL</span><span>·</span>
            <span>SUPPLY</span><span>·</span>
            <span>INSTALL</span><span>·</span>
            <span>MAINTAIN</span><span>·</span>
            <span>REPAIR</span><span>·</span>
            <span>SINCE 2019</span><span>·</span>
          </span>
        </div>
      </div>

      {/* Bento grid of cards */}
      <div className="v6-hero-grid">
        {/* Image card A — wide */}
        <Link href="#solutions" className="v6-hero-card v6-hero-card--a">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Modern air conditioner installed in a luxury living room"
            loading="lazy"
          />
        </Link>

        {/* Amber text card B */}
        <div className="v6-hero-card v6-hero-card--amber v6-hero-card--b">
          <div>
            <p className="v6-card-eyebrow">DOMESTIC</p>
            <p className="v6-card-title">Home comfort, redefined.</p>
          </div>
          <p className="v6-card-eyebrow" style={{ opacity: 0.7 }}>
            Midea · Haier · Panasonic · LG
          </p>
        </div>

        {/* Image card C */}
        <Link href="#solutions" className="v6-hero-card v6-hero-card--c">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
            alt="HVAC technician servicing commercial AC unit"
            loading="lazy"
          />
        </Link>

        {/* Navy text card D */}
        <div className="v6-hero-card v6-hero-card--text v6-hero-card--d">
          <div>
            <p className="v6-card-eyebrow">COMMERCIAL</p>
            <p className="v6-card-title">Offices, retail & hospitality.</p>
          </div>
          <p className="v6-card-eyebrow" style={{ opacity: 0.7 }}>
            LG · Daikin · Samsung
          </p>
        </div>

        {/* Image card E — wide */}
        <Link href="#solutions" className="v6-hero-card v6-hero-card--e">
          <img
            src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=1200&q=80"
            alt="Industrial VRF HVAC system installation"
            loading="lazy"
          />
        </Link>

        {/* Clay text card F */}
        <div className="v6-hero-card v6-hero-card--clay v6-hero-card--f">
          <div>
            <p className="v6-card-eyebrow">INDUSTRIAL</p>
            <p className="v6-card-title">VRF systems for plants & data centres.</p>
          </div>
          <p className="v6-card-eyebrow" style={{ opacity: 0.8 }}>
            Mitsubishi · Daikin · Samsung
          </p>
        </div>

        {/* Image card G */}
        <Link href="#brands" className="v6-hero-card v6-hero-card--g">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80"
            alt="Modern AC unit interior view"
            loading="lazy"
          />
        </Link>

        {/* Beige text card H */}
        <div className="v6-hero-card v6-hero-card--beige v6-hero-card--h">
          <div>
            <p className="v6-card-eyebrow">SINCE 2019</p>
            <p className="v6-card-title">9 premium brands. 40+ business clients.</p>
          </div>
          <Link href="#about" className="v6-pill v6-pill--outline" style={{ alignSelf: "flex-start" }}>
            About Celsius
          </Link>
        </div>
      </div>

      {/* CTA row — marquee pill + arrow icon */}
      <div className="v6-row" style={{ marginTop: "clamp(30px, 4vw, 50px)" }}>
        <div className="v6-btn-group">
          <Link href="#contact" className="v6-pill-marquee">
            <div className="v6-pill-marquee-track">
              <span>
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
              </span>
              <span>
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
                <span>BOOK A DEMO</span><span className="v6-pill-marquee-dot" />
              </span>
            </div>
          </Link>
          <Link href="#contact" className="v6-pill-icon" aria-label="Talk to a specialist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <span className="v6-eyebrow">Talk to a specialist</span>
      </div>
    </section>
  );
}
