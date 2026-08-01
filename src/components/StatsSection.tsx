"use client";

import { motion } from "motion/react";

const stats = [
  { value: "2019", label: "Established" },
  { value: "40+", label: "Business clients" },
  { value: "9", label: "Premium brands" },
  { value: "3", label: "Sectors served" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-transparent celsius-section">
      <div className="celsius-container px-2 sm:px-3">
        <div className="relative rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] bg-[#0a1d3f] text-white py-10 sm:py-16 md:py-24 px-4 sm:px-5 md:px-10 overflow-hidden celsius-shadow-lg">
          {/* Amber glow accent */}
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.20), transparent 70%)" }}
          />
          {/* Blue glow accent */}
          <div
            className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.18), transparent 70%)" }}
          />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative flex flex-col gap-3 max-w-3xl mb-8 sm:mb-12 md:mb-16">
            <span className="celsius-eyebrow-pill celsius-eyebrow-pill-light w-fit">
              By the numbers
            </span>
            <h2 className="celsius-h2 celsius-sentence">
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  A team that
                </motion.span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-amber-soft)]"
                >
                  keeps score.
                </motion.span>
              </span>
            </h2>
          </div>

          <dl className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 md:gap-y-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.11, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/15 pt-4 sm:pt-5 group"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="flex flex-col">
                  <span className="celsius-numeric text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight leading-none group-hover:text-[var(--accent-amber)] transition-colors">
                    {s.value}
                  </span>
                  <span className="text-xs sm:text-sm text-white/65 mt-2 sm:mt-3">{s.label}</span>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
