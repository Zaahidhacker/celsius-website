"use client";

/**
 * V10Reveal — animejs-powered scroll reveal wrapper.
 *
 * Wraps any children. When the wrapper scrolls into view, anime.js animates
 * the children with a staggered fade-up. Uses IntersectionObserver to fire
 * once per element, then unobserves.
 *
 * Usage:
 *   <V10Reveal as="h2" stagger selector=".v10-pillar">
 *     ... children ...
 *   </V10Reveal>
 *
 * Or wrap a single element:
 *   <V10Reveal><h2>Headline</h2></V10Reveal>
 */

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** Selector within this wrapper to stagger. If absent, animate the wrapper itself. */
  selector?: string;
  delay?: number;
  staggerMs?: number;
  y?: number;
};

export default function V10Reveal({
  children,
  as: Tag = "div",
  className,
  selector,
  delay = 0,
  staggerMs = 80,
  y = 24,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    // Respect reduced motion: skip animation, just show.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      if (selector) {
        el.querySelectorAll<HTMLElement>(selector).forEach((n) => {
          n.style.opacity = "1";
        });
      } else {
        (el as HTMLElement).style.opacity = "1";
      }
      return;
    }

    // Initial hidden state
    const targets: HTMLElement[] = selector
      ? Array.from(el.querySelectorAll<HTMLElement>(selector))
      : [el as HTMLElement];

    targets.forEach((t) => {
      t.style.opacity = "0";
      t.style.transform = `translateY(${y}px)`;
      t.style.willChange = "opacity, transform";
    });

    let fired = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired) {
            fired = true;
            animate(targets, {
              opacity: [0, 1],
              translateY: [y, 0],
              duration: 800,
              delay: stagger(staggerMs, { start: delay }),
              ease: "outQuad",
              onComplete: () => {
                targets.forEach((t) => {
                  t.style.willChange = "auto";
                });
              },
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [selector, delay, staggerMs, y]);

  // @ts-expect-error dynamic tag with ref
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
