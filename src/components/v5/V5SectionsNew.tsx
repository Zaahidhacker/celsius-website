"use client";

import { useEffect } from "react";
import { company, stats, services, brands, solutions, ceo, caseStudies } from "@/lib/content";

export function V5ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".v5-reveal");
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

export function V5Navbar() {
  return (
    <header className="v5-nav">
      <div className="v5-shell v5-nav-inner">
        <a href="#top" className="v5-wordmark" aria-label="Celsius home">
          Celsius<span className="v5-wordmark-dot">.</span>
        </a>
        <nav className="v5-nav-links" aria-label="Primary">
          <a className="v5-nav-link" href="#services">Services</a>
          <a className="v5-nav-link" href="#brands">Brands</a>
          <a className="v5-nav-link" href="#projects">Work</a>
          <a className="v5-nav-link" href="#solutions">Sectors</a>
          <a className="v5-nav-link" href="#contact">Contact</a>
        </nav>
        <a className="v5-nav-cta" href="#contact">Book a Demo</a>
      </div>
    </header>
  );
}

export function V5Hero() {
  return (
    <section className="v5-hero" id="top">
      <div className="v5-shell">
        <div className="v5-hero-top">
          <div className="v5-hero-title-row">
            <span className="v5-hero-issue">Issue 06</span>
            <span className="v5-hero-issue-sub">Cooling edition · 2026</span>
          </div>
          <span className="v5-tag v5-tag-pink">Colombo, Sri Lanka · Mon–Sat 8:30–18:30</span>
        </div>

        <h1 className="v5-hero-headline v5-reveal">
          Precision<br />
          <span className="v5-hero-headline-pink">cooling,</span><br />
          <span className="v5-hero-headline-mustard">engineered.</span>
        </h1>

        <div className="v5-hero-deck">
          <p className="v5-body-lead v5-reveal">
            Since 2019, Celsius has supplied, installed, and serviced premium air conditioning across Sri Lanka. One standard. Nine brands on the shelf.
          </p>
          <div className="v5-hero-deck-aside v5-reveal">
            <div className="v5-hero-actions">
              <a className="v5-btn v5-btn-primary" href="#contact">Book a Demo →</a>
              <a className="v5-btn v5-btn-ghost" href="#services">See the work</a>
            </div>
            <p className="v5-body" style={{ color: "var(--v5-ink-soft)", maxWidth: "32ch" }}>
              Written brief within one working day. Fixed-price quote. Senior engineer on every install.
            </p>
          </div>
        </div>

        <div className="v5-stats" style={{ marginTop: 80 }}>
          {stats.map((s, i) => (
            <div key={s.label} className="v5-stat v5-reveal">
              <span className={`v5-stat-num ${i % 2 === 0 ? "" : "v5-stat-num-mustard"}`}>{s.number}</span>
              <span className="v5-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V5Services() {
  const rows = [
    ...services,
    { idx: "05", name: "Smart Home", desc: "Wi-Fi units tied to home automation, voice control, and remote scheduling.", href: "#contact" },
    { idx: "06", name: "Consultation", desc: "Site surveys, load calculations, and honest recommendations before you buy.", href: "#contact" },
  ];
  const tones = ["", "v5-service-card-pink", "v5-service-card-mustard", "v5-service-card-ink", "", "v5-service-card-pink"];
  return (
    <section className="v5-section" id="services">
      <span className="v5-page-marker v5-page-num">12</span>
      <div className="v5-shell">
        <div className="v5-section-head v5-reveal">
          <div className="v5-section-head-meta">
            <span className="v5-tag v5-tag-pink">Section A</span>
            <span className="v5-tag">Six services</span>
          </div>
          <div>
            <h2 className="v5-section-head-title">What we <em>ship.</em></h2>
            <p className="v5-section-head-lead">
              Six services, in the order they tend to come up. Scroll sideways through the index. Each one is a real offering with a named specialist behind it.
            </p>
          </div>
        </div>
      </div>

      <div className="v5-shell">
        <div className="v5-services-scroll">
          {rows.map((s, i) => (
            <a key={s.idx} className={`v5-service-card ${tones[i]} v5-reveal`} href={s.href}>
              <span className="v5-service-num">{s.idx}</span>
              <h3 className="v5-service-title">{s.name}</h3>
              <p className="v5-service-desc">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V5Brands() {
  // Take 6 brands for the zigzag layout (alternating image+text)
  const featured = brands.slice(0, 6);
  const seeds = ["v5-midea", "v5-daikin", "v5-panasonic", "v5-haier", "v5-mitsubishi", "v5-lg"];
  return (
    <section className="v5-section" id="brands">
      <span className="v5-page-marker v5-page-num">28</span>
      <div className="v5-shell">
        <div className="v5-section-head v5-reveal">
          <div className="v5-section-head-meta">
            <span className="v5-tag v5-tag-pink">Section B</span>
            <span className="v5-tag">Nine on the shelf</span>
          </div>
          <div>
            <h2 className="v5-section-head-title">The <em>shelf.</em></h2>
            <p className="v5-section-head-lead">
              Each brand earns its place by meeting a standard we have held since 2019. We do not stock what we would not install in our own homes.
            </p>
          </div>
        </div>

        <div className="v5-brands-zigzag">
          {featured.map((b, i) => (
            <div key={b.name} className="v5-brand-row v5-reveal">
              <div className="v5-brand-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${seeds[i]}/800/600`} alt={b.name} loading="lazy" />
              </div>
              <div className="v5-brand-text">
                <span className="v5-brand-tag">{b.tag}</span>
                <h3 className="v5-brand-name">{b.name}<em>.</em></h3>
                <p className="v5-brand-body">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V5Projects() {
  const seeds = ["v5-hotel", "v5-plant", "v5-residence"];
  return (
    <section className="v5-section" id="projects">
      <span className="v5-page-marker v5-page-num">46</span>
      <div className="v5-shell">
        <div className="v5-section-head v5-reveal">
          <div className="v5-section-head-meta">
            <span className="v5-tag v5-tag-pink">Section C</span>
            <span className="v5-tag">Selected commissions</span>
          </div>
          <div>
            <h2 className="v5-section-head-title">Recent <em>installs.</em></h2>
            <p className="v5-section-head-lead">
              Three recent installs across commercial, industrial, and domestic. Each one shipped with a written handover, a maintenance schedule, and a phone number that picks up.
            </p>
          </div>
        </div>

        <div className="v5-projects">
          {caseStudies.map((c, i) => (
            <a key={c.title} className="v5-project v5-reveal" href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="v5-project-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${seeds[i]}/1200/800`} alt={c.title} loading="lazy" />
              </div>
              <div className="v5-project-text">
                <span className="v5-project-tag">{c.tag}</span>
                <h3 className="v5-project-title">{c.title}</h3>
                <p className="v5-project-summary">{c.summary}</p>
                <p className="v5-project-result">{c.result}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V5Solutions() {
  const tones = ["v5-solution-pink", "v5-solution-mustard", "v5-solution-ink"];
  return (
    <section className="v5-section" id="solutions">
      <span className="v5-page-marker v5-page-num">64</span>
      <div className="v5-shell">
        <div className="v5-section-head v5-reveal">
          <div className="v5-section-head-meta">
            <span className="v5-tag v5-tag-pink">Section D</span>
            <span className="v5-tag">Three sectors</span>
          </div>
          <div>
            <h2 className="v5-section-head-title">By <em>sector.</em></h2>
            <p className="v5-section-head-lead">
              The brief changes by sector. The standard does not. Three sectors, each with its own lead engineer and its own preferred brand shelf.
            </p>
          </div>
        </div>

        <div className="v5-solutions">
          {solutions.map((s, i) => (
            <a key={s.id} className={`v5-solution ${tones[i]} v5-reveal`} href="#contact">
              <span className="v5-solution-label">{s.label}</span>
              <h3 className="v5-solution-title">{s.title}</h3>
              <p className="v5-solution-body">{s.body}</p>
              <ul className="v5-solution-features">
                {s.features.map(f => <li key={f}>+ {f}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V5Quote() {
  return (
    <section className="v5-quote">
      <span className="v5-page-marker v5-page-num" style={{ color: "var(--v5-cream)" }}>72</span>
      <div className="v5-shell">
        <p className="v5-quote-text v5-reveal">
          We did not build Celsius to sell air conditioners. We built it to give Sri Lankan homes the <em>comfort</em> they deserve.
        </p>
        <div className="v5-quote-attr v5-reveal">
          <span className="v5-quote-attr-name">{ceo.name}</span>
          <span className="v5-quote-attr-role">{ceo.role}</span>
        </div>
      </div>
    </section>
  );
}

export function V5Contact() {
  return (
    <section className="v5-contact" id="contact">
      <span className="v5-page-marker v5-page-num">88</span>
      <div className="v5-shell">
        <div className="v5-contact-grid">
          <div className="v5-reveal">
            <span className="v5-tag v5-tag-pink">Section E</span>
            <h2 className="v5-contact-headline" style={{ marginTop: 16 }}>
              Let's engineer<br /><em>your comfort</em> next.
            </h2>
            <p className="v5-body" style={{ marginTop: 24, color: "var(--v5-ink)", maxWidth: "34ch" }}>
              Tell us about your space. We'll come back within one working day with a written brief, a brand recommendation, and a fixed-price quote.
            </p>
            <div className="v5-contact-info">
              <div className="v5-contact-info-row">
                <span className="v5-contact-info-label">Phone</span>
                <a className="v5-contact-info-value" href={company.phoneHref}>{company.phone}</a>
              </div>
              <div className="v5-contact-info-row">
                <span className="v5-contact-info-label">Email</span>
                <a className="v5-contact-info-value" href={company.emailHref}>{company.email}</a>
              </div>
              <div className="v5-contact-info-row">
                <span className="v5-contact-info-label">Visit</span>
                <span className="v5-contact-info-value">{company.address[0]}, {company.address[1]}</span>
              </div>
              <div className="v5-contact-info-row">
                <span className="v5-contact-info-label">Hours</span>
                <span className="v5-contact-info-value">Mon–Sat 8:30–18:30</span>
              </div>
            </div>
          </div>

          <form className="v5-contact-form v5-reveal" onSubmit={e => e.preventDefault()}>
            <div className="v5-form-row">
              <div className="v5-field">
                <label className="v5-field-label" htmlFor="v5-name">Name</label>
                <input className="v5-field-input" id="v5-name" type="text" placeholder="Roshan Perera" />
              </div>
              <div className="v5-field">
                <label className="v5-field-label" htmlFor="v5-phone">Phone</label>
                <input className="v5-field-input" id="v5-phone" type="tel" placeholder="+94 77 000 0000" />
              </div>
            </div>
            <div className="v5-form-row">
              <div className="v5-field">
                <label className="v5-field-label" htmlFor="v5-sector">Sector</label>
                <input className="v5-field-input" id="v5-sector" type="text" placeholder="Domestic" />
              </div>
              <div className="v5-field">
                <label className="v5-field-label" htmlFor="v5-size">Property</label>
                <input className="v5-field-input" id="v5-size" type="text" placeholder="4 bed, 2200 sqft" />
              </div>
            </div>
            <div className="v5-field">
              <label className="v5-field-label" htmlFor="v5-message">Brief</label>
              <textarea className="v5-field-textarea" id="v5-message" placeholder="Tell us what needs cooling, and any constraints we should know about." />
            </div>
            <button type="submit" className="v5-btn v5-btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
              Send brief →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function V5Footer() {
  return (
    <footer className="v5-footer">
      <div className="v5-shell">
        <div className="v5-footer-mega v5-reveal">
          Celsius<em>.</em>
        </div>
        <div className="v5-footer-grid">
          <div>
            <div className="v5-footer-col-title">Celsius HVAC</div>
            <p className="v5-body" style={{ color: "rgba(250,246,238,0.7)", maxWidth: "34ch" }}>
              Premium air conditioning supply, installation, and service across Sri Lanka since 2019.
            </p>
          </div>
          <div>
            <div className="v5-footer-col-title">Services</div>
            <a className="v5-footer-link" href="#services">Supply &amp; Install</a>
            <a className="v5-footer-link" href="#services">Maintenance</a>
            <a className="v5-footer-link" href="#services">Breakdown</a>
            <a className="v5-footer-link" href="#services">VRF</a>
          </div>
          <div>
            <div className="v5-footer-col-title">Sectors</div>
            <a className="v5-footer-link" href="#solutions">Domestic</a>
            <a className="v5-footer-link" href="#solutions">Commercial</a>
            <a className="v5-footer-link" href="#solutions">Industrial</a>
          </div>
          <div>
            <div className="v5-footer-col-title">Brands</div>
            {brands.slice(0, 5).map(b => (
              <a key={b.name} className="v5-footer-link" href="#brands">{b.name}</a>
            ))}
          </div>
          <div>
            <div className="v5-footer-col-title">Visit</div>
            <a className="v5-footer-link" href={company.phoneHref}>{company.phone}</a>
            <a className="v5-footer-link" href={company.emailHref}>{company.email}</a>
            <span className="v5-footer-link">{company.address[0]}</span>
            <span className="v5-footer-link">{company.address[1]}</span>
          </div>
        </div>
        <div className="v5-footer-bottom">
          <span>© 2026 Celsius HVAC · Colombo, Sri Lanka</span>
          <span>Cooling since 2019</span>
        </div>
      </div>
    </footer>
  );
}
