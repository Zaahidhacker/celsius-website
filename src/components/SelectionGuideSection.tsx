"use client";

import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

type Row = {
  setupType: string;
  btuRange: string;
  roomArea: string;
  acTypes: string[];
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
    <section className="relative w-full celsius-section bg-transparent overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="celsius-orb w-[28rem] h-[28rem] top-20 -left-32"
        style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.10), transparent 70%)" }}
      />
      <div
        className="celsius-orb w-[24rem] h-[24rem] bottom-20 -right-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.10), transparent 70%)" }}
      />

      <div className="relative celsius-container flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selection guide"
          title="Right-size your cooling."
          subtitle="BTU ranges and room sizes for domestic, commercial, and industrial setups."
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
              className={`group relative rounded-[1.6rem] bg-white/60 backdrop-blur-xl border border-white/70 p-6 md:p-7 flex flex-col gap-5 celsius-shadow-soft hover:celsius-shadow-md transition-all overflow-hidden ${
                i === 1 ? "lg:-mt-4" : ""
              }`}
            >
              {/* Hover amber glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 70% 30%, rgba(245, 166, 35, 0.10), transparent 70%)" }}
              />
              <div className="flex items-baseline justify-between relative">
                <h3 className="celsius-h3 celsius-sentence text-[rgba(15,47,99,0.95)]">
                  {r.setupType}
                </h3>
                <span className="celsius-numeric text-[11px] font-mono font-medium text-[var(--accent-amber-deep)] uppercase tracking-wider">
                  0{i + 1}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 relative">
                <div className="rounded-2xl bg-[rgba(15,47,99,0.04)] border border-[rgba(15,47,99,0.08)] p-3 md:p-4">
                  <div className="text-[10px] uppercase tracking-wider text-[rgba(15,47,99,0.5)] mb-1">
                    BTU range
                  </div>
                  <div className="celsius-numeric text-sm md:text-base font-medium text-[rgba(15,47,99,0.9)]">
                    {r.btuRange}
                  </div>
                </div>
                <div className="rounded-2xl bg-[var(--accent-amber)]/8 border border-[var(--accent-amber)]/20 p-3 md:p-4">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--accent-amber-deep)] mb-1">
                    Room area
                  </div>
                  <div className="celsius-numeric text-sm md:text-base font-medium text-[rgba(15,47,99,0.9)]">
                    {r.roomArea}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <span className="text-[10px] uppercase tracking-wider text-[rgba(15,47,99,0.5)]">
                  A/C types
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {r.acTypes.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/70 border border-[rgba(15,47,99,0.1)] text-[11px] md:text-xs font-normal text-[rgba(15,47,99,0.8)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-[rgba(15,47,99,0.08)] flex flex-col gap-2 relative">
                <span className="text-[10px] uppercase tracking-wider text-[var(--accent-amber-deep)] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[var(--accent-amber)]" />
                  Recommended models
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {r.recommendations.map((rec) => (
                    <span
                      key={rec}
                      className="celsius-numeric inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--accent-amber)]/8 border border-[var(--accent-amber)]/20 text-[11px] md:text-xs font-medium text-[var(--accent-amber-deep)]"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
