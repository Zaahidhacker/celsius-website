"use client";

import { ArrowUpRight } from "lucide-react";

const services = [
  { idx: "01", name: "Supply & Installation", desc: "Premium branded AC units, expertly installed for any sector.", href: "#contact" },
  { idx: "02", name: "Service & Maintenance", desc: "Proactive maintenance plans that extend system lifespan.", href: "#contact" },
  { idx: "03", name: "Gas Leak & Breakdown Repair", desc: "Skilled diagnostics for leaks, faults, and refrigeration issues.", href: "#case-studies" },
  { idx: "04", name: "VRF & Industrial Systems", desc: "Variable Refrigerant Flow for plants, data centres, and processing.", href: "#solutions" },
];

export default function V2Services() {
  return (
    <section id="services" className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-[#fafbfd] v2-font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] font-semibold mb-5">
              <span className="w-8 h-px bg-[var(--accent-amber)]" />
              What We Do
            </div>
            <h2 className="v2-font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--brand-deep)]">
              Built for every <span className="italic text-[var(--accent-amber-deep)]">space.</span>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-deep)] hover:text-[var(--accent-amber-deep)] transition-colors group">
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Services list */}
        <div className="flex flex-col">
          {services.map((s) => (
            <a
              key={s.idx}
              href={s.href}
              className="group relative grid grid-cols-12 gap-4 sm:gap-6 items-baseline py-6 sm:py-8 border-t border-[rgba(15,47,99,0.12)] hover:border-[var(--accent-amber)] transition-colors"
            >
              <span className="col-span-2 sm:col-span-1 text-xs sm:text-sm font-mono text-[var(--accent-amber-deep)] tabular-nums">{s.idx}</span>
              <h3 className="col-span-10 sm:col-span-5 v2-font-serif italic text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--brand-deep)] group-hover:text-[var(--accent-amber-deep)] transition-colors">
                {s.name}
              </h3>
              <p className="col-span-12 sm:col-span-5 text-sm text-[rgba(15,47,99,0.65)] leading-relaxed">
                {s.desc}
              </p>
              <div className="col-span-12 sm:col-span-1 flex sm:justify-end">
                <span className="w-9 h-9 rounded-full border border-[rgba(15,47,99,0.15)] flex items-center justify-center group-hover:bg-[var(--accent-amber)] group-hover:border-[var(--accent-amber)] transition-all">
                  <ArrowUpRight className="w-4 h-4 text-[var(--brand-deep)] group-hover:text-white transition-colors" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
