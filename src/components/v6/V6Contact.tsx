"use client";

/**
 * V6 Contact — Inspired by shopify.design's "Help shape what comes next" CTA section.
 * Big amber headline + CTA pill + simple contact form.
 */
import { company } from "@/lib/content";

export default function V6Contact() {
  return (
    <section className="v6-cta" id="contact" data-reveal>
      <div className="v6-container">
        <div className="v6-row" style={{ marginBottom: "32px" }}>
          <span className="v6-eyebrow" style={{ color: "var(--v6-amber)" }}>Get in touch</span>
          <span className="v6-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>{company.hours}</span>
        </div>

        <h2 className="v6-cta-headline" data-depth="-200">
          Let&apos;s engineer <em>your comfort</em> next.
        </h2>

        <p className="v6-lede" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "640px", marginBottom: "48px" }}>
          Tell us about your space — home, office, plant, or project. We&apos;ll come back within one
          business day with a transparent quote and a recommended system.
        </p>

        <div className="v6-cta-row">
          <a href={`tel:${company.phoneHref.replace('tel:','')}`} className="v6-cta-pill">
            Call {company.phone}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontFamily: "var(--v6-mono)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.85)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}>
            <span>{company.email}</span>
            <span>{company.address.join(" · ")}</span>
            <span style={{ color: "var(--v6-amber)" }}>{company.hours}</span>
          </div>
        </div>

        {/* Simple form */}
        <form
          style={{
            marginTop: "clamp(40px, 6vw, 80px)",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            maxWidth: "900px",
          }}
          onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${company.email}`; }}
        >
          {[
            { label: "Your name", name: "name", type: "text", placeholder: "Ijaz Niyaz" },
            { label: "Phone", name: "phone", type: "tel", placeholder: "+94 777 136 560" },
            { label: "Sector", name: "sector", type: "text", placeholder: "Domestic / Commercial / Industrial" },
            { label: "Property size", name: "size", type: "text", placeholder: "sq ft or rooms" },
          ].map((f, i) => (
            <label key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{
                fontFamily: "var(--v6-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.6)",
              }}>{f.label}</span>
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
          <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
            <button type="submit" className="v6-cta-pill" style={{ background: "var(--v6-white)", color: "var(--v6-navy-deep)" }}>
              Send enquiry
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
