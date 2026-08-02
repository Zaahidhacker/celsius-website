"use client";

import { useEffect } from "react";
import { company, stats, services, brands, solutions, ceo, caseStudies } from "@/lib/content";

export function V4ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".v4-reveal");
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return <>{children}</>;
}

export function V4Navbar() {
  return (
    <header className="v4-nav">
      <div className="v4-shell v4-nav-inner">
        <a href="#top" className="v4-wordmark" aria-label="Celsius home">
          celsius<span className="v4-wordmark-cursor" aria-hidden />
        </a>
        <nav className="v4-nav-links" aria-label="Primary">
          <a className="v4-nav-link" href="#services">~/services</a>
          <a className="v4-nav-link" href="#brands">~/brands</a>
          <a className="v4-nav-link" href="#projects">~/work</a>
          <a className="v4-nav-link" href="#solutions">~/sectors</a>
          <a className="v4-nav-link" href="#contact">~/contact</a>
        </nav>
        <a className="v4-nav-cta" href="#contact">book demo →</a>
      </div>
    </header>
  );
}

export function V4Hero() {
  return (
    <section className="v4-hero" id="top">
      <div className="v4-shell">
        <div className="v4-hero-meta">
          <span className="v4-tag v4-tag-lime">celsius@hvac:~$ status</span>
          <span className="v4-tag">uptime: since {company.established} · location: colombo, LK · load: nominal</span>
        </div>

        <div className="v4-hero-grid">
          <h1 className="v4-hero-headline v4-reveal">
            precision<br />
            cooling,<br />
            <span className="v4-hero-headline-lime">engineered.</span>
          </h1>
          <div className="v4-hero-aside v4-reveal">
            <span className="v4-tag">commit: a4f29c8</span>
            <span className="v4-tag">branch: main</span>
            <span className="v4-tag v4-tag-lime">build: passing</span>
          </div>
        </div>

        <div className="v4-hero-deck">
          <p className="v4-hero-deck-lead v4-reveal">
            Supply, installation, and service of premium air conditioning across Sri Lanka. Three sectors, one standard, nine brands on the shelf.
          </p>
          <div className="v4-reveal">
            <div className="v4-hero-actions">
              <a className="v4-btn v4-btn-primary" href="#contact">book a demo →</a>
              <a className="v4-btn v4-btn-ghost" href="#services">cat services.log</a>
            </div>
            <p className="v4-body" style={{ marginTop: 20, color: "var(--v4-text-dim)" }}>
              // Written brief within one working day. Fixed-price quote. Senior engineer on every install.
            </p>
          </div>
        </div>

        <div className="v4-hero-stats">
          {stats.map(s => (
            <div key={s.label} className="v4-stat v4-reveal">
              <span className="v4-stat-num">{s.number}</span>
              <span className="v4-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V4Services() {
  const rows = [
    ...services,
    { idx: "05", name: "Smart Home", desc: "Wi-Fi units tied to home automation, voice control, and remote scheduling.", href: "#contact" },
    { idx: "06", name: "Consultation", desc: "Site surveys, load calculations, and honest recommendations before you buy.", href: "#contact" },
  ];
  return (
    <section className="v4-section" id="services">
      <div className="v4-shell">
        <div className="v4-section-head v4-reveal">
          <div className="v4-section-head-meta">
            <span className="v4-tag v4-tag-lime">section: services</span>
            <span className="v4-tag">6 modules loaded</span>
          </div>
          <div>
            <h2 className="v4-section-head-title">What we <span className="v4-section-head-title-lime">ship.</span></h2>
            <p className="v4-section-head-lead">
              Six services, in the order they tend to come up. Each one is a real offering with a named specialist behind it.
            </p>
          </div>
        </div>

        <div className="v4-services">
          {rows.map(s => (
            <a key={s.idx} className="v4-service v4-reveal" href={s.href}>
              <div className="v4-service-header">
                <span>services/{s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.mod</span>
                <span className="v4-service-status">active</span>
              </div>
              <div className="v4-service-body">
                <span className="v4-service-num">{s.idx}</span>
                <h3 className="v4-service-title">{s.name}</h3>
                <p className="v4-service-desc">{s.desc}</p>
                <span className="v4-service-arrow" aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V4Brands() {
  return (
    <section className="v4-section" id="brands">
      <div className="v4-shell">
        <div className="v4-section-head v4-reveal">
          <div className="v4-section-head-meta">
            <span className="v4-tag v4-tag-lime">section: brands</span>
            <span className="v4-tag">9 brands indexed</span>
          </div>
          <div>
            <h2 className="v4-section-head-title">The <span className="v4-section-head-title-lime">shelf.</span></h2>
            <p className="v4-section-head-lead">
              Each brand earns its place by meeting a standard we have held since 2019. We do not stock what we would not install in our own homes.
            </p>
          </div>
        </div>

        <div className="v4-brands-output">
          {brands.map((b, i) => (
            <a key={b.name} className="v4-brands-line v4-reveal" href="#brands">
              <span className="v4-brands-idx">[{String(i + 1).padStart(2, "0")}]</span>
              <span className="v4-brands-name">{b.name}</span>
              <span className="v4-brands-body">{b.body}</span>
              <span className="v4-brands-tag">{b.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V4Projects() {
  const seeds = ["v4-hotel", "v4-plant", "v4-residence"];
  return (
    <section className="v4-section" id="projects">
      <div className="v4-shell">
        <div className="v4-section-head v4-reveal">
          <div className="v4-section-head-meta">
            <span className="v4-tag v4-tag-lime">section: work</span>
            <span className="v4-tag">3 commissions logged</span>
          </div>
          <div>
            <h2 className="v4-section-head-title">Recent <span className="v4-section-head-title-lime">installs.</span></h2>
            <p className="v4-section-head-lead">
              Three recent installs across commercial, industrial, and domestic. Each one shipped with a written handover, a maintenance schedule, and a phone number that picks up.
            </p>
          </div>
        </div>

        <div className="v4-projects">
          {caseStudies.map((c, i) => (
            <a key={c.title} className="v4-project v4-reveal" href="#contact">
              <div className="v4-project-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${seeds[i]}/1000/750`} alt={c.title} loading="lazy" />
              </div>
              <div className="v4-project-body">
                <span className="v4-project-tag">[{c.tag.toLowerCase()}]</span>
                <h3 className="v4-project-title">{c.title}</h3>
                <p className="v4-project-summary">{c.summary}</p>
                <p className="v4-project-result">→ {c.result}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V4Solutions() {
  return (
    <section className="v4-section" id="solutions">
      <div className="v4-shell">
        <div className="v4-section-head v4-reveal">
          <div className="v4-section-head-meta">
            <span className="v4-tag v4-tag-lime">section: sectors</span>
            <span className="v4-tag">3 sectors active</span>
          </div>
          <div>
            <h2 className="v4-section-head-title">By <span className="v4-section-head-title-lime">sector.</span></h2>
            <p className="v4-section-head-lead">
              The brief changes by sector. The standard does not. Three sectors, each with its own lead engineer and its own preferred brand shelf.
            </p>
          </div>
        </div>

        <div className="v4-solutions">
          {solutions.map((s, i) => (
            <a key={s.id} className="v4-solution v4-reveal" href="#contact">
              <span className="v4-solution-key">sector.{s.id}.conf</span>
              <span className="v4-solution-label">{s.label}</span>
              <h3 className="v4-solution-title">{s.title}</h3>
              <p className="v4-solution-body">{s.body}</p>
              <ul className="v4-solution-features">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function V4Quote() {
  return (
    <section className="v4-quote">
      <div className="v4-shell">
        <p className="v4-quote-prompt v4-reveal">cat /about/manifesto.txt</p>
        <p className="v4-quote-text v4-reveal">
          We did not build Celsius to sell air conditioners. We built it to give Sri Lankan homes the <em>comfort</em> they deserve.
        </p>
        <div className="v4-quote-attr v4-reveal">
          <div className="v4-quote-attr-cell">
            <div className="v4-quote-attr-label">// founder</div>
            <div className="v4-quote-attr-value">{ceo.name}</div>
          </div>
          <div className="v4-quote-attr-cell">
            <div className="v4-quote-attr-label">// role</div>
            <div className="v4-quote-attr-value">{ceo.role}</div>
          </div>
          <div className="v4-quote-attr-cell">
            <div className="v4-quote-attr-label">// since</div>
            <div className="v4-quote-attr-value">{company.established}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function V4Contact() {
  return (
    <section className="v4-contact" id="contact">
      <div className="v4-shell">
        <div className="v4-contact-grid">
          <div className="v4-reveal">
            <span className="v4-tag v4-tag-lime">section: contact</span>
            <h2 className="v4-contact-headline" style={{ marginTop: 16 }}>
              let's engineer<br /><span className="v4-contact-headline-lime">your comfort</span> next.
            </h2>
            <p className="v4-body" style={{ marginTop: 20, color: "var(--v4-text-dim)", maxWidth: "34ch" }}>
              Tell us about your space. We'll come back within one working day with a written brief, a brand recommendation, and a fixed-price quote.
            </p>
            <div className="v4-contact-info">
              <div className="v4-contact-info-cell">
                <span className="v4-contact-info-label">// phone</span>
                <a className="v4-contact-info-value" href={company.phoneHref}>{company.phone}</a>
              </div>
              <div className="v4-contact-info-cell">
                <span className="v4-contact-info-label">// email</span>
                <a className="v4-contact-info-value" href={company.emailHref}>{company.email}</a>
              </div>
              <div className="v4-contact-info-cell">
                <span className="v4-contact-info-label">// visit</span>
                <span className="v4-contact-info-value">{company.address[0]}</span>
              </div>
              <div className="v4-contact-info-cell">
                <span className="v4-contact-info-label">// hours</span>
                <span className="v4-contact-info-value">Mon–Sat 8:30–18:30</span>
              </div>
            </div>
          </div>

          <form className="v4-contact-form v4-reveal" onSubmit={e => e.preventDefault()}>
            <div className="v4-form-row">
              <div className="v4-field">
                <label className="v4-field-label" htmlFor="v4-name">name</label>
                <input className="v4-field-input" id="v4-name" type="text" placeholder="Roshan Perera" />
              </div>
              <div className="v4-field">
                <label className="v4-field-label" htmlFor="v4-phone">phone</label>
                <input className="v4-field-input" id="v4-phone" type="tel" placeholder="+94 77 000 0000" />
              </div>
            </div>
            <div className="v4-form-row">
              <div className="v4-field">
                <label className="v4-field-label" htmlFor="v4-sector">sector</label>
                <input className="v4-field-input" id="v4-sector" type="text" placeholder="domestic" />
              </div>
              <div className="v4-field">
                <label className="v4-field-label" htmlFor="v4-size">property</label>
                <input className="v4-field-input" id="v4-size" type="text" placeholder="4 bed, 2200 sqft" />
              </div>
            </div>
            <div className="v4-field">
              <label className="v4-field-label" htmlFor="v4-message">brief</label>
              <textarea className="v4-field-textarea" id="v4-message" placeholder="// tell us what needs cooling, and any constraints we should know about" />
            </div>
            <button type="submit" className="v4-btn v4-btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
              submit brief →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function V4Footer() {
  return (
    <footer className="v4-footer">
      <div className="v4-shell">
        <div className="v4-footer-mega v4-reveal">
          celsius<span className="v4-footer-mega-lime">.</span>
        </div>
        <div className="v4-footer-grid">
          <div>
            <div className="v4-footer-col-title">// celsius HVAC</div>
            <p className="v4-body" style={{ color: "var(--v4-text-dim)", maxWidth: "34ch" }}>
              Premium air conditioning supply, installation, and service across Sri Lanka since 2019.
            </p>
          </div>
          <div>
            <div className="v4-footer-col-title">// services</div>
            <a className="v4-footer-link" href="#services">supply &amp; install</a>
            <a className="v4-footer-link" href="#services">maintenance</a>
            <a className="v4-footer-link" href="#services">breakdown</a>
            <a className="v4-footer-link" href="#services">VRF</a>
          </div>
          <div>
            <div className="v4-footer-col-title">// sectors</div>
            <a className="v4-footer-link" href="#solutions">domestic</a>
            <a className="v4-footer-link" href="#solutions">commercial</a>
            <a className="v4-footer-link" href="#solutions">industrial</a>
          </div>
          <div>
            <div className="v4-footer-col-title">// brands</div>
            {brands.slice(0, 5).map(b => (
              <a key={b.name} className="v4-footer-link" href="#brands">{b.name}</a>
            ))}
          </div>
          <div>
            <div className="v4-footer-col-title">// visit</div>
            <a className="v4-footer-link" href={company.phoneHref}>{company.phone}</a>
            <a className="v4-footer-link" href={company.emailHref}>{company.email}</a>
            <span className="v4-footer-link">{company.address[0]}</span>
            <span className="v4-footer-link">{company.address[1]}</span>
          </div>
        </div>
        <div className="v4-footer-bottom">
          <span>© 2026 celsius HVAC · colombo · LK</span>
          <span>cooling since 2019</span>
          <span>build: passing · uptime: 7y</span>
        </div>
      </div>
    </footer>
  );
}
