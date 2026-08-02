"use client";

import { useEffect, useState } from "react";

/**
 * V6 Loader — Inspired by shopify.design intro.
 * Shows "Celsius." wordmark with pulsing amber dot, fades after 1.6s.
 */
export default function V6Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`v6-loader ${hidden ? "is-hidden" : ""}`} aria-hidden={hidden}>
      <span className="v6-loader-word">Celsius.</span>
    </div>
  );
}
