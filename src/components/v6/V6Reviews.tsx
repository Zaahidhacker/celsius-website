"use client";

/**
 * V6 Reviews — Real customer review screenshots displayed as 3D-tilted cards.
 *
 * Features:
 * - Each card has a CLIENT LOGO HEADER (monogram badge + client name + sub)
 *   rendered from the `logo` block on each testimonial in content.ts
 * - Each card shows TWO real screenshots (primary + companion) as a stacked/flip gallery
 * - Below the gallery: quote, name, location, project, 5-star rating
 * - Cards reveal with animejs stagger on scroll
 * - Whole grid has a 3D tilt that responds to scroll progress
 * - On hover, the card lifts and rotates slightly
 * - Schema.org Review JSON-LD structured data injected for SEO
 *
 * Logo + Socials block at the end:
 * - Big Celsius logo wordmark with amber dot
 * - All 4 social links (Instagram, Facebook, WhatsApp, Email) in a row
 * - 3D tilt on the logo driven by scroll
 */

import { useEffect, useRef, useState } from "react";
import { animate, onScroll } from "animejs";
import Link from "next/link";
import { testimonials, socials, company } from "@/lib/content";
import V6Reveal from "./V6Reveal";

/* ---------- Client logo icon (small, top-right of monogram) ---------- */
function ClientLogoIcon({ name }: { name: string }) {
  switch (name) {
    case "wave":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
          <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.5" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <line x1="9" y1="7" x2="9" y2="7" />
          <line x1="15" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="9" y2="11" />
          <line x1="15" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="9" y2="15" />
          <line x1="15" y1="15" x2="15" y2="15" />
        </svg>
      );
    case "snowflake":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="4.5" y1="4.5" x2="19.5" y2="19.5" />
          <line x1="19.5" y1="4.5" x2="4.5" y2="19.5" />
        </svg>
      );
    case "tooth":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 5c-2-1.5-4-2-6-1.5C3.5 4 3 6 3 8c0 3 1 5 1.5 8 .3 1.7 1 3 2 3 1 0 1.3-1.5 1.5-3 .2-1.5.5-3 2-3s1.8 1.5 2 3c.2 1.5.5 3 1.5 3 1 0 1.7-1.3 2-3 .5-3 1.5-5 1.5-8 0-2-.5-4-3-4.5-2-.5-4 0-6 1.5z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---------- Client logo header (top of each review card) ---------- */
function ClientLogo({ logo }: { logo: TestimonialLogo }) {
  return (
    <div className="v6-review-client-logo" style={{ background: logo.bg, color: logo.color }}>
      <div className="v6-review-client-mark">
        <span className="v6-review-client-monogram">{logo.monogram}</span>
        <span className="v6-review-client-icon" aria-hidden>
          <ClientLogoIcon name={logo.icon} />
        </span>
      </div>
      <div className="v6-review-client-text">
        <span className="v6-review-client-name">{logo.name}</span>
        <span className="v6-review-client-sub">{logo.sub}</span>
      </div>
    </div>
  );
}

