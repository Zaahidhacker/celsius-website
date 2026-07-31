"use client";

import { ArrowUpRight, Snowflake } from "lucide-react";

export default function V2Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] flex flex-col justify-between bg-white v2-font-sans overflow-hidden pt-24 sm:pt-28"
    >
      {/* Background: subtle radial gradients + dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(37, 99, 201, 0.10), transparent 60%)," +
          "radial-gradient(ellipse 50% 40% at 10% 80%, rgba(245, 166, 35, 0.08), transparent 55%)",
      }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--brand-deep) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      {/* Decorative giant ghost letter */}
      <div
        className="absolute -right-12 sm:-right-20 top-1/4 v2-font-serif italic font-bold text-[28rem] sm:text-[40rem] leading-none pointer-events-none select-none"
        style={{ color: "rgba(15, 47, 99, 0.04)" }}
        aria-hidden="true"
      >
        C
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-10 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] font-semibold">
              <span className="w-8 h-px bg-[var(--accent-amber)]" />
              Excellence in Cooling Since 2019
            </div>

            {/* Headline */}
            <h1 className="v2-font-serif text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.95] tracking-[-0.02em] text-[var(--brand-deep)]">
              <span className="block">Precision</span>
              <span className="block italic text-[var(--accent-amber-deep)]">cooling,</span>
              <span className="block">engineered.</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg md:text-xl text-[rgba(15,47,99,0.65)] max-w-xl leading-relaxed v2-font-sans font-light">
              Supply, installation &amp; maintenance of premium AC systems across Sri Lanka.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--brand-deep)] text-white text-sm font-semibold hover:bg-[var(--accent-amber)] hover:text-[var(--brand-deep)] transition-colors"
              >
                Book a Demo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[rgba(15,47,99,0.2)] text-[var(--brand-deep)] text-sm font-semibold hover:bg-[var(--brand-deep)] hover:text-white hover:border-[var(--brand-deep)] transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: stat card */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="relative bg-[var(--brand-deep)] rounded-3xl p-7 sm:p-9 text-white overflow-hidden">
              {/* Amber glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none" style={{
                background: "radial-gradient(circle, rgba(245,166,35,0.4), transparent 70%)",
                filter: "blur(40px)",
              }} />

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Snowflake className="w-4 h-4 text-[var(--accent-amber)]" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">At a Glance</span>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  <div>
                    <div className="v2-font-serif italic text-5xl sm:text-6xl font-medium leading-none">2019</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Established</div>
                  </div>
                  <div>
                    <div className="v2-font-serif italic text-5xl sm:text-6xl font-medium leading-none text-[var(--accent-amber)]">40+</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Business Clients</div>
                  </div>
                  <div>
                    <div className="v2-font-serif italic text-5xl sm:text-6xl font-medium leading-none">9</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Premium Brands</div>
                  </div>
                  <div>
                    <div className="v2-font-serif italic text-5xl sm:text-6xl font-medium leading-none">3</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/55 mt-2">Sectors Served</div>
                  </div>
                </div>

                <div className="mt-7 pt-6 border-t border-white/15">
                  <p className="v2-font-serif italic text-base text-white/80 leading-relaxed">
                    "If your facility's temperature and air quality aren't perfect, we pledge to modify it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-t border-[rgba(15,47,99,0.1)] py-4 overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap celsius-marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 flex-shrink-0">
              {["Domestic", "Commercial", "Industrial", "9 Premium Brands", "40+ Clients", "Since 2019"].map((s) => (
                <span key={s + k} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[rgba(15,47,99,0.6)] font-semibold v2-font-sans">
                  <span className="w-1 h-1 rounded-full bg-[var(--accent-amber)]" />
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
