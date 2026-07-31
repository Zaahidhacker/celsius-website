"use client";

import { Snowflake, ShieldCheck, Leaf, Users, ArrowUpRight } from "lucide-react";

const pillars = [
  { icon: Snowflake, title: "Industry Expertise", body: "Years of HVAC precision across domestic, commercial, and industrial installs." },
  { icon: ShieldCheck, title: "Quality Commitment", body: "Branded units from Midea, Daikin, Panasonic, Mitsubishi, LG and more." },
  { icon: Leaf, title: "Environmental Responsibility", body: "Energy-efficient systems that lower cost and reduce environmental impact." },
  { icon: Users, title: "Client-Centric Approach", body: "Personalised cooling solutions tailored to your space and needs." },
];

export default function V2About() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-white v2-font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] font-semibold mb-5">
              <span className="w-8 h-px bg-[var(--accent-amber)]" />
              About Celsius
            </div>
            <h2 className="v2-font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--brand-deep)]">
              Where cooling meets <span className="italic text-[var(--accent-amber-deep)]">craft.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-base sm:text-lg text-[rgba(15,47,99,0.7)] leading-relaxed font-light">
              Celsius has engineered comfort across Sri Lanka since 2019 — pairing premium brands with seasoned expertise for domestic, commercial, and industrial spaces.
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative bg-[#fafbfd] rounded-2xl p-6 sm:p-7 border border-[rgba(15,47,99,0.08)] hover:border-[var(--accent-amber)]/40 hover:bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,47,99,0.15)]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-full bg-[var(--brand-deep)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-amber)] transition-colors">
                <p.icon className="w-5 h-5 text-white group-hover:text-[var(--brand-deep)] transition-colors" />
              </div>
              <h3 className="v2-font-serif italic text-xl font-medium text-[var(--brand-deep)] mb-2">{p.title}</h3>
              <p className="text-sm text-[rgba(15,47,99,0.65)] leading-relaxed">{p.body}</p>
              <div className="absolute top-6 right-6 text-[10px] font-mono text-[rgba(15,47,99,0.3)] tabular-nums">0{i + 1}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16 sm:mt-20">
          <div className="relative bg-[var(--brand-deep)] text-white rounded-3xl p-7 sm:p-9 overflow-hidden">
            <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full pointer-events-none" style={{
              background: "radial-gradient(circle, rgba(87,144,230,0.4), transparent 70%)", filter: "blur(40px)",
            }} />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] mb-4">Our Vision</div>
              <p className="v2-font-serif italic text-2xl sm:text-3xl leading-snug mb-5">
                To be Sri Lanka's premier distributor and repairer of air conditioning systems.
              </p>
              <div className="pt-5 border-t border-white/15 text-sm text-white/60">
                Transforming spaces into havens of comfort and efficiency.
              </div>
            </div>
          </div>

          <div className="relative bg-[#fafbfd] border border-[rgba(15,47,99,0.08)] rounded-3xl p-7 sm:p-9 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none" style={{
              background: "radial-gradient(circle, rgba(245,166,35,0.25), transparent 70%)", filter: "blur(40px)",
            }} />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] mb-4">Our Mission</div>
              <p className="v2-font-serif italic text-2xl sm:text-3xl leading-snug text-[var(--brand-deep)] mb-5">
                Supply, install, and service high-quality AC units — with fair, transparent pricing.
              </p>
              <div className="pt-5 border-t border-[rgba(15,47,99,0.08)] text-sm text-[rgba(15,47,99,0.6)]">
                Enduring relationships built on trust and reliability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
