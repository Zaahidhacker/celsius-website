"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import CelsiusLogo from "./CelsiusLogo";

const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Supply & installation", href: "#services" },
      { label: "Service & maintenance", href: "#services" },
      { label: "Gas leak repair", href: "#case-studies" },
      { label: "VRF systems", href: "#solutions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Domestic", href: "#solutions" },
      { label: "Commercial", href: "#solutions" },
      { label: "Industrial", href: "#solutions" },
      { label: "Brands", href: "#brands" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "CEO profile", href: "#ceo" },
      { label: "Case studies", href: "#case-studies" },
      { label: "Clients", href: "#clients" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0f2f63] text-white">
      <div className="celsius-container py-14 md:py-20">
        {/* CTA band */}
        <div className="pb-12 md:pb-14 border-b border-white/15 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="celsius-eyebrow-pill celsius-eyebrow-pill-light w-fit">Get started</span>
            <p className="celsius-h2 celsius-sentence">
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Ready to
                </motion.span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: "0.14em" }}>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  cool it?
                </motion.span>
              </span>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <a href="#contact" className="celsius-island-btn celsius-island-btn-light">
              <span>Book a demo</span>
              <span className="celsius-island-icon">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Columns grid */}
        <div className="py-12 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-4 max-w-md">
            <CelsiusLogo variant="light" size="lg" />
            <p className="text-sm text-white/65 leading-relaxed">
              A Colombo-based air conditioning company supplying, installing, and servicing high-quality HVAC systems since 2019.
            </p>
            <address className="not-italic mt-2 text-sm text-white/80 flex flex-col gap-1">
              <a href="mailto:ijazniyaz1234@gmail.com" className="hover:text-white">
                ijazniyaz1234@gmail.com
              </a>
              <a href="tel:+94777136560" className="celsius-numeric hover:text-white">
                +94 777 136 560
              </a>
              <span className="text-white/55 mt-1">
                No. 47/3 Srimaha Vihara Road, Kalubowila, Dehiwala
              </span>
            </address>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {footerNav.map((col) => (
              <nav key={col.title} className="flex flex-col gap-3">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-white/60">
          <span className="celsius-numeric">© {new Date().getFullYear()} Celsius — Aircon Celsius Pvt (Ltd). All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span>Colombo, Sri Lanka</span>
            <span className="text-white/30">·</span>
            <span className="italic">Where cooling meets craft.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
