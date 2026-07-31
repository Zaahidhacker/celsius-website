"use client";

const caseStudies = [
  { tag: "Commercial", title: "Boutique hotel, Colombo",   summary: "36-room hotel — full HVAC design, supply, and install.",   result: "32% lower cooling energy costs." },
  { tag: "Industrial", title: "Manufacturing plant, Homagama", summary: "VRF system across a 2,000 sqm production floor.",      result: "Zero downtime across 18 months." },
  { tag: "Domestic",   title: "Luxury residence, Nugegoda", summary: "Multi-split across 4 bedrooms and 2 living areas.",       result: "Whisper-quiet, smart-home integrated." },
];

export default function V2CaseStudies() {
  return (
    <section id="case-studies" className="relative w-full celsius-section v2-cream-bg v2-font-sans overflow-hidden">
      <div className="celsius-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber mb-5">
              <span className="w-1 h-1 rounded-full bg-current" />
              Case studies
            </div>
            <h2 className="celsius-display celsius-h2 v2-ink celsius-sentence">
              Real installs.{" "}
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">Real results.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {caseStudies.map((c, i) => (
            <article key={c.title} className="group relative flex flex-col rounded-3xl border border-[rgba(15,47,99,0.08)] v2-cream-surface hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-20px_rgba(15,47,99,0.18)] transition-all overflow-hidden">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--brand-deep)] to-[#0a1d3f] overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none" style={{
                  background: "radial-gradient(circle, rgba(245,166,35,0.4), transparent 70%)",
                }} />
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider text-white celsius-sentence">
                  {c.tag}
                </div>
                <div className="absolute bottom-5 left-5 v2-font-serif italic text-6xl text-[var(--accent-amber)]/40 font-bold celsius-numeric">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-3 flex-1">
                <h3 className="v2-font-serif italic text-xl sm:text-2xl font-medium v2-ink leading-tight celsius-sentence">{c.title}</h3>
                <p className="text-sm v2-ink-soft leading-relaxed">{c.summary}</p>
                <div className="mt-auto pt-4 border-t border-[rgba(15,47,99,0.08)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]" />
                  <span className="text-xs font-semibold text-[var(--accent-amber-deep)] uppercase tracking-wider celsius-sentence">{c.result}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
