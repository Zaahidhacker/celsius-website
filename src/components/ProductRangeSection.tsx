"use client";

import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const brands = [
  {
    name: "Midea",
    tag: "Energy Efficient",
    body:
      "Energy-efficient split and ducted units, offering precise temperature control and improved air quality.",
  },
  {
    name: "Daikin",
    tag: "Quiet Comfort",
    body:
      "Diverse lineup of split and multi-split systems, prioritising comfort, energy efficiency, and quiet operation.",
  },
  {
    name: "Panasonic",
    tag: "nanoe™ X",
    body:
      "Split and multi-split units with nanoe™ X air purifying technology and smart connectivity options.",
  },
  {
    name: "Haier",
    tag: "Smart Convenience",
    body:
      "Wide range of split and ducted units focusing on user convenience, energy savings, and innovative technologies.",
  },
  {
    name: "Mitsubishi",
    tag: "Hyper-Heating INVERTER®",
    body:
      "Split and multi-split systems with Hyper-Heating INVERTER® technology and advanced climate control.",
  },
  {
    name: "Samsung",
    tag: "Smart Filtration",
    body:
      "Split and ducted units emphasising comfort, smart functionality, and enhanced air filtration.",
  },
  {
    name: "TCL",
    tag: "Simple & Portable",
    body:
      "Range of split and portable air conditioners designed for simplicity, convenience, and effective cooling.",
  },
  {
    name: "Chigo",
    tag: "Turbo & Self-Clean",
    body:
      "Product line includes split and window units with features like turbo mode and self-cleaning functions.",
  },
  {
    name: "LG",
    tag: "Dual Inverter",
    body:
      "Offers split, multi-split, and ducted units with dual inverter compressors, Wi-Fi control, and advanced air purification.",
  },
];

export default function ProductRangeSection() {
  return (
    <section
      id="products"
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="Product Range"
          title="A curated selection of cutting-edge cooling."
          subtitle="Explore the diverse air conditioning units curated by Celsius. Featuring renowned brands designed to meet the unique needs of industrial, commercial, and domestic settings."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group relative rounded-[1.4rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-7 flex flex-col gap-3 hover:bg-white/80 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xl md:text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)]">
                  {b.name}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] text-[10px] md:text-[11px] font-normal text-[rgba(30,50,90,0.7)] uppercase tracking-wider">
                  {b.tag}
                </span>
              </div>
              <p className="text-[13px] md:text-sm text-[rgba(30,50,90,0.65)] leading-relaxed font-normal">
                {b.body}
              </p>
              <div className="mt-1 h-px w-full bg-gradient-to-r from-[rgba(30,50,90,0.15)] via-[rgba(30,50,90,0.05)] to-transparent" />
              <div className="flex items-center gap-1.5 text-[11px] md:text-xs text-[rgba(30,50,90,0.5)] uppercase tracking-wider">
                <span className="w-1 h-1 rounded-full bg-[rgba(30,50,90,0.4)]" />
                Authorised Supplier
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm md:text-base text-[rgba(30,50,90,0.6)] font-normal italic"
        >
          Stay cool with our curated selection of cutting-edge air conditioning
          solutions.
        </motion.p>
      </div>
    </section>
  );
}
