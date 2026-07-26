"use client";

import { motion } from "motion/react";
import { Snowflake, Leaf, ShieldCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: Snowflake,
    title: "Industry Expertise",
    body:
      "Years of HVAC experience ensure project precision, efficiency, and reliable execution across domestic, commercial, and industrial installations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    body:
      "We prioritise high-quality, branded units from Midea, Daikin, Panasonic, Mitsubishi, LG and more — for durability, efficiency, and long-term performance.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    body:
      "We embrace sustainability with eco-friendly practices and energy-efficient systems that lower operational cost and reduce environmental impact.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    body:
      "Personalised cooling solutions tailored to diverse needs — every project reflects our dedication to your comfort, transparency, and trust.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f4f4f4]"
    >
      <div className="max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading + intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="celsius-eyebrow">About Celsius</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] text-[#0a0a0a]">
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
                  meets craft.
                </motion.span>
              </span>
            </h2>

            <div className="flex flex-col gap-4 max-w-xl">
              <p className="text-base md:text-lg text-[#0a0a0a]/85 leading-relaxed">
                Welcome to Celsius — a beacon of innovation and comfort since
                2019. We integrate cutting-edge technology with seasoned
                expertise to transform spaces across Sri Lanka.
              </p>
              <p className="text-sm md:text-base text-[#717784] leading-relaxed">
                More than a business, Celsius is a commitment to craftsmanship.
                Our team of seasoned professionals excel in refining system
                performance, minimising operational costs, and championing
                environmental consciousness. We deliver high-quality, branded
                air conditioning units for industrial, commercial, and domestic
                use — and we guarantee satisfaction. If your facility's
                temperature and air quality aren't perfect, we pledge to modify
                it.
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
            <div className="rounded-[1.5rem] bg-white border border-[#e6e8ec] p-6 md:p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0f2f63]/5 border border-[#0f2f63]/10 flex items-center justify-center">
                  <Snowflake className="w-5 h-5 text-[#0f2f63]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#717784]">
                  At a glance
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                <Stat number="2019" label="Established" />
                <Stat number="40+" label="Business Clients" />
                <Stat number="9" label="Premium Brands" />
                <Stat number="3" label="Sectors Served" />
              </div>
              <div className="h-px bg-[#e6e8ec]" />
              <p className="text-[12px] md:text-sm text-[#717784] leading-relaxed italic">
                "Celsius guarantees satisfaction — if your facility's
                temperature and air quality aren't perfect, we pledge to modify
                it."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14 md:mt-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="celsius-lift rounded-[1.3rem] bg-white border border-[#e6e8ec] p-5 md:p-6 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#0f2f63]/5 border border-[#0f2f63]/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-[#0f2f63]" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-[#0a0a0a] tracking-tight">
                {p.title}
              </h3>
              <p className="text-[13px] md:text-sm text-[#717784] leading-relaxed">
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
      <span className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0a0a] leading-none">
        {number}
      </span>
      <span className="text-[10px] md:text-xs text-[#717784] uppercase tracking-wider mt-2">
        {label}
      </span>
    </div>
  );
}
