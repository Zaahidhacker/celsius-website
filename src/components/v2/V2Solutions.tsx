"use client";

import { Home, Building2, Factory } from "lucide-react";

const solutions = [
  {
    id: "domestic",
    label: "Domestic",
    icon: Home,
    title: "Home comfort",
    body: "Smart, efficient cooling for modern homes.",
    brands: "Midea · Haier · Panasonic",
    features: ["Smart integration", "Energy efficiency", "Air quality"],
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    title: "Commercial spaces",
    body: "Offices, retail, restaurants, and hotels.",
    brands: "LG · Panasonic · Daikin",
    features: ["Multi-split zoning", "Smart connectivity", "Air purification"],
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: Factory,
    title: "Industrial cooling",
    body: "VRF systems for manufacturing, storage, and data centres.",
    brands: "Mitsubishi · Daikin · Samsung",
    features: ["VRF systems", "Precise regulation", "Robust reliability"],
  },
];

export default function V2Solutions() {
  return (
    <section id="solutions" className="relative w-full celsius-section v2-cream-bg v2-font-sans overflow-hidden">
      <div className="celsius-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber mb-5">
              <span className="w-1 h-1 rounded-full bg-current" />
              Sector solutions
            </div>
            <h2 className="celsius-display celsius-h2 v2-ink celsius-sentence">
              Tailored cooling for{" "}
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">every space.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="celsius-lede v2-ink-soft">
              Three sectors, one standard of work.
            </p>
          </div>
        </div>

        {/* Solutions grid — staggered tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {solutions.map((s, i) => (
            <article
              key={s.id}
              className={`group relative rounded-3xl overflow-hidden border border-[rgba(15,47,99,0.08)] v2-cream-surface hover:-translate-y-1.5 transition-all hover:shadow-[0_30px_70px_-20px_rgba(15,47,99,0.2)] ${
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
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent-amber)] mb-1 celsius-sentence">{s.label} solutions</div>
                  <div className="v2-font-serif italic text-3xl text-white celsius-sentence">{s.title}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-sm v2-ink-soft leading-relaxed">{s.body}</p>
                <div className="text-[11px] uppercase tracking-wider text-[var(--accent-amber-deep)] font-semibold celsius-sentence">{s.brands}</div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(15,47,99,0.08)]">
                  {s.features.map((f) => (
                    <span key={f} className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#fafbfd] border border-[rgba(15,47,99,0.08)] text-[11px] v2-ink-soft celsius-sentence">
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
