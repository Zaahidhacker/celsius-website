"use client";

import { CSSProperties, ElementType, ReactNode, useEffect, useRef, useState } from "react";

/**
 * Reveal — IntersectionObserver-based entrance animation with no-JS / slow-network fallback.
 *
 * Why this exists:
 *   motion/react's `whileInView` with `initial={{ opacity: 0 }}` permanently hides
 *   content if the library fails to hydrate (slow wifi, ad blockers, RSC issues).
 *   This component guarantees content becomes visible even if JS is delayed.
 *
 * Behaviour:
 *   - On mount, element starts at `opacity: 0` + slight Y offset.
 *   - When the element enters the viewport (IntersectionObserver), it animates in.
 *   - If IntersectionObserver is unavailable or doesn't fire within `fallbackMs`,
 *     the element becomes visible anyway (no perpetual hiding).
 *   - Respects `prefers-reduced-motion` (renders children without animation).
 */

export interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Delay before the entrance animation plays (ms). Default 0. */
  delay?: number;
  /** Y-offset in px to slide from. Default 24. */
  y?: number;
  /** Animation duration in ms. Default 700. */
  duration?: number;
  /** Viewport margin (IntersectionObserver rootMargin). Default "-60px". */
  rootMargin?: string;
  /** Fallback timeout — force visible after this many ms. Default 1200. */
  fallbackMs?: number;
  /** Only animate once (default) or every time it enters viewport. */
  once?: boolean;
}

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
  delay = 0,
  y = 24,
  duration = 700,
  rootMargin = "-60px",
  fallbackMs = 1200,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — render visible immediately.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    // If IntersectionObserver is unavailable, show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    io.observe(el);

    // Safety fallback — if IO never fires (e.g. element already in viewport
    // on load but IO hasn't ticked yet, or browser quirk), force visible.
    const t = window.setTimeout(() => setVisible(true), fallbackMs);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [rootMargin, once, fallbackMs]);

  const eased = "cubic-bezier(0.16, 1, 0.3, 1)";
  const innerStyle: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0, 0, 0)" : `translate3d(0, ${y}px, 0)`,
    transition: `opacity ${duration}ms ${eased} ${delay}ms, transform ${duration}ms ${eased} ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <Tag ref={ref as any} className={className} style={innerStyle}>
      {children}
    </Tag>
  );
}
