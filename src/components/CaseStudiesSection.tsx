"use client";

import { motion } from "motion/react";
import { Quote, MapPin, Maximize, Wind, Wrench, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "eyepax",
    index: "01",
    category: "Commercial",
    title: "Eyepax IT Consulting",
    location: "Colpetty, Colombo",
    area: "2,100 sq ft",
    scope: "Commercial transformation",
    units: ["3 × 48,000 BTU Cassette"],
    body:
      "Celsius undertook a transformative project at Eyepax IT Consulting (Pvt) Ltd. The project involved the installation of three 48,000 BTU cassette type air conditioning units, covering 2,100 square feet — optimising the indoor climate for enhanced comfort and productivity.",
    testimonial:
      "Celsius delivered exceptional comfort, professionalism, and expertise. Highly recommend for installations.",
  },
  {
    id: "emperor",
    index: "02",
    category: "Residential",
    title: "Emperor Residencies",
    location: "Colombo 3",
    area: "600 sq ft",
    scope: "Residential comfort enhancement",
    units: ["1 × 24,000 BTU (Living)", "2 × 12,000 BTU (Bedrooms)"],
    body:
      "Celsius addressed the climate control needs of a 600 square feet apartment at Emperor Residencies, Colombo 3. The tailored solution included a powerful 24,000 BTU unit for the living room, and two 12,000 BTU units for the master and queen bedrooms — high-quality branded units for efficient, reliable performance.",
    testimonial:
      "Celsius created a haven with precise cooling, using top-notch units that enhanced comfort and exceeded expectations.",
  },
  {
    id: "gas-leak",
    index: "03",
    category: "Service",
    title: "Gas Leak Breakdown",
    location: "Field service call",
    area: "On-site",
    scope: "Troubleshooting A/C breakdown",
    units: ["Leak identification", "Vacuuming & gas refill"],
    body:
      "A gas leak was impacting A/C performance. Celsius technicians identified the source, fixed the leak, vacuumed the system, and performed a full gas refill. The outcome restored optimal cooling efficiency — timely resolution ensures prolonged A/C functionality.",
    testimonial:
      "Timely resolution ensures prolonged A/C functionality — restored to optimal cooling efficiency.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative w-full bg-white/70 backdrop-blur-md overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="celsius-orb w-[30rem] h-[30rem] top-1/4 -left-32"
        style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.12), transparent 70%)" }}
      />
      <div
        className="celsius-orb w-[26rem] h-[26rem] bottom-1/4 -right-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.12), transparent 70%)" }}
      />

      <div className="relative max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <div className="flex flex-col gap-4">
            <span className="celsius-chip">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Case studies
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] text-[rgba(15,47,99,0.95)]">
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Proven track
                </motion.span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-amber-deep)]"
                >
                  record.
                </motion.span>
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[rgba(15,47,99,0.6)] leading-relaxed max-w-md">
            From corporate offices to residential apartments and emergency
            service calls — see how Celsius delivers precision cooling, every
            time.
          </p>
        </div>

        {/* Stacked cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="celsius-lift relative rounded-[1.5rem] bg-white/85 backdrop-blur-md border border-white/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 celsius-shadow-soft hover:celsius-shadow-lg"
            >
              {/* Left meta column */}
              <div className="relative lg:col-span-4 p-6 md:p-8 flex flex-col gap-4 bg-[#0a1d3f] text-white overflow-hidden">
                {/* Amber glow accent */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.25), transparent 70%)" }}
                />
                <div className="flex items-center justify-between relative">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent-amber-soft)]">
                    {cs.category}
                  </span>
                  <span className="text-[11px] font-mono text-white/40">Case {cs.index}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight relative">
                  {cs.title}
                </h3>
                <div className="flex flex-col gap-2 text-white/70 text-[12px] md:text-sm relative">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                    {cs.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                    {cs.area}
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                    {cs.scope}
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-white/15 relative">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-amber-soft)] mb-2">
                    Units / Work
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.units.map((u) => (
                      <span
                        key={u}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] text-white/85"
                      >
                        <Wind className="w-3 h-3 mr-1 text-[var(--accent-amber)]" />
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right body + testimonial */}
              <div className="lg:col-span-8 p-6 md:p-8 flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-amber-deep)]">
                    Project Overview
                  </span>
                  <p className="text-sm md:text-base text-[rgba(15,47,99,0.8)] leading-relaxed">
                    {cs.body}
                  </p>
                </div>
                <div className="mt-auto relative rounded-[1rem] bg-white/80 backdrop-blur-md border border-white/80 p-4 md:p-5 flex flex-col gap-2 overflow-hidden">
                  <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.15), transparent 70%)" }}
                  />
                  <Quote className="w-5 h-5 text-[var(--accent-amber)] relative" />
                  <p className="text-[12px] md:text-sm text-[rgba(15,47,99,0.85)] leading-relaxed italic relative">
                    "{cs.testimonial}"
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(15,47,99,0.55)] mt-1 relative">
                    Client Testimonial
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="#contact"
            className="celsius-pill celsius-pill-amber celsius-shadow-amber group"
          >
            <span>Start your project</span>
            <ArrowUpRight className="w-4 h-4 celsius-pill-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
