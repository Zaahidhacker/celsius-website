"use client";

/**
 * V10Services — four service cards with staggered anime.js reveal.
 */

import { services } from "@/lib/content";
import V10Reveal from "./V10Reveal";

export default function V10Services() {
  return (
    <section className="v10-services" id="services">
      <div className="v10-section-inner">
        <header className="v10-services-head">
          <span className="v10-eyebrow">What we do</span>
          <h2 className="v10-h2">
            Four disciplines.
            <br />
            <em>One standard.</em>
          </h2>
        </header>

        <V10Reveal as="div" className="v10-services-grid" selector=".v10-service" staggerMs={100}>
          {services.map((s) => (
            <a key={s.idx} href={s.href} className="v10-service">
              <span className="v10-service-num">{s.idx}</span>
              <h3 className="v10-service-name">{s.name}</h3>
              <p className="v10-service-desc">{s.desc}</p>
              <span className="v10-service-cta">Read more →</span>
            </a>
          ))}
        </V10Reveal>
      </div>
    </section>
  );
}
