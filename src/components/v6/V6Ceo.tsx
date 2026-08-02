"use client";

/**
 * V6 CEO — Inspired by shopify.design's editorial pull-quote section.
 */
import { ceo } from "@/lib/content";

export default function V6Ceo() {
  return (
    <section className="v6-section" id="ceo" style={{ background: "var(--v6-clay)", color: "var(--v6-white)" }} data-reveal>
      <div className="v6-container" style={{ maxWidth: "1100px" }}>
        <div className="v6-row" style={{ marginBottom: "32px" }}>
          <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>{ceo.eyebrow}</span>
          <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>{ceo.role}</span>
        </div>

        <blockquote style={{
          margin: 0,
          fontFamily: "var(--v6-serif)",
          fontSize: "clamp(32px, 4.4vw, 72px)",
          fontWeight: 500,
          lineHeight: 1.32,
          letterSpacing: "-0.02em",
          color: "var(--v6-white)",
        }} data-depth="-100">
          <span style={{ color: "var(--v6-amber)", fontStyle: "italic" }}>&ldquo;</span>
          {ceo.quote}
          <span style={{ color: "var(--v6-amber)", fontStyle: "italic" }}>&rdquo;</span>
        </blockquote>

        <div style={{
          marginTop: "clamp(40px, 6vw, 80px)",
          paddingTop: "32px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--v6-serif)",
              fontSize: "28px",
              fontWeight: 500,
              margin: 0,
              color: "var(--v6-white)",
            }}>{ceo.name}</p>
            <p className="v6-eyebrow" style={{ marginTop: "6px", color: "rgba(255,255,255,0.7)" }}>{ceo.role}</p>
          </div>
          <p style={{
            fontFamily: "var(--v6-sans)",
            fontSize: "14px",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.8)",
            margin: 0,
            maxWidth: "480px",
          }}>{ceo.bio}</p>
        </div>
      </div>
    </section>
  );
}
