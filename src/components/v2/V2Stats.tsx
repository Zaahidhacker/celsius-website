"use client";

const stats = [
  { number: "2019", label: "Established" },
  { number: "40+",  label: "Business clients" },
  { number: "9",    label: "Premium brands" },
  { number: "3",    label: "Sectors served" },
];

export default function V2Stats() {
  return (
    <section className="relative w-full celsius-section-tight v2-cream-surface v2-font-sans overflow-hidden border-y border-[rgba(15,47,99,0.08)]">
      <div className="celsius-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="v2-font-serif italic font-medium v2-ink leading-none mb-2 celsius-numeric celsius-display-italic"
                   style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
                {s.number}
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent-amber-deep)] font-semibold celsius-sentence">
                {s.label}
              </div>
              <div className="hidden sm:block mt-3 text-[10px] font-mono text-[rgba(26,31,46,0.3)] celsius-numeric">0{i + 1} / 04</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
