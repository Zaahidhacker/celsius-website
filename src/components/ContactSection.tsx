"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: "+94 777 136 560",
    href: "tel:+94777136560",
    sub: "Mon – Sat, 8:30am – 6:30pm",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "ijazniyaz1234@gmail.com",
    href: "mailto:ijazniyaz1234@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "No. 47/3 Srimaha Vihara Road, Kalubowila, Dehiwala",
    href: "https://maps.google.com/?q=Kalubowila+Dehiwala+Sri+Lanka",
    sub: "Colombo, Sri Lanka",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-transparent overflow-hidden celsius-section"
    >
      {/* Ambient orbs */}
      <div
        className="celsius-orb w-[28rem] h-[28rem] top-1/4 -left-32"
        style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.12), transparent 70%)" }}
      />
      <div
        className="celsius-orb w-[24rem] h-[24rem] bottom-1/4 -right-32"
        style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.12), transparent 70%)" }}
      />

      <div className="relative celsius-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left: contact cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-col gap-4 mb-2">
              <span className="celsius-eyebrow-pill">Get in touch</span>
              <h2 className="celsius-h2 celsius-sentence text-[rgba(15,47,99,0.95)]">
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
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-amber-deep)]"
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
                className="group relative rounded-[1.5rem] bg-white/70 backdrop-blur-md border border-white/80 p-5 md:p-6 flex items-center gap-4 md:gap-5 hover:bg-[#0a1d3f] hover:border-[#0a1d3f] transition-colors celsius-shadow-soft hover:celsius-shadow-lg overflow-hidden"
              >
                {/* Hover amber underline */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, var(--accent-amber), transparent)" }}
                />
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-amber)] group-hover:border-[var(--accent-amber)] transition-colors">
                  <c.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-amber-deep)] group-hover:text-[var(--brand-deep)] transition-colors" />
                </div>
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[rgba(15,47,99,0.55)] group-hover:text-[var(--accent-amber-soft)] transition-colors">
                    {c.label}
                  </span>
                  <span className="text-sm md:text-base font-medium text-[rgba(15,47,99,0.95)] group-hover:text-white transition-colors break-words">
                    {c.value}
                  </span>
                  <span className="text-[11px] md:text-xs text-[rgba(15,47,99,0.55)] group-hover:text-white/70 transition-colors">
                    {c.sub}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[rgba(15,47,99,0.04)] border border-[rgba(15,47,99,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-amber)] group-hover:border-[var(--accent-amber)] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[rgba(15,47,99,0.8)] group-hover:text-[var(--brand-deep)] transition-colors" />
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
            className="lg:col-span-5 relative rounded-[1.5rem] bg-[#0a1d3f] text-white p-6 md:p-8 flex flex-col gap-5 overflow-hidden celsius-shadow-lg"
          >
            {/* Amber glow accent */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(245, 166, 35, 0.20), transparent 70%)" }}
            />
            {/* Blue glow accent */}
            <div
              className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(87, 144, 230, 0.18), transparent 70%)" }}
            />
            {/* Dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative flex flex-col gap-3">
              <span className="celsius-eyebrow-pill celsius-eyebrow-pill-amber-light w-fit">
                Personalised consultation
              </span>
              <h3 className="celsius-h3 celsius-sentence leading-tight">
                Connect with Celsius today.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Whether for home, business, or industrial facility — our team is ready. Reach out by phone, email, or visit us.
              </p>
            </div>

            <div className="relative mt-auto pt-5 border-t border-white/15 flex flex-col gap-3">
              <a
                href="tel:+94777136560"
                className="celsius-island-btn celsius-island-btn-light"
              >
                <span>Book a consultation</span>
                <span className="celsius-island-icon">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <p className="text-[11px] text-[var(--accent-amber-soft)] italic">
                Your comfort, our commitment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
