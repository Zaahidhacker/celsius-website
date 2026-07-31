"use client";

import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Professional, on-time, and the cooling is flawless.",   name: "Roshan Perera",    role: "Operations Manager, Colombo" },
  { quote: "Best AC service we've had in 15 years. Fair pricing.",  name: "Anusha Silva",     role: "Homeowner, Nugegoda" },
  { quote: "Their industrial VRF install has run without a hitch.", name: "Mohammed Faisal",  role: "Plant Engineer, Homagama" },
];

export default function V2Testimonials() {
  return (
    <section className="relative w-full celsius-section v2-cream-surface v2-font-sans overflow-hidden">
      <div className="celsius-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber mb-5">
              <span className="w-1 h-1 rounded-full bg-current" />
              Client words
            </div>
            <h2 className="celsius-display celsius-h2 v2-ink celsius-sentence">
              Trusted by{" "}
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber-deep)]">many.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="relative v2-cream-bg rounded-3xl p-7 sm:p-8 border border-[rgba(15,47,99,0.08)] hover:border-[var(--accent-amber)]/30 transition-colors">
              <Quote className="w-8 h-8 text-[var(--accent-amber)] mb-4" />
              <blockquote className="v2-font-serif italic text-lg sm:text-xl v2-ink leading-snug mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="pt-5 border-t border-[rgba(15,47,99,0.08)]">
                <div className="text-sm font-semibold v2-ink">{t.name}</div>
                <div className="text-xs v2-ink-soft mt-0.5 celsius-sentence">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
