"use client";

/**
 * V6 Clients Marquee — Real client list from brochure page 17.
 *
 * 40+ verified business clients across Sri Lanka, displayed as a
 * dual-row infinite marquee. Top row scrolls left, bottom row scrolls
 * right (opposite directions for visual interest).
 *
 * Color: navy background with cyan client names for the "cooling" theme.
 */

import { clients } from "@/lib/content";

export default function V6ClientsMarquee() {
  // Split clients into two rows
  const mid = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, mid);
  const row2 = clients.slice(mid);

  // Duplicate for seamless loop
  const row1Loop = [...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2];

  return (
    <section
      style={{
        background: "var(--v6-navy)",
        color: "var(--v6-white)",
        padding: "clamp(28px, 4vw, 48px) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding: "0 var(--v6-pad)",
          maxWidth: "var(--v6-max)",
          margin: "0 auto 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <span
            className="v6-eyebrow"
            style={{
              color: "var(--v6-cyan-bright)",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Trusted by 40+ businesses
          </span>
          <h3
            style={{
              fontFamily: "var(--v6-serif)",
              fontSize: "clamp(20px, 2.4vw, 32px)",
              fontWeight: 500,
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            From boutique hotels to{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "var(--v6-gradient-cool)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              industrial plants.
            </em>
          </h3>
        </div>
        <span
          style={{
            fontFamily: "var(--v6-mono)",
            fontSize: "12px",
            letterSpacing: "0.06em",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
          }}
        >
          Sri Lanka · Since 2019
        </span>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginBottom: "8px",
          maskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "32px",
            animation: "v6-marquee 60s linear infinite",
            paddingLeft: "32px",
          }}
        >
          {row1Loop.map((c, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--v6-serif)",
                fontSize: "clamp(18px, 2vw, 28px)",
                fontWeight: 500,
                color: i % 3 === 0 ? "var(--v6-cyan-bright)" : i % 3 === 1 ? "var(--v6-white)" : "var(--v6-sky)",
                letterSpacing: "-0.01em",
                display: "inline-flex",
                alignItems: "center",
                gap: "32px",
                flexShrink: 0,
              }}
            >
              {c}
              <span
                aria-hidden
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: i % 3 === 0 ? "var(--v6-yellow-bright)" : "var(--v6-cyan)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          maskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "32px",
            animation: "v6-marquee 60s linear infinite reverse",
            paddingLeft: "32px",
          }}
        >
          {row2Loop.map((c, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--v6-serif)",
                fontSize: "clamp(18px, 2vw, 28px)",
                fontWeight: 500,
                color: i % 3 === 0 ? "var(--v6-yellow-bright)" : i % 3 === 1 ? "var(--v6-white)" : "var(--v6-cyan)",
                letterSpacing: "-0.01em",
                display: "inline-flex",
                alignItems: "center",
                gap: "32px",
                flexShrink: 0,
              }}
            >
              {c}
              <span
                aria-hidden
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: i % 3 === 0 ? "var(--v6-cyan-bright)" : "var(--v6-yellow)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
