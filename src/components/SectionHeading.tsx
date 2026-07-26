"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(30,50,90,0.06)] border border-[rgba(30,50,90,0.1)] text-[11px] md:text-xs font-normal uppercase tracking-wider text-[rgba(30,50,90,0.7)]"
        >
          <span className="w-1 h-1 rounded-full bg-[rgba(30,50,90,0.5)]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight leading-[1.1] max-w-3xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base text-[rgba(30,50,90,0.6)] leading-relaxed max-w-2xl font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
