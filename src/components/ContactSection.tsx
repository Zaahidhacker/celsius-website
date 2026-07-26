"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+94 777 136 560",
    href: "tel:+94777136560",
    sub: "Mon – Sat, 8:30am – 6:30pm",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "ijazniyaz1234@gmail.com",
    href: "mailto:ijazniyaz1234@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "No. 47/3 Srimaha Vihara Road, Kalubowila, Dehiwala",
    href: "https://maps.google.com/?q=Kalubowila+Dehiwala+Sri+Lanka",
    sub: "Colombo, Sri Lanka",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#f4f4f4]"
    >
      <div className="max-w-[1536px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left: contact cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-col gap-4 mb-2">
              <span className="celsius-eyebrow">Get in touch</span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] text-[#0a0a0a]">
                <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                  <motion.span
                    initial={{ y: "115%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Your comfort,
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
                    our commitment.
                  </motion.span>
                </span>
              </h2>
            </div>

            {contactCards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "Visit Us" ? "_blank" : undefined}
                rel={c.label === "Visit Us" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="group rounded-[1.5rem] bg-white border border-[#e6e8ec] p-5 md:p-6 flex items-center gap-4 md:gap-5 hover:bg-[#0f2f63] hover:border-[#0f2f63] transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0f2f63]/5 border border-[#0f2f63]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  <c.icon className="w-5 h-5 md:w-6 md:h-6 text-[#0f2f63] group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#717784] group-hover:text-white/60 transition-colors">
                    {c.label}
                  </span>
                  <span className="text-sm md:text-base font-medium text-[#0a0a0a] group-hover:text-white transition-colors break-words">
                    {c.value}
                  </span>
                  <span className="text-[11px] md:text-xs text-[#717784] group-hover:text-white/70 transition-colors">
                    {c.sub}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0f2f63]/5 border border-[#e6e8ec] flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 group-hover:border-white/20 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#0f2f63] group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right: dark CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-5 relative rounded-[1.5rem] bg-[#0f2f63] text-white p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative flex flex-col gap-3">
              <span className="celsius-eyebrow celsius-eyebrow-light">Personalised consultation</span>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                Connect with Celsius today.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Whether you're seeking air conditioning solutions for your home,
                business, or industrial facility, our team is ready to exceed
                your expectations. Reach out via phone, email, or visit us to
                explore how Celsius can elevate your comfort experience.
              </p>
            </div>

            <div className="relative mt-auto pt-5 border-t border-white/15 flex flex-col gap-3">
              <a
                href="tel:+94777136560"
                className="group flex items-center justify-between gap-2 rounded-full bg-white text-[#0f2f63] pl-5 pr-2 py-2 hover:bg-[#5790e6] hover:text-white transition-colors"
              >
                <span className="text-sm font-medium uppercase tracking-wide">
                  Book a consultation
                </span>
                <span className="w-8 h-8 rounded-full bg-[#0f2f63]/8 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <p className="text-[11px] text-white/55 italic">
                Your Comfort, Our Commitment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
