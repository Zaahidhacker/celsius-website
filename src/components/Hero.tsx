"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Wind, Thermometer } from "lucide-react";

const titleLines = ["Precision", "Cooling,"];
const titleLine3 = "Engineered.";
const taglineLines = ["Show up,", "stay cool."];

export default function Hero() {
  return (
    <div
      id="top"
      className="relative w-full flex items-center justify-center p-2 sm:p-3"
    >
      <section className="relative w-full max-w-[1536px] h-[calc(100svh-1rem)] sm:h-[calc(100svh-1.5rem)] min-h-[36rem] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col items-center bg-[#0a1d3f]">
        {/* Video background (RIVR spec) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
          poster="https://images.unsplash.com/photo-1631545806609-29ea0c81e6e8?auto=format&fit=crop&w=1600&q=60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Navy gradient overlay with warm amber tint at edges (Baseline hero tone) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(10,29,63,0.78)] via-[rgba(15,47,99,0.45)] to-[rgba(10,29,63,0.92)] pointer-events-none" />

        {/* Warm amber side glow — adds visual heat to balance cool navy */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 85% 25%, rgba(245, 166, 35, 0.18), transparent 60%)," +
              "radial-gradient(ellipse 40% 30% at 10% 80%, rgba(87, 144, 230, 0.22), transparent 55%)",
          }}
        />

        {/* Subtle dot grid overlay for premium texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content layer */}
        <div className="relative z-10 w-full h-full flex flex-col text-white">
          {/* Spacer for fixed navbar */}
          <div className="h-24 md:h-28" />

          {/* Eyebrow + giant title */}
          <div className="px-5 md:px-10 flex flex-col gap-4 md:gap-6 mt-4 md:mt-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/85">
                Excellence in Cooling Since 2019
              </span>
            </motion.div>

            {/* Oversized title with stacked-line clip reveal */}
            <h1 className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[8rem] xl:text-[9rem] font-medium uppercase leading-[0.9] lg:leading-[0.88] tracking-[-0.02em]">
              {/* Line 1+2 stacked from titleLines */}
              <span className="block">
                {titleLines.map((line, i) => (
                  <span
                    key={line}
                    className="block overflow-hidden"
                    style={{ paddingBottom: "0.14em" }}
                  >
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 1 + i * 0.14,
                        duration: 1.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </span>
              {/* Line 3 with brand accent color */}
              <span
                className="block overflow-hidden"
                style={{ paddingBottom: "0.14em" }}
              >
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 1 + titleLines.length * 0.14,
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] via-[var(--accent-amber-soft)] to-[var(--brand-light)]"
                >
                  {titleLine3}
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Bottom row: tagline (left) + glass cards (right) */}
          <div className="mt-auto px-5 md:px-10 pb-6 md:pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8">
            {/* Tagline */}
            <div className="flex flex-col gap-1">
              {taglineLines.map((line, i) => (
                <span
                  key={line}
                  className="block overflow-hidden"
                  style={{ paddingBottom: "0.14em" }}
                >
                  <motion.span
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 1.35 + i * 0.11,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-2xl md:text-4xl font-medium uppercase leading-[0.95] tracking-tight text-white/85"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                className="text-[12px] md:text-sm text-white/60 font-normal mt-3 max-w-md leading-relaxed"
              >
                Supply, installation &amp; maintenance of premium air
                conditioning systems across Sri Lanka.
              </motion.p>
            </div>

            {/* Right cluster: stat card + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.78, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-stretch gap-3"
            >
              {/* Stat card */}
              <div className="relative rounded-[1.5rem] border border-white/15 bg-white/10 backdrop-blur-xl p-4 md:p-5 flex flex-col gap-1 min-w-[140px] overflow-hidden">
                {/* Subtle amber glow on top-right */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(245, 166, 35, 0.25), transparent 70%)",
                  }}
                />
                <span className="text-3xl md:text-4xl font-medium tracking-tight leading-none relative">
                  40+
                </span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/70 mt-1 relative">
                  Business Clients
                </span>
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center gap-2 relative">
                  <div className="flex -space-x-2">
                    {["#5790e6", "#f5a623", "#0b6e97", "#ffffff"].map((c) => (
                      <span
                        key={c}
                        className="w-5 h-5 rounded-full border border-[rgba(10,29,63,0.4)]"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/60">Trusted</span>
                </div>
              </div>

              {/* CTA card with faux cutout */}
              <a
                href="#contact"
                className="group relative rounded-[1.5rem] border border-[var(--accent-amber)]/30 bg-[var(--accent-amber)]/15 backdrop-blur-xl p-4 md:p-5 flex flex-col justify-between min-w-[160px] hover:bg-[var(--accent-amber)]/25 hover:border-[var(--accent-amber)]/50 transition-all overflow-hidden"
              >
                {/* Animated amber glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, rgba(245, 166, 35, 0.30), transparent 70%)",
                  }}
                />
                <div className="w-10 h-10 rounded-full bg-[var(--accent-amber)]/25 border border-[var(--accent-amber)]/40 flex items-center justify-center relative">
                  <ArrowUpRight className="w-5 h-5 text-[var(--accent-amber)]" />
                </div>
                <div className="mt-4 flex flex-col relative">
                  <span className="text-sm md:text-base font-medium text-white">
                    Book a Demo
                  </span>
                  <span className="text-[10px] md:text-[11px] text-white/70 flex items-center gap-1 mt-1">
                    Talk to a specialist
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom-left floating ambient chip — wind icon (subtle, premium detail) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="absolute top-[28%] right-6 md:right-10 z-10 hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15"
        >
          <Wind className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium">
            Engineered Airflow
          </span>
        </motion.div>

        {/* Bottom-right floating stat — ambient temperature */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="absolute top-[42%] right-6 md:right-10 z-10 hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15"
        >
          <Thermometer className="w-4 h-4 text-[var(--accent-amber)]" />
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/50">
              Optimal Range
            </span>
            <span className="text-xs font-medium text-white">18° – 24°C</span>
          </div>
        </motion.div>
      </section>

      {/* Bottom marquee strip — sits below hero, full width */}
      <div className="absolute -bottom-3 left-0 right-0 z-20 hidden md:block pointer-events-none">
        {/* Spacer for visual breathing room */}
      </div>
    </div>
  );
}
