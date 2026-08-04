"use client";

/**
 * V6 Reviews — Real customer review screenshots displayed as 3D-tilted cards.
 *
 * Features:
 * - Each review is a card showing the real screenshot from /public/reviews/
 * - Below the screenshot: quote, name, role, 5-star rating
 * - Cards reveal with animejs stagger on scroll
 * - Whole grid has a 3D tilt that responds to scroll progress
 * - On hover, the card lifts and rotates slightly
 */

import { useEffect, useRef } from "react";
import { animate, stagger, onScroll } from "animejs";
import Link from "next/link";
import { testimonials, socials } from "@/lib/content";
import V6Reveal from "./V6Reveal";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="v6-review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden
        >
          <path d="M8 1.5l1.96 4.02 4.43.64-3.2 3.12.75 4.41L8 11.62l-3.94 2.07.75-4.41-3.2-3.12 4.43-.64L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function V6Reviews() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const section = sectionRef.current;
    if (!grid || !section) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // 3D tilt on the grid — scrubbed by scroll progress.
    // Grid tilts on Y axis (left-right) as user scrolls.
    const gridAnim = animate(grid, {
      rotateY: [-3, 3, -3],
      rotateX: [4, -2, 4],
      duration: 1000,
      ease: "linear",
      autoplay: false,
    });

    const obs = onScroll({
      target: section,
      enter: "bottom top",
      leave: "top bottom",
      sync: 60,
      onUpdate: (o) => {
        const p = Math.max(0, Math.min(1, o.progress));
        gridAnim.seek(p * gridAnim.duration);
      },
    });

    // Per-card hover 3D effect using mouse position
    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".v6-review-card")
    );

    const handlers = cards.map((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
      };
      const onLeave = () => {
        card.style.transform = "";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return { card, onMove, onLeave };
    });

    return () => {
      obs.revoke?.();
      gridAnim.pause();
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="v6-section v6-reviews-section"
      id="reviews"
      data-reveal
      style={{
        background: "var(--v6-white)",
        paddingBlock: "clamp(80px, 12vw, 160px)",
      }}
    >
      <div className="v6-container">
        <V6Reveal y={60} rotate={6}>
          <div className="v6-row" style={{ marginBottom: "24px" }}>
            <span className="v6-eyebrow" style={{ color: "var(--v6-clay)" }}>
              Client reviews
            </span>
            <span className="v6-eyebrow">
              {testimonials.length} verified · 5-star average
            </span>
          </div>

          <h2 className="v6-h2" style={{ marginBottom: "16px" }}>
            Real reviews. <em className="v6-text-clay v6-italic">Real comfort.</em>
          </h2>

          <p
            className="v6-lede"
            style={{ maxWidth: "720px", marginTop: "16px" }}
          >
            Every review below is a screenshot of a real message we received
            from a Celsius client. We don&apos;t filter, we don&apos;t curate —
            this is the work, in their words.
          </p>
        </V6Reveal>

        {/* Reviews grid — 3D tilted cards */}
        <div
          ref={gridRef}
          className="v6-reviews-grid"
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 30%",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {testimonials.map((t, i) => (
            <V6Reveal
              key={i}
              y={80}
              rotate={i % 2 === 0 ? 10 : -10}
              delay={i * 100}
              duration={1000}
              ease="outExpo"
            >
              <article
                className="v6-review-card"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Review screenshot */}
                <div className="v6-review-screenshot-wrap">
                  <img
                    src={t.image}
                    alt={t.imageAlt}
                    className="v6-review-screenshot"
                    loading="lazy"
                  />
                  <div className="v6-review-screenshot-overlay" aria-hidden />
                </div>

                {/* Review body */}
                <div className="v6-review-body">
                  <Stars count={t.rating} />
                  <blockquote className="v6-review-quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="v6-review-author">
                    <span className="v6-review-name">{t.name}</span>
                    <span className="v6-review-role">{t.role}</span>
                  </div>
                </div>
              </article>
            </V6Reveal>
          ))}
        </div>

        {/* Social CTA */}
        <V6Reveal y={40} delay={200} style={{ marginTop: "clamp(48px, 6vw, 80px)" }}>
          <div className="v6-reviews-cta">
            <div>
              <h3 className="v6-h4" style={{ marginBottom: "8px" }}>
                Worked with us recently?
              </h3>
              <p className="v6-body" style={{ color: "var(--v6-grey)" }}>
                Tag us on social — we feature every review on our wall.
              </p>
            </div>
            <div className="v6-reviews-social-row">
              <a
                href={socials.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="v6-pill v6-pill--outline"
              >
                Instagram
              </a>
              <a
                href={socials.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="v6-pill v6-pill--outline"
              >
                Facebook
              </a>
              <Link href="#contact" className="v6-pill v6-pill--amber">
                Leave a review
              </Link>
            </div>
          </div>
        </V6Reveal>
      </div>
    </section>
  );
}
