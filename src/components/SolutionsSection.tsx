"use client";

import { motion } from "motion/react";
import { Home, Building2, Factory, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const solutions = [
  {
    id: "domestic",
    label: "Domestic",
    icon: Home,
    title: "Home Comfort with Celsius",
    intro:
      "Discover personalised air conditioning solutions for your home. We take pride in ensuring your space is not just comfortable but energy-efficient, equipped with cutting-edge technology.",
    featuredBrands: "Midea, Haier, Panasonic",
    features: [
      "Flexibility & smart home integration",
      "Energy-efficient operation",
      "Improved indoor air quality",
      "Cost savings & long-term reliability",
    ],
    applications: [
      "Living spaces",
      "Home offices",
      "Bedrooms & apartments",
    ],
    accentFrom: "rgba(30,50,90,0.04)",
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    title: "Elevate Your Commercial Space",
    intro:
      "Experience tailored air conditioning solutions for commercial spaces. Our extensive range strikes the perfect balance between efficiency, comfort, and sustainability.",
    featuredBrands: "LG, Panasonic, Daikin",
    features: [
      "Multi-split systems with zoning",
      "Smart connectivity & controls",
      "Advanced air purification",
      "Operational efficiency optimisation",
    ],
    applications: [
      "Offices & coworking spaces",
      "Retail & restaurants",
      "Hotels & hospitality",
    ],
    accentFrom: "rgba(30,50,90,0.05)",
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: Factory,
    title: "Celsius Industrial Cooling Solutions",
    intro:
      "Celsius excels in tailored air conditioning solutions for industries — featuring brands like Mitsubishi, Daikin, and Samsung for precision, efficiency, and robust reliability.",
    featuredBrands: "Mitsubishi, Daikin, Samsung",
    features: [
      "Energy-efficient VRF systems",
      "Precise temperature regulation",
      "Robust reliability for 24/7 use",
      "Cost-efficiency at scale",
    ],
    applications: [
      "Manufacturing & processing",
      "Storage & warehousing",
      "Data centres",
    ],
    accentFrom: "rgba(30,50,90,0.06)",
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="Sector Solutions"
          title="Tailored cooling for every environment."
          subtitle="From a single apartment to a sprawling industrial facility — Celsius delivers precision-engineered solutions for domestic, commercial, and industrial spaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {solutions.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-[1.8rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-7 flex flex-col gap-5 overflow-hidden hover:bg-white/75 transition-colors"
            >
              {/* Soft corner glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: s.accentFrom }}
              />

              <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/70 border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />
                  </div>
                  <span className="text-[11px] font-normal uppercase tracking-wider text-[rgba(30,50,90,0.55)]">
                    {s.label} Solutions
                  </span>
                </div>
                <span className="text-[11px] font-normal text-[rgba(30,50,90,0.4)]">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] relative">
                {s.title}
              </h3>
              <p className="text-[13px] md:text-sm text-[rgba(30,50,90,0.7)] leading-relaxed font-normal relative">
                {s.intro}
              </p>

              <div className="flex flex-col gap-2 relative">
                <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                  Key Features
                </span>
                <ul className="grid grid-cols-1 gap-1.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[12px] md:text-[13px] text-[rgba(30,50,90,0.78)] font-normal"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[rgba(30,50,90,0.5)] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 relative">
                <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                  Applications
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {s.applications.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(30,50,90,0.04)] border border-[rgba(30,50,90,0.08)] text-[11px] md:text-xs font-normal text-[rgba(30,50,90,0.75)]"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-[rgba(30,50,90,0.08)] flex items-center justify-between relative">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                    Featured Brands
                  </span>
                  <span className="text-[13px] md:text-sm font-normal text-[rgba(30,50,90,0.9)]">
                    {s.featuredBrands}
                  </span>
                </div>
                <a
                  href="#contact"
                  aria-label={`Enquire about ${s.label} solutions`}
                  className="w-9 h-9 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center hover:bg-[rgba(30,50,90,0.1)] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
