"use client";

import { motion } from "motion/react";
import { Quote, GraduationCap, Building2, Wrench, Globe2 } from "lucide-react";

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
      "Oversees supply, installation, service, and maintenance of air conditioning and electrical systems for domestic, commercial, and industrial use.",
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
      className="relative w-full bg-[#f4f4f4]"
    >
      <div className="max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[1.5rem] bg-[#0f2f63] overflow-hidden">
              {/* Portrait area */}
              <div className="aspect-[3/4] relative bg-gradient-to-br from-[#0f2f63] to-[#2563c9] flex items-end justify-center overflow-hidden">
                {/* Decorative airflow pattern */}
                <svg
                  className="absolute inset-0 w-full h-full text-white/10"
                  viewBox="0 0 200 280"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <path d="M0 80 L 130 80 C 160 80, 180 65, 200 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M0 140 L 170 140 C 185 140, 195 140, 200 138" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M0 200 L 130 200 C 160 200, 180 215, 200 222" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>

                {/* Silhouette */}
                <svg
                  viewBox="0 0 200 280"
                  className="absolute bottom-0 w-3/4 h-3/4 text-white/20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="90" r="42" />
                  <path d="M30 280 C 30 200, 60 170, 100 170 S 170 200, 170 280 Z" />
                </svg>

                {/* Glass caption */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[rgba(15,47,99,0.5)] backdrop-blur-md border border-white/15 px-4 py-3 text-white">
                  <div className="text-sm md:text-base font-medium">
                    Mohamed Ijaz Niyas
                  </div>
                  <div className="text-[11px] text-white/70 mt-0.5">
                    Founder &amp; CEO · Celsius
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="p-5 md:p-6 bg-[#0f2f63] text-white flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/60">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Professional Qualifications
                </div>
                <p className="text-[12px] md:text-sm text-white/75 leading-relaxed">
                  Ceylon German Technical Training Institute — HVAC services,
                  electrical wiring, three-phase motor control, refrigeration
                  &amp; air conditioning mechanics, gas and arc welding.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio + Timeline column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="celsius-eyebrow">CEO Profile</span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] text-[#0a0a0a]">
                <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                  <motion.span
                    initial={{ y: "115%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    A leader forged
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
                    in HVAC craft.
                  </motion.span>
                </span>
              </h2>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="rounded-[1.5rem] bg-white border border-[#e6e8ec] p-5 md:p-7 flex flex-col gap-3"
            >
              <Quote className="w-6 h-6 text-[#5790e6]" />
              <p className="text-base md:text-lg text-[#0a0a0a]/85 leading-relaxed italic">
                "Welcome to Celsius, where your comfort is our commitment. As
                the CEO, I am honored to lead a team dedicated to transforming
                your spaces into havens of unparalleled cooling and efficiency.
                We don't just prioritise client satisfaction — we breathe life
                into this commitment."
              </p>
              <p className="text-[12px] text-[#717784]">— Mohamed Ijaz Niyas, Founder &amp; CEO</p>
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-medium text-[#0a0a0a] tracking-tight">
                Professional Journey
              </h3>
              <ol className="flex flex-col gap-0">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.role + t.org}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08, duration: 0.55 }}
                    className="relative pl-12 pb-5 border-l border-[#e6e8ec] last:border-l-transparent last:pb-0"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-white border border-[#e6e8ec] flex items-center justify-center">
                      <t.icon className="w-4 h-4 text-[#0f2f63]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-sm md:text-base font-medium text-[#0a0a0a]">
                          {t.role}
                        </span>
                        <span className="text-[11px] md:text-xs text-[#717784]">
                          · {t.org} · {t.location}
                        </span>
                      </div>
                      <p className="text-[12px] md:text-sm text-[#717784] leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
