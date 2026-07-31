"use client";

import { motion } from "motion/react";
import { Snowflake, Leaf, ShieldCheck, Users } from "lucide-react";

const pillars = [
  { icon: Snowflake, title: "Industry expertise", body: "HVAC precision across domestic, commercial, and industrial installs." },
  { icon: ShieldCheck, title: "Quality commitment", body: "Branded units from Midea, Daikin, Panasonic, Mitsubishi, LG and more." },
  { icon: Leaf, title: "Environmental responsibility", body: "Energy-efficient systems that lower cost and reduce footprint." },
  { icon: Users, title: "Client-centric approach", body: "Cooling solutions tailored to your space and needs." },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-transparent overflow-hidden celsius-section"
    >
      {/* Decorative ambient orbs */}
      <div
        className="celsius-orb w-[28rem] h-[28rem] -top-20 -left-32"
        style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.18), transparent 70%)" }}
      />
      <div
        className="celsius-orb w-[24rem] h-[24rem] top-1/2 -right-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.15), transparent 70%)" }}
      />

      <div className="relative celsius-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading + intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="celsius-eyebrow-pill">About Celsius</span>
            <h2 className="celsius-h2 celsius-sentence text-[rgba(15,47,99,0.95)]">
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Where cooling
                </motion.span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-amber-deep)]">craft.</span>
                </motion.span>
              </span>
            </h2>

            <div className="flex flex-col gap-4 max-w-xl">
              <p className="celsius-lede">
                Celsius has engineered comfort across Sri Lanka since 2019 — pairing premium brands with seasoned expertise.
              </p>
            </div>
          </div>

          {/* Right: stat card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative celsius-glass rounded-[1.5rem] p-6 md:p-8 flex flex-col gap-5 overflow-hidden">
              {/* Subtle amber glow top-right */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.18), transparent 70%)" }}
              />
              <div className="flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center">
                  <Snowflake className="w-5 h-5 text-[var(--accent-amber-deep)]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[rgba(15,47,99,0.6)]">
                  At a glance
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 relative">
                <Stat number="2019" label="Established" />
                <Stat number="40+" label="Business clients" />
                <Stat number="9" label="Premium brands" />
                <Stat number="3" label="Sectors served" />
              </div>
              <div className="celsius-hairline-gradient relative" />
              <p className="text-[12px] md:text-sm text-[rgba(15,47,99,0.7)] leading-relaxed italic relative">
                "If your facility's temperature and air quality aren't perfect, we pledge to modify it."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14 md:mt-20 relative">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="celsius-lift group relative rounded-[1.3rem] bg-white/70 backdrop-blur-md border border-white/80 p-5 md:p-6 flex flex-col gap-3 celsius-shadow-soft hover:celsius-shadow-md overflow-hidden"
            >
              {/* Hover amber glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 70% 30%, rgba(245, 166, 35, 0.10), transparent 70%)" }}
              />
              <div className="w-10 h-10 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/25 flex items-center justify-center transition-colors group-hover:bg-[var(--accent-amber)] group-hover:border-[var(--accent-amber)] relative">
                <p.icon className="w-5 h-5 text-[var(--accent-amber-deep)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-[rgba(15,47,99,0.95)] tracking-tight relative">
                {p.title}
              </h3>
              <p className="text-[13px] md:text-sm text-[rgba(15,47,99,0.6)] leading-relaxed relative">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="celsius-numeric text-3xl md:text-4xl font-medium tracking-tight text-[rgba(15,47,99,0.95)] leading-none">
        {number}
      </span>
      <span className="text-[10px] md:text-xs text-[rgba(15,47,99,0.55)] uppercase tracking-wider mt-2">
        {label}
      </span>
    </div>
  );
}
