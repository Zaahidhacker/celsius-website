"use client";

/**
 * V6 Projects — Inspired by shopify.design's case-study carousel.
 * Horizontal-scroll project cards with stacked imagery.
 */
import Link from "next/link";
import { caseStudies } from "@/lib/content";

export default function V6Projects() {
  // Map each case study to an Unsplash image
  const imgs = [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
    "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=900&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
  ];

  const cards = caseStudies.map((c, i) => ({ ...c, img: imgs[i % imgs.length] }));

  return (
    <section className="v6-carousel-section" id="projects" data-reveal>
      <div className="v6-carousel-headline-stack">
        <div className="v6-row" style={{ marginBottom: "24px" }}>
          <span className="v6-eyebrow">Recent work</span>
          <Link href="#contact" className="v6-pill v6-pill--outline">Start a project</Link>
        </div>
        <h2 className="v6-h2" data-depth="-150">
          Real installs. <em className="v6-text-clay v6-italic">Real results.</em>
        </h2>
      </div>

      <div className="v6-carousel-track">
        {cards.map((c, i) => (
          <article key={i} className="v6-carousel-card" data-depth={-50 - i * 10}>
            <div className="v6-carousel-card-media">
              <span className="v6-carousel-card-tag">{c.tag}</span>
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
              />
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
