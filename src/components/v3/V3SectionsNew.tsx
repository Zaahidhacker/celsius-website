"use client";

import { useEffect } from "react";
import { company, stats, services, brands, solutions, ceo, caseStudies } from "@/lib/content";

export function V3ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".v3-reveal");
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
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return <>{children}</>;
}

export function V3Navbar() {
  return (
    <header className="v3-nav">
      <div className="v3-shell v3-nav-inner">
        <a href="#top" className="v3-wordmark" aria-label="Celsius home">
          Celsius<span className="v3-wordmark-leaf" aria-hidden />
        </a>
        <nav className="v3-nav-links" aria-label="Primary">
          <a className="v3-nav-link" href="#services">Services</a>
          <a className="v3-nav-link" href="#brands">Brands</a>
          <a className="v3-nav-link" href="#projects">Work</a>
          <a className="v3-nav-link" href="#solutions">Sectors</a>
          <a className="v3-nav-link" href="#contact">Contact</a>
        </nav>
        <a className="v3-nav-cta" href="#contact">Book a Demo</a>
      </div>
    </header>
  );
}

export function V3Hero() {
  return (
    <section className="v3-hero" id="top">
      <div className="v3-shell">
        <div className="v3-hero-top">
          <span className="v3-mono">Est. {company.established} · Colombo, Sri Lanka</span>
          <span className="v3-mono">9 brands · 3 sectors · 40+ clients</span>
        </div>

        <h1 className="v3-hero-headline v3-reveal">
          Precision cooling,<br />
          <em>grown</em> from the island.
        </h1>

        <div className="v3-hero-grid">
          <p className="v3-hero-lead v3-reveal">
            Since 2019, Celsius has supplied, installed, and serviced premium air conditioning across Sri Lanka. Domestic, commercial, industrial. One standard.
          </p>
          <div className="v3-hero-aside v3-reveal">
            <div className="v3-hero-actions">
              <a className="v3-btn v3-btn-primary" href="#contact">Book a Demo</a>
              <a className="v3-btn v3-btn-ghost" href="#services">See the work</a>
            </div>
            <p className="v3-body" style={{ color: "var(--v3-ink-soft)" }}>
              Written brief within one working day. Fixed-price quote. Senior engineer on every install.
            </p>
          </div>
        </div>

        <div className="v3-stats">
          {stats.map(s => (
            <div key={s.label} className="v3-stat v3-reveal">
              <span className="v3-stat-num">{s.number}</span>
              <span className="v3-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V3Services() {
  const rows = [
    ...services,
    { idx: "05", name: "Smart Home Integration", desc: "Wi-Fi-enabled units tied to your home automation, voice control, and remote scheduling.", href: "#contact" },
    { idx: "06", name: "Consultation & Audits", desc: "Site surveys, load calculations, and honest recommendations before you buy anything.", href: "#contact" },
  ];
  const seeds = ["v3-install", "v3-maintenance", "v3-repair", "v3-vrf", "v3-smart", "v3-consult"];
  return (
    <section className="v3-section" id="services">
      <div className="v3-shell">
        <div className="v3-section-head v3-reveal">
          <h2 className="v3-section-head-title">What we <em>ship.</em></h2>
          <p className="v3-section-head-lead">
            Six services, in the order they tend to come up. Each one is a real offering with a named specialist behind it. Hover any image to see it move.
          </p>
        </div>

        <div className="v3-services">
          {rows.map((s, i) => (
            <a key={s.idx} className="v3-service v3-reveal" href={s.href} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="v3-service-text">
                <span className="v3-service-num">{s.idx}</span>
                <h3 className="v3-service-title">{s.name}</h3>
                <p className="v3-service-body">{s.desc}</p>
              </div>
              <div className="v3-service-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${seeds[i]}/800/600`} alt={s.name} loading="lazy" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V3Brands() {
  const tones = ["v3-brand", "v3-brand-amber", "v3-brand-bone", "v3-brand-moss", "v3-brand", "v3-brand-amber", "v3-brand-bone", "v3-brand-moss", "v3-brand"];
  return (
    <section className="v3-section" id="brands" style={{ background: "var(--v3-bone-deep)" }}>
      <div className="v3-shell">
        <div className="v3-section-head v3-reveal">
          <h2 className="v3-section-head-title">Nine brands, <em>one</em> standard.</h2>
          <p className="v3-section-head-lead">
            Each brand on the shelf earns its place by meeting a standard we have held since 2019. We do not stock what we would not install in our own homes.
          </p>
        </div>

        <div className="v3-brands">
          {brands.map((b, i) => (
            <a key={b.name} className={`${tones[i]} v3-brand v3-reveal`} href="#brands">
              <div>
                <span className="v3-brand-tag">{b.tag}</span>
              </div>
              <div>
                <h3 className="v3-brand-name">{b.name}</h3>
                <p className="v3-brand-body" style={{ marginTop: 12 }}>{b.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V3Projects() {
  const seeds = ["v3-hotel", "v3-plant", "v3-residence"];
  return (
    <section className="v3-section" id="projects">
      <div className="v3-shell">
        <div className="v3-section-head v3-reveal">
          <h2 className="v3-section-head-title">Selected <em>commissions.</em></h2>
          <p className="v3-section-head-lead">
            Three recent installs across commercial, industrial, and domestic. Each one shipped with a written handover, a maintenance schedule, and a phone number that picks up.
          </p>
        </div>

        <div className="v3-projects">
          {caseStudies.map((c, i) => (
            <a key={c.title} className="v3-project v3-reveal" href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="v3-project-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${seeds[i]}/1200/800`} alt={c.title} loading="lazy" />
              </div>
              <div className="v3-project-text">
                <span className="v3-project-tag">{c.tag}</span>
                <h3 className="v3-project-title">{c.title}</h3>
                <p className="v3-project-summary">{c.summary}</p>
                <p className="v3-project-result">{c.result}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V3Solutions() {
  return (
    <section className="v3-section" id="solutions">
      <div className="v3-shell">
        <div className="v3-section-head v3-reveal">
          <h2 className="v3-section-head-title">By <em>sector.</em></h2>
          <p className="v3-section-head-lead">
            The brief changes by sector. The standard does not. Three sectors, each with its own lead engineer and its own preferred brand shelf.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {solutions.map((s, i) => (
            <div key={s.id} className="v3-reveal" style={{ display: "flex", flexDirection: "column", gap: 20, padding: "32px 28px", background: "var(--v3-bone-deep)", borderRadius: 4 }}>
              <span className="v3-mono">{s.label}</span>
              <h3 className="v3-display v3-display-m" style={{ margin: 0 }}>{s.title}</h3>
              <p className="v3-body">{s.body}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid rgba(13,40,24,0.15)", paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--v3-f-body)", fontSize: 15, color: "var(--v3-forest)" }}>
                    <span style={{ width: 6, height: 6, background: "var(--v3-amber)", borderRadius: "50%", flexShrink: 0 }} />
                    {f}
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

export function V3Quote() {
  return (
    <section className="v3-quote">
      <div className="v3-shell">
        <p className="v3-quote-text v3-reveal">
          We did not build Celsius to sell air conditioners. We built it to give Sri Lankan homes the <em>comfort</em> they deserve.
        </p>
        <div className="v3-quote-attr v3-reveal">
          <span className="v3-quote-attr-name">{ceo.name}</span>
          <span className="v3-quote-attr-role">{ceo.role}</span>
        </div>
      </div>
    </section>
  );
}

export function V3Contact() {
  return (
    <section className="v3-contact" id="contact">
      <div className="v3-shell">
        <div className="v3-contact-grid">
          <div className="v3-reveal">
            <h2 className="v3-contact-headline">
              Let's engineer<br /><em>your comfort</em> next.
            </h2>
            <p className="v3-body" style={{ marginTop: 24, color: "var(--v3-forest)", maxWidth: "34ch" }}>
              Tell us about your space. We'll come back within one working day with a written brief, a brand recommendation, and a fixed-price quote.
            </p>
            <div className="v3-contact-info">
              <div className="v3-contact-info-row">
                <span className="v3-contact-info-label">Phone</span>
                <a className="v3-contact-info-value" href={company.phoneHref}>{company.phone}</a>
              </div>
              <div className="v3-contact-info-row">
                <span className="v3-contact-info-label">Email</span>
                <a className="v3-contact-info-value" href={company.emailHref}>{company.email}</a>
              </div>
              <div className="v3-contact-info-row">
                <span className="v3-contact-info-label">Visit</span>
                <span className="v3-contact-info-value">{company.address[0]}, {company.address[1]}</span>
              </div>
              <div className="v3-contact-info-row">
                <span className="v3-contact-info-label">Hours</span>
                <span className="v3-contact-info-value">Mon–Sat 8:30–18:30</span>
              </div>
            </div>
          </div>

          <form className="v3-contact-form v3-reveal" onSubmit={e => e.preventDefault()}>
            <div className="v3-form-row">
              <div className="v3-field">
                <label className="v3-field-label" htmlFor="v3-name">Name</label>
                <input className="v3-field-input" id="v3-name" type="text" placeholder="Roshan Perera" />
              </div>
              <div className="v3-field">
                <label className="v3-field-label" htmlFor="v3-phone">Phone</label>
                <input className="v3-field-input" id="v3-phone" type="tel" placeholder="+94 77 000 0000" />
              </div>
            </div>
            <div className="v3-form-row">
              <div className="v3-field">
                <label className="v3-field-label" htmlFor="v3-sector">Sector</label>
                <input className="v3-field-input" id="v3-sector" type="text" placeholder="Domestic" />
              </div>
              <div className="v3-field">
                <label className="v3-field-label" htmlFor="v3-size">Property</label>
                <input className="v3-field-input" id="v3-size" type="text" placeholder="4 bed, 2200 sqft" />
              </div>
            </div>
            <div className="v3-field">
              <label className="v3-field-label" htmlFor="v3-message">Brief</label>
              <textarea className="v3-field-textarea" id="v3-message" placeholder="Tell us what needs cooling, and any constraints we should know about." />
            </div>
            <button type="submit" className="v3-btn v3-btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
              Send brief →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function V3Footer() {
  return (
    <footer className="v3-footer">
      <div className="v3-shell">
        <div className="v3-footer-mega v3-reveal">
          Celsius<em>.</em>
        </div>
        <div className="v3-footer-grid">
          <div>
            <div className="v3-footer-col-title">Celsius HVAC</div>
            <p className="v3-body" style={{ color: "rgba(243,237,224,0.7)", maxWidth: "34ch" }}>
              Premium air conditioning supply, installation, and service across Sri Lanka since 2019.
            </p>
          </div>
          <div>
            <div className="v3-footer-col-title">Services</div>
            <a className="v3-footer-link" href="#services">Supply &amp; Install</a>
            <a className="v3-footer-link" href="#services">Maintenance</a>
            <a className="v3-footer-link" href="#services">Breakdown</a>
            <a className="v3-footer-link" href="#services">VRF</a>
          </div>
          <div>
            <div className="v3-footer-col-title">Sectors</div>
            <a className="v3-footer-link" href="#solutions">Domestic</a>
            <a className="v3-footer-link" href="#solutions">Commercial</a>
            <a className="v3-footer-link" href="#solutions">Industrial</a>
          </div>
          <div>
            <div className="v3-footer-col-title">Brands</div>
            {brands.slice(0, 5).map(b => (
              <a key={b.name} className="v3-footer-link" href="#brands">{b.name}</a>
            ))}
          </div>
          <div>
            <div className="v3-footer-col-title">Visit</div>
            <a className="v3-footer-link" href={company.phoneHref}>{company.phone}</a>
            <a className="v3-footer-link" href={company.emailHref}>{company.email}</a>
            <span className="v3-footer-link">{company.address[0]}</span>
            <span className="v3-footer-link">{company.address[1]}</span>
          </div>
        </div>
        <div className="v3-footer-bottom">
          <span>© 2026 Celsius HVAC</span>
          <span>Colombo · Sri Lanka</span>
          <span>Cooling since 2019</span>
        </div>
      </div>
    </footer>
  );
}
