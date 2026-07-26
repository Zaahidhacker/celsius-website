"use client";

import { motion } from "motion/react";
import { Quote, GraduationCap, Building2, Wrench, Globe2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    role: "AC Technician",
    org: "Power Cool Pvt (Ltd)",
    location: "Colombo, Sri Lanka",
    body:
      "Laid out and connected electrical wiring, installed auxiliary components, and addressed system deficiencies.",
    icon: Wrench,
  },
  {
    role: "AC Mechanic",
    org: "Al Fiffi Engineering & Trading Co.",
    location: "Doha, Qatar",
    body:
      "Ensured compliance with safety standards, tested electrical circuits, and identified malfunctions in heating-cooling systems.",
    icon: Globe2,
  },
  {
    role: "Founder & Director",
    org: "Aircon Celsius Pvt (Ltd)",
    location: "Colombo, Sri Lanka",
    body:
      "Oversees the supply, installation, service, and maintenance of air conditioning and electrical systems for domestic, commercial, and industrial use.",
    icon: Building2,
  },
  {
    role: "Director",
    org: "Lintrex Trading (Pvt) Ltd",
    location: "International markets",
    body:
      "Manages the import and export of hardware, electrical, electronic, and air conditioning products to various international markets.",
    icon: Globe2,
  },
];

export default function CeoSection() {
  return (
    <section
      id="ceo"
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="CEO Profile"
          title="A leader forged in HVAC craftsmanship."
          subtitle="Meet Mohamed Ijaz Niyas — founder, CEO, and driving force behind Celsius. A dedicated and organised professional with a strong foundation in HVAC services."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-8 flex flex-col gap-5 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[rgba(30,50,90,0.05)] pointer-events-none" />

              {/* Portrait silhouette */}
              <div className="relative w-full aspect-square rounded-[1.4rem] bg-gradient-to-br from-[rgba(30,50,90,0.08)] to-[rgba(30,50,90,0.02)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 200 200"
                  className="w-2/3 h-2/3 text-[rgba(30,50,90,0.4)]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="70" r="35" />
                  <path d="M40 180 C 40 130, 70 110, 100 110 S 160 130, 160 180 Z" />
                </svg>
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 px-3 py-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-normal text-[rgba(30,50,90,0.95)]">
                      Mohamed Ijaz Niyas
                    </span>
                    <span className="text-[11px] text-[rgba(30,50,90,0.6)]">
                      Founder &amp; CEO, Celsius
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                    <Quote className="w-3.5 h-3.5 text-[rgba(30,50,90,0.7)]" />
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="flex flex-col gap-2 relative">
                <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Professional Qualifications
                </span>
                <p className="text-[12px] md:text-sm text-[rgba(30,50,90,0.75)] font-normal leading-relaxed">
                  Ceylon German Technical Training Institute — HVAC services,
                  electrical wiring, three-phase motor control maintenance,
                  refrigeration &amp; air conditioning mechanics, gas and arc
                  welding technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio + Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="rounded-[1.8rem] bg-white/40 backdrop-blur-md border border-white/60 p-6 md:p-8 flex flex-col gap-4">
              <Quote className="w-6 h-6 text-[rgba(30,50,90,0.4)]" />
              <p className="text-base md:text-lg text-[rgba(30,50,90,0.85)] leading-relaxed font-normal italic">
                "Welcome to Celsius, where your comfort is our commitment. As
                the CEO, I am honored to lead a team dedicated to transforming
                your spaces into havens of unparalleled cooling and efficiency.
                We don't just prioritise client satisfaction — we breathe life
                into this commitment."
              </p>
              <p className="text-[12px] md:text-sm text-[rgba(30,50,90,0.6)] font-normal">
                — Mohamed Ijaz Niyas, Founder &amp; CEO
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
                Professional Journey
              </h3>
              <ol className="flex flex-col gap-4">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.role + t.org}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    className="relative pl-12 pb-4 border-l border-[rgba(30,50,90,0.12)] last:border-l-transparent last:pb-0"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-white border border-[rgba(30,50,90,0.12)] flex items-center justify-center">
                      <t.icon className="w-4 h-4 text-[rgba(30,50,90,0.7)]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.95)]">
                          {t.role}
                        </span>
                        <span className="text-[11px] md:text-xs text-[rgba(30,50,90,0.55)]">
                          · {t.org} · {t.location}
                        </span>
                      </div>
                      <p className="text-[12px] md:text-sm text-[rgba(30,50,90,0.65)] font-normal leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
