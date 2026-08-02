"use client";

/**
 * V6 Solutions / Remote — Inspired by shopify.design's "Remote by design" section.
 * Massive split headline "Remote / by design." + city/location cards.
 */
import Link from "next/link";

export default function V6Solutions() {
  const solutions = [
    {
      num: "01",
      city: "Domestic",
      region: "HOMES · APARTMENTS · VILLAS",
      desc: "Energy-efficient, smart cooling for modern homes. Brands: Midea, Haier, Panasonic, LG.",
      tone: "var(--v6-amber)",
      features: ["Smart integration", "Energy efficiency", "Improved air quality"],
    },
    {
      num: "02",
      city: "Commercial",
      region: "OFFICES · RETAIL · HOTELS",
      desc: "Multi-split zoning for offices, retail, restaurants, and hotels. Brands: LG, Panasonic, Daikin.",
      tone: "var(--v6-clay)",
      features: ["Multi-split zoning", "Smart connectivity", "Air purification"],
    },
    {
      num: "03",
      city: "Industrial",
      region: "PLANTS · DATA CENTRES",
      desc: "VRF systems for manufacturing, storage, and high-density computing. Brands: Mitsubishi, Daikin, Samsung.",
      tone: "var(--v6-blue)",
      features: ["VRF systems", "Precise regulation", "Robust reliability"],
    },
    {
      num: "04",
      city: "Aftercare",
      region: "MAINTENANCE · REPAIRS",
      desc: "Scheduled service plans, gas leak repair, and rapid-response breakdown support across Sri Lanka.",
      tone: "var(--v6-mint)",
      features: ["Scheduled plans", "Rapid response", "Genuine parts"],
    },
  ];

  return (
    <section className="v6-remote" id="solutions" data-reveal>
      <div className="v6-remote-inner">
        <div className="v6-row" style={{ marginBottom: "32px" }}>
          <span className="v6-eyebrow">Sectors we serve</span>
          <span className="v6-eyebrow">3 sectors · 1 standard</span>
        </div>

        <h2 className="v6-remote-headline" data-depth="-200">
          Engineered <em className="v6-remote-accent">by sector.</em>
        </h2>

        <p className="v6-lede" style={{ maxWidth: "720px" }}>
          Different spaces demand different cooling strategies. We&apos;ve built specialist teams for
          each sector — so every install gets the right hardware, the right sizing, and the right
          aftercare.
        </p>

        <div className="v6-remote-grid">
          {solutions.map((s, i) => (
            <div key={i} className="v6-remote-card" data-depth={-50 - i * 10}>
              <p className="v6-remote-card-num">{s.num} · {s.region}</p>
              <h3 className="v6-remote-card-city">{s.city}</h3>
              <p className="v6-body" style={{ marginTop: "12px", marginBottom: "16px" }}>{s.desc}</p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "12px 0 20px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}>
                {s.features.map((f, j) => (
                  <li key={j} style={{
                    fontFamily: "var(--v6-mono)",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--v6-grey)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <span style={{
                      width: "6px",
                      height: "6px",
                      background: s.tone,
                      borderRadius: "50%",
                      display: "inline-block",
                    }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="v6-pill v6-pill--outline"
                style={{ borderColor: "var(--v6-ink)", color: "var(--v6-ink)" }}
              >
                Talk to a specialist
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
