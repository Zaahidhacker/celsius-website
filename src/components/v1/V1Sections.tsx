"use client";

import { useEffect, useRef } from "react";
import { company, hero, stats, services, brands, solutions, ceo, caseStudies, testimonials } from "@/lib/content";

/* =================== ScrollProvider =================== */
export function V1ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".v1-reveal");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach(e => e.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return <>{children}</>;
}

/* =================== Navbar =================== */
export function V1Navbar() {
  return (
    <header className="v1-nav">
      <div className="v1-shell v1-nav-inner">
        <a href="#top" className="v1-wordmark" aria-label="Celsius home">
          Celsius<span className="v1-wordmark-dot">.</span>
        </a>
        <nav className="v1-nav-links" aria-label="Primary">
          <a className="v1-nav-link" href="#services">Services</a>
          <a className="v1-nav-link" href="#brands">Brands</a>
          <a className="v1-nav-link" href="#projects">Projects</a>
          <a className="v1-nav-link" href="#about">About</a>
          <a className="v1-nav-link" href="#contact">Contact</a>
        </nav>
        <a className="v1-nav-cta" href={company.phoneHref}>
          {company.phone}
        </a>
      </div>
    </header>
  );
}

/* =================== Hero =================== */
export function V1Hero() {
  return (
    <section className="v1-hero" id="top">
      <div className="v1-shell">
        <div className="v1-hero-masthead">
          <span className="v1-meta v1-meta-caps v1-meta-ink">Vol. 06 · 2026</span>
          <span className="v1-meta">Colombo, Sri Lanka · Mon–Sat 8:30–18:30</span>
        </div>

        <h1 className="v1-hero-headline v1-reveal">
          Precision cooling,<br />
          <em>engineered</em> for the island.
        </h1>

        <div className="v1-hero-deck">
          <p className="v1-hero-deck-lead v1-reveal">
            Since 2019, Celsius has supplied, installed, and serviced premium air conditioning across Sri Lanka. Domestic, commercial, industrial. One standard.
          </p>
          <div className="v1-hero-deck-meta v1-reveal">
            <div className="v1-hero-byline">
              <span className="v1-meta v1-meta-brick v1-meta-caps">In this edition</span>
              <span className="v1-meta v1-meta-ink">Services · Brands · Projects · Founder</span>
            </div>
            <div className="v1-hero-actions">
              <a className="v1-btn v1-btn-primary" href="#contact">Book a Demo</a>
              <a className="v1-btn v1-btn-ghost" href="#services">Read the work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================== Dateline =================== */
export function V1Dateline() {
  return (
    <section className="v1-dateline" aria-label="Company figures">
      {stats.map(s => (
        <div key={s.label} className="v1-dateline-cell">
          <span className="v1-dateline-num">{s.number}</span>
          <span className="v1-dateline-label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}

/* =================== About / Letter from the editor =================== */
export function V1About() {
  return (
    <section className="v1-section" id="about">
      <div className="v1-shell">
        <div className="v1-section-head v1-reveal">
          <h2 className="v1-section-head-title">
            Where cooling<br /><em>meets craft.</em>
          </h2>
          <p className="v1-section-head-lead">
            Celsius has engineered comfort across Sri Lanka since 2019, pairing nine premium brands with seasoned field expertise. The work is exact. The pricing is honest. The aftercare is real.
          </p>
        </div>

        <div className="v1-two-col">
          <div className="v1-col-body v1-dropcap v1-reveal">
            <p>
              We did not set out to be the biggest air conditioning company in Sri Lanka. We set out to be the most precise. Every system we specify is matched to the room, the use, the climate, and the people who live or work inside it. Every install is signed off by a senior engineer. Every service call ends with a written report.
            </p>
            <p>
              Nine brands sit on our shelf: Midea, Daikin, Panasonic, Haier, Mitsubishi, Samsung, TCL, Chigo, and LG. Each one earns its place by meeting a standard we have held since 2019. We do not stock what we would not install in our own homes.
            </p>
            <p>
              The work spans three sectors. Domestic homes that need quiet, efficient, smart-cooled comfort. Commercial spaces that need zoning, multi-split architecture, and air purification. Industrial plants that need VRF systems, precise regulation, and zero downtime. The brief changes. The standard does not.
            </p>
          </div>

          <aside className="v1-col-aside">
            <div className="v1-aside-block v1-reveal">
              <span className="v1-meta v1-meta-brick v1-meta-caps">The Pledge</span>
              <p className="v1-body" style={{ marginTop: 12 }}>
                If your facility's temperature and air quality are not right, we will modify it. That is the whole promise, and it is not negotiable.
              </p>
            </div>
            <div className="v1-aside-block v1-reveal">
              <span className="v1-meta v1-meta-brick v1-meta-caps">Sectors</span>
              <ul className="v1-body" style={{ marginTop: 12, listStyle: "none", padding: 0 }}>
                <li style={{ padding: "8px 0", borderBottom: "1px solid var(--v1-rule)" }}>Domestic · homes &amp; apartments</li>
                <li style={{ padding: "8px 0", borderBottom: "1px solid var(--v1-rule)" }}>Commercial · offices, retail, hotels</li>
                <li style={{ padding: "8px 0" }}>Industrial · plants, data centres</li>
              </ul>
            </div>
            <div className="v1-aside-block v1-reveal">
              <span className="v1-meta v1-meta-brick v1-meta-caps">Visit</span>
              <p className="v1-body" style={{ marginTop: 12 }}>
                {company.address[0]}<br />
                {company.address[1]}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* =================== Services =================== */
export function V1Services() {
  // Extend with 2 extra rows so the list reads as a full editorial index
  const rows = [
    ...services,
    { idx: "05", name: "Smart Home Integration", desc: "Wi-Fi-enabled units tied to your home automation, voice control, and remote scheduling.", href: "#contact" },
    { idx: "06", name: "Consultation & Audits", desc: "Site surveys, load calculations, and honest recommendations before you buy anything.", href: "#contact" },
  ];
  return (
    <section className="v1-section" id="services">
      <div className="v1-shell">
        <div className="v1-section-head v1-reveal">
          <h2 className="v1-section-head-title">
            The<br /><em>index.</em>
          </h2>
          <p className="v1-section-head-lead">
            Six services, listed in the order they tend to come up. Each one is a real offering with a named specialist behind it.
          </p>
        </div>

        <div className="v1-service-list">
          {rows.map(s => (
            <a key={s.idx} className="v1-service-row v1-reveal" href={s.href}>
              <span className="v1-service-num">{s.idx}</span>
              <span className="v1-service-title">{s.name}</span>
              <span className="v1-service-desc">{s.desc}</span>
              <span className="v1-service-meta">Read more</span>
              <span className="v1-service-arrow" aria-hidden>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== Brands (single marquee) =================== */
export function V1Brands() {
  const repeated = [...brands, ...brands];
  return (
    <section className="v1-marquee" id="brands" aria-label="Premium AC brands">
      <div className="v1-marquee-track">
        {repeated.map((b, i) => (
          <span key={`${b.name}-${i}`} className="v1-marquee-item">
            {b.name}
          </span>
        ))}
      </div>
    </section>
  );
}

/* =================== Projects =================== */
export function V1Projects() {
  return (
    <section className="v1-section" id="projects">
      <div className="v1-shell">
        <div className="v1-section-head v1-reveal">
          <h2 className="v1-section-head-title">
            Selected<br /><em>commissions.</em>
          </h2>
          <p className="v1-section-head-lead">
            Three recent installs. Each one shipped with a written handover, a maintenance schedule, and a phone number that picks up.
          </p>
        </div>

        <div className="v1-projects">
          {caseStudies.map((c, i) => {
            const spans = ["v1-project-span-8", "v1-project-span-4", "v1-project-span-7"];
            const ratios = ["v1-project-img-wide", "v1-project-img-tall", "v1-project-img-square"];
            const seeds = ["hotel-colombo", "plant-homagama", "residence-nugegoda"];
            return (
              <a key={c.title} className={`v1-project ${spans[i]} v1-reveal`} href="#contact">
                <div className={`v1-project-img ${ratios[i]}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/${seeds[i]}/1200/900`}
                    alt={c.title}
                    loading="lazy"
                  />
                </div>
                <h3 className="v1-project-title">{c.title}</h3>
                <div className="v1-project-meta">
                  <span>{c.tag}</span>
                  <span>{c.result}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =================== Pull quote (CEO) =================== */
export function V1Ceo() {
  return (
    <section className="v1-pullquote">
      <div className="v1-shell" style={{ display: "contents" }}>
        <span className="v1-pullquote-mark v1-reveal" aria-hidden>"</span>
        <blockquote className="v1-pullquote-text v1-reveal">
          We did not build Celsius to sell air conditioners. We built it to give Sri Lankan homes and businesses the <em>comfort</em> they deserve, engineered with precision, delivered with integrity.
        </blockquote>
        <div className="v1-pullquote-attr v1-reveal">
          <span className="v1-pullquote-attr-name">{ceo.name}</span>
          <span>{ceo.role}</span>
          <span style={{ marginTop: 12, color: "var(--v1-ink-faint)" }}>Founder, 2026</span>
        </div>
      </div>
    </section>
  );
}

/* =================== Solutions (text-only, no cards) =================== */
export function V1Solutions() {
  return (
    <section className="v1-section" id="solutions">
      <div className="v1-shell">
        <div className="v1-section-head v1-reveal">
          <h2 className="v1-section-head-title">
            By<br /><em>sector.</em>
          </h2>
          <p className="v1-section-head-lead">
            The brief changes by sector. The standard does not. Three sectors, each with its own lead engineer and its own preferred brand shelf.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--v1-rule)" }}>
          {solutions.map(s => (
            <div key={s.id} className="v1-reveal" style={{ padding: "40px 28px", borderRight: "1px solid var(--v1-rule)", display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="v1-meta v1-meta-brick">{s.label}</span>
              <h3 className="v1-display v1-display-m" style={{ margin: 0 }}>{s.title}</h3>
              <p className="v1-body">{s.body}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--v1-rule)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.features.map(f => (
                  <li key={f} className="v1-meta v1-meta-ink" style={{ textTransform: "none", fontFamily: "var(--v1-f-body)", fontSize: 15, letterSpacing: 0, color: "var(--v1-ink)" }}>
                    <span style={{ color: "var(--v1-brick)", marginRight: 8 }}>✦</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== Testimonial =================== */
export function V1Testimonial() {
  const t = testimonials[0];
  return (
    <section className="v1-section-tight v1-shell">
      <div className="v1-two-col" style={{ alignItems: "center" }}>
        <div className="v1-reveal">
          <span className="v1-meta v1-meta-brick v1-meta-caps">Reader letter</span>
          <p className="v1-display v1-display-s v1-italic" style={{ marginTop: 16, color: "var(--v1-ink)" }}>
            "{t.quote}"
          </p>
        </div>
        <div className="v1-col-aside v1-reveal">
          <span className="v1-meta v1-meta-ink">{t.name}</span>
          <span className="v1-meta" style={{ marginTop: 4 }}>{t.role}</span>
        </div>
      </div>
    </section>
  );
}

/* =================== Contact =================== */
export function V1Contact() {
  return (
    <section className="v1-contact" id="contact">
      <div className="v1-shell">
        <div className="v1-contact-grid">
          <div className="v1-reveal">
            <span className="v1-meta v1-meta-brick v1-meta-caps">Letter</span>
            <h2 className="v1-contact-letter" style={{ marginTop: 16 }}>
              Let's engineer your <em>comfort</em> next.
            </h2>
            <p className="v1-body" style={{ marginTop: 24, maxWidth: "32ch" }}>
              Tell us about your space. We'll come back inside one working day with a written brief, a brand recommendation, and a fixed-price quote.
            </p>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
              <a className="v1-meta v1-meta-ink" style={{ textDecoration: "none" }} href={company.phoneHref}>{company.phone}</a>
              <a className="v1-meta v1-meta-ink" style={{ textDecoration: "none" }} href={company.emailHref}>{company.email}</a>
              <span className="v1-meta">{company.address[0]}, {company.address[1]}</span>
              <span className="v1-meta">Mon–Sat · 8:30–18:30</span>
            </div>
          </div>

          <form className="v1-contact-form v1-reveal" onSubmit={e => e.preventDefault()}>
            <div className="v1-form-row">
              <div className="v1-field">
                <label className="v1-field-label" htmlFor="v1-name">Your name</label>
                <input className="v1-field-input" id="v1-name" type="text" placeholder="Roshan Perera" />
              </div>
              <div className="v1-field">
                <label className="v1-field-label" htmlFor="v1-phone">Phone</label>
                <input className="v1-field-input" id="v1-phone" type="tel" placeholder="+94 77 000 0000" />
              </div>
            </div>
            <div className="v1-form-row">
              <div className="v1-field">
                <label className="v1-field-label" htmlFor="v1-sector">Sector</label>
                <input className="v1-field-input" id="v1-sector" type="text" placeholder="Domestic / Commercial / Industrial" />
              </div>
              <div className="v1-field">
                <label className="v1-field-label" htmlFor="v1-size">Property size</label>
                <input className="v1-field-input" id="v1-size" type="text" placeholder="e.g. 4 bedrooms, 2200 sqft" />
              </div>
            </div>
            <div className="v1-field">
              <label className="v1-field-label" htmlFor="v1-message">Brief</label>
              <textarea className="v1-field-textarea" id="v1-message" placeholder="Tell us what you need cooled, and any constraints we should know about." />
            </div>
            <button type="submit" className="v1-btn v1-btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
              Send brief →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =================== Footer =================== */
export function V1Footer() {
  return (
    <footer className="v1-footer">
      <div className="v1-shell">
        <div className="v1-footer-mega v1-reveal">
          Celsius<em>.</em>
        </div>
        <div className="v1-footer-grid">
          <div>
            <div className="v1-footer-col-title">Celsius HVAC</div>
            <p className="v1-body" style={{ color: "rgba(244,239,228,0.7)", maxWidth: "34ch" }}>
              Premium air conditioning supply, installation, and service across Sri Lanka since 2019. Domestic, commercial, industrial.
            </p>
          </div>
          <div>
            <div className="v1-footer-col-title">Services</div>
            <a className="v1-footer-link" href="#services">Supply &amp; Install</a>
            <a className="v1-footer-link" href="#services">Maintenance</a>
            <a className="v1-footer-link" href="#services">Breakdown Repair</a>
            <a className="v1-footer-link" href="#services">VRF Systems</a>
          </div>
          <div>
            <div className="v1-footer-col-title">Sectors</div>
            <a className="v1-footer-link" href="#solutions">Domestic</a>
            <a className="v1-footer-link" href="#solutions">Commercial</a>
            <a className="v1-footer-link" href="#solutions">Industrial</a>
            <a className="v1-footer-link" href="#solutions">Aftercare</a>
          </div>
          <div>
            <div className="v1-footer-col-title">Brands</div>
            {brands.slice(0, 5).map(b => (
              <a key={b.name} className="v1-footer-link" href="#brands">{b.name}</a>
            ))}
          </div>
          <div>
            <div className="v1-footer-col-title">Visit</div>
            <a className="v1-footer-link" href={company.phoneHref}>{company.phone}</a>
            <a className="v1-footer-link" href={company.emailHref}>{company.email}</a>
            <span className="v1-footer-link">{company.address[0]}</span>
            <span className="v1-footer-link">{company.address[1]}</span>
          </div>
        </div>
        <div className="v1-footer-bottom">
          <span>© 2026 Celsius HVAC · Colombo, Sri Lanka</span>
          <span>Cooling since 2019</span>
        </div>
      </div>
    </footer>
  );
}
