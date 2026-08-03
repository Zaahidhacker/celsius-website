"use client";

/**
 * V8 Services — zigzag layout, alternating text+color-block.
 * 6 services, alternating left/right, with bold color blocks instead of images.
 */
const SERVICES = [
  {
    num: "01",
    title: "AC Supply",
    body: "Authorised distributor for Midea, Panasonic, LG, Daikin, Mitsubishi, Samsung, Haier, Gree and Carrier. Genuine units, full manufacturer warranty.",
    block: "amber",
    icon: "supply",
  },
  {
    num: "02",
    title: "Installation",
    body: "Split, cassette, floor-standing, VRF and ducted systems. Bracket fabrication, pipework, drain routing, electrical connections all included.",
    block: "navy",
    icon: "install",
  },
  {
    num: "03",
    title: "Servicing",
    body: "Annual maintenance contracts, filter cleaning, gas top-up, deep chemical wash. Same-week callouts across the Western Province.",
    block: "mint",
    icon: "service",
  },
  {
    num: "04",
    title: "Repairs",
    body: "Compressor diagnostics, PCB repair, refrigerant leak detection. No callout fee within Colombo for warranty clients.",
    block: "blue",
    icon: "repair",
  },
  {
    num: "05",
    title: "VRF Systems",
    body: "Industrial-grade Variable Refrigerant Flow systems for offices, hotels, hospitals, and data centres. Mitsubishi City Multi and Daikin VRV.",
    block: "pink",
    icon: "vrf",
  },
  {
    num: "06",
    title: "Consulting",
    body: "Heat-load calculation, system sizing, brand selection, and ROI analysis. Free site visits for commercial enquiries over 1,000 sq.ft.",
    block: "lemon",
    icon: "consult",
  },
];

const ICONS: Record<string, string> = {
  supply: "S",
  install: "I",
  service: "M",
  repair: "R",
  vrf: "V",
  consult: "C",
};

export default function V8Services() {
  return (
    <section className="v8-section v8-section--paper" id="services">
      <div className="v8-container">
        <div style={{ marginBottom: "clamp(48px, 6vw, 96px)", maxWidth: "65ch" }}>
          <span className="v8-eyebrow">What we do</span>
          <h2 className="v8-h2" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
            Six services. <span className="v8-italic">One team.</span>
          </h2>
          <p className="v8-italic" style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5 }}>
            From a single 12,000 BTU split unit to a full VRF retrofit, every
            job goes through the same process: site visit, written quote,
            scheduled install, post-install service.
          </p>
        </div>

        <div className="v8-zigzag">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`v8-zig-item ${i % 2 === 1 ? "v8-zig-item--reverse" : ""}`}
            >
              <div className="v8-zig-text">
                <span className="v8-zig-num">{s.num}</span>
                <h3 className="v8-zig-title">{s.title}</h3>
                <p className="v8-zig-body">{s.body}</p>
              </div>
              <div className={`v8-zig-block v8-zig-block--${s.block}`}>
                <span className="v8-zig-block-icon">{ICONS[s.icon]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
