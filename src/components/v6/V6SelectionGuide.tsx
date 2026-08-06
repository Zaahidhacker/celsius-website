"use client";

/**
 * V6 Selection Guide — AC selection table from brochure page 10.
 *
 * Shows BTU ranges, room areas, A/C types, tips, and example products
 * for Domestic, Commercial, and Industrial categories.
 *
 * Features:
 * - 3D tilt cards (one per category) with scroll-scrubbed rotation
 * - Color-coded by category: cyan (Domestic), yellow (Commercial), red (Industrial)
 * - Spec chips for A/C types and example products
 * - Tip list with check icons
 */

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import { selectionGuide } from "@/lib/content";
import V6Reveal from "./V6Reveal";

const CATEGORY_TONES = [
  {
    bg: "var(--v6-cyan)",
    text: "var(--v6-white)",
    accent: "var(--v6-yellow-bright)",
    chipBg: "rgba(255,255,255,0.18)",
    chipText: "var(--v6-white)",
  },
  {
    bg: "var(--v6-yellow)",
    text: "var(--v6-navy-deep)",
    accent: "var(--v6-red)",
    chipBg: "rgba(10,29,63,0.1)",
    chipText: "var(--v6-navy-deep)",
  },
  {
    bg: "var(--v6-red)",
    text: "var(--v6-white)",
    accent: "var(--v6-yellow-bright)",
    chipBg: "rgba(255,255,255,0.18)",
    chipText: "var(--v6-white)",
  },
];

export default function V6SelectionGuide() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".v6-guide-card")
    );

    const cardAnims = cards.map((card, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      return animate(card, {
        rotateY: [dir * 3, dir * -3, dir * 3],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      });
    });

    const obs = onScroll({
      target: section,
      enter: "bottom top",
      leave: "top bottom",
      sync: 60,
      onUpdate: (o) => {
        const p = Math.max(0, Math.min(1, o.progress));
        cardAnims.forEach((a) => a.seek(p * a.duration));
      },
    });

    return () => {
      obs.revoke?.();
      cardAnims.forEach((a) => a.pause());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="v6-section"
      id="selection-guide"
      data-reveal
      style={{
        background: "var(--v6-navy-deep)",
        color: "var(--v6-white)",
        paddingBlock: "clamp(40px, 5vw, 64px)",
      }}
    >
      <div className="v6-container">
        <V6Reveal y={40} rotate={4}>
          <div className="v6-row" style={{ marginBottom: "12px" }}>
            <span className="v6-eyebrow" style={{ color: "var(--v6-cyan-bright)" }}>
              {selectionGuide.eyebrow}
            </span>
            <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              3 categories · BTU chart
            </span>
          </div>

          <h2
            className="v6-h2"
            style={{
              color: "var(--v6-white)",
              marginBottom: "8px",
            }}
          >
            {selectionGuide.title.split(" ").slice(0, -1).join(" ")}{" "}
            <em style={{
              fontStyle: "italic",
              background: "var(--v6-gradient-cool)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {selectionGuide.title.split(" ").slice(-1)}
            </em>
          </h2>

          <p
            className="v6-lede"
            style={{
              color: "rgba(255,255,255,0.85)",
              maxWidth: "70ch",
              marginTop: "8px",
              marginBottom: "4px",
            }}
          >
            {selectionGuide.subtitle}
          </p>

          <p
            style={{
              fontFamily: "var(--v6-mono)",
              fontSize: "11px",
              letterSpacing: "0.04em",
              color: "rgba(255,255,255,0.5)",
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            {selectionGuide.note}
          </p>
        </V6Reveal>

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
            marginTop: "clamp(20px, 2vw, 32px)",
            perspective: "1200px",
            perspectiveOrigin: "50% 30%",
          }}
        >
          {selectionGuide.categories.map((cat, i) => {
            const tone = CATEGORY_TONES[i % CATEGORY_TONES.length];
            return (
              <V6Reveal key={i} y={50} rotate={6} delay={i * 100}>
                <article
                  className="v6-guide-card"
                  style={{
                    background: tone.bg,
                    color: tone.text,
                    borderRadius: "var(--v6-radius-card)",
                    padding: "24px",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Big number watermark */}
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "12px",
                      fontFamily: "var(--v6-serif)",
                      fontSize: "120px",
                      fontWeight: 600,
                      lineHeight: 1,
                      opacity: 0.12,
                      color: tone.text,
                      pointerEvents: "none",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Category name */}
                  <h3
                    style={{
                      fontFamily: "var(--v6-serif)",
                      fontSize: "32px",
                      fontWeight: 500,
                      margin: "0 0 6px",
                      letterSpacing: "-0.02em",
                      position: "relative",
                    }}
                  >
                    {cat.type}
                  </h3>

                  {/* BTU range */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "8px",
                      marginBottom: "4px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--v6-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        opacity: 0.7,
                      }}
                    >
                      BTU Range
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--v6-serif)",
                        fontSize: "22px",
                        fontWeight: 500,
                      }}
                    >
                      {cat.btuRange}
                    </span>
                  </div>

                  {/* Room area */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "8px",
                      marginBottom: "16px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--v6-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        opacity: 0.7,
                      }}
                    >
                      Room Area
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--v6-sans)",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      {cat.roomArea}
                    </span>
                  </div>

                  {/* A/C Types chips */}
                  <div style={{ marginBottom: "12px", position: "relative" }}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--v6-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        opacity: 0.7,
                        marginBottom: "6px",
                      }}
                    >
                      A/C Types
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {cat.acTypes.map((t, j) => (
                        <span
                          key={j}
                          style={{
                            fontFamily: "var(--v6-mono)",
                            fontSize: "11px",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            background: tone.chipBg,
                            color: tone.chipText,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div style={{ marginBottom: "12px", position: "relative" }}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--v6-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        opacity: 0.7,
                        marginBottom: "6px",
                      }}
                    >
                      Tips
                    </span>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {cat.tips.map((tip, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontFamily: "var(--v6-sans)",
                            fontSize: "13px",
                            lineHeight: 1.4,
                          }}
                        >
                          <span
                            aria-hidden
                            style={{
                              flexShrink: 0,
                              width: "6px",
                              height: "6px",
                              marginTop: "7px",
                              borderRadius: "50%",
                              background: tone.accent,
                            }}
                          />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--v6-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        opacity: 0.7,
                        marginBottom: "6px",
                      }}
                    >
                      Example Products
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {cat.examples.map((ex, j) => (
                        <span
                          key={j}
                          style={{
                            fontFamily: "var(--v6-mono)",
                            fontSize: "11px",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            border: `1px solid ${tone.accent}`,
                            color: tone.text,
                          }}
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </V6Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
