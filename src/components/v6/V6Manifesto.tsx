"use client";

/**
 * V6 Manifesto — Inspired by shopify.design's "Make commerce better for everyone" section.
 * Two-column: left has 3D animated "40+ business clients" object (scroll-driven via animejs);
 * right has serif headline + body.
 */
import { stats } from "@/lib/content";
import V6Manifesto3D from "./V6Manifesto3D";

export default function V6Manifesto() {
  return (
    <section className="v6-manifesto" id="about" data-reveal>
      <div className="v6-manifesto-grid">
        <div className="v6-manifesto-left" data-depth="-200">
          <V6Manifesto3D />
          <p className="v6-eyebrow">Our design philosophy</p>
        </div>

        <div className="v6-manifesto-right">
          <h2 className="v6-h2" data-depth="-100">
            Make comfort <em className="v6-text-clay v6-italic">better</em> for everyone.
          </h2>

          <p className="v6-lede">
            Every 26 seconds, a Sri Lankan home or business switches on a Celsius-installed system.
            That kind of scale changes the job — and how we approach engineering.
          </p>

          <p className="v6-body">
            Since 2019, Celsius has supplied, installed, and serviced premium air conditioning
            systems across domestic, commercial, and industrial sectors. We pair branded hardware
            from Midea, Daikin, Panasonic, Mitsubishi, LG and more with seasoned on-site expertise —
            delivering cooling solutions that lower cost, reduce environmental impact, and stand the
            test of time.
          </p>

          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", marginTop: "12px" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div className="v6-h3" style={{ color: "var(--v6-clay)" }}>{s.number}</div>
                <p className="v6-eyebrow" style={{ marginTop: "4px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
