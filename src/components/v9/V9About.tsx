/**
 * V9 About — navy section with 4-stat row.
 */
const STATS = [
  { num: "2019", label: "Established in Colombo" },
  { num: "1,200+", label: "Installs completed" },
  { num: "9", label: "Premium AC brands stocked" },
  { num: "40+", label: "Active business clients" },
];

export default function V9About() {
  return (
    <section className="v9-section v9-section--navy" id="about">
      <div className="v9-container">
        <div className="v9-about-grid">
          <div>
            <span className="v9-eyebrow">About the company</span>
            <h2 className="v9-h2" style={{ marginTop: "1rem" }}>
              Sri Lankan owned.
              <br />
              <span className="v9-italic">Colombo based.</span>
              <br />
              Cooling since 2019.
            </h2>
          </div>
          <div>
            <p className="v9-italic" style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
              Celsius is a specialised HVAC company supplying, installing, and
              servicing premium air conditioning systems across Sri Lanka.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, opacity: 0.88, maxWidth: "60ch" }}>
              We work with homeowners, offices, clinics, restaurants, hotels,
              and industrial facilities. Every job starts with a site visit and
              ends with a written handover. We do not subcontract installs to
              third parties, and we do not disappear after the warranty period.
              Our technicians are full-time, trained in-house, and carry
              manufacturer certification for every brand we stock.
            </p>

            <div className="v9-about-stats">
              {STATS.map((s) => (
                <div key={s.label} className="v9-about-stat">
                  <div className="v9-about-stat-num">{s.num}</div>
                  <div className="v9-about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
