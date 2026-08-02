"use client";

/**
 * V6 Brands — Inspired by shopify.design's "26 seconds" stat block.
 * Big serif number + brand marquee strip.
 */
import { brands } from "@/lib/content";

export default function V6Brands() {
  return (
    <section className="v6-section" id="brands" style={{ background: "var(--v6-navy)", color: "var(--v6-white)" }} data-reveal>
      <div className="v6-container">
        <div className="v6-row" style={{ marginBottom: "32px" }}>
          <span className="v6-eyebrow" style={{ color: "var(--v6-amber)" }}>Premium brands</span>
          <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>9 partners</span>
        </div>

        <h2 className="v6-h2" style={{ color: "var(--v6-white)" }} data-depth="-100">
          9 brands. <em className="v6-text-amber v6-italic">One standard.</em>
        </h2>

        <p className="v6-lede" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "720px", marginTop: "24px" }}>
          We don&apos;t sell hardware we wouldn&apos;t install in our own homes. Every brand below has
          earned its place through years of field-tested reliability.
        </p>

        {/* Brand marquee */}
        <div style={{
          marginTop: "clamp(40px, 6vw, 80px)",
          padding: "24px 0",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "48px",
            animation: "v6-marquee 40s linear infinite",
          }}>
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} style={{
                fontFamily: "var(--v6-serif)",
                fontSize: "clamp(32px, 4vw, 64px)",
                fontWeight: 500,
                color: "var(--v6-white)",
                letterSpacing: "-0.02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "48px",
              }}>
                {b.name}
                <span style={{
                  width: "8px",
                  height: "8px",
                  background: "var(--v6-amber)",
                  borderRadius: "50%",
                  display: "inline-block",
                }} />
              </span>
            ))}
          </div>
        </div>

        {/* Brand detail grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          marginTop: "clamp(40px, 6vw, 80px)",
        }}>
          {brands.map((b, i) => (
            <div key={i} data-depth={-50 - i * 10} style={{
              padding: "24px",
              borderRadius: "var(--v6-radius-card)",
              background: i % 3 === 0 ? "var(--v6-amber)" : i % 3 === 1 ? "rgba(255,255,255,0.05)" : "var(--v6-clay)",
              color: i % 3 === 0 ? "var(--v6-navy-deep)" : "var(--v6-white)",
              border: i % 3 === 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
              transition: "transform 0.4s var(--v6-ease)",
            }}>
              <p className="v6-card-eyebrow" style={{ opacity: 0.7 }}>{b.tag}</p>
              <h3 style={{
                fontFamily: "var(--v6-serif)",
                fontSize: "28px",
                fontWeight: 500,
                margin: "8px 0 12px",
                letterSpacing: "-0.02em",
              }}>{b.name}</h3>
              <p style={{
                fontFamily: "var(--v6-sans)",
                fontSize: "14px",
                lineHeight: 1.5,
                opacity: 0.85,
                margin: 0,
              }}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
