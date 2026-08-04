"use client";

/**
 * V6 Brands — Inspired by shopify.design's "26 seconds" stat block.
 *
 * Updates (animejs):
 * - Big serif headline + brand marquee strip (kept)
 * - NEW: 3D orbit ring of brand names that rotates with scroll progress
 * - Brand detail grid reveals with animejs stagger
 */

import { useEffect, useRef } from "react";
import { animate, stagger, onScroll } from "animejs";
import { brands } from "@/lib/content";
import V6Reveal from "./V6Reveal";

export default function V6Brands() {
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const orbitStageRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    const stage = orbitStageRef.current;
    const grid = gridRef.current;
    if (!orbit || !stage || !grid) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      orbit.style.transform = "rotateX(70deg) rotateZ(0deg)";
      return;
    }

    // Combined 3D orbit rotation — single animation with both rotateX and rotateZ
    // to avoid conflict between two separate animations on the same element.
    const orbitAnim = animate(orbit, {
      rotateX: [70, 65, 70],
      rotateZ: [0, 360],
      duration: 1000,
      ease: "linear",
      autoplay: false,
    });

    const obs = onScroll({
      target: stage,
      enter: "bottom top",
      leave: "top bottom",
      sync: 60,
      onUpdate: (o) => {
        const p = Math.max(0, Math.min(1, o.progress));
        orbitAnim.seek(p * orbitAnim.duration);
        // Debug: store progress on the element for inspection
        (orbit as HTMLElement).dataset.progress = String(p.toFixed(3));
      },
    });

    // Trigger initial measurement so the animation renders at the current
    // scroll position instead of waiting for the first scroll event.
    requestAnimationFrame(() => {
      try {
        (obs as any).refresh?.();
      } catch {
        // Observer may not be ready yet — will refresh on next scroll.
      }
    });

    return () => {
      obs.revoke?.();
      orbitAnim.pause();
    };
  }, []);

  // Position each brand around a circle in 3D space
  const orbitBrands = [...brands, ...brands]; // duplicate for denser ring
  const radius = 220;

  return (
    <section
      className="v6-section"
      id="brands"
      style={{ background: "var(--v6-navy)", color: "var(--v6-white)" }}
      data-reveal
    >
      <div className="v6-container">
        <V6Reveal y={50} rotate={6}>
          <div className="v6-row" style={{ marginBottom: "32px" }}>
            <span className="v6-eyebrow" style={{ color: "var(--v6-amber)" }}>
              Premium brands
            </span>
            <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              9 partners
            </span>
          </div>

          <h2 className="v6-h2" style={{ color: "var(--v6-white)" }}>
            9 brands.{" "}
            <em className="v6-text-amber v6-italic">One standard.</em>
          </h2>

          <p
            className="v6-lede"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "720px", marginTop: "24px" }}
          >
            We don&apos;t sell hardware we wouldn&apos;t install in our own homes.
            Every brand below has earned its place through years of field-tested
            reliability.
          </p>
        </V6Reveal>

        {/* 3D Orbit ring of brand names */}
        <div
          ref={orbitStageRef}
          className="v6-brands-orbit-stage"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 30%",
            marginTop: "clamp(40px, 6vw, 80px)",
            marginBottom: "clamp(40px, 6vw, 80px)",
            position: "relative",
            height: "440px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            ref={orbitRef}
            className="v6-brands-orbit"
            style={{
              position: "relative",
              width: "1px",
              height: "1px",
              transformStyle: "preserve-3d",
              transform: "rotateX(70deg)",
              willChange: "transform",
            }}
          >
            {orbitBrands.map((b, i) => {
              const angle = (i / orbitBrands.length) * 360;
              return (
                <span
                  key={i}
                  className="v6-brand-orbit-item"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `rotateZ(${angle}deg) translateX(${radius}px) rotateZ(-${angle}deg)`,
                    transformStyle: "preserve-3d",
                    fontFamily: "var(--v6-serif)",
                    fontSize: "clamp(20px, 2.2vw, 32px)",
                    fontWeight: 500,
                    color: i % 3 === 0 ? "var(--v6-amber)" : "var(--v6-white)",
                    letterSpacing: "-0.02em",
                    whiteSpace: "nowrap",
                    padding: "0 16px",
                    textShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {b.name}
                </span>
              );
            })}
          </div>

          {/* Center "9 brands" label */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontFamily: "var(--v6-serif)",
                fontSize: "clamp(48px, 6vw, 80px)",
                fontWeight: 600,
                color: "var(--v6-amber)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              9
            </div>
            <div
              style={{
                fontFamily: "var(--v6-mono)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginTop: "8px",
              }}
            >
              Premium brands
            </div>
          </div>
        </div>

        {/* Brand marquee */}
        <div
          style={{
            padding: "24px 0",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "48px",
              animation: "v6-marquee 40s linear infinite",
            }}
          >
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--v6-serif)",
                  fontSize: "clamp(32px, 4vw, 64px)",
                  fontWeight: 500,
                  color: "var(--v6-white)",
                  letterSpacing: "-0.02em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "48px",
                }}
              >
                {b.name}
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "var(--v6-amber)",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Brand detail grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginTop: "clamp(40px, 6vw, 80px)",
          }}
        >
          <V6Reveal stagger={80} y={50} rotate={8}>
            {brands.map((b, i) => (
              <div
                key={i}
                style={{
                  padding: "32px 28px",
                  borderRadius: "var(--v6-radius-card)",
                  background:
                    i % 3 === 0
                      ? "var(--v6-amber)"
                      : i % 3 === 1
                      ? "rgba(255,255,255,0.05)"
                      : "var(--v6-clay)",
                  color:
                    i % 3 === 0
                      ? "var(--v6-navy-deep)"
                      : i % 3 === 1
                      ? "var(--v6-white)"
                      : "var(--v6-white)",
                  border: i % 3 === 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                  transition: "transform 0.4s var(--v6-ease)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--v6-serif)",
                    fontSize: "32px",
                    fontWeight: 500,
                    margin: "0 0 12px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {b.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--v6-sans)",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </V6Reveal>
        </div>
      </div>
    </section>
  );
}
