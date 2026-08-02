"use client";

import { useEffect } from "react";
import { company, stats, services, brands, solutions, ceo, caseStudies } from "@/lib/content";

export function V2ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".v2-reveal");
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

export function V2Navbar() {
  return (
    <header className="v2-nav">
      <div className="v2-shell v2-nav-inner">
        <a href="#top" className="v2-wordmark" aria-label="Celsius home">
          <span className="v2-wordmark-square" aria-hidden />
          Celsius
        </a>
        <nav className="v2-nav-links" aria-label="Primary">
          <a className="v2-nav-link" href="#services">Services</a>
          <a className="v2-nav-link" href="#brands">Brands</a>
          <a className="v2-nav-link" href="#projects">Work</a>
          <a className="v2-nav-link" href="#solutions">Sectors</a>
          <a className="v2-nav-link" href="#contact">Contact</a>
        </nav>
        <a className="v2-nav-cta" href="#contact">
          Book a Demo →
        </a>
      </div>
    </header>
  );
}

export function V2Hero() {
  return (
    <section className="v2-hero" id="top">
      <div className="v2-shell">
        <div className="v2-hero-top">
          <div className="v2-hero-top-cell">
            <span className="v2-hero-top-label">Index</span>
            <span className="v2-hero-top-value">01 / HVAC</span>
          </div>
          <div className="v2-hero-top-cell">
            <span className="v2-hero-top-label">Established</span>
            <span className="v2-hero-top-value">2019</span>
          </div>
          <div className="v2-hero-top-cell">
            <span className="v2-hero-top-label">Location</span>
            <span className="v2-hero-top-value">Colombo, LK</span>
          </div>
          <div className="v2-hero-top-cell">
            <span className="v2-hero-top-label">Status</span>
            <span className="v2-hero-top-value" style={{ color: "var(--v2-red)" }}>● Operating</span>
          </div>
        </div>

        <div className="v2-hero-grid">
          <h1 className="v2-hero-headline v2-reveal">
            Precision<br />
            cooling,<br />
            <span className="v2-hero-headline-red">engineered.</span>
          </h1>
          <div className="v2-hero-meta v2-reveal">
            <span className="v2-mono-tag">Brief</span>
            <p className="v2-body" style={{ color: "var(--v2-black)" }}>
              Supply, installation, and service of premium air conditioning across Sri Lanka. Three sectors, one standard, nine brands on the shelf.
            </p>
          </div>
        </div>

        <div className="v2-hero-deck">
          <p className="v2-hero-deck-lead v2-reveal">
            We did not set out to be the biggest. We set out to be the most precise.
          </p>
          <div className="v2-reveal">
            <div className="v2-hero-actions">
              <a className="v2-btn v2-btn-primary" href="#contact">Book a Demo →</a>
              <a className="v2-btn v2-btn-ghost" href="#services">See the work</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 48, borderTop: "1px solid var(--v2-black)", paddingTop: 24 }}>
              {stats.map(s => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: "var(--v2-f-display)", fontWeight: 700, fontSize: 36, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--v2-black)" }}>{s.number}</span>
                  <span className="v2-mono" style={{ fontSize: 12 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function V2Services() {
  const rows = [
    ...services,
    { idx: "05", name: "Smart Home", desc: "Wi-Fi units tied to home automation, voice control, and remote scheduling.", href: "#contact" },
    { idx: "06", name: "Consultation", desc: "Site surveys, load calculations, and honest recommendations before you buy.", href: "#contact" },
  ];
  return (
    <section className="v2-section" id="services">
      <div className="v2-shell">
        <div className="v2-section-head">
          <div className="v2-section-head-cell" style={{ gridColumn: "span 1" }}>
            <span className="v2-section-head-num">02 / Services</span>
            <span className="v2-mono">Six offerings</span>
          </div>
          <div className="v2-section-head-cell" style={{ gridColumn: "span 2" }}>
            <h2 className="v2-section-head-title">What we ship.</h2>
          </div>
        </div>

        <div className="v2-service-grid">
          {rows.map(s => (
            <a key={s.idx} className="v2-service-cell v2-reveal" href={s.href}>
              <span className="v2-service-num">{s.idx}</span>
              <h3 className="v2-service-title">{s.name}</h3>
              <p className="v2-service-desc">{s.desc}</p>
              <span className="v2-service-arrow" aria-hidden>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V2Brands() {
  return (
    <section className="v2-section" id="brands">
      <div className="v2-shell">
        <div className="v2-section-head">
          <div className="v2-section-head-cell">
            <span className="v2-section-head-num">03 / Brands</span>
            <span className="v2-mono">Nine on the shelf</span>
          </div>
          <div className="v2-section-head-cell" style={{ gridColumn: "span 2" }}>
            <h2 className="v2-section-head-title">The shelf.</h2>
          </div>
        </div>

        <div className="v2-brand-wall">
          {brands.map(b => (
            <a key={b.name} className="v2-brand-cell v2-reveal" href="#brands">
              <span className="v2-brand-name">{b.name}</span>
              <span className="v2-brand-tag">{b.tag}</span>
              <span className="v2-brand-body">{b.body}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V2Projects() {
  return (
    <section className="v2-section" id="projects">
      <div className="v2-shell">
        <div className="v2-section-head">
          <div className="v2-section-head-cell">
            <span className="v2-section-head-num">04 / Work</span>
            <span className="v2-mono">Selected commissions</span>
          </div>
          <div className="v2-section-head-cell" style={{ gridColumn: "span 2" }}>
            <h2 className="v2-section-head-title">Recent installs.</h2>
          </div>
        </div>

        <div className="v2-projects">
          {caseStudies.map((c, i) => {
            const spans = ["v2-project-span-6", "v2-project-span-3", "v2-project-span-3"];
            const seeds = ["hotel-colombo-v2", "plant-homagama-v2", "residence-nugegoda-v2"];
            return (
              <a key={c.title} className={`v2-project ${spans[i]} v2-reveal`} href="#contact">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="v2-project-img" src={`https://picsum.photos/seed/${seeds[i]}/1200/900`} alt={c.title} loading="lazy" />
                <div className="v2-project-overlay">
                  <span className="v2-project-tag">{c.tag}</span>
                  <h3 className="v2-project-title">{c.title}</h3>
                  <span className="v2-project-result">{c.result}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function V2Solutions() {
  return (
    <section className="v2-section" id="solutions">
      <div className="v2-shell">
        <div className="v2-section-head">
          <div className="v2-section-head-cell">
            <span className="v2-section-head-num">05 / Sectors</span>
            <span className="v2-mono">Three sectors</span>
          </div>
          <div className="v2-section-head-cell" style={{ gridColumn: "span 2" }}>
            <h2 className="v2-section-head-title">By sector.</h2>
          </div>
        </div>

        <div className="v2-solutions">
          {solutions.map((s, i) => (
            <a key={s.id} className="v2-solution v2-reveal" href="#contact">
              <span className="v2-solution-num">0{i + 1}</span>
              <span className="v2-solution-label">{s.label}</span>
              <h3 className="v2-solution-title">{s.title}</h3>
              <p className="v2-solution-body">{s.body}</p>
              <ul className="v2-solution-features">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V2Quote() {
  return (
    <section className="v2-quote">
      <div className="v2-shell">
        <p className="v2-quote-text v2-reveal">
          We did not build Celsius to sell air conditioners. We built it to give Sri Lankan homes the <em>comfort</em> they deserve.
        </p>
        <div className="v2-quote-attr v2-reveal">
          <div className="v2-quote-attr-cell">
            <div className="v2-quote-attr-label">Founder</div>
            <div className="v2-quote-attr-value">{ceo.name}</div>
          </div>
          <div className="v2-quote-attr-cell">
            <div className="v2-quote-attr-label">Role</div>
            <div className="v2-quote-attr-value">{ceo.role}</div>
          </div>
          <div className="v2-quote-attr-cell">
            <div className="v2-quote-attr-label">Since</div>
            <div className="v2-quote-attr-value">{company.established}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function V2Contact() {
  return (
    <section className="v2-contact" id="contact">
      <div className="v2-shell">
        <div className="v2-contact-grid">
          <div className="v2-reveal">
            <span className="v2-mono-tag">06 / Contact</span>
            <h2 className="v2-contact-headline" style={{ marginTop: 24 }}>
              Let's engineer<br /><em>your comfort</em> next.
            </h2>
            <p className="v2-body" style={{ marginTop: 24, color: "var(--v2-black)", maxWidth: "32ch" }}>
              Tell us about your space. We'll come back within one working day with a written brief, a brand recommendation, and a fixed-price quote.
            </p>
            <div className="v2-contact-info">
              <div className="v2-contact-info-cell">
                <div className="v2-field-label">Phone</div>
                <a className="v2-mono" style={{ color: "var(--v2-black)", textDecoration: "none", marginTop: 4, display: "block", fontSize: 14 }} href={company.phoneHref}>{company.phone}</a>
              </div>
              <div className="v2-contact-info-cell">
                <div className="v2-field-label">Email</div>
                <a className="v2-mono" style={{ color: "var(--v2-black)", textDecoration: "none", marginTop: 4, display: "block", fontSize: 14 }} href={company.emailHref}>{company.email}</a>
              </div>
              <div className="v2-contact-info-cell">
                <div className="v2-field-label">Visit</div>
                <span className="v2-mono" style={{ color: "var(--v2-black)", marginTop: 4, display: "block", fontSize: 14 }}>{company.address[0]}</span>
              </div>
              <div className="v2-contact-info-cell">
                <div className="v2-field-label">Hours</div>
                <span className="v2-mono" style={{ color: "var(--v2-black)", marginTop: 4, display: "block", fontSize: 14 }}>Mon–Sat 8:30–18:30</span>
              </div>
            </div>
          </div>

          <form className="v2-contact-form v2-reveal" onSubmit={e => e.preventDefault()}>
            <div className="v2-form-row">
              <div className="v2-field">
                <label className="v2-field-label" htmlFor="v2-name">Name</label>
                <input className="v2-field-input" id="v2-name" type="text" placeholder="Roshan Perera" />
              </div>
              <div className="v2-field">
                <label className="v2-field-label" htmlFor="v2-phone">Phone</label>
                <input className="v2-field-input" id="v2-phone" type="tel" placeholder="+94 77 000 0000" />
              </div>
            </div>
            <div className="v2-form-row">
              <div className="v2-field">
                <label className="v2-field-label" htmlFor="v2-sector">Sector</label>
                <input className="v2-field-input" id="v2-sector" type="text" placeholder="Domestic" />
              </div>
              <div className="v2-field">
                <label className="v2-field-label" htmlFor="v2-size">Property</label>
                <input className="v2-field-input" id="v2-size" type="text" placeholder="4 bed, 2200 sqft" />
              </div>
            </div>
            <div className="v2-field" style={{ borderTop: "1px solid var(--v2-black)" }}>
              <label className="v2-field-label" htmlFor="v2-message">Brief</label>
              <textarea className="v2-field-textarea" id="v2-message" placeholder="Tell us what needs cooling, and any constraints we should know about." />
            </div>
            <button type="submit" className="v2-btn v2-btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
              Send brief →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-shell">
        <div className="v2-footer-mega v2-reveal">
          Celsius<span className="v2-footer-mega-square" aria-hidden />
        </div>
        <div className="v2-footer-grid">
          <div>
            <div className="v2-footer-col-title">Celsius HVAC</div>
            <p className="v2-body" style={{ color: "var(--v2-grey-20)", maxWidth: "34ch" }}>
              Premium air conditioning supply, installation, and service across Sri Lanka since 2019.
            </p>
          </div>
          <div>
            <div className="v2-footer-col-title">Services</div>
            <a className="v2-footer-link" href="#services">Supply &amp; Install</a>
            <a className="v2-footer-link" href="#services">Maintenance</a>
            <a className="v2-footer-link" href="#services">Breakdown</a>
            <a className="v2-footer-link" href="#services">VRF</a>
          </div>
          <div>
            <div className="v2-footer-col-title">Sectors</div>
            <a className="v2-footer-link" href="#solutions">Domestic</a>
            <a className="v2-footer-link" href="#solutions">Commercial</a>
            <a className="v2-footer-link" href="#solutions">Industrial</a>
          </div>
          <div>
            <div className="v2-footer-col-title">Brands</div>
            {brands.slice(0, 5).map(b => (
              <a key={b.name} className="v2-footer-link" href="#brands">{b.name}</a>
            ))}
          </div>
          <div>
            <div className="v2-footer-col-title">Visit</div>
            <a className="v2-footer-link" href={company.phoneHref}>{company.phone}</a>
            <a className="v2-footer-link" href={company.emailHref}>{company.email}</a>
            <span className="v2-footer-link">{company.address[0]}</span>
            <span className="v2-footer-link">{company.address[1]}</span>
          </div>
        </div>
        <div className="v2-footer-bottom">
          <span>© 2026 Celsius HVAC</span>
          <span>Colombo · Sri Lanka</span>
          <span>Cooling since 2019</span>
        </div>
      </div>
    </footer>
  );
}
