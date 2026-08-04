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
    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px) rotateX(${rotate}deg)`;
    el.style.transformOrigin = "center bottom";
    el.style.willChange = "transform, opacity";

    let cleanup: (() => void) | undefined;

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
              // Set initial state on children
              targets.forEach((c) => {
                c.style.opacity = "0";
                c.style.transform = `translateY(${y}px) rotateX(${rotate}deg)`;
                c.style.transformOrigin = "center bottom";
                c.style.willChange = "transform, opacity";
              });
              // Then animate them in with stagger
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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
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
