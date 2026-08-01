"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V4 Vision — Overlay's signature sticky stacking panels.
 * Three sticky sections stack on top of each other as you scroll.
 * Each contains a rotated-card gallery (overlay's signature) that scatters
 * into formation on enter.
 */

type Panel = {
  eyebrow: string;
  title: string;
  body: string;
  cards: { label: string; img: string }[];
  tone: "light" | "dark" | "amber";
};

const panels: Panel[] = [
  {
    eyebrow: "Vision 01 — Domestic",
    title: "Cooling that fits the way you live.",
    body:
      "Smart, energy-efficient systems for modern Sri Lankan homes — calibrated to your room, your climate, and your routine.",
    cards: [
      { label: "Bedroom", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=70" },
      { label: "Living", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=70" },
      { label: "Studio", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=70" },
      { label: "Kitchen", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=70" },
    ],
    tone: "light",
  },
  {
    eyebrow: "Vision 02 — Commercial",
    title: "Quiet comfort for the spaces where work happens.",
    body:
      "Offices, retail, restaurants and hotels — multi-split zoning, smart connectivity, and air purification tuned for productivity.",
    cards: [
      { label: "Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=70" },
      { label: "Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=70" },
      { label: "Hotel", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=70" },
      { label: "Cafe", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=70" },
    ],
    tone: "dark",
  },
  {
    eyebrow: "Vision 03 — Industrial",
    title: "Precision cooling for the work that cannot stop.",
    body:
      "VRF systems for manufacturing, cold storage, and data centres — robust, reliable, and engineered for continuous operation.",
    cards: [
      { label: "Plant", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=70" },
      { label: "Data centre", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=70" },
      { label: "Storage", img: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=600&q=70" },
      { label: "Processing", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=70" },
    ],
    tone: "amber",
  },
];

const cardScatter = [
  { x: -180, y: -120, r: -22 },
  { x: 160, y: -100, r: 18 },
  { x: -120, y: 130, r: 14 },
  { x: 180, y: 110, r: -16 },
];

export default function V4Vision() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // For each panel, animate its cards from scattered -> formation on enter
      panels.forEach((_, i) => {
        const cards = root.current?.querySelectorAll(
          `.v4-vision-panel[data-idx="${i}"] .v4-gallery-card`
        );
        if (!cards || !cards.length) return;

        // Set initial scattered state
        cards.forEach((card, j) => {
          const s = cardScatter[j % cardScatter.length];
          gsap.set(card, {
            x: s.x,
            y: s.y,
            rotation: s.r,
            opacity: 0,
            zIndex: j + 1,
          });
        });

        // Animate to formation when panel enters
        gsap.to(cards, {
          x: (j: number) => (j % 2 === 0 ? -30 : 30),
          y: (j: number) => (j < 2 ? -20 : 20),
          rotation: (j: number) => (j % 2 === 0 ? -4 : 4),
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: `.v4-vision-panel[data-idx="${i}"]`,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        });
      });

      // Title word reveal on each panel
      gsap.utils.toArray<HTMLElement>(".v4-vision-title .v4-word-inner").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="v4-vision" ref={root} className="v4-sticky-stack">
      {panels.map((p, i) => (
        <div
          key={i}
          data-idx={i}
          className={`v4-vision-panel v4-sticky-panel ${
            p.tone === "dark" ? "is-dark" : p.tone === "amber" ? "is-amber" : ""
          }`}
        >
          <div className="v4-sticky-panel-inner">
            <div className="v4-sticky-panel-text">
              <span className={`v4-eyebrow ${p.tone !== "light" ? "v4-eyebrow-light" : ""}`}>
                {p.eyebrow}
              </span>
              <h2 className="v4-h2 v4-vision-title">
                {p.title.split(" ").map((word, j) => (
                  <span key={j} className="v4-word" style={{ overflow: "hidden", display: "inline-block" }}>
                    <span className="v4-word-inner">{word}&nbsp;</span>
                  </span>
                ))}
              </h2>
              <p className="v4-lede">{p.body}</p>
            </div>
            <div className="v4-card-gallery">
              {p.cards.map((c, j) => (
                <div
                  key={j}
                  className="v4-gallery-card"
                  style={{
                    top: `${15 + j * 12}%`,
                    left: `${(j % 2 === 0 ? 8 : 50) + (j > 1 ? 4 : 0)}%`,
                  }}
                >
                  <img src={c.img} alt={c.label} loading="lazy" />
                  <span className="v4-gallery-card-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
