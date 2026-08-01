"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function V5Contact() {
  const root = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".v5-contact-info > *, .v5-contact-form",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
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
    <section id="v5-contact" ref={root} className="v5-section v5-contact">
      <div className="v5-container">
        <div className="v5-section-head">
          <div className="v5-section-head-row">
            <span className="v5-eyebrow-mono">/ Contact</span>
            <span className="v5-section-head-meta">48-hour response</span>
          </div>
          <h2 className="v5-h2" style={{ maxWidth: "44rem" }}>
            Tell us about your space —{" "}
            <span className="v5-fade">we&apos;ll handle the rest.</span>
          </h2>
        </div>

        <div className="v5-contact-grid">
          <div className="v5-contact-info">
            <div className="v5-contact-row">
              <span className="v5-contact-label">Phone</span>
              <a href="tel:+94777136560" className="v5-contact-value">+94 777 136 560</a>
            </div>
            <div className="v5-contact-row">
              <span className="v5-contact-label">Email</span>
              <a href="mailto:ijazniyaz1234@gmail.com" className="v5-contact-value">ijazniyaz1234@gmail.com</a>
            </div>
            <div className="v5-contact-row">
              <span className="v5-contact-label">Studio</span>
              <span className="v5-contact-value">No. 47/3 Srimaha Vihara Road, Kalubowila</span>
            </div>
            <div className="v5-contact-row">
              <span className="v5-contact-label">Hours</span>
              <span className="v5-contact-value">Mon – Sat · 8:30am – 6:30pm</span>
            </div>
            <div className="v5-contact-row">
              <span className="v5-contact-label">Emergency</span>
              <span className="v5-contact-value">24/7 for breakdowns · same call number</span>
            </div>
          </div>

          <form className="v5-contact-form" onSubmit={handleSubmit}>
            <div className="v5-form-row">
              <label className="v5-form-label" htmlFor="v5-name">Your name</label>
              <input id="v5-name" type="text" className="v5-form-input" required placeholder="Ijaz N." />
            </div>
            <div className="v5-form-row">
              <label className="v5-form-label" htmlFor="v5-phone">Phone</label>
              <input id="v5-phone" type="tel" className="v5-form-input" required placeholder="+94 77 123 4567" />
            </div>
            <div className="v5-form-row">
              <label className="v5-form-label" htmlFor="v5-sector">Sector</label>
              <select id="v5-sector" className="v5-form-select" defaultValue="domestic">
                <option value="domestic">Domestic</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <div className="v5-form-row">
              <label className="v5-form-label" htmlFor="v5-msg">What do you need?</label>
              <textarea
                id="v5-msg"
                className="v5-form-textarea"
                placeholder="Tell us about your space, the rooms you need cooled, any existing units…"
              />
            </div>
            <button
              type="submit"
              className="v5-btn v5-btn-primary"
              style={{ marginTop: "0.5rem", justifyContent: "center" }}
            >
              {sent ? "Thank you — we'll be in touch ✓" : "Send brief →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
