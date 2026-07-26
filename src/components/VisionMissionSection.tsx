"use client";

import { motion } from "motion/react";
import { Eye, Target, BadgeDollarSign, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pledges = [
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    body:
      "Clear and transparent pricing structures, ensuring openness and honesty in all financial transactions.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Rates",
    body:
      "Fair pricing extends to offering competitive rates in the market, ensuring clients receive superior value for their investment.",
  },
  {
    icon: Sparkles,
    title: "No Hidden Costs",
    body:
      "A straightforward approach to pricing, eliminating hidden costs and surprises — full clarity on the financial aspects of every project.",
  },
  {
    icon: BadgeDollarSign,
    title: "High-Quality Installations",
    body:
      "We prioritise the installation of high-quality, branded air conditioning units, emphasising durability, efficiency, and long-term performance.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="Vision &amp; Mission"
          title="A transformative force in air conditioning."
          subtitle="Celsius aspires to stand at the forefront as the premier distributor and repairer of air conditioning systems — shaping the future of environmental comfort solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[1.8rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
          >
            <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-[rgba(30,50,90,0.05)] pointer-events-none" />
            <div className="flex items-center gap-3 relative">
              <div className="w-11 h-11 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                <Eye className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)]">
                Vision
              </h3>
            </div>
            <p className="text-sm md:text-base text-[rgba(30,50,90,0.78)] leading-relaxed font-normal relative">
              At Celsius, our vision transcends industry standards as we aspire
              to stand at the forefront as the premier distributor and repairer
              of air conditioning systems. We are committed to shaping the
              future of environmental comfort solutions through unparalleled
              expertise and innovation.
            </p>
            <div className="mt-auto pt-4 border-t border-[rgba(30,50,90,0.08)] text-[11px] md:text-xs text-[rgba(30,50,90,0.55)] font-normal italic relative">
              "Transforming spaces into havens of comfort and efficiency."
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-[1.8rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[rgba(30,50,90,0.05)] pointer-events-none" />
            <div className="flex items-center gap-3 relative">
              <div className="w-11 h-11 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                <Target className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)]">
                Mission
              </h3>
            </div>
            <p className="text-sm md:text-base text-[rgba(30,50,90,0.78)] leading-relaxed font-normal relative">
              Celsius's mission is rooted in a dedication to excellence. We
              endeavour to supply, install, and service high-quality air
              conditioning units meticulously crafted for industrial,
              commercial, and household applications. Our unwavering commitment
              extends to providing these exceptional solutions with fair and
              transparent pricing, ensuring accessibility without compromising
              on the superior standards that define our brand.
            </p>
            <div className="mt-auto pt-4 border-t border-[rgba(30,50,90,0.08)] text-[11px] md:text-xs text-[rgba(30,50,90,0.55)] font-normal italic relative">
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
              className="rounded-[1.3rem] bg-white/40 backdrop-blur-md border border-white/60 p-5 flex flex-col gap-3 hover:bg-white/70 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                <p.icon className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
              </div>
              <h4 className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
                {p.title}
              </h4>
              <p className="text-[12px] md:text-[13px] text-[rgba(30,50,90,0.65)] leading-relaxed font-normal">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
