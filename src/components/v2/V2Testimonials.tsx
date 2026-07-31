"use client";

import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Celsius transformed our office environment. Professional, on-time, and the cooling is flawless.", name: "Roshan Perera", role: "Operations Manager, Colombo" },
  { quote: "Best AC service we've had in 15 years. Transparent pricing and genuine care.", name: "Anusha Silva", role: "Homeowner, Nugegoda" },
  { quote: "Their industrial VRF install has run without a hitch. Highly recommend.", name: "Mohammed Faisal", role: "Plant Engineer, Homagama" },
];

export default function V2Testimonials() {
  return (
    <section className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-[#fafbfd] v2-font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber-deep)] font-semibold mb-5">
            <span className="w-8 h-px bg-[var(--accent-amber)]" />
            Client Words
            <span className="w-8 h-px bg-[var(--accent-amber)]" />
          </div>
          <h2 className="v2-font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--brand-deep)]">
            Trusted by <span className="italic text-[var(--accent-amber-deep)]">many.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="relative bg-white rounded-3xl p-7 sm:p-8 border border-[rgba(15,47,99,0.08)] hover:border-[var(--accent-amber)]/30 transition-colors">
              <Quote className="w-8 h-8 text-[var(--accent-amber)] mb-4" />
              <blockquote className="v2-font-serif italic text-lg sm:text-xl text-[var(--brand-deep)] leading-snug mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption className="pt-5 border-t border-[rgba(15,47,99,0.08)]">
                <div className="text-sm font-semibold text-[var(--brand-deep)]">{t.name}</div>
                <div className="text-xs text-[rgba(15,47,99,0.55)] mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
