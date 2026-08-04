"use client";

/**
 * V6 Projects — Inspired by shopify.design's case-study carousel.
 *
 * Updates (animejs):
 * - Headline reveals with V6Reveal
 * - Project cards reveal with staggered V6Reveal + 3D scroll tilt
 */

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import V6Reveal from "./V6Reveal";

export default function V6Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const imgs = [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
    "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=900&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
  ];

  const cards = caseStudies.map((c, i) => ({ ...c, img: imgs[i % imgs.length] }));

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // Per-card 3D tilt scrubbed by scroll
    const cardEls = Array.from(
      track.querySelectorAll<HTMLElement>(".v6-carousel-card")
    );

    const cardAnims = cardEls.map((card, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      return animate(card, {
        rotateY: [dir * 5, dir * -5, dir * 5],
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
    <section ref={sectionRef} className="v6-carousel-section" id="projects" data-reveal>
      <V6Reveal y={60} rotate={6}>
        <div className="v6-carousel-headline-stack">
          <div className="v6-row" style={{ marginBottom: "24px" }}>
            <span className="v6-eyebrow">Recent work</span>
            <Link href="#contact" className="v6-pill v6-pill--outline">Start a project</Link>
          </div>
          <h2 className="v6-h2">
            Real installs. <em className="v6-text-clay v6-italic">Real results.</em>
          </h2>
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
              <span className="v6-carousel-card-tag">{c.tag}</span>
              <img src={c.img} alt={c.title} loading="lazy" />
            </div>
            <div className="v6-carousel-card-meta">
              <h3 className="v6-carousel-card-title">{c.title}</h3>
            </div>
            <p className="v6-carousel-card-desc">{c.summary}</p>
            <p className="v6-carousel-card-date" style={{ color: "var(--v6-clay)" }}>
              {c.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
