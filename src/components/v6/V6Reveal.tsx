"use client";

/**
 * V6Reveal — Reusable animejs v4-powered scroll reveal wrapper.
 *
 * Behavior:
 * - Wraps any children in a div
 * - On scroll into view, animejs animates opacity (0 → 1),
 *   translateY (40px → 0), and rotateX (8deg → 0)
 * - Uses animejs v4 `onScroll` for scroll-synchronized reveal
 * - Supports staggered children via `stagger` prop
 *
 * Usage:
 *   <V6Reveal>...</V6Reveal>                       // single reveal
 *   <V6Reveal stagger={60}>...</V6Reveal>          // stagger children
 *   <V6Reveal y={80} rotate={12}>...</V6Reveal>    // custom depth
 */

import { useEffect, useRef, type ReactNode } from "react";
import { animate, stagger as createStagger, onScroll } from "animejs";

type V6RevealProps = {
  children: ReactNode;
  /** Stagger delay between children (ms). If undefined, treats as single reveal. */
  stagger?: number;
  /** Initial Y offset in px (default 40). */
  y?: number;
  /** Initial rotateX in degrees (default 8). */
  rotate?: number;
  /** Duration in ms (default 900). */
  duration?: number;
  /** Easing (default "outExpo"). */
  ease?: string;
  /** Delay before reveal starts (ms). */
  delay?: number;
  /** CSS class for the wrapper. */
  className?: string;
  /** HTML id for the wrapper. */
  id?: string;
  /** Inline style. */
  style?: React.CSSProperties;
  /** Element tag (default div). */
  as?: keyof JSX.IntrinsicElements;
};

export default function V6Reveal({
  children,
  stagger: staggerMs,
  y = 40,
  rotate = 8,
  duration = 900,
  ease = "outExpo",
  delay = 0,
  className,
  id,
  style,
  as = "div",
}: V6RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // Initial state — hidden
    // For stagger mode, only the CHILDREN should be hidden (wrapper stays
    // visible so it doesn't mask the children's reveal). For single reveal,
    // the wrapper itself is hidden.
    if (staggerMs === undefined) {
      el.style.opacity = "0";
      el.style.transform = `translateY(${y}px) rotateX(${rotate}deg)`;
    } else {
      // Stagger mode: set children invisible, wrapper stays visible
      const targets = Array.from(el.children) as HTMLElement[];
      targets.forEach((c) => {
        c.style.opacity = "0";
        c.style.transform = `translateY(${y}px) rotateX(${rotate}deg)`;
        c.style.transformOrigin = "center bottom";
        c.style.willChange = "transform, opacity";
      });
    }
    el.style.willChange = "transform, opacity";

    let cleanup: (() => void) | undefined;

    // Helper to force-reveal if observer never fires (e.g. element taller
    // than viewport, or already past threshold on mount). Safety net so
    // cards never get stuck invisible.
    const forceReveal = () => {
      if (staggerMs !== undefined) {
        const targets = Array.from(el.children) as HTMLElement[];
        if (targets.length === 0) {
          animate(el, {
            opacity: [0, 1],
            translateY: [y, 0],
            rotateX: [rotate, 0],
            duration,
            ease,
            delay,
          });
        } else {
          // Only animate children that are still invisible
          const hiddenTargets = targets.filter(
            (c) => parseFloat(c.style.opacity || "0") === 0
          );
          if (hiddenTargets.length === 0) return;
          animate(hiddenTargets, {
            opacity: [0, 1],
            translateY: [y, 0],
            rotateX: [rotate, 0],
            duration,
            ease,
            delay: createStagger(staggerMs, { start: delay }),
          });
        }
      } else {
        // Single reveal — skip if already visible
        if (parseFloat(el.style.opacity || "0") > 0) return;
        animate(el, {
          opacity: [0, 1],
          translateY: [y, 0],
          rotateX: [rotate, 0],
          duration,
          ease,
          delay,
        });
      }
    };

    // Use IntersectionObserver to trigger the animejs reveal once.
    // We don't use animejs's onScroll here because we want a one-shot
    // reveal (not scrubbed), and IntersectionObserver handles the
    // "has entered view" state cleanly.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (staggerMs !== undefined) {
            // Stagger reveal of direct children
            const targets = Array.from(el.children) as HTMLElement[];
            if (targets.length === 0) {
              // No children — animate self
              animate(el, {
                opacity: [0, 1],
                translateY: [y, 0],
                rotateX: [rotate, 0],
                duration,
                ease,
                delay,
                onComplete: () => {
                  el.style.willChange = "auto";
                },
              });
            } else {
              // Children already initialized invisible above.
              // Animate them in with stagger.
              animate(targets, {
                opacity: [0, 1],
                translateY: [y, 0],
                rotateX: [rotate, 0],
                duration,
                ease,
                delay: createStagger(staggerMs, { start: delay }),
                onComplete: () => {
                  targets.forEach((c) => (c.style.willChange = "auto"));
                  el.style.willChange = "auto";
                },
              });
            }
          } else {
            // Single reveal — animate self
            animate(el, {
              opacity: [0, 1],
              translateY: [y, 0],
              rotateX: [rotate, 0],
              duration,
              ease,
              delay,
              onComplete: () => {
                el.style.willChange = "auto";
              },
            });
          }

          io.unobserve(el);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    io.observe(el);

    // Safety net: if for any reason the observer hasn't fired within 2.5s,
    // force the reveal so content is never stuck invisible.
    const safety = setTimeout(() => {
      forceReveal();
    }, 2500);

    return () => {
      io.disconnect();
      clearTimeout(safety);
      cleanup?.();
    };
  }, [staggerMs, y, rotate, duration, ease, delay]);

  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={className} id={id} style={style}>
      {children}
    </Tag>
  );
}
