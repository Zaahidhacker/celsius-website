"use client";

import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const brands = [
  { name: "Midea", tag: "Energy efficient", body: "Split and ducted units with precise temperature control." },
  { name: "Daikin", tag: "Quiet comfort", body: "Split and multi-split systems built for quiet operation." },
  { name: "Panasonic", tag: "nanoe™ X", body: "Air-purifying technology with smart connectivity." },
  { name: "Haier", tag: "Smart convenience", body: "User-friendly units focused on energy savings." },
  { name: "Mitsubishi", tag: "Hyper-heating", body: "INVERTER® technology with advanced climate control." },
  { name: "Samsung", tag: "Smart filtration", body: "Ducted units with smart features and filtration." },
  { name: "TCL", tag: "Simple & portable", body: "Split and portable units for effective cooling." },
  { name: "Chigo", tag: "Turbo & self-clean", body: "Split and window units with turbo mode and self-cleaning." },
  { name: "LG", tag: "Dual inverter", body: "Dual inverter compressors with Wi-Fi control and air purification." },
];

export default function ProductRangeSection() {
  return (
    <section
      id="products"
      className="relative w-full celsius-section bg-transparent overflow-hidden"
    >
      {/* Decorative ambient orbs */}
      <div
        className="celsius-orb w-[30rem] h-[30rem] -top-32 right-1/4"
        style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.12), transparent 70%)" }}
      />
      <div
        className="celsius-orb w-[26rem] h-[26rem] bottom-20 -left-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.12), transparent 70%)" }}
      />

      <div className="relative celsius-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Product range"
          title="Nine brands, curated for every space."
          subtitle="Premium AC brands for industrial, commercial, and domestic settings."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group relative rounded-[1.4rem] bg-white/60 backdrop-blur-xl border border-white/70 p-6 md:p-7 flex flex-col gap-3 hover:bg-white/85 hover:-translate-y-1 transition-all celsius-shadow-soft hover:celsius-shadow-md overflow-hidden"
            >
              {/* Hover amber glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 80% 20%, rgba(245, 166, 35, 0.10), transparent 70%)" }}
              />
              <div className="flex items-start justify-between gap-3 relative">
                <span className="text-xl md:text-2xl font-medium tracking-tight text-[rgba(15,47,99,0.95)]">
                  {b.name}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/25 text-[10px] md:text-[11px] font-medium text-[var(--accent-amber-deep)] uppercase tracking-wider">
                  {b.tag}
                </span>
              </div>
              <p className="text-[13px] md:text-sm text-[rgba(15,47,99,0.65)] leading-relaxed font-normal relative">
                {b.body}
              </p>
              <div className="mt-1 h-px w-full bg-gradient-to-r from-[rgba(245,166,35,0.4)] via-[rgba(15,47,99,0.1)] to-transparent relative" />
              <div className="flex items-center gap-1.5 text-[11px] md:text-xs text-[rgba(15,47,99,0.55)] uppercase tracking-wider relative">
                <span className="w-1 h-1 rounded-full bg-[var(--accent-amber)]" />
                Authorised supplier
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm md:text-base text-[rgba(15,47,99,0.6)] font-normal italic"
        >
          Curated air conditioning solutions for every requirement.
        </motion.p>
      </div>
    </section>
  );
}
