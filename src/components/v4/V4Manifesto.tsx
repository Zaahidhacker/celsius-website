"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * V4 Manifesto — Overlay-style centered editorial statement
 * with word-by-word reveal as you scroll (SplitText-like, manual).
 */
export default function V4Manifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v4-manifesto-word",
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 0.8,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const text =
    "We didn't build Celsius to sell air conditioners. We built it to give Sri Lankan homes and businesses the comfort they deserve — engineered with precision, delivered with integrity, and maintained with care that lasts decades.";

  const words = text.split(" ");

  return (
    <section ref={root} className="v4-manifesto">
      <div className="v4-container">
        <p className="v4-manifesto-text">
          {words.map((word, i) => (
            <span
              key={i}
              className={`v4-manifesto-word ${word.startsWith("precision") || word.startsWith("integrity") ? "v4-italic" : ""}`}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
