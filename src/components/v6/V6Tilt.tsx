"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * V6Tilt — wraps a child element and adds a smooth mouse-follow 3D tilt.
 *
 * How it works:
 * - On mousemove over the wrapper, calculates the cursor's relative
 *   position (-1..+1 on both axes) and converts to a rotateX/rotateY
 *   tilt of ±maxDeg degrees.
 * - Writes the angles as CSS custom props (--tilt-x, --tilt-y) on the
 *   wrapper so the .v6-tilt:hover rule in v6.css can apply them via
 *   `transform: perspective(900px) rotateX(var(--tilt-x)) ...`.
 * - On mouseleave, resets to 0.
 * - Disabled on touch devices (no hover) and when prefers-reduced-motion.
 *
 * Usage:
 *   <V6Tilt maxDeg={8}><div className="v6-tilt v6-card-accent">...</div></V6Tilt>
 *
 * The wrapper itself is a transparent passthrough; it adds no markup
 * weight to the DOM beyond a single <div>.
 */
type Props = {
  children: ReactNode;
  /** Maximum tilt in degrees. Default 8. */
  maxDeg?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function V6Tilt({
  children,
  maxDeg = 8,
  className = "",
  style = {},
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices.
    const isTouch =
      window.matchMedia?.("(hover: none)").matches ||
      !window.matchMedia?.("(hover: hover)").matches;
    if (isTouch) return;

    // Respect reduced-motion users.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    setActive(true);

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;   // 0..1
      const y = (e.clientY - rect.top) / rect.height;    // 0..1
      // Convert to -1..+1 with y inverted (moving cursor up = tilt forward).
      const tiltY = (x - 0.5) * 2 * maxDeg;
      const tiltX = -(y - 0.5) * 2 * maxDeg;
      el.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
    };

    const onLeave = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxDeg]);

  return (
    <div
      ref={ref}
      className={`v6-tilt ${className}`.trim()}
      data-tilt-active={active ? "true" : "false"}
      style={style}
    >
      {children}
    </div>
  );
}
