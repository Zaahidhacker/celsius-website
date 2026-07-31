"use client";

export default function V2Ceo() {
  return (
    <section id="ceo" className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-white v2-font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--brand-deep)] to-[#0a1d3f]">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none" style={{
                background: "radial-gradient(circle, rgba(245,166,35,0.35), transparent 70%)",
              }} />
              <div className="absolute inset-0 flex items-end p-7 sm:p-9">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] mb-3">Founder &amp; CEO</div>
                  <div className="v2-font-serif italic text-4xl sm:text-5xl text-white">Ijaz Niyaz</div>
                </div>
              </div>
              <div className="absolute top-7 left-7 v2-font-serif italic text-8xl text-white/10 font-bold leading-none">"</div>
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] font-semibold mb-6">
              <span className="w-8 h-px bg-[var(--accent-amber)]" />
              From the CEO
            </div>
            <blockquote className="v2-font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[var(--brand-deep)] tracking-tight">
              <span className="italic">"We didn't build Celsius to sell air conditioners.</span> We built it to give Sri Lankan homes and businesses the comfort they deserve — engineered with precision, delivered with integrity."
            </blockquote>
            <div className="mt-8 pt-6 border-t border-[rgba(15,47,99,0.1)] flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[var(--brand-deep)]">Ijaz Niyaz</div>
                <div className="text-xs text-[rgba(15,47,99,0.55)] mt-0.5">Founder &amp; CEO, Celsius</div>
              </div>
              <div className="text-[10px] font-mono text-[rgba(15,47,99,0.4)] uppercase tracking-wider">Est. 2019</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
