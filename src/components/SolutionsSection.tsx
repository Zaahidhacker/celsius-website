"use client";

import { motion } from "motion/react";
import { Home, Building2, Factory, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    id: "domestic",
    label: "Domestic",
    icon: Home,
    title: "Home Comfort",
    body:
      "Personalised air conditioning for your home — energy-efficient, smart, and built for modern living. Curated brands like Midea, Haier, and Panasonic.",
    features: ["Smart integration", "Energy efficiency", "Improved air quality", "Cost savings"],
    tone: "clay",
    delayIdx: 0,
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    title: "Commercial Spaces",
    body:
      "Tailored solutions for offices, retail, restaurants, and hotels — featuring LG, Panasonic, and Daikin. Balance efficiency, comfort, and sustainability.",
    features: ["Multi-split zoning", "Smart connectivity", "Air purification", "Operational efficiency"],
    tone: "blue",
    delayIdx: 1,
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: Factory,
    title: "Industrial Cooling",
    body:
      "VRF systems and precise temperature regulation for manufacturing, storage, data centres, and processing plants. Brands: Mitsubishi, Daikin, Samsung.",
    features: ["VRF systems", "Precise regulation", "Robust reliability", "Cost-efficiency at scale"],
    tone: "navy",
    delayIdx: 2,
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative w-full bg-white -mt-10 md:-mt-12 z-10 rounded-t-[1.5rem] md:rounded-t-[2rem]"
    >
      <div className="max-w-[1536px] mx-auto px-5 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <div className="flex flex-col gap-4">
            <span className="celsius-eyebrow">Sector solutions</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] text-[#0a0a0a]">
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Tailored cooling
                </motion.span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  for every space.
                </motion.span>
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#717784] leading-relaxed max-w-md">
            From a single apartment to a sprawling industrial facility —
            Celsius delivers precision-engineered solutions for domestic,
            commercial, and industrial spaces, each with its own demands.
          </p>
        </div>

        {/* Staggered tilted tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {solutions.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: s.delayIdx * 0.14, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`celsius-lift relative rounded-[1.5rem] overflow-hidden border border-[#e6e8ec] flex flex-col ${
                i === 1 ? "md:mb-10" : ""
              }`}
            >
              {/* Top color block */}
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  s.tone === "clay"
                    ? "bg-gradient-to-br from-[#0b6e97] to-[#0f2f63]"
                    : s.tone === "blue"
                      ? "bg-gradient-to-br from-[#0f2f63] to-[#2563c9]"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#0f2f63]"
                }`}
              >
                {/* Decorative airflow lines */}
                <svg
                  className="absolute inset-0 w-full h-full text-white/15"
                  viewBox="0 0 200 150"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <path d="M0 40 L 130 40 C 160 40, 180 25, 200 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M0 75 L 170 75 C 185 75, 195 75, 200 73" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M0 110 L 130 110 C 160 110, 180 125, 200 132" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                {/* Icon chip */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-white" />
                </div>

                {/* Glass caption */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[rgba(15,47,99,0.4)] backdrop-blur-md px-4 py-2.5 text-white">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                    {s.label} Solutions
                  </div>
                  <div className="text-sm font-medium mt-0.5">{s.title}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                <p className="text-[13px] md:text-sm text-[#717784] leading-relaxed">
                  {s.body}
                </p>

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#717784]">
                    Key Features
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#f4f4f4] border border-[#e6e8ec] text-[11px] text-[#0a0a0a]/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-auto pt-3 border-t border-[#e6e8ec] flex items-center justify-between group/link"
                >
                  <span className="text-sm font-medium text-[#0a0a0a]">
                    Enquire
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#0a0a0a]/5 border border-[#e6e8ec] flex items-center justify-center group-hover/link:bg-[#0a0a0a] group-hover/link:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
