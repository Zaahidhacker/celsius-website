"use client";

/**
 * V6Manifesto3D — Replaces the static "40 BUSINESS CLIENTS" ring with a
 * full 3D animated object whose rotation is bound to scroll position.
 *
 * Structure:
 *   .v6-3d-stage           — sets perspective, sizes the scene
 *     .v6-3d-scene         — preserve-3d, gets the scroll-bound rotateY/X
 *       .v6-3d-face × 6    — cube faces (translateZ to form a cube)
 *       .v6-3d-ring-1      — inner orbit ring (12 tick marks, perpendicular plane)
 *       .v6-3d-ring-2      — outer orbit ring (4 colored dots, vertical plane)
 *       .v6-3d-core        — center "40" number (counter-rotates to stay readable)
 *
 * Animation is driven by anime.js v4 `onScroll`. We create paused
 * animations and seek them in the observer's onUpdate callback, which
 * fires whenever the scroll progress through the manifesto section changes.
 * This gives a smooth, scrubbed 3D rotation that the user controls by
 * scrolling — no rAF loop, no scroll listeners, anime.js handles it all.
 */

import { useEffect, useRef } from "react";
import { animate, onScroll, stagger } from "animejs";
import type { JSAnimation } from "animejs";
import "@/styles/v6-manifesto-3d.css";

export default function V6Manifesto3D() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const ring1Ref = useRef<HTMLDivElement | null>(null);
  const ring2Ref = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const ring1 = ring1Ref.current;
    const ring2 = ring2Ref.current;
    const core = coreRef.current;
    const stage = stageRef.current;
    if (!scene || !ring1 || !ring2 || !core || !stage) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      scene.style.transform = "rotateX(-15deg) rotateY(25deg)";
      ring1.style.transform = "rotateX(90deg) rotateY(0deg)";
      ring2.style.transform = "rotateY(90deg) rotateX(0deg)";
      return;
    }

    // Create paused animations — we'll drive their playhead via the observer.
    const anims: JSAnimation[] = [];

    // Main scene: full 360° Y rotation + gentle X rock over the scroll.
    anims.push(
      animate(scene, {
        rotateY: [0, 360],
        rotateX: [-15, 20, -15],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      })
    );

    // Inner ring: orbits perpendicular to scene, 2× speed.
    anims.push(
      animate(ring1, {
        rotateY: [0, 720],
        rotateX: [90, 90],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      })
    );

    // Outer ring: orbits on the other axis.
    anims.push(
      animate(ring2, {
        rotateX: [0, 540],
        rotateZ: [0, -360],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      })
    );

    // Core "40": counter-rotates Y so the number stays facing the viewer
    // as the scene spins.
    anims.push(
      animate(core, {
        rotateY: [0, -360],
        duration: 1000,
        ease: "linear",
        autoplay: false,
      })
    );

    // Tick marks: staggered pulse as the ring spins.
    const ticks = ring1.querySelectorAll<HTMLElement>(".v6-3d-tick");
    if (ticks.length) {
      anims.push(
        animate(ticks, {
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.1, 0.8],
          duration: 1000,
          ease: "inOutSine",
          delay: stagger(40),
          autoplay: false,
        })
      );
    }

    // Initial render at progress 0.
    anims.forEach((a) => a.seek(0));

    // Build the scroll observer. Each onUpdate, we seek every animation
    // to match the observer's progress (0..1 → 0..duration).
    const observer = onScroll({
      target: stage,
      enter: "bottom top",
      leave: "top bottom",
      sync: 60,
      debug: false,
      onUpdate: (obs) => {
        const p = Math.max(0, Math.min(1, obs.progress));
        anims.forEach((a) => a.seek(p * a.duration));
      },
    });

    // Trigger an initial measurement so animations render at the current
    // scroll position instead of waiting for the first scroll event.
    requestAnimationFrame(() => {
      try {
        observer.refresh?.();
      } catch {
        // Observer may not be ready yet — will refresh on next scroll.
      }
    });

    return () => {
      observer.revoke?.();
      anims.forEach((a) => a.pause());
    };
  }, []);

  // 12 tick marks around the inner ring, arranged in a circle via rotateY.
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 360;
    return (
      <span
        key={i}
        className="v6-3d-tick"
        style={{
          transform: `rotateY(${angle}deg) translateZ(140px)`,
        }}
      />
    );
  });

  return (
    <div className="v6-3d-stage" ref={stageRef}>
      <div className="v6-3d-scene" ref={sceneRef}>
        {/* Cube faces — 6 panels forming a wireframe box around the number */}
        <div className="v6-3d-face v6-3d-face--front" />
        <div className="v6-3d-face v6-3d-face--back" />
        <div className="v6-3d-face v6-3d-face--right" />
        <div className="v6-3d-face v6-3d-face--left" />
        <div className="v6-3d-face v6-3d-face--top" />
        <div className="v6-3d-face v6-3d-face--bottom" />

        {/* Inner orbit ring with 12 tick marks */}
        <div className="v6-3d-ring v6-3d-ring-1" ref={ring1Ref}>{ticks}</div>

        {/* Outer orbit ring (perpendicular axis) */}
        <div className="v6-3d-ring v6-3d-ring-2" ref={ring2Ref}>
          <span className="v6-3d-ring-dot v6-3d-ring-dot--a" />
          <span className="v6-3d-ring-dot v6-3d-ring-dot--b" />
          <span className="v6-3d-ring-dot v6-3d-ring-dot--c" />
          <span className="v6-3d-ring-dot v6-3d-ring-dot--d" />
        </div>

        {/* Core number — counter-rotates to stay readable */}
        <div className="v6-3d-core" ref={coreRef}>
          <span className="v6-3d-num">40</span>
          <span className="v6-3d-plus">+</span>
          <span className="v6-3d-label">Business Clients</span>
        </div>
      </div>

      {/* Floor shadow */}
      <div className="v6-3d-shadow" aria-hidden />
    </div>
  );
}
