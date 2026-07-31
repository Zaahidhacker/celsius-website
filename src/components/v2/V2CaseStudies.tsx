"use client";

const caseStudies = [
  { tag: "Commercial", title: "Boutique Hotel Colombo", summary: "36-room boutique hotel — full HVAC design, supply, and install.", result: "32% reduction in cooling energy costs." },
  { tag: "Industrial", title: "Manufacturing Plant Homagama", summary: "VRF system for a 2,000 sqm production floor.", result: "Zero downtime across 18 months." },
  { tag: "Domestic", title: "Luxury Residence Nugegoda", summary: "Multi-split system across 4 bedrooms and 2 living areas.", result: "Whisper-quiet, smart-home integrated." },
];

export default function V2CaseStudies() {
  return (
    <section id="case-studies" className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-white v2-font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] font-semibold mb-5">
              <span className="w-8 h-px bg-[var(--accent-amber)]" />
              Case Studies
            </div>
            <h2 className="v2-font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--brand-deep)]">
              Real installs. <span className="italic text-[var(--accent-amber-deep)]">Real results.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {caseStudies.map((c, i) => (
            <article key={c.title} className="group relative flex flex-col rounded-3xl border border-[rgba(15,47,99,0.08)] bg-[#fafbfd] hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-20px_rgba(15,47,99,0.18)] transition-all overflow-hidden">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--brand-deep)] to-[#0a1d3f] overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none" style={{
                  background: "radial-gradient(circle, rgba(245,166,35,0.4), transparent 70%)",
                }} />
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider text-white">
                  {c.tag}
                </div>
                <div className="absolute bottom-5 left-5 v2-font-serif italic text-6xl text-[var(--accent-amber)]/40 font-bold tabular-nums">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-3 flex-1">
                <h3 className="v2-font-serif italic text-xl sm:text-2xl font-medium text-[var(--brand-deep)] leading-tight">{c.title}</h3>
                <p className="text-sm text-[rgba(15,47,99,0.65)] leading-relaxed">{c.summary}</p>
                <div className="mt-auto pt-4 border-t border-[rgba(15,47,99,0.08)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]" />
                  <span className="text-xs font-semibold text-[var(--accent-amber-deep)] uppercase tracking-wider">{c.result}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
