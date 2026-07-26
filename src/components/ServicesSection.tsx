"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    idx: "01",
    name: "Supply & Installation",
    desc:
      "Delivering and installing cutting-edge air conditioning units for industrial, commercial, and household use — backed by strategic brand partnerships.",
    href: "#contact",
  },
  {
    idx: "02",
    name: "Service & Maintenance",
    desc:
      "Proactive maintenance plans and responsive repair services that enhance system lifespan and minimise operational downtime.",
    href: "#contact",
  },
  {
    idx: "03",
    name: "Gas Leak & Breakdown Repair",
    desc:
      "Skilled diagnostics for gas leaks, electrical faults, and refrigeration issues — vacuumed, refilled, and restored to peak performance.",
    href: "#case-studies",
  },
  {
    idx: "04",
    name: "VRF & Industrial Systems",
    desc:
      "Variable Refrigerant Flow installations for manufacturing, data centres, and processing plants demanding precise temperature control.",
    href: "#solutions",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#f4f4f4]"
    >
      <div className="max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="celsius-eyebrow">What we do</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] text-[#0a0a0a]">
            <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
              <motion.span
                initial={{ y: "115%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Built for
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
                every space.
              </motion.span>
            </span>
          </h2>
        </div>

        {/* Numbered programs list (Baseline) */}
        <ul className="mt-12 md:mt-16">
          {programs.map((p, i) => (
            <li key={p.idx} className="border-t border-[#e6e8ec] last:border-b">
              <motion.a
                href={p.href}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 md:gap-6 py-6 md:py-8 hover:bg-white transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-xl"
              >
                <span className="w-10 md:w-12 text-sm font-medium text-[#717784] flex-shrink-0">
                  {p.idx}
                </span>
                <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-6 gap-1 min-w-0">
                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-[#0a0a0a] flex-shrink-0">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#717784] leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                </div>
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#e6e8ec] flex items-center justify-center flex-shrink-0 group-hover:border-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
