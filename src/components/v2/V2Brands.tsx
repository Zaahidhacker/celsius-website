"use client";

const brands = [
  { name: "Midea",      tag: "Energy efficient" },
  { name: "Daikin",     tag: "Quiet comfort" },
  { name: "Panasonic",  tag: "nanoe™ X" },
  { name: "Haier",      tag: "Smart convenience" },
  { name: "Mitsubishi", tag: "Hyper-heating" },
  { name: "Samsung",    tag: "Smart filtration" },
  { name: "TCL",        tag: "Simple & portable" },
  { name: "Chigo",      tag: "Turbo & self-clean" },
  { name: "LG",         tag: "Dual inverter" },
];

export default function V2Brands() {
  return (
    <section id="products" className="relative w-full celsius-section bg-[var(--brand-deep)] text-white v2-font-sans overflow-hidden">
      {/* Amber glow */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(245,166,35,0.18), transparent 70%)", filter: "blur(80px)",
      }} />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(87,144,230,0.18), transparent 70%)", filter: "blur(80px)",
      }} />

      <div className="relative celsius-container">
        {/* Header — asymmetric 8+4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber-light mb-5">
              <span className="w-1 h-1 rounded-full bg-current" />
              Product range
            </div>
            <h2 className="celsius-display celsius-h2 celsius-sentence">
              Nine brands.<br />
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber)]">One standard.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3">
            <p className="celsius-lede text-white/70">
              Curated AC brands for industrial, commercial, and domestic use.
            </p>
          </div>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 p-6 sm:p-7 hover:bg-white/[0.08] hover:border-[var(--accent-amber)]/40 transition-all overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30 celsius-numeric">0{i + 1}</div>
              <div className="v2-font-serif italic text-3xl sm:text-4xl font-medium mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                {b.name}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-white/55 celsius-sentence">{b.tag}</div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[var(--accent-amber)] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
