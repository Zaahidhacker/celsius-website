"use client";

import { Home, Building2, Factory } from "lucide-react";

const solutions = [
  {
    id: "domestic",
    label: "Domestic",
    icon: Home,
    title: "Home Comfort",
    body: "Energy-efficient, smart cooling for modern homes.",
    brands: "Midea · Haier · Panasonic",
    features: ["Smart integration", "Energy efficiency", "Air quality"],
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    title: "Commercial Spaces",
    body: "Offices, retail, restaurants, and hotels.",
    brands: "LG · Panasonic · Daikin",
    features: ["Multi-split zoning", "Smart connectivity", "Air purification"],
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: Factory,
    title: "Industrial Cooling",
    body: "VRF systems for manufacturing, storage, and data centres.",
    brands: "Mitsubishi · Daikin · Samsung",
    features: ["VRF systems", "Precise regulation", "Robust reliability"],
  },
];

export default function V2Solutions() {
  return (
    <section id="solutions" className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-white v2-font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] font-semibold mb-5">
            <span className="w-8 h-px bg-[var(--accent-amber)]" />
            Sector Solutions
            <span className="w-8 h-px bg-[var(--accent-amber)]" />
          </div>
          <h2 className="v2-font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--brand-deep)] max-w-3xl mx-auto">
            Tailored cooling for <span className="italic text-[var(--accent-amber-deep)]">every space.</span>
          </h2>
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {solutions.map((s, i) => (
            <article
              key={s.id}
              className={`group relative rounded-3xl overflow-hidden border border-[rgba(15,47,99,0.08)] bg-white hover:-translate-y-1.5 transition-all hover:shadow-[0_30px_70px_-20px_rgba(15,47,99,0.2)] ${
                i === 1 ? "md:mt-8" : ""
              }`}
            >
              {/* Top color block */}
              <div className={`relative aspect-[5/4] overflow-hidden ${
                i === 0 ? "bg-gradient-to-br from-[#0b6e97] to-[#0a1d3f]"
                : i === 1 ? "bg-gradient-to-br from-[#0a1d3f] to-[#2563c9]"
                : "bg-gradient-to-br from-[#0a0a0a] to-[#0a1d3f]"
              }`}>
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none" style={{
                  background: "radial-gradient(circle, rgba(245,166,35,0.35), transparent 70%)",
                }} />
                <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent-amber)] mb-1">{s.label} Solutions</div>
                  <div className="v2-font-serif italic text-3xl text-white">{s.title}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-sm text-[rgba(15,47,99,0.7)] leading-relaxed">{s.body}</p>
                <div className="text-[11px] uppercase tracking-wider text-[var(--accent-amber-deep)] font-semibold">{s.brands}</div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(15,47,99,0.08)]">
                  {s.features.map((f) => (
                    <span key={f} className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#fafbfd] border border-[rgba(15,47,99,0.08)] text-[11px] text-[rgba(15,47,99,0.75)]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
