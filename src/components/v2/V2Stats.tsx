"use client";

export default function V2Stats() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-5 sm:px-6 md:px-10 bg-[#fafbfd] v2-font-sans overflow-hidden border-y border-[rgba(15,47,99,0.08)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "2019", label: "Established" },
            { number: "40+", label: "Business Clients" },
            { number: "9", label: "Premium Brands" },
            { number: "3", label: "Sectors Served" },
          ].map((s, i) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="v2-font-serif italic text-5xl sm:text-6xl md:text-7xl font-medium text-[var(--brand-deep)] leading-none mb-2">
                {s.number}
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent-amber-deep)] font-semibold">
                {s.label}
              </div>
              <div className="hidden sm:block mt-3 text-[10px] font-mono text-[rgba(15,47,99,0.3)] tabular-nums">0{i + 1} / 04</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
