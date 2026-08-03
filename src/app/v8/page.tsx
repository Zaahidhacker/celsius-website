import type { Metadata } from "next";
import V8Navbar from "@/components/v8/V8Navbar";
import V8Hero from "@/components/v8/V8Hero";
import V8Reviews from "@/components/v8/V8Reviews";
import V8Services from "@/components/v8/V8Services";
import V8About from "@/components/v8/V8About";
import V8Contact from "@/components/v8/V8Contact";
import V8Footer from "@/components/v8/V8Footer";
import "@/components/v8/v8.css";

export const metadata: Metadata = {
  title: "V8 — Kinetic Manifesto × Celsius",
  description:
    "Celsius V8 — Kinetic Manifesto edition. Sticky scroll-stack reviews, italic serif headlines, kinetic marquees. Real installs from Wellawatta, Prime Residencies, residential 12000 BTU, and Havelock Dental Centre.",
  alternates: { canonical: "/v8" },
  openGraph: {
    title: "Celsius V8 — Kinetic Manifesto Edition",
    description:
      "Editorial kinetic design meets HVAC engineering. Real customer installs from across Sri Lanka, presented as a sticky scroll story.",
    url: "/v8",
    type: "website",
  },
};

const MARQUEE_ITEMS = [
  "Supply", "Install", "Maintain", "Repair", "VRF Systems",
  "Cassette", "Split", "Inverter", "Since 2019", "Colombo · LK",
];

export default function V8Page() {
  return (
    <main className="v8-root">
      <div className="v8-grain" aria-hidden />
      <div className="v8-side-text v8-side-text--left" aria-hidden>
        Celsius · HVAC · Colombo · Since 2019
      </div>
      <div className="v8-side-text v8-side-text--right" aria-hidden>
        Supply · Install · Service · Repair · Maintain
      </div>

      <V8Navbar />
      <V8Hero />

      {/* Marquee band 1 — forward */}
      <div className="v8-marquee-band" aria-hidden>
        <div className="v8-marquee-band-track">
          {[0, 1].map((dup) => (
            <span key={dup} style={{ display: "inline-flex", alignItems: "center", gap: "2rem" }}>
              {MARQUEE_ITEMS.map((m, i) => (
                <span key={`${dup}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: "2rem" }}>
                  <span>{m}</span>
                  <span className="v8-dot" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <V8Reviews />

      {/* Marquee band 2 — reverse */}
      <div className="v8-marquee-band v8-marquee-band--reverse" aria-hidden>
        <div className="v8-marquee-band-track">
          {[0, 1].map((dup) => (
            <span key={dup} style={{ display: "inline-flex", alignItems: "center", gap: "2rem" }}>
              {MARQUEE_ITEMS.slice().reverse().map((m, i) => (
                <span key={`${dup}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: "2rem" }}>
                  <span>{m}</span>
                  <span className="v8-dot" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <V8Services />
      <V8About />
      <V8Contact />
      <V8Footer />
    </main>
  );
}
