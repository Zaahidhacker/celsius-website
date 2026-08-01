"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "01",
    title: "Site survey",
    body: "We visit your space, measure every room, and assess load, ducting, and electrical requirements.",
  },
  {
    num: "02",
    title: "System design",
    body: "We spec the right units from 9 premium brands — sized for your climate, usage, and budget.",
  },
  {
    num: "03",
    title: "Expert install",
    body: "Licensed technicians install clean, on schedule, with full electrical and refrigerant compliance.",
  },
  {
    num: "04",
    title: "Ongoing care",
    body: "Maintenance plans, priority breakdown response, and a single point of contact for life.",
  },
];

/**
 * V5 Process — Airstead-style 4-column numbered steps with top borders.
 */
export default function V5Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-process-step",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="v5-process" ref={root} className="v5-section v5-section-cream">
      <div className="v5-container">
        <div className="v5-section-head">
          <div className="v5-section-head-row">
            <span className="v5-eyebrow-mono">/ How we work</span>
            <span className="v5-section-head-meta">04 steps</span>
          </div>
          <h2 className="v5-h2" style={{ maxWidth: "44rem" }}>
            From first call to{" "}
            <span className="v5-fade">long-term comfort.</span>
          </h2>
        </div>

        <div className="v5-process">
          {steps.map((s, i) => (
            <div key={i} className="v5-process-step">
              <span className="v5-process-step-num">{s.num}</span>
              <h3 className="v5-process-step-title">{s.title}</h3>
              <p className="v5-process-step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
