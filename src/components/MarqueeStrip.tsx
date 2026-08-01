"use client";

import { Sparkles } from "lucide-react";

const items = [
  "Since 2019",
  "9 Premium Brands",
  "40+ Business Clients",
  "Domestic · Commercial · Industrial",
  "Transparent Pricing",
];

export default function MarqueeStrip({
  variant = "amber",
}: {
  variant?: "amber" | "navy" | "glass";
}) {
  const styles =
    variant === "amber"
      ? "celsius-accent-strip"
      : variant === "navy"
        ? "bg-[#0a1d3f] text-white border-y border-white/10"
        : "bg-white/60 backdrop-blur-md text-[rgba(15,47,99,0.85)] border-y border-[rgba(15,47,99,0.08)]";

  return (
    <div className={`relative w-full overflow-hidden py-3 md:py-4 ${styles}`}>
      <div className="flex items-center gap-8 md:gap-12 whitespace-nowrap celsius-marquee-track">
        {Array.from({ length: 2 }).map((_, k) => (
          <div
            key={k}
            className="flex items-center gap-8 md:gap-12 flex-shrink-0"
          >
            {items.map((s) => (
              <span
                key={s + k}
                className="flex items-center gap-3 md:gap-4 text-[11px] md:text-xs uppercase tracking-[0.22em] font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 opacity-70 flex-shrink-0" />
                {s}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
