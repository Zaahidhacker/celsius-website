"use client";

import { useEffect, useState } from "react";

/**
 * V6 Loader — Inspired by shopify.design intro.
 * Shows the real Celsius company logo with a fade-in + scale animation,
 * then fades the whole overlay out after ~1.8s.
 *
 * Logo asset: /celsius-logo-navy.png (1582×678 PNG, navy on transparent)
 * Used because the loader background is white — navy variant gives the
 * highest contrast and matches the brand identity.
 */
export default function V6Loader() {
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on next frame so the .is-shown class
    // transition kicks in (otherwise the initial state is skipped).
    const raf = requestAnimationFrame(() => setShown(true));
    const t = setTimeout(() => setHidden(true), 1800);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={`v6-loader ${hidden ? "is-hidden" : ""} ${shown ? "is-shown" : ""}`}
      aria-hidden={hidden}
    >
      <div className="v6-loader-inner">
        <img
          src="/celsius-logo-navy.png"
          alt="Celsius — Experts in keeping things cool"
          className="v6-loader-logo"
          width={396}
          height={170}
        />
        <span className="v6-loader-progress" aria-hidden="true" />
      </div>
    </div>
  );
}
