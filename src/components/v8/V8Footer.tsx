const COLS = [
  {
    title: "Services",
    links: [
      { label: "AC Supply", href: "#services" },
      { label: "Installation", href: "#services" },
      { label: "Servicing", href: "#services" },
      { label: "Repairs", href: "#services" },
      { label: "VRF Systems", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Case files", href: "#work" },
      { label: "Brands", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "+94 77 300 2000", href: "tel:+9477300200" },
      { label: "WhatsApp", href: "https://wa.me/9477300200" },
      { label: "hello@celsius.lk", href: "mailto:hello@celsius.lk" },
      { label: "No. 142, Galle Road, Colombo 04", href: "#contact" },
    ],
  },
];

export default function V8Footer() {
  return (
    <footer className="v8-footer">
      <div className="v8-container">
        <div className="v8-footer-grid">
          <div className="v8-footer-brand">
            <img src="/celsius-logo-white.png" alt="Celsius" />
            <p className="v8-footer-tagline">
              Precision cooling, engineered. Sri Lankan owned, Colombo based,
              cooling since 2019.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="v8-footer-col-title">{c.title}</h4>
              <ul className="v8-footer-list">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="v8-footer-bottom">
          <span>© 2026 Celsius HVAC · Colombo, Sri Lanka</span>
          <span>Designed in-house · Built on Next.js 16</span>
        </div>
      </div>
    </footer>
  );
}
