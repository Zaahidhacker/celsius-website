"use client";

/**
 * V3 HERO — Tactical Telemetry / Dark Tech
 * - OLED black with amber orb glow
 * - Massive Space Grotesk display type, uppercase, tight tracking
 * - Monospace telemetry metadata (coordinates, status, time)
 * - Asymmetric bento grid with floating vantablack glass cards
 * - Crosshair markers at grid intersections
 * - Sharp 90° corners everywhere (no rounded)
 */
export default function V3Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden v3-root"
      style={{ minHeight: "calc(100dvh - 5rem)" }}
    >
      {/* Ambient amber orb */}
      <div
        className="v3-orb"
        style={{
          top: "-12rem",
          right: "-12rem",
          width: "40rem",
          height: "40rem",
          background: "radial-gradient(circle, rgba(245,166,35,0.22) 0%, transparent 60%)",
        }}
      />
      {/* Secondary cooler orb */}
      <div
        className="v3-orb"
        style={{
          bottom: "-15rem",
          left: "-10rem",
          width: "36rem",
          height: "36rem",
          background: "radial-gradient(circle, rgba(60, 100, 180, 0.18) 0%, transparent 60%)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #EAEAEA 1px, transparent 0)",
          backgroundSize: "32px 32px",
          zIndex: 0,
        }}
      />

      {/* Crosshair markers at corners (decorative) */}
      <div className="absolute top-24 left-4 sm:left-8 v3-crosshair w-4 h-4 z-10" />
      <div className="absolute top-24 right-4 sm:right-8 v3-crosshair w-4 h-4 z-10" />
      <div className="absolute bottom-8 left-4 sm:left-8 v3-crosshair w-4 h-4 z-10" />
      <div className="absolute bottom-8 right-4 sm:right-8 v3-crosshair w-4 h-4 z-10" />

      {/* Content layer */}
      <div className="relative z-10 v3-container flex flex-col justify-center" style={{ minHeight: "calc(100dvh - 5rem)", paddingTop: "2rem", paddingBottom: "3rem" }}>

        {/* Top telemetry row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 sm:mb-14">
          <span className="v3-eyebrow">/ SYSTEM ONLINE — COOLING.OP</span>
          <div className="flex items-center gap-4 v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.16em]">
            <span>LAT 6.9271° N</span>
            <span className="hidden sm:inline">LON 79.8612° E</span>
            <span className="text-[var(--v3-amber)]">REV 3.0</span>
          </div>
        </div>

        {/* Massive display headline */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <h1 className="v3-display" style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}>
            <span className="block">Precision</span>
            <span className="block">
              <span className="v3-amber-text">cooling,</span>
            </span>
            <span className="block">engineered.</span>
          </h1>
        </div>

        {/* Subline + CTAs row */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Left: subline + CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className="v3-mono text-sm sm:text-base text-[var(--v3-ink-soft)] max-w-md leading-relaxed">
              Premium AC supply, install &amp; service. Domestic, commercial, industrial — across Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="v3-btn v3-btn-primary">Book demo</a>
              <a href="#services" className="v3-btn">View services</a>
            </div>
          </div>

          {/* Right: telemetry data card */}
          <div className="lg:col-span-5 lg:pl-6">
            <div className="v3-card p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--v3-line)]">
                <span className="v3-eyebrow">/ SYSTEM.STATUS</span>
                <span className="v3-mono text-[10px] text-[var(--v3-amber)] uppercase tracking-[0.16em] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[var(--v3-amber)] animate-pulse" />
                  ACTIVE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                <div className="v3-data-row">
                  <span className="v3-data-label">EST.</span>
                  <span className="v3-data-value">2019</span>
                </div>
                <div className="v3-data-row">
                  <span className="v3-data-label">CLIENTS</span>
                  <span className="v3-data-value">40+</span>
                </div>
                <div className="v3-data-row">
                  <span className="v3-data-label">BRANDS</span>
                  <span className="v3-data-value">09</span>
                </div>
                <div className="v3-data-row">
                  <span className="v3-data-label">SECTORS</span>
                  <span className="v3-data-value">03</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--v3-line)] v3-mono text-[10px] text-[var(--v3-ink-faint)] uppercase tracking-[0.14em] leading-relaxed">
                &gt; If your facility&apos;s air isn&apos;t perfect,<br />
                &gt; we pledge to fix it.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee strip */}
        <div className="mt-10 sm:mt-14 pt-5 border-t border-[var(--v3-line)] overflow-hidden">
          <div className="flex items-center gap-6 whitespace-nowrap celsius-marquee-track">
            {Array.from({ length: 3 }).map((_, k) => (
              <div key={k} className="flex items-center gap-6 flex-shrink-0">
                {["Domestic", "Commercial", "Industrial", "9 brands", "40+ clients", "Since 2019", "24/7 service"].map(s => (
                  <span key={s + k} className="v3-marquee-item">{s}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
