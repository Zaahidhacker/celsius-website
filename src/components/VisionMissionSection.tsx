"use client";

import { motion } from "motion/react";
import { Eye, Target, BadgeDollarSign, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pledges = [
  { icon: BadgeDollarSign, title: "Transparent Pricing", body: "Clear pricing structures. No surprises." },
  { icon: BadgeDollarSign, title: "Competitive Rates", body: "Fair market pricing, superior value." },
  { icon: Sparkles, title: "No Hidden Costs", body: "Straightforward quotes, full clarity." },
  { icon: BadgeDollarSign, title: "High-Quality Installs", body: "Branded units, durable and efficient." },
];

export default function VisionMissionSection() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-transparent overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="celsius-orb w-[32rem] h-[32rem] -top-32 -right-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.12), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="Vision &amp; Mission"
          title="A transformative force in air conditioning."
          subtitle="Celsius stands at the forefront as the premier distributor and repairer of AC systems in Sri Lanka."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative celsius-glass rounded-[1.8rem] p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
          >
            <div
              className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.15), transparent 70%)" }}
            />
            <div className="flex items-center gap-3 relative">
              <div className="w-11 h-11 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/25 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[var(--accent-amber-deep)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[rgba(15,47,99,0.95)]">
                Vision
              </h3>
            </div>
            <p className="text-sm md:text-base text-[rgba(15,47,99,0.78)] leading-relaxed font-normal relative">
              To be Sri Lanka's premier distributor and repairer of air conditioning systems — shaping the future of environmental comfort.
            </p>
            <div className="mt-auto pt-4 border-t border-[rgba(15,47,99,0.08)] text-[11px] md:text-xs text-[var(--accent-amber-deep)] font-medium italic relative">
              "Transforming spaces into havens of comfort and efficiency."
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative celsius-glass rounded-[1.8rem] p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
          >
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.18), transparent 70%)" }}
            />
            <div className="flex items-center gap-3 relative">
              <div className="w-11 h-11 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/25 flex items-center justify-center">
                <Target className="w-5 h-5 text-[var(--accent-amber-deep)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[rgba(15,47,99,0.95)]">
                Mission
              </h3>
            </div>
            <p className="text-sm md:text-base text-[rgba(15,47,99,0.78)] leading-relaxed font-normal relative">
              Supply, install, and service high-quality AC units for industrial, commercial, and household use — with fair, transparent pricing.
            </p>
            <div className="mt-auto pt-4 border-t border-[rgba(15,47,99,0.08)] text-[11px] md:text-xs text-[var(--accent-amber-deep)] font-medium italic relative">
              "Enduring relationships built on trust, reliability, and the
              pursuit of cooling solutions that stand the test of time."
            </div>
          </motion.div>
        </div>

        {/* Pledges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {pledges.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group rounded-[1.3rem] bg-white/60 backdrop-blur-md border border-white/70 p-5 flex flex-col gap-3 hover:bg-white/85 transition-colors celsius-shadow-soft hover:celsius-shadow-md overflow-hidden relative"
            >
              <div className="w-9 h-9 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/25 flex items-center justify-center transition-colors group-hover:bg-[var(--accent-amber)] group-hover:border-[var(--accent-amber)]">
                <p.icon className="w-4 h-4 text-[var(--accent-amber-deep)] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-sm md:text-base font-medium text-[rgba(15,47,99,0.95)] tracking-tight">
                {p.title}
              </h4>
              <p className="text-[12px] md:text-[13px] text-[rgba(15,47,99,0.65)] leading-relaxed font-normal">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
