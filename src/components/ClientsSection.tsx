"use client";

import { motion } from "motion/react";
import { Building2 } from "lucide-react";

// 39 clients from brochure page 17 — places where Celsius has done business
const clients: string[] = [
  "Emerald",
  "Base One Consultancy",
  "Softlogic",
  "Telesonic",
  "Unicky Global",
  "Jazima Holding",
  "N BRO",
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
  "Raretech",
  "Amana Bank",
  "Barcode",
  "Karunarathne Traders",
  "Aqua Power",
  "Java Lounge",
  "Sri Lanka State Trading",
  "Oceanpick",
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
  const marqueeList = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="relative w-full bg-white celsius-section"
    >
      <div className="celsius-container">
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <span className="celsius-eyebrow-pill">Trusted by</span>
          <h2 className="celsius-h2 celsius-sentence text-[#0a0a0a]">
            <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
              <motion.span
                initial={{ y: "115%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Where Celsius
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
                does business.
              </motion.span>
            </span>
          </h2>
          <p className="celsius-lede text-[#717784]">
            39+ organisations across Sri Lanka trust Celsius.
          </p>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-[1.5rem] border border-[#e6e8ec] bg-[#f4f4f4] py-5"
        >
          <div className="celsius-marquee-track flex gap-3 w-max">
            {marqueeList.map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="flex items-center gap-2 rounded-full bg-white border border-[#e6e8ec] px-4 py-2 flex-shrink-0"
              >
                <Building2 className="w-3.5 h-3.5 text-[#0f2f63]/50 flex-shrink-0" />
                <span className="text-[12px] md:text-sm font-medium text-[#0a0a0a]/85 whitespace-nowrap">
                  {c}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f4f4f4] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f4f4f4] to-transparent pointer-events-none" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3 mt-8">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 5) * 0.04, duration: 0.4 }}
              className="group rounded-xl bg-[#f4f4f4] border border-[#e6e8ec] px-3 py-2.5 flex items-center gap-2 hover:bg-[#0f2f63] hover:border-[#0f2f63] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f2f63]/40 group-hover:bg-white transition-colors flex-shrink-0" />
              <span className="text-[11px] md:text-xs font-medium text-[#0a0a0a]/75 group-hover:text-white transition-colors leading-tight">
                {c}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
