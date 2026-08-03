/**
 * V7 Services — exposed grid of 6 service cells.
 * Hard 2px navy borders between cells, hover inverts to amber background.
 */
const SERVICES = [
  {
    num: "01",
    title: "AC Supply",
    body: "Authorised distributor for Midea, Panasonic, LG, Daikin, Mitsubishi, Samsung, Haier, Gree and Carrier. Genuine units, full manufacturer warranty.",
  },
  {
    num: "02",
    title: "Installation",
    body: "Split, cassette, floor-standing, VRF and ducted systems. Bracket fabrication, pipework, drain routing, and electrical connections included.",
  },
  {
    num: "03",
    title: "Servicing",
    body: "Annual maintenance contracts, filter cleaning, gas top-up, deep chemical wash. Same-week callouts across the Western Province.",
  },
  {
    num: "04",
    title: "Repairs",
    body: "Compressor diagnostics, PCB repair, refrigerant leak detection. No callout fee within Colombo for warranty clients.",
  },
  {
    num: "05",
    title: "VRF Systems",
    body: "Industrial-grade Variable Refrigerant Flow systems for offices, hotels, hospitals, and data centres. Mitsubishi City Multi and Daikin VRV.",
  },
  {
    num: "06",
    title: "Consulting",
    body: "Heat-load calculation, system sizing, brand selection, and ROI analysis. Free site visits for commercial enquiries over 1,000 sq.ft.",
  },
];

export default function V7Services() {
  return (
    <section className="v7-section v7-section--white" id="services">
      <div className="v7-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "2rem",
            alignItems: "end",
            marginBottom: "clamp(40px, 5vw, 72px)",
            paddingBottom: "2rem",
            borderBottom: "2px solid var(--v7-navy)",
          }}
        >
          <div>
            <span className="v7-eyebrow">What we do</span>
            <span className="v7-numeral" style={{ fontSize: "clamp(80px, 12vw, 160px)", marginTop: "0.5rem" }}>
              06
            </span>
          </div>
          <div>
            <h2 className="v7-h2" style={{ marginBottom: "1rem" }}>
              Six services. <span className="v7-italic">One team.</span>
            </h2>
            <p className="v7-lede" style={{ maxWidth: "55ch" }}>
              From a single 12,000 BTU split unit to a full VRF retrofit, every
              job goes through the same process: site visit, written quote,
              scheduled install, post-install service.
            </p>
          </div>
        </div>

        <div className="v7-services-grid">
          {SERVICES.map((s) => (
            <div key={s.num} className="v7-service">
              <span className="v7-service-num">{s.num}</span>
              <h3 className="v7-service-title">{s.title}</h3>
              <p className="v7-service-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
