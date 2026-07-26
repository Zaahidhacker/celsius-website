"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Celsius delivered exceptional comfort, professionalism, and expertise. Highly recommend for installations.",
    name: "Eyepax IT Consulting",
    role: "Commercial Client · Colpetty",
  },
  {
    quote:
      "Celsius created a haven with precise cooling, using top-notch units that enhanced comfort and exceeded expectations.",
    name: "Emperor Residencies",
    role: "Residential Client · Colombo 3",
  },
  {
    quote:
      "Timely resolution ensures prolonged A/C functionality — our systems were restored to optimal cooling efficiency the same day.",
    name: "Service Client",
    role: "Field Service · Gas Leak Repair",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#f4f4f4]"
    >
      <div className="max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <span className="celsius-eyebrow">What clients say</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] text-[#0a0a0a]">
            <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
              <motion.span
                initial={{ y: "115%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Loved by
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
                the boardroom.
              </motion.span>
            </span>
          </h2>
        </div>

        {/* 3-up grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="celsius-lift rounded-[1.5rem] bg-white border border-[#e6e8ec] p-5 md:p-7 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <Quote className="w-7 h-7 text-[#5790e6]" />
                <blockquote className="text-base md:text-lg text-[#0a0a0a] leading-relaxed">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="border-t border-[#e6e8ec] pt-4 mt-5 flex flex-col">
                <span className="text-sm font-medium text-[#0a0a0a]">{t.name}</span>
                <span className="text-[12px] text-[#717784]">{t.role}</span>
              </figcaption>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
