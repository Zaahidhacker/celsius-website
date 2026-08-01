"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    idx: "01",
    title: "Supply & Installation",
    desc: "Premium branded AC units, expertly installed for any sector.",
    img: "https://images.unsplash.com/photo-1631545806609-29ea0c81e6e8?auto=format&fit=crop&w=600&q=70",
  },
  {
    idx: "02",
    title: "Service & Maintenance",
    desc: "Proactive maintenance plans that extend system lifespan.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=70",
  },
  {
    idx: "03",
    title: "Gas Leak & Breakdown",
    desc: "Skilled diagnostics for leaks, faults, and refrigeration issues.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=70",
  },
  {
    idx: "04",
    title: "VRF & Industrial",
    desc: "Variable Refrigerant Flow for plants, data centres, and processing.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=70",
  },
  {
    idx: "05",
    title: "Smart Integration",
    desc: "Wi-Fi enabled units with app control and home automation.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=70",
  },
  {
    idx: "06",
    title: "Air Purification",
    desc: "nanoe™ X, HEPA, and UV-C solutions for healthier indoor air.",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=70",
  },
];

/**
 * V4 Services — Splide auto-scroll carousel of service cards.
 * Inspired by overlay.com's horizontal scrolling galleries.
 */
export default function V4Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v4-services-head > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );

      // Horizontal scrub on the marquee row
      const track = root.current?.querySelector(".v4-services-track");
      if (track) {
        const totalWidth = (track as HTMLElement).scrollWidth - window.innerWidth;
        if (totalWidth > 0) {
          gsap.to(track, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=1800",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });
        }
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="v4-services" ref={root} className="v4-section" style={{ padding: 0 }}>
      <div className="v4-services-head" style={{ padding: "6rem 1.5rem 3rem", maxWidth: 1440, margin: "0 auto" }}>
        <div className="v4-section-head-row">
          <span className="v4-eyebrow">What we do</span>
          <span className="v4-eyebrow">06 services</span>
        </div>
        <h2 className="v4-h2" style={{ marginTop: "1.5rem", maxWidth: "40rem" }}>
          A complete cooling studio — supply, install, service, repair.
        </h2>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="v4-services-track" style={{ display: "flex", gap: "1.5rem", padding: "0 1.5rem", width: "max-content" }}>
          {services.concat(services).map((s, i) => (
            <article
              key={i}
              className="v4-splide-card"
              style={{ width: "clamp(280px, 30vw, 380px)", flexShrink: 0 }}
            >
              <div style={{ overflow: "hidden", height: "70%" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="v4-splide-card-body">
                <span className="v4-splide-card-idx">{s.idx}</span>
                <h3 className="v4-splide-card-title">{s.title}</h3>
                <p className="v4-splide-card-desc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
