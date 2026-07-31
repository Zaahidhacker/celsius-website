"use client";

export default function V2Ceo() {
  return (
    <section id="ceo" className="relative w-full celsius-section v2-cream-surface v2-font-sans overflow-hidden">
      <div className="celsius-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--brand-deep)] to-[#0a1d3f]">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none" style={{
                background: "radial-gradient(circle, rgba(245,166,35,0.35), transparent 70%)",
              }} />
              <div className="absolute inset-0 flex items-end p-7 sm:p-9">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] mb-3 celsius-sentence">Founder &amp; CEO</div>
                  <div className="v2-font-serif italic text-4xl sm:text-5xl text-white celsius-sentence">Ijaz Niyaz</div>
                </div>
              </div>
              <div className="absolute top-7 left-7 v2-font-serif italic text-8xl text-white/10 font-bold leading-none">&ldquo;</div>
            </div>
          </div>

          {/* Quote — asymmetric 7-col */}
          <div className="lg:col-span-7">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber mb-6">
              <span className="w-1 h-1 rounded-full bg-current" />
              From the founder
            </div>
            <blockquote className="celsius-display v2-ink tracking-tight celsius-sentence"
                        style={{ fontSize: "clamp(2rem, 4.2vw, 3.5rem)", lineHeight: 1.15 }}>
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">&ldquo;</span>
              We didn&rsquo;t build Celsius to sell air conditioners.{" "}
              <span className="celsius-display-italic">We built it to give Sri Lankan homes and businesses the comfort they deserve.</span>
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">&rdquo;</span>
            </blockquote>
            <div className="mt-8 pt-6 border-t border-[rgba(15,47,99,0.1)] flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold v2-ink">Ijaz Niyaz</div>
                <div className="text-xs v2-ink-soft mt-0.5 celsius-sentence">Founder &amp; CEO, Celsius</div>
              </div>
              <div className="text-[10px] font-mono text-[rgba(26,31,46,0.4)] uppercase tracking-wider celsius-numeric">Est. 2019</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
