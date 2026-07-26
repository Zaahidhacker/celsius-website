"use client";

import { motion } from "motion/react";
import { Quote, MapPin, Maximize, Wind, ArrowUpRight, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

type CaseStudy = {
  id: string;
  index: string;
  category: "Commercial" | "Residential" | "Service";
  title: string;
  location: string;
  area: string;
  scope: string;
  units: string[];
  body: string;
  testimonial: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "eyepax",
    index: "01",
    category: "Commercial",
    title: "Eyepax IT Consulting (Pvt) Ltd",
    location: "Colpetty, Colombo",
    area: "2,100 sq ft",
    scope: "Commercial Space Transformation",
    units: ["3 × 48,000 BTU Cassette Type"],
    body:
      "Celsius undertook a transformative project at Eyepax IT Consulting (Pvt) Ltd. The project involved the installation of three 48,000 BTU cassette type air conditioning units, covering a substantial area of 2,100 square feet. The objective was to optimise the indoor climate for enhanced comfort and productivity in the commercial space.",
    testimonial:
      "Celsius delivered exceptional comfort, professionalism, and expertise. Highly recommend for installations.",
  },
  {
    id: "emperor",
    index: "02",
    category: "Residential",
    title: "Emperor Residencies Apartment",
    location: "Colombo 3",
    area: "600 sq ft",
    scope: "Residential Comfort Enhancement",
    units: [
      "1 × 24,000 BTU (Living Room)",
      "2 × 12,000 BTU (Bedrooms)",
    ],
    body:
      "Celsius successfully addressed the climate control needs of a 600 square feet apartment at Emperor Residencies, Colombo 3. The tailored solution included the installation of a powerful 24,000 BTU unit for the living room, and two 12,000 BTU units for the master and queen bedrooms. The project featured the incorporation of high-quality branded units, ensuring efficient and reliable performance in each living space.",
    testimonial:
      "Celsius created a haven with precise cooling, using top-notch units that enhanced comfort and exceeded expectations.",
  },
  {
    id: "gas-leak",
    index: "03",
    category: "Service",
    title: "A/C Breakdown — Gas Leak Repair",
    location: "Field Service Call",
    area: "On-site",
    scope: "Troubleshooting A/C Breakdown",
    units: ["Gas leak identification & repair", "Vacuuming & gas refill"],
    body:
      "A gas leak was impacting A/C performance. Celsius technicians identified the source, fixed the leak, vacuumed the system, and performed a full gas refill. The outcome restored optimal cooling efficiency. Timely resolution ensures prolonged A/C functionality and protects the long-term reliability of the unit.",
    testimonial:
      "Timely resolution ensures prolonged A/C functionality — restored to optimal cooling efficiency.",
  },
];

const featuredProjects = [
  { name: "Prime Land", city: "Colombo" },
  { name: "Jagro", city: "Sri Lanka" },
  { name: "Resident at Colombo 7", city: "Colombo 7" },
  { name: "Nalanda Apartment", city: "Colombo" },
  { name: "Havelock Dental Center", city: "Since 1970" },
  { name: "Finest Motor Trading", city: "Colombo" },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="Case Studies & Testimonials"
          title="Proven track record, project by project."
          subtitle="From corporate offices to residential apartments and emergency service calls — see how Celsius delivers precision cooling, every time."
        />

        <div className="flex flex-col gap-6 md:gap-8">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative rounded-[1.8rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-8 lg:p-10 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[rgba(30,50,90,0.04)] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 relative">
                {/* Left: meta */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] text-[10px] font-normal uppercase tracking-wider text-[rgba(30,50,90,0.7)]">
                      {cs.category}
                    </span>
                    <span className="text-[11px] font-normal text-[rgba(30,50,90,0.4)]">
                      Case {cs.index}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] leading-tight">
                    {cs.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[12px] md:text-sm text-[rgba(30,50,90,0.65)] font-normal">
                      <MapPin className="w-3.5 h-3.5 text-[rgba(30,50,90,0.5)]" />
                      {cs.location}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] md:text-sm text-[rgba(30,50,90,0.65)] font-normal">
                      <Maximize className="w-3.5 h-3.5 text-[rgba(30,50,90,0.5)]" />
                      {cs.area}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] md:text-sm text-[rgba(30,50,90,0.65)] font-normal">
                      <Wrench className="w-3.5 h-3.5 text-[rgba(30,50,90,0.5)]" />
                      {cs.scope}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                      Units Installed / Work Done
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.units.map((u) => (
                        <span
                          key={u}
                          className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/60 border border-[rgba(30,50,90,0.1)] text-[11px] md:text-xs font-normal text-[rgba(30,50,90,0.85)]"
                        >
                          <Wind className="w-3 h-3 mr-1 text-[rgba(30,50,90,0.5)]" />
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: body */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                    Project Overview
                  </span>
                  <p className="text-sm md:text-base text-[rgba(30,50,90,0.78)] leading-relaxed font-normal">
                    {cs.body}
                  </p>
                </div>

                {/* Right: testimonial */}
                <div className="lg:col-span-3">
                  <div className="rounded-[1.4rem] bg-[rgba(30,50,90,0.04)] border border-[rgba(30,50,90,0.08)] p-5 flex flex-col gap-3 h-full">
                    <Quote className="w-5 h-5 text-[rgba(30,50,90,0.4)]" />
                    <p className="text-[12px] md:text-sm text-[rgba(30,50,90,0.8)] leading-relaxed font-normal italic">
                      "{cs.testimonial}"
                    </p>
                    <div className="mt-auto pt-2 text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                      Client Testimonial
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Featured project strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[1.6rem] bg-white/40 backdrop-blur-md border border-white/60 p-5 md:p-6"
        >
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <h3 className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
              Featured Project Locations
            </h3>
            <span className="text-[11px] text-[rgba(30,50,90,0.5)] uppercase tracking-wider">
              Portfolio Highlights
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredProjects.map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl bg-white/60 border border-[rgba(30,50,90,0.08)] p-4 flex flex-col gap-1 hover:bg-white/90 transition-colors"
              >
                <span className="text-[12px] md:text-sm font-normal text-[rgba(30,50,90,0.9)]">
                  {p.name}
                </span>
                <span className="text-[10px] md:text-[11px] text-[rgba(30,50,90,0.5)] uppercase tracking-wider">
                  {p.city}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[rgba(30,50,90,0.8)] text-white px-5 py-2.5 hover:bg-[rgba(30,50,90,1)] transition-colors"
          >
            <span className="text-sm font-normal">Start your project with Celsius</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
