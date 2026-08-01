"use client";

import { Snowflake, ShieldCheck, Leaf, Users } from "lucide-react";

const pillars = [
  { icon: Snowflake,   title: "Industry expertise",       body: "HVAC precision across domestic, commercial, and industrial installs." },
  { icon: ShieldCheck, title: "Quality commitment",       body: "Branded units from Midea, Daikin, Panasonic, Mitsubishi, LG and more." },
  { icon: Leaf,        title: "Environmental responsibility", body: "Energy-efficient systems that lower cost and footprint." },
  { icon: Users,       title: "Client-centric approach",  body: "Cooling tailored to your space and needs." },
];

export default function V2About() {
  return (
    <section id="about" className="relative w-full celsius-section v2-cream-bg v2-font-sans overflow-hidden">
      <div className="celsius-container">
        {/* Heading row — asymmetric 7+5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber mb-5">
              <span className="w-1 h-1 rounded-full bg-current" />
              About
            </div>
            <h2 className="celsius-display celsius-h2 v2-ink celsius-sentence">
              Where cooling meets{" "}
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">craft.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="celsius-lede v2-ink-soft celsius-dropcap">
              We engineer comfort across Sri Lanka — pairing premium brands with seasoned expertise for every kind of space.
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative v2-cream-surface rounded-2xl p-5 sm:p-7 border border-[rgba(15,47,99,0.08)] hover:border-[var(--accent-amber)]/40 transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-full bg-[var(--brand-deep)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-amber)] transition-colors">
                <p.icon className="w-5 h-5 text-white group-hover:text-[var(--brand-deep)] transition-colors" />
              </div>
              <h3 className="v2-font-serif italic text-xl font-medium v2-ink mb-2 celsius-sentence">{p.title}</h3>
              <p className="text-sm v2-ink-soft leading-relaxed">{p.body}</p>
              <div className="absolute top-6 right-6 text-[10px] font-mono text-[rgba(26,31,46,0.35)] celsius-numeric">0{i + 1}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16 sm:mt-20">
          <div className="relative bg-[var(--brand-deep)] text-white rounded-3xl p-6 sm:p-9 overflow-hidden">
            <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full pointer-events-none" style={{
              background: "radial-gradient(circle, rgba(87,144,230,0.4), transparent 70%)", filter: "blur(40px)",
            }} />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] mb-4">Vision</div>
              <p className="v2-font-serif italic text-xl sm:text-3xl leading-snug mb-5 celsius-sentence">
                To be Sri Lanka's go-to distributor and repairer of air conditioning systems.
              </p>
              <div className="pt-5 border-t border-white/15 text-sm text-white/60">
                Comfort and efficiency, in every space we touch.
              </div>
            </div>
          </div>

          <div className="relative v2-cream-surface border border-[rgba(15,47,99,0.08)] rounded-3xl p-6 sm:p-9 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none" style={{
              background: "radial-gradient(circle, rgba(245,166,35,0.25), transparent 70%)", filter: "blur(40px)",
            }} />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] mb-4">Mission</div>
              <p className="v2-font-serif italic text-xl sm:text-3xl leading-snug v2-ink mb-5 celsius-sentence">
                Supply, install, and service high-quality AC units — with fair, transparent pricing.
              </p>
              <div className="pt-5 border-t border-[rgba(15,47,99,0.08)] text-sm v2-ink-soft">
                Relationships built on trust and reliability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
