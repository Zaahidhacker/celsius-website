"use client";

/**
 * V6StatsCounter — Animated count-up stats row.
 *
 * On scroll into view, each stat's number counts up from 0 to its target
 * value with a staggered delay. The count-up uses a manual rAF loop with
 * an outExpo easing (more reliable than animejs's object-animation in v4).
 * The 3D tilt on the row uses animejs v4 onScroll for scroll-scrubbed rotation.
 */

import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import { stats } from "@/lib/content";

// Manual rAF count-up with outExpo easing.
function countUp(
  el: HTMLElement,
  from: number,
  to: number,
  duration: number,
  delay: number,
  finalText: string
) {
  const start = performance.now() + delay;

  function tick(now: number) {
    if (now < start) {
      el.textContent = String(from);
      requestAnimationFrame(tick);
      return;
    }
    const elapsed = now - start;
    const t = Math.min(1, elapsed / duration);
    // outExpo easing: 1 - 2^(-10t)
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    const val = Math.round(from + (to - from) * eased);
    el.textContent = String(val);
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = finalText;
    }
  }
  requestAnimationFrame(tick);
}

export default function V6StatsCounter() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    const stage = stageRef.current;
    if (!row || !stage) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      row.querySelectorAll<HTMLElement>("[data-countup]").forEach((el) => {
        el.textContent = el.dataset.final || "";
      });
      return;
    }

    // Stage-level 3D tilt driven by scroll progress through this section.
    const tiltAnim = animate(stage, {
      rotateX: [10, -5, 10],
      rotateY: [-6, 6, -6],
      duration: 1000,
      ease: "linear",
      autoplay: false,
    });

    const obs = onScroll({
      target: stage,
      enter: "bottom top",
      leave: "top bottom",
      sync: 60,
      onUpdate: (o) => {
        const p = Math.max(0, Math.min(1, o.progress));
        tiltAnim.seek(p * tiltAnim.duration);
      },
    });

    // Count-up — triggered once via IntersectionObserver
    const countEls = Array.from(
      row.querySelectorAll<HTMLElement>("[data-countup]")
    );

    // Set initial state — all counters start at 0
    countEls.forEach((el) => {
      el.textContent = "0";
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          console.log("[V6StatsCounter] IO fired — starting count-up");

          countEls.forEach((el, i) => {
            const final = el.dataset.final || "0";
            const target = parseInt(final, 10);

            // Fade-in + slide-up using animejs (DOM element — supported)
            animate(el, {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              ease: "outCubic",
              delay: i * 100,
            });

            // Count-up via rAF (more reliable than animejs object-anim)
            if (!Number.isNaN(target)) {
              countUp(el, 0, target, 1400, i * 100 + 200, final);
            } else {
              // Non-numeric (e.g. "2019") — just set after delay
              setTimeout(() => {
                el.textContent = final;
              }, i * 100 + 200);
            }
          });

          io.unobserve(row);
        });
      },
      { threshold: 0.15 }
    );

    io.observe(row);

    return () => {
      io.disconnect();
      obs.revoke?.();
      tiltAnim.pause();
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="v6-stats-3d-stage"
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 30%",
      }}
    >
      <div
        ref={rowRef}
        className="v6-stats-row"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {stats.map((s, i) => (
          <div key={i} className="v6-stat-block">
            <div className="v6-stat-number">
              <span
                data-countup
                data-final={s.number}
                className="v6-stat-num"
              >
                0
              </span>
              <span className="v6-stat-suffix">{s.suffix}</span>
            </div>
            <div className="v6-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
