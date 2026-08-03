/**
 * V7 About / Stats — hard-stat row + brand narrative.
 * Stats are factual (no fake-precise percentages).
 */
const STATS = [
  { num: "2019", label: "Established in Colombo" },
  { num: "1,200+", label: "Installs completed" },
  { num: "9", label: "Premium AC brands stocked" },
  { num: "40+", label: "Active business clients" },
];

export default function V7About() {
  return (
    <section className="v7-section v7-section--paper" id="about">
      <div className="v7-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "start",
            marginBottom: "clamp(40px, 5vw, 72px)",
          }}
        >
          <div>
            <span className="v7-eyebrow">About the company</span>
            <h2 className="v7-h2" style={{ marginTop: "1rem" }}>
              Sri Lankan owned.
              <br />
              <span className="v7-italic">Colombo based.</span>
              <br />
              Cooling since 2019.
            </h2>
          </div>
          <div>
            <p className="v7-lede" style={{ marginBottom: "1.5rem" }}>
              Celsius is a specialised HVAC company supplying, installing, and
              servicing premium air conditioning systems across Sri Lanka.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "60ch", color: "var(--v7-ink)", opacity: 0.85 }}>
              We work with homeowners, offices, clinics, restaurants, hotels,
              and industrial facilities. Every job starts with a site visit and
              ends with a written handover. We do not subcontract installs to
              third parties, and we do not disappear after the warranty period.
              Our technicians are full-time, trained in-house, and carry
              manufacturer certification for every brand we stock.
            </p>
          </div>
        </div>

        <div className="v7-stats">
          {STATS.map((s) => (
            <div key={s.label} className="v7-stat">
              <div className="v7-stat-num">{s.num}</div>
              <div className="v7-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
