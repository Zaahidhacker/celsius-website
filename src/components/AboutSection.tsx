"use client";

import { motion } from "motion/react";
import { Snowflake, Leaf, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="About Celsius"
          title="Where cooling meets craftsmanship."
          subtitle="Established in 2019, Celsius has evolved into a formidable force in air conditioning — integrating cutting-edge technology with seasoned expertise to transform spaces across Sri Lanka."
        />

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            <p className="text-base md:text-lg text-[rgba(30,50,90,0.85)] leading-relaxed font-normal">
              Welcome to Celsius — a beacon of innovation and comfort since 2019,
              redefining air conditioning with a commitment to efficiency,
              sustainability, and unparalleled comfort. As an industry
              cornerstone, Celsius integrates cutting-edge technology with
              seasoned expertise to transform spaces.
            </p>
            <p className="text-sm md:text-base text-[rgba(30,50,90,0.7)] leading-relaxed font-normal">
              More than a business, Celsius is a commitment to craftsmanship,
              boasting a team of seasoned professionals who excel in refining
              system performance, minimising operational costs, and championing
              environmental consciousness. We focus on delivering high-quality,
              branded air conditioning units for industrial, commercial, and
              domestic use — and we guarantee satisfaction. If your facility's
              temperature and air quality aren't perfect, we pledge to modify it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[1.8rem] bg-white/40 backdrop-blur-xl border border-white/60 p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(30,50,90,0.15)]">
              <div className="flex flex-col gap-5">
                <Stat number="2019" label="Established" />
                <div className="h-px bg-[rgba(30,50,90,0.1)]" />
                <Stat number="40+" label="Business Clients" />
                <div className="h-px bg-[rgba(30,50,90,0.1)]" />
                <Stat number="9" label="Premium Brands Supplied" />
                <div className="h-px bg-[rgba(30,50,90,0.1)]" />
                <Stat number="3" label="Sectors Served — Domestic, Commercial, Industrial" small />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-[1.4rem] bg-white/50 backdrop-blur-md border border-white/60 p-5 md:p-6 flex flex-col gap-3 hover:bg-white/70 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                <p.icon className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />
              </div>
              <h3 className="text-base md:text-lg font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
                {p.title}
              </h3>
              <p className="text-[13px] md:text-sm text-[rgba(30,50,90,0.65)] leading-relaxed font-normal">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, small }: { number: string; label: string; small?: boolean }) {
  return (
    <div className="flex flex-col">
      <span
        className={
          small
            ? "text-xl md:text-2xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight leading-tight"
            : "text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight leading-tight"
        }
      >
        {number}
      </span>
      <span className="text-[10px] md:text-xs font-normal text-[rgba(30,50,90,0.55)] uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
}
