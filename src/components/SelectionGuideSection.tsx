"use client";

import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

type Row = {
  setupType: string;
  btuRange: string;
  roomArea: string;
  acTypes: string[];
  considerations: string[];
  recommendations: string[];
};

const rows: Row[] = [
  {
    setupType: "Domestic",
    btuRange: "5,000 – 24,000",
    roomArea: "100 – 1,500 sq ft",
    acTypes: [
      "Split Wall Mount",
      "Cassette Type",
      "Ceiling Suspended",
      "Floor Mounted",
      "Ducted Systems",
    ],
    considerations: [
      "Ensure proper insulation for efficiency.",
      "Consider smart home integration.",
      "Opt for energy-efficient models.",
    ],
    recommendations: [
      "Midea 12,000 BTU",
      "Panasonic 18,000 BTU",
      "Haier 8,000 BTU",
      "LG 15,000 BTU",
    ],
  },
  {
    setupType: "Commercial",
    btuRange: "24,000 – 60,000",
    roomArea: "1,500 – 4,000 sq ft",
    acTypes: ["Split Wall Mount", "Multi-split systems"],
    considerations: [
      "Utilise multi-split systems for zones.",
      "Prioritise advanced air purification.",
      "Opt for systems with zoning capabilities.",
    ],
    recommendations: [
      "Daikin 36,000 BTU",
      "LG 48,000 BTU",
      "Panasonic 30,000 BTU",
      "Samsung 54,000 BTU",
    ],
  },
  {
    setupType: "Industrial",
    btuRange: "60,000+",
    roomArea: "4,000+ sq ft",
    acTypes: ["VRF Systems"],
    considerations: [
      "Implement Variable Refrigerant Flow (VRF) systems for flexibility.",
      "Ensure precise temperature control for industrial processes.",
      "Consider energy-efficient compressors for cost efficiency.",
    ],
    recommendations: [
      "Mitsubishi VRF Systems",
      "Daikin VRF Systems",
      "Samsung 120,000 BTU",
      "LG 150,000 BTU",
    ],
  },
];

export default function SelectionGuideSection() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selection Guide"
          title="Make the right choice for your comfort needs."
          subtitle="A comprehensive guide to BTU ranges, suitable room areas, and key considerations for domestic, commercial, and industrial setups."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {rows.map((r, i) => (
            <div
              key={r.setupType}
              className="relative rounded-[1.6rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-7 flex flex-col gap-5"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-[rgba(30,50,90,0.95)]">
                  {r.setupType}
                </h3>
                <span className="text-[11px] font-normal text-[rgba(30,50,90,0.4)] uppercase tracking-wider">
                  0{i + 1}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[rgba(30,50,90,0.04)] border border-[rgba(30,50,90,0.08)] p-3 md:p-4">
                  <div className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] mb-1">
                    BTU Range
                  </div>
                  <div className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.9)]">
                    {r.btuRange}
                  </div>
                </div>
                <div className="rounded-2xl bg-[rgba(30,50,90,0.04)] border border-[rgba(30,50,90,0.08)] p-3 md:p-4">
                  <div className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] mb-1">
                    Room Area
                  </div>
                  <div className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.9)]">
                    {r.roomArea}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                  A/C Types
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {r.acTypes.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/60 border border-[rgba(30,50,90,0.1)] text-[11px] md:text-xs font-normal text-[rgba(30,50,90,0.8)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                  Considerations
                </span>
                <ul className="flex flex-col gap-1.5">
                  {r.considerations.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-[12px] md:text-[13px] text-[rgba(30,50,90,0.72)] font-normal leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[rgba(30,50,90,0.5)] flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-[rgba(30,50,90,0.08)] flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                  Recommended Models
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {r.recommendations.map((rec) => (
                    <span
                      key={rec}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] text-[11px] md:text-xs font-normal text-[rgba(30,50,90,0.85)]"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-[12px] md:text-sm text-[rgba(30,50,90,0.55)] font-normal italic max-w-2xl mx-auto leading-relaxed">
          Note: BTU (British Thermal Unit) is a measure of energy used in the
          heating and cooling industry. The suitable room area can vary based on
          factors like insulation, climate, and heat-generating appliances.
        </p>
      </div>
    </section>
  );
}
