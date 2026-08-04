"use client";

/**
 * V6 Manifesto — Inspired by shopify.design's "Make commerce better for everyone" section.
 *
 * Two-column:
 *  - Left: 3D animated "40+ business clients" cube (scroll-driven via animejs onScroll)
 *          + V6StatsCounter (count-up stats) below the cube
 *  - Right: serif headline + body + stats fallback
 *
 * The 3D cube stays sticky as the right column scrolls past, giving the user
 * a long scroll runway to see the full rotation.
 */

import { stats } from "@/lib/content";
import V6Manifesto3D from "./V6Manifesto3D";
import V6StatsCounter from "./V6StatsCounter";
import V6Reveal from "./V6Reveal";

export default function V6Manifesto() {
  return (
    <section className="v6-manifesto" id="about" data-reveal>
      <div className="v6-manifesto-grid">
        <div className="v6-manifesto-left">
          <V6Manifesto3D />
          <p className="v6-eyebrow">Our design philosophy</p>
        </div>

        <div className="v6-manifesto-right">
          <V6Reveal y={50} rotate={6}>
            <h2 className="v6-h2">
              Make comfort <em className="v6-text-clay v6-italic">better</em> for everyone.
            </h2>

            <p className="v6-lede" style={{ marginTop: "24px" }}>
              Every 26 seconds, a Sri Lankan home or business switches on a
              Celsius-installed system. That kind of scale changes the job —
              and how we approach engineering.
            </p>

            <p className="v6-body" style={{ marginTop: "24px" }}>
              Since 2019, Celsius has supplied, installed, and serviced premium
              air conditioning systems across domestic, commercial, and
              industrial sectors. We pair branded hardware from Midea, Daikin,
              Panasonic, Mitsubishi, LG and more with seasoned on-site
              expertise — delivering cooling solutions that lower cost, reduce
              environmental impact, and stand the test of time.
            </p>
          </V6Reveal>

          {/* Count-up stats row (animejs) */}
          <V6StatsCounter />
        </div>
      </div>
    </section>
  );
}
