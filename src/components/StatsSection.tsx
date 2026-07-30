"use client";

import { motion } from "motion/react";

const stats = [
  { value: "2019", label: "Established" },
  { value: "40+", label: "Business Clients" },
  { value: "9", label: "Premium Brands" },
  { value: "3", label: "Sectors Served" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#f0f0f0]">
      <div className="max-w-[1536px] mx-auto px-2 sm:px-3">
        <div className="rounded-[1.5rem] md:rounded-[2rem] bg-[#0f2f63] text-white py-16 md:py-24 px-5 md:px-10">
          <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
            <span className="celsius-eyebrow celsius-eyebrow-light">By the numbers</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95]">
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
                  className="block"
                >
                  keeps score.
                </motion.span>
              </span>
            </h2>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.11, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/20 pt-5"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="flex flex-col">
                  <span className="text-5xl md:text-7xl font-medium tracking-tight leading-none">
                    {s.value}
                  </span>
                  <span className="text-sm text-white/65 mt-3">{s.label}</span>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
