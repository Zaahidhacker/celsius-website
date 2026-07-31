"use client";

import { ArrowUpRight } from "lucide-react";

const services = [
  { idx: "01", name: "Supply & installation",       desc: "Premium branded AC units, expertly installed.",       href: "#contact" },
  { idx: "02", name: "Service & maintenance",       desc: "Proactive plans that extend system lifespan.",        href: "#contact" },
  { idx: "03", name: "Gas leak & breakdown repair", desc: "Diagnostics for leaks, faults, and refrigeration.",   href: "#case-studies" },
  { idx: "04", name: "VRF & industrial systems",    desc: "Variable Refrigerant Flow for plants and data halls.", href: "#solutions" },
];

export default function V2Services() {
  return (
    <section id="services" className="relative w-full celsius-section v2-cream-bg v2-font-sans overflow-hidden">
      <div className="celsius-container">
        {/* Header — asymmetric 8+4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber mb-5">
              <span className="w-1 h-1 rounded-full bg-current" />
              Services
            </div>
            <h2 className="celsius-display celsius-h2 v2-ink celsius-sentence">
              Built for every{" "}
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">space.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3 flex lg:justify-end lg:items-end">
            <a href="#contact" className="celsius-island-btn celsius-island-btn-light">
              <span>Start a project</span>
              <span className="celsius-island-icon">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Services list */}
        <div className="flex flex-col">
          {services.map((s) => (
            <a
              key={s.idx}
              href={s.href}
              className="group relative grid grid-cols-12 gap-4 sm:gap-6 items-baseline py-6 sm:py-8 border-t border-[rgba(15,47,99,0.12)] hover:border-[var(--accent-amber)] transition-colors"
            >
              <span className="col-span-2 sm:col-span-1 text-xs sm:text-sm font-mono text-[var(--accent-amber-deep)] celsius-numeric">{s.idx}</span>
              <h3 className="col-span-10 sm:col-span-5 v2-font-serif italic text-2xl sm:text-3xl md:text-4xl font-medium v2-ink group-hover:text-[var(--accent-amber-deep)] transition-colors celsius-sentence">
                {s.name}
              </h3>
              <p className="col-span-12 sm:col-span-5 text-sm v2-ink-soft leading-relaxed">
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
