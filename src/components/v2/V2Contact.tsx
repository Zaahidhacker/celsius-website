"use client";

import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function V2Contact() {
  return (
    <section id="contact" className="relative w-full py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10 bg-[var(--brand-deep)] text-white v2-font-sans overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(245,166,35,0.15), transparent 70%)", filter: "blur(80px)",
      }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: heading + contact details */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-amber)] font-semibold mb-5">
              <span className="w-8 h-px bg-[var(--accent-amber)]" />
              Get in Touch
            </div>
            <h2 className="v2-font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-6">
              Let's build your <span className="italic text-[var(--accent-amber)]">comfort.</span>
            </h2>
            <p className="text-base text-white/65 leading-relaxed max-w-md mb-10 font-light">
              Talk to a Celsius specialist for a personalized consultation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+94777136560" className="group flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent-amber)]/40 hover:bg-white/[0.07] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-white/45">Call</div>
                  <div className="text-sm font-medium truncate group-hover:text-[var(--accent-amber)] transition-colors">+94 777 136 560</div>
                </div>
              </a>
              <a href="mailto:ijazniyaz1234@gmail.com" className="group flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent-amber)]/40 hover:bg-white/[0.07] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-white/45">Email</div>
                  <div className="text-sm font-medium truncate group-hover:text-[var(--accent-amber)] transition-colors">ijazniyaz1234@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/45">Visit</div>
                  <div className="text-sm font-medium">No. 47/3 Srimaha Vihara Road, Kalubowila, Dehiwala</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber)]/15 border border-[var(--accent-amber)]/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[var(--accent-amber)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/45">Hours</div>
                  <div className="text-sm font-medium">Mon – Sat · 8:30am – 6:30pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block">Phone</label>
                  <input type="tel" placeholder="+94 ..." className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider text-white/55 mb-2 block">Requirement</label>
                <textarea rows={4} placeholder="Tell us about your cooling needs..." className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[var(--accent-amber)] transition-colors resize-none" />
              </div>
              <button type="submit" className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent-amber)] text-[var(--brand-deep)] text-sm font-semibold hover:bg-white transition-colors mt-2">
                Send Message
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
