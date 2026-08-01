"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, Snowflake, Wind } from "lucide-react";

/**
 * V1 HERO — Redesigned with taste-skill anti-slop principles.
 * - Simplified copy (killed the "yap")
 * - Asymmetric editorial layout (no equal column split)
 * - Double-bezel nested stat card
 * - Button-in-button CTA (celsius-island-btn)
 * - Mobile-first responsive (single column on mobile, asymmetric on lg+)
 * - WebGL MeshGradient lazy-loaded, falls back to gradient if WebGL unavailable
 */

const MeshGradient = dynamic(() => import("./ui/mesh-gradient"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full celsius-section-tight"
      style={{ paddingTop: "0", paddingBottom: "0" }}
    >
      <div className="celsius-container" style={{ paddingInline: "0.75rem" }}>
        <div
          className="relative w-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] md:rounded-[2rem] flex flex-col bg-[#0a1d3f] celsius-min-screen"
          style={{ minHeight: "calc(100dvh - 6rem)" }}
        >
          {/* WebGL MeshGradient backdrop — lazy, low opacity */}
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.22 }}>
            <MeshGradient speed={4} intensity={1.2} grain={0.35} />
          </div>

          {/* Video bg (subtle, blended) */}
          <video
            autoPlay muted loop playsInline preload="metadata"
            poster="https://images.unsplash.com/photo-1631545806609-29ea0c81e6e8?auto=format&fit=crop&w=1600&q=60"
            className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
            style={{ mixBlendMode: "luminosity", opacity: 0.42 }}
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4"
              type="video/mp4"
            />
          </video>

          {/* Navy gradient overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(10,29,63,0.85)] via-[rgba(15,47,99,0.55)] to-[rgba(10,29,63,0.95)] pointer-events-none" />

          {/* Warm amber side glow */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 85% 25%, rgba(245, 166, 35, 0.20), transparent 60%)," +
                "radial-gradient(ellipse 40% 30% at 10% 80%, rgba(87, 144, 230, 0.25), transparent 55%)",
            }}
          />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Content layer */}
          <div className="relative z-10 w-full h-full flex flex-col text-white p-3 sm:p-6 md:p-8 lg:p-10">
            {/* Top spacer */}
            <div className="h-4 sm:h-6" />

            {/* Eyebrow */}
            <div className="flex justify-start">
              <span className="celsius-eyebrow-pill celsius-eyebrow-pill-amber-light">
                <span className="w-1 h-1 rounded-full bg-current" />
                Since 2019 · Sri Lanka
              </span>
            </div>

            {/* Giant title — sentence case, asymmetric */}
            <h1 className="mt-4 sm:mt-6 font-medium leading-[0.92] tracking-[-0.025em] celsius-sentence"
                style={{ fontSize: "clamp(2.25rem, 11vw, 8.5rem)" }}>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <span className="block">Precision cooling,</span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] via-[var(--accent-amber-soft)] to-[var(--brand-light)]">
                  engineered.
                </span>
              </span>
            </h1>

            {/* Subline — short, direct */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-md leading-relaxed">
              Premium AC supply, install &amp; service — domestic, commercial, industrial.
            </p>

            {/* Bottom row — CTAs + stat card */}
            <div className="mt-auto pt-6 sm:pt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="celsius-island-btn celsius-shadow-amber" style={{ background: "var(--accent-amber)", color: "var(--brand-deep)" }}>
                  <span>Book demo</span>
                  <span className="celsius-island-icon" style={{ background: "rgba(15,47,99,0.15)" }}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="#services" className="celsius-island-btn celsius-island-btn-light"
                   style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(20px)" }}>
                  <span>Services</span>
                  <span className="celsius-island-icon" style={{ background: "rgba(255,255,255,0.10)" }}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Double-bezel stat card */}
              <div className="celsius-bezel-dark" style={{ "--bezel-radius": "1.25rem" } as React.CSSProperties}>
                <div className="celsius-bezel-dark-inner p-3 sm:p-5 flex items-center gap-4 sm:gap-7">
                  {/* Stat 1 */}
                  <div className="flex flex-col">
                    <span className="celsius-numeric font-medium leading-none" style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)" }}>
                      9
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/60 mt-1.5">Brands</span>
                  </div>
                  {/* Divider */}
                  <div className="w-px h-10 sm:h-12 bg-white/15" />
                  {/* Stat 2 */}
                  <div className="flex flex-col">
                    <span className="celsius-numeric font-medium leading-none text-[var(--accent-amber)]" style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)" }}>
                      40+
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/60 mt-1.5">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating ambient chip — wind (desktop only) */}
          <div className="absolute top-[28%] right-4 md:right-8 z-10 hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15">
            <Wind className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium">
              Engineered airflow
            </span>
          </div>

          {/* Floating ambient chip — snowflake */}
          <div className="absolute top-[42%] right-4 md:right-8 z-10 hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15">
            <Snowflake className="w-4 h-4 text-[var(--accent-amber)]" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/50">Optimal</span>
              <span className="text-xs font-medium text-white celsius-numeric">18° – 24°C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
