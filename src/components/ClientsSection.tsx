"use client";

import { motion } from "motion/react";
import { Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

// 40+ clients from brochure page 17 — "places where Celsius has done business"
const clients: string[] = [
  "Emerald",
  "Base One Consultancy",
  "Softlogic",
  "Telesonic",
  "Unicky Global",
  "Jazima Holding Pvt Ltd",
  "N BRO — National Building Research Organisation",
  "Primland Holding",
  "Auto Mart",
  "Eco Logo Tech",
  "American Water",
  "Premium Motor",
  "Capital Money Exchange",
  "Marine One",
  "Madtown",
  "Havelock City Dental",
  "Nalanda Apartment",
  "Mahindra",
  "Nalanda College",
  "Isipathana College",
  "Laptop.lk",
  "Raretech Pvt Ltd",
  "Amana Bank",
  "Barcode",
  "Karunarathne Traders",
  "Aqua Power Pvt Ltd",
  "Java Lounge",
  "Sri Lanka State Trading (Gen) Corp. Ltd",
  "Oceanpick Private Limited",
  "Batik Roma",
  "Breadtalk",
  "Shazi Cafe",
  "Astoria",
  "Zam Zam Gems",
  "Bright Gems",
  "Abdeen Gem & Jewelry",
  "Catlitter.lk",
  "Almonds",
  "DIMO",
];

export default function ClientsSection() {
  // Duplicate list for seamless marquee loop
  const marqueeList = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeading
          eyebrow="Trusted By"
          title="Where Celsius has done business."
          subtitle="A snapshot of the 40+ organisations across Sri Lanka that trust Celsius for their cooling needs — from banks and hospitals to colleges, gems traders, and motor trading houses."
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            { n: "40+", l: "Business Clients" },
            { n: "9", l: "Premium Brands Supplied" },
            { n: "3", l: "Sectors Served" },
            { n: "2019", l: "Serving Since" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 p-4 md:p-5 flex flex-col"
            >
              <span className="text-2xl md:text-3xl font-normal tracking-tight text-[rgba(30,50,90,0.95)]">
                {s.n}
              </span>
              <span className="text-[10px] md:text-xs font-normal text-[rgba(30,50,90,0.55)] uppercase tracking-wider mt-1">
                {s.l}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/30 backdrop-blur-md py-5"
        >
          <div className="celsius-marquee-track flex gap-3 w-max">
            {marqueeList.map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="flex items-center gap-2 rounded-full bg-white/60 border border-[rgba(30,50,90,0.08)] px-4 py-2 flex-shrink-0"
              >
                <Building2 className="w-3.5 h-3.5 text-[rgba(30,50,90,0.5)] flex-shrink-0" />
                <span className="text-[12px] md:text-sm font-normal text-[rgba(30,50,90,0.85)] whitespace-nowrap">
                  {c}
                </span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f0f0f0] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f0f0f0] to-transparent pointer-events-none" />
        </motion.div>

        {/* Full grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.04 }}
              className="group rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 px-3 py-2.5 flex items-center gap-2 hover:bg-white/80 hover:border-[rgba(30,50,90,0.15)] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(30,50,90,0.4)] group-hover:bg-[rgba(30,50,90,0.8)] transition-colors flex-shrink-0" />
              <span className="text-[11px] md:text-xs font-normal text-[rgba(30,50,90,0.75)] group-hover:text-[rgba(30,50,90,0.95)] transition-colors leading-tight">
                {c}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
