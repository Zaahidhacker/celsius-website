"use client";

/**
 * V10FrameScroll — Apple-style scroll-driven frame animation.
 *
 * A sticky full-viewport <canvas> renders one of 240 pre-rendered 3D frames
 * (public/frames3d/0001.jpg … 0240.jpg) based on the user's scroll progress
 * through a tall sentinel section. As the user scrolls, the AC unit animates
 * (assembled → exploded → reassembled), giving the impression of a 3D product
 * tour scrubbed by the scroll wheel.
 *
 * Implementation notes:
 * - Images are preloaded in batches of 20 to keep first-paint fast.
 * - The canvas uses object-fit: contain semantics (drawImage with letterboxing)
 *   so the 1280×720 source always fits inside any viewport without cropping.
 * - We sample scroll position via requestAnimationFrame to avoid layout thrash.
 * - The sentinel section is `height: clamp(420vh, 8 * var(--vh), 720vh)` so the
 *   user has plenty of scroll runway to scrub through all 240 frames.
 * - On touch devices we still work, but with coarser scroll granularity.
 */

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 240;
const FRAME_W = 1280;
const FRAME_H = 720;

/** Pad frame index to 4 digits, e.g. 1 -> "0001". */
function frameName(i: number) {
  return String(i + 1).padStart(4, "0");
}

export default function V10FrameScroll({
  children,
}: {
  children?: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [ready, setReady] = useState(false);

  // Preload all frames in batches, draw the first one as soon as it's ready.
  useEffect(() => {
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);
    let cancelled = false;
    let drawnFirst = false;

    const drawFrame = (idx: number) => {
      const canvas = canvasRef.current;
      const img = imgs[idx];
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.min(cw / FRAME_W, ch / FRAME_H);
      const w = FRAME_W * scale;
      const h = FRAME_H * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, w, h);
    };

    const loadBatch = async (start: number) => {
      const end = Math.min(start + 20, FRAME_COUNT);
      await Promise.all(
        Array.from({ length: end - start }, (_, k) => {
          const idx = start + k;
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = `/frames3d/${frameName(idx)}.jpg`;
            img.decoding = "async";
            img.onload = () => {
              if (cancelled) return;
              imgs[idx] = img;
              setLoadedCount((c) => c + 1);
              if (!drawnFirst) {
                drawnFirst = true;
                drawFrame(idx);
              }
              resolve();
            };
            img.onerror = () => resolve();
          });
        })
      );
      if (!cancelled && end < FRAME_COUNT) {
        setTimeout(() => loadBatch(end), 30);
      } else if (!cancelled) {
        setReady(true);
      }
    };

    imagesRef.current = imgs;
    loadBatch(0);

    return () => {
      cancelled = true;
    };
  }, []);

  // Resize the canvas to match viewport (with DPR awareness).
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total > 0 ? scrolled / total : 0;
        const idx = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(progress * (FRAME_COUNT - 1)))
        );
        const img = imagesRef.current[idx];
        if (img && img.complete) {
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          const cw = canvas.width;
          const ch = canvas.height;
          const scale = Math.min(cw / FRAME_W, ch / FRAME_H);
          const w2 = FRAME_W * scale;
          const h2 = FRAME_H * scale;
          const x = (cw - w2) / 2;
          const y = (ch - h2) / 2;
          ctx.clearRect(0, 0, cw, ch);
          ctx.drawImage(img, x, y, w2, h2);
        }
      });
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, []);

  // Scroll listener — draws the correct frame based on scroll position.
  useEffect(() => {
    let raf = 0;
    let lastIdx = -1;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        const progressEl = progressRef.current;
        if (!section || !canvas) return;

        const rect = section.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total > 0 ? scrolled / total : 0;
        const idx = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(progress * (FRAME_COUNT - 1)))
        );

        if (progressEl) {
          progressEl.style.transform = `scaleX(${progress})`;
        }

        if (idx === lastIdx) return;
        lastIdx = idx;

        const img = imagesRef.current[idx];
        if (!img || !img.complete || img.naturalWidth === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const cw = canvas.width;
        const ch = canvas.height;
        const scale = Math.min(cw / FRAME_W, ch / FRAME_H);
        const w = FRAME_W * scale;
        const h = FRAME_H * scale;
        const x = (cw - w) / 2;
        const y = (ch - h) / 2;
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, w, h);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const pct = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <section className="v10-frame-section" ref={sectionRef} aria-label="3D AC unit scroll animation">
      <div className="v10-frame-sticky">
        <canvas
          ref={canvasRef}
          className="v10-frame-canvas"
          width={FRAME_W}
          height={FRAME_H}
          aria-hidden="true"
        />
        <div className="v10-frame-vignette" aria-hidden />
        <div className="v10-frame-grain" aria-hidden />
        {!ready && (
          <div className="v10-frame-loader" aria-live="polite">
            <div className="v10-frame-loader-bar">
              <div style={{ width: `${pct}%` }} />
            </div>
            <span>Loading 3D sequence · {pct}%</span>
          </div>
        )}
        <div className="v10-frame-progress" aria-hidden>
          <div className="v10-frame-progress-fill" ref={progressRef} />
        </div>
        <div className="v10-frame-cue" aria-hidden>
          <span>Scroll to scrub the 3D sequence</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <rect x="0.5" y="0.5" width="13" height="21" rx="6.5" stroke="currentColor" />
            <circle cx="7" cy="6" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Hero content overlays the canvas at the top of the scroll runway */}
        {children}
      </div>
    </section>
  );
}
