"use client";

const brands = [
  { name: "Midea", tag: "Energy Efficient" },
  { name: "Daikin", tag: "Quiet Comfort" },
  { name: "Panasonic", tag: "nanoe™ X" },
  { name: "Haier", tag: "Smart Convenience" },
  { name: "Mitsubishi", tag: "Hyper-Heating" },
  { name: "Samsung", tag: "Smart Filtration" },
  { name: "TCL", tag: "Simple & Portable" },
  { name: "Chigo", tag: "Turbo & Self-Clean" },
  { name: "LG", tag: "Dual Inverter" },
];

export default function V2Brands() {
  return (
    <section id="products" className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-[var(--brand-deep)] text-white v2-font-sans overflow-hidden">
      {/* Amber glow */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(245,166,35,0.18), transparent 70%)", filter: "blur(80px)",
      }} />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(87,144,230,0.18), transparent 70%)", filter: "blur(80px)",
      }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] font-semibold mb-5">
              <span className="w-8 h-px bg-[var(--accent-amber)]" />
              Product Range
            </div>
            <h2 className="v2-font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Nine brands.<br />
              <span className="italic text-[var(--accent-amber)]">One standard.</span>
            </h2>
          </div>
          <p className="text-base text-white/60 max-w-md font-light leading-relaxed">
            A curated selection of cutting-edge AC brands for industrial, commercial, and domestic settings.
          </p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 p-6 sm:p-7 hover:bg-white/[0.08] hover:border-[var(--accent-amber)]/40 transition-all overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30 tabular-nums">0{i + 1}</div>
              <div className="v2-font-serif italic text-3xl sm:text-4xl font-medium mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                {b.name}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-white/55">{b.tag}</div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[var(--accent-amber)] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
