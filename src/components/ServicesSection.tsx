"use client";

import { motion } from "motion/react";
import {
  Wrench,
  Settings,
  Truck,
  RefreshCw,
  PhoneCall,
  Gauge,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const serviceGroups = [
  {
    title: "Supply & Installation",
    icon: Truck,
    body:
      "Unmatched proficiency in delivering and installing cutting-edge air conditioning units tailored for industrial, commercial, and household use — backed by strategic partnerships with renowned global brands to ensure top-tier quality.",
    points: [
      "Branded units for domestic, commercial & industrial use",
      "Strategic partnerships with global manufacturers",
      "Precision placement and commissioning",
      "Customer-supplied unit installation supported",
    ],
  },
  {
    title: "Service & Maintenance",
    icon: Settings,
    body:
      "Proactive maintenance plans to enhance system lifespan and optimise operational efficiency — backed by responsive repair services from our skilled technicians to ensure minimal downtime.",
    points: [
      "Planned preventive maintenance contracts",
      "Responsive breakdown & repair services",
      "Gas top-up, leak detection & vacuuming",
      "Performance optimisation & energy audits",
    ],
  },
];

const quickServices = [
  { icon: RefreshCw, label: "Gas Leak Repair & Refill" },
  { icon: Gauge, label: "System Performance Tuning" },
  { icon: Wrench, label: "Cassette / Ducted / VRF Install" },
  { icon: PhoneCall, label: "On-Call Technician Dispatch" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="Services Offered"
          title="A spectrum of air conditioning expertise."
          subtitle="Our commitment to excellence extends across supply, installation, and maintenance — a comprehensive approach to cooling solutions for every sector."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {serviceGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-[1.8rem] bg-white/50 backdrop-blur-xl border border-white/60 p-6 md:p-8 flex flex-col gap-5 hover:bg-white/70 transition-colors overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[rgba(30,50,90,0.04)] pointer-events-none" />
              <div className="flex items-center gap-4 relative">
                <div className="w-12 h-12 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
                  {g.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[rgba(30,50,90,0.7)] leading-relaxed font-normal relative">
                {g.body}
              </p>
              <ul className="flex flex-col gap-2 relative">
                {g.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-[13px] md:text-sm text-[rgba(30,50,90,0.8)] font-normal"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[rgba(30,50,90,0.5)] flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick services strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {quickServices.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 px-4 py-3 md:px-5 md:py-4 hover:bg-white/70 transition-colors"
            >
              <s.icon className="w-4 h-4 md:w-5 md:h-5 text-[rgba(30,50,90,0.7)] flex-shrink-0" />
              <span className="text-[12px] md:text-sm font-normal text-[rgba(30,50,90,0.85)]">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
