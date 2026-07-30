"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CelsiusLogo from "./CelsiusLogo";

/**
 * Navy intro loader (Baseline-inspired).
 * Shows the Celsius wordmark + a filling progress bar for ~1.4s,
 * then slides up to reveal the hero.
 */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const MIN_VISIBLE = 1400;
    const EXIT = 850;
    const t1 = window.setTimeout(() => setExiting(true), MIN_VISIBLE);
    const t2 = window.setTimeout(() => setDone(true), MIN_VISIBLE + EXIT);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (done) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className={`fixed inset-0 z-[200] bg-[#0f2f63] text-white flex flex-col items-center justify-center gap-8 ${
            exiting ? "celsius-curtain-exit" : ""
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <CelsiusLogo variant="light" size="lg" />
          </motion.div>

          <div className="w-40 h-px rounded-full bg-white/20 overflow-hidden">
            <div className="celsius-progress-fill w-full h-full bg-white" />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/60"
          >
            Experts in keeping things cool
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
