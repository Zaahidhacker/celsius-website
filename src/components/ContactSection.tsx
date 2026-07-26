"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
      className="relative w-full py-20 md:py-28 px-6 md:px-10 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeading
          eyebrow="Contact"
          title="Your comfort, our commitment."
          subtitle="Ready to transform your environment into a haven of comfort and efficiency? Contact Celsius today for a personalised consultation — for your home, business, or industrial facility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
          {/* Left: contact cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {contactCards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "Visit Us" ? "_blank" : undefined}
                rel={c.label === "Visit Us" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative rounded-[1.5rem] bg-white/50 backdrop-blur-xl border border-white/60 p-5 md:p-6 flex items-center gap-4 md:gap-5 hover:bg-white/80 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 md:w-6 md:h-6 text-[rgba(30,50,90,0.8)]" />
                </div>
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                    {c.label}
                  </span>
                  <span className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.95)] break-words">
                    {c.value}
                  </span>
                  <span className="text-[11px] md:text-xs text-[rgba(30,50,90,0.55)] font-normal">
                    {c.sub}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/70 border border-[rgba(30,50,90,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(30,50,90,0.1)] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
              </motion.a>
            ))}

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex items-center gap-3 px-1 pt-2"
            >
              <span className="text-[11px] uppercase tracking-wider text-[rgba(30,50,90,0.5)]">
                Follow
              </span>
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Phone, label: "Phone" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#contact"
                  aria-label={`Celsius on ${s.label}`}
                  className="w-9 h-9 rounded-full bg-white/60 border border-[rgba(30,50,90,0.1)] flex items-center justify-center hover:bg-[rgba(30,50,90,0.08)] transition-colors"
                >
                  <s.icon className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </a>
              ))}
              <span className="text-[12px] md:text-sm font-normal text-[rgba(30,50,90,0.7)] ml-1">
                Celsius
              </span>
            </motion.div>
          </div>

          {/* Right: CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative rounded-[1.8rem] bg-[rgba(30,50,90,0.92)] border border-[rgba(30,50,90,0.2)] p-6 md:p-8 flex flex-col gap-5 overflow-hidden text-white"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative flex flex-col gap-2">
              <span className="inline-flex w-fit items-center px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] uppercase tracking-wider text-white/70">
                Personalised Consultation
              </span>
              <h3 className="text-2xl md:text-3xl font-normal tracking-tight leading-tight mt-2">
                Connect with Celsius today.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-normal">
                Whether you're seeking air conditioning solutions for your home,
                business, or industrial facility, our team is ready to exceed
                your expectations. Reach out via phone, email, or visit us to
                explore how Celsius can elevate your comfort experience.
              </p>
            </div>

            <div className="relative mt-auto pt-5 border-t border-white/15 flex flex-col gap-3">
              <a
                href="tel:+94777136560"
                className="group flex items-center justify-between gap-2 rounded-full bg-white text-[rgba(30,50,90,0.95)] pl-5 pr-2 py-2 hover:bg-white/90 transition-colors"
              >
                <span className="text-sm font-normal">Book a consultation</span>
                <span className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.08)] flex items-center justify-center group-hover:bg-[rgba(30,50,90,0.15)] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <p className="text-[11px] text-white/55 font-normal italic">
                Your Comfort, Our Commitment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
