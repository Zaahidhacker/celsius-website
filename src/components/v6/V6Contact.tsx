"use client";

/**
 * V6 Contact — Inspired by shopify.design's "Help shape what comes next" CTA section.
 *
 * Updates (animejs):
 * - Big amber headline + CTA pill (kept)
 * - Simple contact form (kept)
 * - NEW: Social media links row (Instagram, Facebook, WhatsApp, Email)
 * - Headline + form reveal with animejs V6Reveal
 * - Whole CTA has a 3D tilt that responds to scroll
 */

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import { company, socials } from "@/lib/content";
import V6Reveal from "./V6Reveal";

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

export default function V6Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    if (!section || !headline) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // Subtle 3D rotation on the headline — scrubbed by scroll
    const anim = animate(headline, {
      rotateX: [3, -3, 3],
      rotateY: [-1, 1, -1],
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
        anim.seek(p * anim.duration);
      },
    });

    return () => {
      obs.revoke?.();
      anim.pause();
    };
  }, []);

  const socialItems = [
    { ...socials.instagram, icon: "instagram" as const, href: socials.instagram.href },
    { ...socials.facebook, icon: "facebook" as const, href: socials.facebook.href },
    { ...socials.whatsapp, icon: "whatsapp" as const, href: socials.whatsapp.href },
    { ...socials.email, icon: "email" as const, href: socials.email.href },
  ];

  return (
    <section
      ref={sectionRef}
      className="v6-cta"
      id="contact"
      data-reveal
      style={{ perspective: "1200px" }}
    >
      <div className="v6-container">
        <V6Reveal y={50} rotate={6}>
          <div className="v6-row" style={{ marginBottom: "32px" }}>
            <span className="v6-eyebrow" style={{ color: "var(--v6-cyan-bright)" }}>
              Get in touch
            </span>
            <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              {company.hours}
            </span>
          </div>
        </V6Reveal>

        <h2
          ref={headlineRef}
          className="v6-cta-headline"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          Let&apos;s engineer <em>your comfort</em> next.
        </h2>

        <V6Reveal y={40} delay={150}>
          <p
            className="v6-lede"
            style={{
              color: "rgba(255,255,255,0.85)",
              maxWidth: "65ch",
              marginBottom: "32px",
            }}
          >
            Tell us about your space — home, office, plant, or project. We&apos;ll come back within
            one business day with a transparent quote and a recommended system.
          </p>
        </V6Reveal>

        <V6Reveal y={40} delay={250}>
          <div className="v6-cta-row">
            <a href={company.phoneHref} className="v6-cta-pill">
              Call {company.phone}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontFamily: "var(--v6-mono)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.04em",
              }}
            >
              <a href={company.emailHref} style={{ color: "rgba(255,255,255,0.85)" }}>
                {company.email}
              </a>
              <span>{company.address.join(" · ")}</span>
              <span style={{ color: "var(--v6-cyan-bright)" }}>{company.hours}</span>
            </div>
          </div>
        </V6Reveal>

        {/* Social links row */}
        <V6Reveal y={40} delay={350}>
          <div className="v6-cta-socials">
            <span
              className="v6-eyebrow"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Follow Celsius
            </span>
            <div className="v6-cta-socials-row">
              {socialItems.map((s) => (
                <a
                  key={s.key || s.label}
                  href={s.href}
                  target={s.icon === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="v6-cta-social"
                  aria-label={`${s.label}: ${s.handle}`}
                >
                  <span className="v6-cta-social-icon">
                    <SocialIcon name={s.icon} />
                  </span>
                  <span className="v6-cta-social-text">
                    <span className="v6-cta-social-label">{s.label}</span>
                    <span className="v6-cta-social-handle">{s.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </V6Reveal>

        {/* Simple form */}
        <V6Reveal y={40} delay={450}>
          <form
            style={{
              marginTop: "clamp(40px, 6vw, 80px)",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              maxWidth: "65ch",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = company.emailHref;
            }}
          >
            {[
              { label: "Your name", name: "name", type: "text", placeholder: "Ijaz Niyaz" },
              { label: "Phone", name: "phone", type: "tel", placeholder: "+94 777 136 560" },
              { label: "Sector", name: "sector", type: "text", placeholder: "Domestic / Commercial / Industrial" },
              { label: "Property size", name: "size", type: "text", placeholder: "sq ft or rooms" },
            ].map((f, i) => (
              <label key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{
                    fontFamily: "var(--v6-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {f.label}
                </span>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  style={{
                    padding: "12px 16px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "var(--v6-radius-pill)",
                    color: "var(--v6-white)",
                    fontFamily: "var(--v6-sans)",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </label>
            ))}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "8px",
              }}
            >
              <button
                type="submit"
                className="v6-cta-pill"
                style={{ background: "var(--v6-white)", color: "var(--v6-navy-deep)" }}
              >
                Send enquiry
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </V6Reveal>
      </div>
    </section>
  );
}
