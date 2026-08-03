"use client";

/**
 * V10Manifesto — pinned text overlay that appears as the 3D sequence
 * reaches the exploded view (~50% scroll). Three pillars in a tight grid.
 */

import { services } from "@/lib/content";
import V10Reveal from "./V10Reveal";

export default function V10Manifesto() {
  return (
    <div className="v10-manifesto">
      <V10Reveal as="div" className="v10-manifesto-inner" selector=".v10-pillar" staggerMs={120}>
        <span className="v10-eyebrow v10-eyebrow--light">Engineering, exposed.</span>
        <h2 className="v10-h2">
          Every component,
          <br />
          <em>accounted for.</em>
        </h2>
        <p className="v10-lede">
          The exploded view you just scrubbed through isn&apos;t decoration —
          it&apos;s how we think. Filters, coils, fans, control boards: each
          piece is sourced, installed, and serviced with the same discipline.
        </p>

        <div className="v10-pillars">
          {services.slice(0, 4).map((s) => (
            <div className="v10-pillar" key={s.idx}>
              <span className="v10-pillar-num">{s.idx}</span>
              <h3 className="v10-pillar-title">{s.name}</h3>
              <p className="v10-pillar-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </V10Reveal>
    </div>
  );
}
