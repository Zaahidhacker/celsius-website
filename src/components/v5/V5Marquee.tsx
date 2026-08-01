"use client";

const items = [
  "Premium HVAC",
  "9 Brands Supplied",
  "Licensed Technicians",
  "24/7 Emergency",
  "Upfront Estimates",
  "Sri Lanka Wide",
  "Est. 2019",
  "40+ Business Clients",
];

/**
 * V5 Marquee — Airstead-style auto-scrolling brand strip on dark bg.
 */
export default function V5Marquee() {
  return (
    <div className="v5-marquee">
      <div className="v5-marquee-track">
        {items.concat(items).map((item, i) => (
          <span key={i} className="v5-marquee-item">
            {item}
            <span style={{ color: "var(--v5-amber)", marginLeft: "2rem" }}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
