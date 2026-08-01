"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function V4Contact() {
  const root = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v4-contact > .v4-container > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="v4-contact" ref={root} className="v4-contact">
      <div className="v4-container">
        <div className="v4-contact-inner">
          <div>
            <span className="v4-eyebrow v4-eyebrow-light">Talk to us</span>
            <h2 className="v4-h2" style={{ marginTop: "1.5rem" }}>
              Let's engineer your <span style={{ fontStyle: "italic", color: "var(--v4-amber)" }}>cooling</span>.
            </h2>
            <p className="v4-lede v4-contact-lede">
              From a single split unit to a full VRF install — tell us about your space. We'll
              send a specialist within 48 hours.
            </p>
            <div className="v4-contact-info">
              <div className="v4-contact-row">
                <span className="v4-contact-label">Phone</span>
                <a href="tel:+94777136560" className="v4-contact-value">+94 777 136 560</a>
              </div>
              <div className="v4-contact-row">
                <span className="v4-contact-label">Email</span>
                <a href="mailto:ijazniyaz1234@gmail.com" className="v4-contact-value">ijazniyaz1234@gmail.com</a>
              </div>
              <div className="v4-contact-row">
                <span className="v4-contact-label">Studio</span>
                <span className="v4-contact-value">No. 47/3 Srimaha Vihara Road, Kalubowila</span>
              </div>
              <div className="v4-contact-row">
                <span className="v4-contact-label">Hours</span>
                <span className="v4-contact-value">Mon – Sat · 8:30am – 6:30pm</span>
              </div>
            </div>
          </div>
          <form className="v4-contact-form" onSubmit={handleSubmit}>
            <div className="v4-form-row">
              <label className="v4-form-label" htmlFor="v4-name">Your name</label>
              <input id="v4-name" type="text" className="v4-form-input" required placeholder="Ijaz N." />
            </div>
            <div className="v4-form-row">
              <label className="v4-form-label" htmlFor="v4-phone">Phone</label>
              <input id="v4-phone" type="tel" className="v4-form-input" required placeholder="+94 77 123 4567" />
            </div>
            <div className="v4-form-row">
              <label className="v4-form-label" htmlFor="v4-sector">Sector</label>
              <select id="v4-sector" className="v4-form-input" defaultValue="domestic">
                <option value="domestic">Domestic</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <div className="v4-form-row">
              <label className="v4-form-label" htmlFor="v4-msg">What do you need?</label>
              <textarea
                id="v4-msg"
                className="v4-form-textarea"
                placeholder="Tell us about your space, the rooms you need cooled, any existing units…"
              />
            </div>
            <button type="submit" className="v4-btn v4-btn-amber" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
              {sent ? "Thank you — we'll be in touch ✓" : "Send brief →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
