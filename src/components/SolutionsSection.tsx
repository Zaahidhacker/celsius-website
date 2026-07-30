"use client";

import Reveal from "./Reveal";
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
      className="relative w-full bg-white/70 backdrop-blur-md -mt-10 md:-mt-12 z-10 rounded-t-[1.5rem] md:rounded-t-[2rem] overflow-hidden celsius-shadow-lg"
    >
      {/* Ambient orbs */}
      <div
        className="celsius-orb w-[32rem] h-[32rem] -top-32 -left-32"
        style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.10), transparent 70%)" }}
      />
      <div
        className="celsius-orb w-[28rem] h-[28rem] bottom-20 -right-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.10), transparent 70%)" }}
      />

      <div className="relative max-w-[1536px] mx-auto px-5 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <div className="flex flex-col gap-4">
            <span className="celsius-chip">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Sector solutions
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] text-[rgba(15,47,99,0.95)]">
              <span className="block">Tailored cooling</span>
              <span className="block">
                for every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-amber-deep)]">space.</span>
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[rgba(15,47,99,0.6)] leading-relaxed max-w-md">
            From a single apartment to a sprawling industrial facility —
            Celsius delivers precision-engineered solutions for domestic,
            commercial, and industrial spaces, each with its own demands.
          </p>
        </div>

        {/* Staggered tilted tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {solutions.map((s, i) => (
            <Reveal
              as="article"
              key={s.id}
              delay={s.delayIdx * 140}
              y={36}
              duration={700}
              className={`celsius-lift group relative rounded-[1.5rem] overflow-hidden border border-white/80 flex flex-col celsius-shadow-soft hover:celsius-shadow-lg ${
                i === 1 ? "md:mb-10" : ""
              }`}
            >
              {/* Top color block */}
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  s.tone === "clay"
                    ? "bg-gradient-to-br from-[#0b6e97] to-[#0a1d3f]"
                    : s.tone === "blue"
                      ? "bg-gradient-to-br from-[#0a1d3f] to-[#2563c9]"
                      : "bg-gradient-to-br from-[#0a0a0a] to-[#0a1d3f]"
                }`}
              >
                {/* Amber glow accent */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.30), transparent 70%)" }}
                />
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
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[rgba(10,29,63,0.5)] backdrop-blur-md px-4 py-2.5 text-white border border-white/10">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent-amber-soft)]">
                    {s.label} Solutions
                  </div>
                  <div className="text-sm font-medium mt-0.5">{s.title}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 flex flex-col gap-4 flex-1 bg-white/85 backdrop-blur-md">
                <p className="text-[13px] md:text-sm text-[rgba(15,47,99,0.7)] leading-relaxed">
                  {s.body}
                </p>

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-amber-deep)]">
                    Key Features
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(15,47,99,0.04)] border border-[rgba(15,47,99,0.1)] text-[11px] text-[rgba(15,47,99,0.8)]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-auto pt-3 border-t border-[rgba(15,47,99,0.08)] flex items-center justify-between group/link"
                >
                  <span className="text-sm font-medium text-[rgba(15,47,99,0.95)] group-hover/link:text-[var(--accent-amber-deep)] transition-colors">
                    Enquire
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[rgba(15,47,99,0.04)] border border-[rgba(15,47,99,0.1)] flex items-center justify-center group-hover/link:bg-[var(--accent-amber)] group-hover/link:border-[var(--accent-amber)] group-hover/link:text-[var(--brand-deep)] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
