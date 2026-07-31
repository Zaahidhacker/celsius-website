"use client";

import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function V2Contact() {
  return (
    <section id="contact" className="relative w-full celsius-section bg-[var(--brand-deep)] text-white v2-font-sans overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(245,166,35,0.15), transparent 70%)", filter: "blur(80px)",
      }} />

      <div className="relative celsius-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + contact details — 5 cols */}
          <div className="lg:col-span-5">
            <div className="celsius-eyebrow-pill celsius-eyebrow-pill-amber-light mb-5">
              <span className="w-1 h-1 rounded-full bg-current" />
              Get in touch
            </div>
            <h2 className="celsius-display celsius-h2 celsius-sentence">
              Let&rsquo;s build your{" "}
              <span className="celsius-display-italic celsius-optical-italic text-[var(--accent-amber)]">comfort.</span>
            </h2>
            <p className="celsius-lede text-white/70 mb-10">
              Talk to a Celsius specialist for a tailored consultation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+94777136560" className="group flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent-amber)]/40 hover:bg-white/[0.07] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-white/45 celsius-sentence">Call</div>
                  <div className="text-sm font-medium truncate group-hover:text-[var(--accent-amber)] transition-colors celsius-numeric">+94 777 136 560</div>
                </div>
              </a>
              <a href="mailto:ijazniyaz1234@gmail.com" className="group flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent-amber)]/40 hover:bg-white/[0.07] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-white/45 celsius-sentence">Email</div>
                  <div className="text-sm font-medium truncate group-hover:text-[var(--accent-amber)] transition-colors">ijazniyaz1234@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/45 celsius-sentence">Visit</div>
                  <div className="text-sm font-medium">No. 47/3 Srimaha Vihara Road, Kalubowila, Dehiwala</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/45 celsius-sentence">Hours</div>
                  <div className="text-sm font-medium celsius-sentence">Mon – Sat · 8:30am – 6:30pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form — 7 cols (asymmetric 5+7) */}
          <div className="lg:col-span-7 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block celsius-sentence">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block celsius-sentence">Phone</label>
                  <input type="tel" placeholder="+94 ..." className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors celsius-numeric" />
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block celsius-sentence">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block celsius-sentence">Requirement</label>
                <textarea rows={4} placeholder="Tell us about your cooling needs." className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors resize-none" />
              </div>
              <button type="submit" className="celsius-island-btn celsius-shadow-soft self-start mt-2">
                <span>Send message</span>
                <span className="celsius-island-icon">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
