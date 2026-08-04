"use client";

/**
 * V6 Services / Carousel — Inspired by shopify.design's "Design in public" carousel.
 *
 * Updates (animejs):
 * - Each card has a 3D tilt that responds to scroll progress (scrubbed)
 * - Cards reveal with animejs stagger when scrolled into view
 * - Whole carousel has a subtle perspective tilt
 */

import { useEffect, useRef } from "react";
import { animate, stagger, onScroll } from "animejs";
import Link from "next/link";
import V6Reveal from "./V6Reveal";

export default function V6Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const cards = [
    {
      tag: "Supply & Install",
      title: "Premium branded AC supply & installation",
      date: "Domestic · Commercial · Industrial",
      desc: "Midea, Daikin, Panasonic, Mitsubishi, LG, Samsung, Haier, TCL, Chigo — expertly installed for any sector.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
      accent: "var(--v6-amber)",
      accentText: "var(--v6-navy-deep)",
    },
    {
      tag: "Service & Maintenance",
      title: "Proactive maintenance plans",
      date: "Extend system lifespan",
      desc: "Scheduled maintenance that keeps systems efficient, quiet, and reliable — year after year.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&q=80",
      accent: "var(--v6-clay)",
      accentText: "var(--v6-white)",
    },
    {
      tag: "Gas & Breakdown",
      title: "Gas leak & breakdown repair",
      date: "Rapid diagnostics",
      desc: "Skilled diagnostics for refrigerant leaks, electrical faults, and compressor failures.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80",
      accent: "var(--v6-mint)",
      accentText: "var(--v6-navy-deep)",
    },
    {
      tag: "VRF & Industrial",
      title: "VRF systems for industrial loads",
      date: "Plants · Data centres",
      desc: "Variable Refrigerant Flow systems for manufacturing, processing, and high-density computing.",
      img: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=900&q=80",
      accent: "var(--v6-blue-deep)",
      accentText: "var(--v6-white)",
    },
    {
      tag: "Smart Home",
      title: "Smart-home integrated cooling",
      date: "Wi-Fi · IoT · App control",
      desc: "Wi-Fi–enabled units you can control from anywhere. LG ThinQ, Panasonic Miraie, Haier hOn.",
      img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=900&q=80",
      accent: "var(--v6-pink)",
      accentText: "var(--v6-navy-deep)",
    },
    {
      tag: "Consultation",
      title: "Free site assessment & BTU sizing",
      date: "Right-size every time",
      desc: "Match BTU capacity to room size for optimal efficiency. No oversell, no undersizing.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
      accent: "var(--v6-lemon)",
      accentText: "var(--v6-navy-deep)",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // Per-card scrubbed 3D rotation — each card alternates direction
    const cardEls = Array.from(
      track.querySelectorAll<HTMLElement>(".v6-carousel-card")
    );

    const cardAnims = cardEls.map((card, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      return animate(card, {
        rotateY: [dir * 6, dir * -6, dir * 6],
        rotateX: [-3, 3, -3],
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
    <section ref={sectionRef} className="v6-carousel-section" id="services" data-reveal>
      <V6Reveal y={60} rotate={6}>
        <div className="v6-carousel-headline-stack">
          <div className="v6-row" style={{ marginBottom: "24px" }}>
            <span className="v6-eyebrow">What we do</span>
            <Link href="#contact" className="v6-pill v6-pill--outline">All services</Link>
          </div>
          <h2 className="v6-h2">
            Services <em className="v6-text-clay v6-italic">in motion.</em>
          </h2>
          <p className="v6-lede" style={{ marginTop: "16px", maxWidth: "640px" }}>
            From a single split unit to a full industrial VRF rollout — every job gets the same
            engineering discipline. Scroll sideways to see how.
          </p>
        </div>
      </V6Reveal>

      <div
        ref={trackRef}
        className="v6-carousel-track"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 30%" }}
      >
        {cards.map((c, i) => (
          <article
            key={i}
            className="v6-carousel-card"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <div className="v6-carousel-card-media">
              <span
                className="v6-carousel-card-tag"
                style={{ background: c.accent, color: c.accentText }}
              >
                {c.tag}
              </span>
              <img src={c.img} alt={c.title} loading="lazy" />
            </div>
            <div className="v6-carousel-card-meta">
              <h3 className="v6-carousel-card-title">{c.title}</h3>
            </div>
            <p className="v6-carousel-card-desc">{c.desc}</p>
            <p className="v6-carousel-card-date">{c.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
