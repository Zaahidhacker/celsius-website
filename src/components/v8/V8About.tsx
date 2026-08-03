/**
 * V8 About — navy section with manifesto copy + contact info row.
 */
export default function V8About() {
  return (
    <section className="v8-section v8-section--navy" id="about">
      <div className="v8-container">
        <div style={{ maxWidth: "70ch" }}>
          <span className="v8-eyebrow">About the company</span>
          <h2 className="v8-h2" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            Sri Lankan owned.
            <br />
            <span className="v8-italic">Colombo based.</span>
            <br />
            Cooling since 2019.
          </h2>
          <p className="v8-italic" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
            Celsius is a specialised HVAC company supplying, installing, and
            servicing premium air conditioning systems across Sri Lanka.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, opacity: 0.88 }}>
            We work with homeowners, offices, clinics, restaurants, hotels, and
            industrial facilities. Every job starts with a site visit and ends
            with a written handover. We do not subcontract installs to third
            parties, and we do not disappear after the warranty period. Our
            technicians are full-time, trained in-house, and carry manufacturer
            certification for every brand we stock.
          </p>
        </div>
      </div>
    </section>
  );
}
