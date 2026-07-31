"use client";

import Link from "next/link";

export default function V2Footer() {
  return (
    <footer className="relative w-full bg-black text-white v2-font-sans pt-12 sm:pt-16 pb-6 px-5 sm:px-6 md:px-10 overflow-hidden">
      <div className="celsius-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="v2-font-serif italic text-4xl font-medium mb-3 celsius-sentence">Celsius</div>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed celsius-sentence">
              Cooling Sri Lanka since 2019. Domestic, commercial &amp; industrial HVAC.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] mb-4 celsius-sentence">Explore</div>
            <ul className="flex flex-col gap-2.5 text-sm celsius-sentence">
              <li><a href="#services" className="text-white/65 hover:text-white transition-colors">Services</a></li>
              <li><a href="#solutions" className="text-white/65 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#products" className="text-white/65 hover:text-white transition-colors">Brands</a></li>
              <li><a href="#about" className="text-white/65 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] mb-4 celsius-sentence">Contact</div>
            <ul className="flex flex-col gap-2.5 text-sm celsius-sentence">
              <li><a href="tel:+94777136560" className="text-white/65 hover:text-white transition-colors celsius-numeric">+94 777 136 560</a></li>
              <li><a href="mailto:ijazniyaz1234@gmail.com" className="text-white/65 hover:text-white transition-colors break-all">ijazniyaz1234@gmail.com</a></li>
              <li className="text-white/65">No. 47/3 Srimaha Vihara Road, Kalubowila, Dehiwala</li>
              <li className="text-white/65">Mon – Sat · 8:30am – 6:30pm</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 celsius-sentence">
          <div>© {new Date().getFullYear()} Celsius — Aircon Celsius Pvt (Ltd). All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">View V1</Link>
            <span className="text-white/20">·</span>
            <Link href="/v2" className="hover:text-white transition-colors">View V2</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
