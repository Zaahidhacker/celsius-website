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
      className="relative w-full bg-transparent overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="celsius-orb w-[28rem] h-[28rem] top-20 -right-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.10), transparent 70%)" }}
      />

      <div className="relative max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <span className="celsius-chip">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            What clients say
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
                Loved by
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
              className="group celsius-lift relative rounded-[1.5rem] celsius-glass p-5 md:p-7 flex flex-col justify-between h-full overflow-hidden"
            >
              {/* Hover amber glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 80% 20%, rgba(245, 166, 35, 0.10), transparent 70%)" }}
              />
              <div className="flex flex-col gap-3 relative">
                <Quote className="w-7 h-7 text-[var(--accent-amber)]" />
                <blockquote className="text-base md:text-lg text-[rgba(15,47,99,0.85)] leading-relaxed">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="border-t border-[rgba(15,47,99,0.1)] pt-4 mt-5 flex flex-col relative">
                <span className="text-sm font-medium text-[rgba(15,47,99,0.95)]">{t.name}</span>
                <span className="text-[12px] text-[rgba(15,47,99,0.55)]">{t.role}</span>
              </figcaption>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
