"use client";

import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

const programs = [
  { idx: "01", name: "Supply & installation", desc: "Branded AC units, expertly installed for any sector.", href: "#contact" },
  { idx: "02", name: "Service & maintenance", desc: "Proactive maintenance plans that extend system lifespan.", href: "#contact" },
  { idx: "03", name: "Gas leak & breakdown repair", desc: "Diagnostics for leaks, faults, and refrigeration issues.", href: "#case-studies" },
  { idx: "04", name: "VRF & industrial systems", desc: "Variable Refrigerant Flow for plants, data centres, and processing.", href: "#solutions" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-transparent overflow-hidden celsius-section"
    >
      {/* Decorative dot grid pattern background */}
      <div className="absolute inset-0 celsius-dot-grid opacity-50 pointer-events-none" />
      {/* Ambient amber orb */}
      <div
        className="celsius-orb w-[32rem] h-[32rem] top-20 -right-40"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.10), transparent 70%)" }}
      />

      <div className="relative celsius-container">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="celsius-eyebrow-pill">What we do</span>
          <h2 className="celsius-h2 celsius-sentence text-[rgba(15,47,99,0.95)]">
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
                delay={i * 90}
                y={20}
                duration={600}
                className="h-full"
              >
                <a
                  href={p.href}
                  className="group relative flex items-center gap-3 md:gap-6 py-5 sm:py-6 md:py-8 hover:bg-white/70 backdrop-blur-md transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-xl overflow-hidden"
                >
                  {/* Hover amber underline glow */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: "linear-gradient(90deg, var(--accent-amber), transparent)" }}
                  />
                  <span className="celsius-numeric w-8 sm:w-10 md:w-12 text-xs sm:text-sm font-mono font-medium text-[var(--accent-amber-deep)] flex-shrink-0">
                    {p.idx}
                  </span>
                  <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-6 gap-1 min-w-0">
                    <h3 className="celsius-h3 celsius-sentence text-[rgba(15,47,99,0.95)] flex-shrink-0 group-hover:text-[var(--accent-amber-deep)] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[rgba(15,47,99,0.6)] leading-relaxed max-w-md">
                      {p.desc}
                    </p>
                  </div>
                  <span className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-[rgba(15,47,99,0.12)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-amber)] group-hover:bg-[var(--accent-amber)] group-hover:text-[var(--brand-deep)] transition-all">
                    <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
