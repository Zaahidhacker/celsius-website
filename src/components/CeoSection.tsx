"use client";

import { motion } from "motion/react";
import { Quote, GraduationCap, Building2, Wrench, Globe2 } from "lucide-react";

const timeline = [
  { role: "AC Technician", org: "Power Cool Pvt (Ltd)", location: "Colombo, Sri Lanka", body: "Installed wiring, auxiliary components, and addressed system deficiencies.", icon: Wrench },
  { role: "AC Mechanic", org: "Al Fiffi Engineering & Trading Co.", location: "Doha, Qatar", body: "Tested electrical circuits and identified heating-cooling malfunctions.", icon: Globe2 },
  { role: "Founder & Director", org: "Aircon Celsius Pvt (Ltd)", location: "Colombo, Sri Lanka", body: "Oversees supply, installation, service, and maintenance of AC systems.", icon: Building2 },
  { role: "Director", org: "Lintrex Trading (Pvt) Ltd", location: "International markets", body: "Manages import and export of hardware and AC products.", icon: Globe2 },
];

export default function CeoSection() {
  return (
    <section
      id="ceo"
      className="relative w-full bg-transparent overflow-hidden celsius-section"
    >
      {/* Ambient orbs */}
      <div
        className="celsius-orb w-[28rem] h-[28rem] top-1/3 -right-40"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.12), transparent 70%)" }}
      />

      <div className="relative celsius-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[1.5rem] bg-[#0a1d3f] overflow-hidden celsius-shadow-lg">
              {/* Portrait area */}
              <div className="aspect-[3/4] relative bg-gradient-to-br from-[#0a1d3f] via-[#0f2f63] to-[#2563c9] flex items-end justify-center overflow-hidden">
                {/* Amber glow accent */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.25), transparent 70%)" }}
                />
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
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[rgba(10,29,63,0.65)] backdrop-blur-md border border-white/15 px-4 py-3 text-white">
                  <div className="text-sm md:text-base font-medium">
                    Mohamed Ijaz Niyas
                  </div>
                  <div className="text-[11px] text-[var(--accent-amber-soft)] mt-0.5">
                    Founder &amp; CEO · Celsius
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="p-5 md:p-6 bg-[#0a1d3f] text-white flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--accent-amber)]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Professional qualifications
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
              <span className="celsius-eyebrow-pill">CEO profile</span>
              <h2 className="celsius-h2 celsius-sentence text-[rgba(15,47,99,0.95)]">
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
                    in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-amber-deep)]">HVAC craft.</span>
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
              className="relative celsius-glass rounded-[1.5rem] p-5 md:p-7 flex flex-col gap-3 overflow-hidden"
            >
              <div
                className="absolute -top-12 -left-12 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.18), transparent 70%)" }}
              />
              <Quote className="w-7 h-7 text-[var(--accent-amber)] relative" />
              <p className="text-base md:text-lg text-[rgba(15,47,99,0.85)] leading-relaxed italic relative">
                "Welcome to Celsius, where your comfort is our commitment. As
                CEO, I lead a team dedicated to transforming spaces into havens
                of cooling and efficiency."
              </p>
              <p className="text-[12px] text-[rgba(15,47,99,0.6)] relative">— Mohamed Ijaz Niyas, Founder &amp; CEO</p>
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col gap-4">
              <h3 className="celsius-h3 celsius-sentence text-[rgba(15,47,99,0.95)]">
                Professional journey
              </h3>
              <ol className="flex flex-col gap-0">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.role + t.org}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08, duration: 0.55 }}
                    className="relative pl-12 pb-5 border-l border-[rgba(15,47,99,0.1)] last:border-l-transparent last:pb-0"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-white border border-[var(--accent-amber)]/30 flex items-center justify-center celsius-shadow-soft">
                      <t.icon className="w-4 h-4 text-[var(--accent-amber-deep)]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-sm md:text-base font-medium text-[rgba(15,47,99,0.95)]">
                          {t.role}
                        </span>
                        <span className="text-[11px] md:text-xs text-[rgba(15,47,99,0.55)]">
                          · {t.org} · {t.location}
                        </span>
                      </div>
                      <p className="text-[12px] md:text-sm text-[rgba(15,47,99,0.6)] leading-relaxed">
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
