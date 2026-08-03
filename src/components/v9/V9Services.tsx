/**
 * V9 Services — tilted 3-col card grid.
 * Each card has a slight alternating tilt; straightens on hover.
 */
const SERVICES = [
  { num: "01", title: "AC Supply", body: "Authorised distributor for Midea, Panasonic, LG, Daikin, Mitsubishi, Samsung, Haier, Gree and Carrier. Genuine units, full warranty.", tilt: "-1deg" },
  { num: "02", title: "Installation", body: "Split, cassette, floor-standing, VRF and ducted systems. Bracket fabrication, pipework, drain routing, electricals included.", tilt: "1deg" },
  { num: "03", title: "Servicing", body: "Annual maintenance contracts, filter cleaning, gas top-up, deep chemical wash. Same-week callouts across the Western Province.", tilt: "-1deg" },
  { num: "04", title: "Repairs", body: "Compressor diagnostics, PCB repair, refrigerant leak detection. No callout fee within Colombo for warranty clients.", tilt: "1deg" },
  { num: "05", title: "VRF Systems", body: "Industrial-grade Variable Refrigerant Flow systems for offices, hotels, hospitals, data centres. Mitsubishi City Multi and Daikin VRV.", tilt: "-1deg" },
  { num: "06", title: "Consulting", body: "Heat-load calculation, system sizing, brand selection, ROI analysis. Free site visits for commercial enquiries over 1,000 sq.ft.", tilt: "1deg" },
];

export default function V9Services() {
  return (
    <section className="v9-section v9-section--white" id="services">
      <div className="v9-container">
        <div style={{ maxWidth: "65ch", marginBottom: "clamp(40px, 5vw, 72px)" }}>
          <span className="v9-eyebrow">What we do</span>
          <h2 className="v9-h2" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Six services. <span className="v9-italic v9-underline">One team.</span>
          </h2>
          <p className="v9-italic" style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5 }}>
            From a single 12,000 BTU split unit to a full VRF retrofit, every
            job goes through the same process: site visit, written quote,
            scheduled install, post-install service.
          </p>
        </div>

        <div className="v9-services-grid">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="v9-service"
              style={{ ["--v9-service-tilt" as string]: s.tilt }}
            >
              <div>
                <span className="v9-service-num">{s.num}</span>
                <h3 className="v9-service-title">{s.title}</h3>
                <p className="v9-service-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
