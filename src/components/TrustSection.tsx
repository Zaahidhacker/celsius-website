"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    headline: ["Premium", "Brands,", "Authorised", "Supplier"],
    brand: "Celsius",
    title: "Featured Brand",
    cta: "View range",
  },
  {
    headline: ["Sharper", "Cooling,", "Lower", "Bills"],
    brand: "Celsius Pro",
    title: "Energy Efficient",
    cta: "See savings",
  },
  {
    headline: ["Future", "Comfort", "Starts", "Here"],
    brand: "Celsius Care",
    title: "Service Plans",
    cta: "Get covered",
  },
];

const featuredBrands = [
  "Midea",
  "Daikin",
  "Panasonic",
  "Haier",
  "Mitsubishi",
  "Samsung",
  "TCL",
  "Chigo",
  "LG",
];

export default function TrustSection() {
  const [active, setActive] = useState(0);

  const go = (dir: 1 | -1) =>
    setActive((a) => (a + dir + slides.length) % slides.length);

  return (
    <section
      id="brands"
      className="relative w-full bg-white overflow-hidden isolate"
    >
      <div className="max-w-[1536px] mx-auto px-5 md:px-10 py-16 md:py-24">
        {/* Top row: percent badge + intro card */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#f4f4f4] flex flex-col items-center justify-center text-center"
          >
            <span className="text-2xl md:text-3xl font-medium tracking-tight text-[#0a0a0a]">
              100%
            </span>
            <span className="text-[10px] text-[#717784] max-w-[7em] mt-1 leading-tight">
              Branded units, expertly installed
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="max-w-xl rounded-[1.5rem] bg-[#f4f4f4] p-5 md:p-6 flex items-start gap-4 md:gap-5"
          >
            <span className="flex-shrink-0 rounded-xl bg-white px-4 py-2 text-xl font-medium text-[#0a0a0a]">
              #01
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-medium text-[#0a0a0a] tracking-tight">
                Trusted by serious operators
              </h2>
              <p className="text-[13px] md:text-sm text-[#717784] leading-relaxed">
                From boutique apartments to industrial plants, organisations
                across Sri Lanka choose Celsius because the comfort shows up —
                in every room, every quarter, every season.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Oversized ghost heading with active slide words */}
        <div className="relative">
          <div className="flex flex-col gap-2 md:gap-4">
            {[0, 1].map((rowIdx) => (
              <div
                key={rowIdx}
                className="flex justify-between items-center"
              >
                {[0, 1].map((colIdx) => {
                  const wordIdx = rowIdx * 2 + colIdx;
                  const word = slides[active].headline[wordIdx];
                  const isInk = wordIdx === 2; // bottom-left = ink
                  return (
                    <span
                      key={`${active}-${wordIdx}`}
                      className="celsius-ghost text-[8.2vw] md:text-[6vw] lg:text-[5.5vw] block overflow-hidden"
                      style={{ paddingBottom: "0.12em" }}
                    >
                      <motion.span
                        key={word + active}
                        initial={{ y: "115%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: wordIdx * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="block"
                        style={{ color: isInk ? "#0a0a0a" : "#d7dae1" }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Center floating card */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 lg:w-64"
          >
            <div className="rounded-[1.5rem] border border-white/15 bg-[#0f2f63] overflow-hidden shadow-[0_20px_60px_-20px_rgba(15,47,99,0.5)]">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#0f2f63] to-[#2563c9] flex items-center justify-center p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="text-center text-white"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-3">
                      {slides[active].brand}
                    </div>
                    <div className="text-xl font-medium mb-2">
                      {slides[active].title}
                    </div>
                    <div className="text-[11px] text-white/70 underline-offset-2 underline">
                      {slides[active].cta}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between mt-12 md:mt-16">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#e6e8ec] hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="p-1.5"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    i === active
                      ? "w-5 bg-[#0a0a0a]"
                      : "w-1.5 bg-[#d7dae1]"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a0a0a] border border-[#0a0a0a] text-white hover:bg-[#0f2f63] hover:border-[#0f2f63] transition-colors flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Featured brands strip */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-[#e6e8ec]">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#717784] mb-5">
            Authorised supplier of
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {featuredBrands.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="text-lg md:text-2xl font-medium tracking-tight text-[#0a0a0a]/80 hover:text-[#0a0a0a] transition-colors cursor-default"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