// Import the type inline (kept here so the file is self-contained)
import type { TestimonialLogo } from "@/lib/content";

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

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.973-1.041zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M3 6l9 7 9-7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function V6Reviews() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const section = sectionRef.current;
    const logo = logoRef.current;
    if (!grid || !section) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // 3D tilt on the grid — scrubbed by scroll progress.
    const gridAnim = animate(grid, {
      rotateY: [-2, 2, -2],
      rotateX: [3, -1, 3],
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

    // Per-card hover 3D effect
    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".v6-review-card")
    );

    const handlers = cards.map((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
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

    // Logo 3D tilt — scrubbed by scroll
    let logoAnim: ReturnType<typeof animate> | null = null;
    let logoObs: ReturnType<typeof onScroll> | null = null;
    if (logo) {
      logoAnim = animate(logo, {
        rotateY: [-4, 4, -4],
        rotateX: [2, -2, 2],
        scale: [1.02, 0.98, 1.02],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      });
      logoObs = onScroll({
        target: logo,
        enter: "bottom top",
        leave: "top bottom",
        sync: 80,
        onUpdate: (o) => {
          const p = Math.max(0, Math.min(1, o.progress));
          logoAnim.seek(p * logoAnim.duration);
        },
      });
    }

    return () => {
      obs.revoke?.();
      logoObs?.revoke?.();
      gridAnim.pause();
      logoAnim?.pause();
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  const socialItems = [
    { ...socials.instagram, icon: "instagram" as const },
    { ...socials.facebook, icon: "facebook" as const },
    { ...socials.whatsapp, icon: "whatsapp" as const },
    { ...socials.email, icon: "email" as const },
  ];

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
            style={{ maxWidth: "65ch", marginTop: "16px" }}
          >
            Every review below is a screenshot of a real message we received
            from a Celsius client — Wellawatta, Prime Residencies, Havock
            Dental Care and more. We don&apos;t filter, we don&apos;t curate —
            this is the work, in their words.
          </p>
        </V6Reveal>

        {/* Reviews grid — 3D tilted cards with image gallery */}
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
                tabIndex={0}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Client logo header */}
                {t.logo && <ClientLogo logo={t.logo} />}

                {/* Image stack — primary + companion on hover */}
                <div className="v6-review-screenshot-wrap">
                  <img
                    src={t.image}
                    alt={t.imageAlt}
                    className="v6-review-screenshot v6-review-screenshot--primary"
                    loading="lazy"
                  />
                  {t.image2 && (
                    <img
                      src={t.image2}
                      alt={`${t.imageAlt} — detail`}
                      className="v6-review-screenshot v6-review-screenshot--secondary"
                      loading="lazy"
                    />
                  )}
                  <div className="v6-review-screenshot-overlay" aria-hidden />
                  <div className="v6-review-image-badge">
                    <span>{String(i + 1).padStart(2, "0")} / 04</span>
                  </div>
                </div>

                {/* Review body */}
                <div className="v6-review-body">
                  <Stars count={t.rating} />
                  <blockquote className="v6-review-quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="v6-review-meta">
                    <div className="v6-review-author">
                      <span className="v6-review-name">{t.name}</span>
                      <span className="v6-review-role">{t.role}</span>
                    </div>
                    <div className="v6-review-location">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{t.location}</span>
                    </div>
                  </div>
                  <div className="v6-review-project">
                    <span className="v6-review-project-label">Project</span>
                    <span className="v6-review-project-value">{t.project}</span>
                  </div>
                </div>
              </article>
            </V6Reveal>
          ))}
        </div>

        {/* Logo + Socials block */}
        <V6Reveal y={50} delay={150} style={{ marginTop: "clamp(64px, 8vw, 110px)" }}>
          <div className="v6-reviews-logo-block" style={{ perspective: "1200px" }}>
            <div
              ref={logoRef}
              className="v6-reviews-logo"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <span className="v6-reviews-logo-mark">Celsius</span>
              <span className="v6-reviews-logo-dot" aria-hidden />
              <span className="v6-reviews-logo-tagline">
                Excellence in Cooling Since {company.established}
              </span>
            </div>

            <div className="v6-reviews-socials">
              <span className="v6-eyebrow" style={{ color: "var(--v6-grey)" }}>
                Connect with us
              </span>
              <div className="v6-reviews-socials-row">
                {socialItems.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="v6-reviews-social"
                    aria-label={`${s.label}: ${s.handle}`}
                  >
                    <span className="v6-reviews-social-icon">
                      <SocialIcon name={s.icon} />
                    </span>
                    <span className="v6-reviews-social-text">
                      <span className="v6-reviews-social-label">{s.label}</span>
                      <span className="v6-reviews-social-handle">{s.handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="v6-reviews-cta-row">
              <a
                href={company.phoneHref}
                className="v6-pill v6-pill--amber"
              >
                Call {company.phone}
              </a>
              <Link href="#contact" className="v6-pill v6-pill--outline">
                Book a Demo
              </Link>
            </div>
          </div>
        </V6Reveal>
      </div>

      {/* Schema.org Review structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": testimonials.map((t) => ({
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: t.name,
              },
              reviewBody: t.quote,
              itemReviewed: {
                "@type": "Service",
                name: t.project,
                provider: {
                  "@type": "Organization",
                  name: "Celsius",
                },
              },
              publisher: {
                "@type": "Organization",
                name: "Celsius HVAC (Pvt) Ltd",
              },
            })),
          }),
        }}
      />
    </section>
  );
}
