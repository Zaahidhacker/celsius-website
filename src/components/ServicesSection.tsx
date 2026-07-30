"use client";

import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    idx: "01",
    name: "Supply & Installation",
    desc:
      "Delivering and installing cutting-edge air conditioning units for industrial, commercial, and household use — backed by strategic brand partnerships.",
    href: "#contact",
  },
  {
    idx: "02",
    name: "Service & Maintenance",
    desc:
      "Proactive maintenance plans and responsive repair services that enhance system lifespan and minimise operational downtime.",
    href: "#contact",
  },
  {
    idx: "03",
    name: "Gas Leak & Breakdown Repair",
    desc:
      "Skilled diagnostics for gas leaks, electrical faults, and refrigeration issues — vacuumed, refilled, and restored to peak performance.",
    href: "#case-studies",
  },
  {
    idx: "04",
    name: "VRF & Industrial Systems",
    desc:
      "Variable Refrigerant Flow installations for manufacturing, data centres, and processing plants demanding precise temperature control.",
    href: "#solutions",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-transparent overflow-hidden"
    >
      {/* Decorative dot grid pattern background */}
      <div className="absolute inset-0 celsius-dot-grid opacity-50 pointer-events-none" />
      {/* Ambient amber orb */}
      <div
        className="celsius-orb w-[32rem] h-[32rem] top-20 -right-40"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.10), transparent 70%)" }}
      />

      <div className="relative max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="celsius-chip">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            What we do
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] text-[rgba(15,47,99,0.95)]">
            <span className="block">Built for</span>
            <span className="block">
              every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-amber-deep)]">space.</span>
            </span>
          </h2>
        </div>

        {/* Numbered programs list (Baseline) */}
        <ul className="mt-12 md:mt-16">
          {programs.map((p, i) => (
            <li key={p.idx} className="border-t border-[rgba(15,47,99,0.08)] last:border-b">
              <Reveal
                as="a"
                href={p.href}
                delay={i * 90}
                y={20}
                duration={600}
                className="group relative flex items-center gap-4 md:gap-6 py-6 md:py-8 hover:bg-white/70 backdrop-blur-md transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-xl overflow-hidden"
              >
                {/* Hover amber underline glow */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, var(--accent-amber), transparent)" }}
                />
                <span className="w-10 md:w-12 text-sm font-mono font-medium text-[var(--accent-amber-deep)] flex-shrink-0">
                  {p.idx}
                </span>
                <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-6 gap-1 min-w-0">
                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-[rgba(15,47,99,0.95)] flex-shrink-0 group-hover:text-[var(--accent-amber-deep)] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[rgba(15,47,99,0.6)] leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                </div>
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[rgba(15,47,99,0.12)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-amber)] group-hover:bg-[var(--accent-amber)] group-hover:text-[var(--brand-deep)] transition-all">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
