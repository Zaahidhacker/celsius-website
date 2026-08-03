"use client";

import { useState } from "react";

/**
 * V7 Contact — split layout, navy info panel + paper form.
 * Form is uncontrolled on submit (no backend) — shows success state.
 */
export default function V7Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="v7-section v7-section--paper" id="contact">
      <div className="v7-container">
        <div
          style={{
            marginBottom: "clamp(40px, 5vw, 72px)",
            paddingBottom: "2rem",
            borderBottom: "2px solid var(--v7-navy)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "2rem",
            alignItems: "end",
          }}
        >
          <div>
            <span className="v7-eyebrow">Get in touch</span>
            <span className="v7-numeral" style={{ fontSize: "clamp(80px, 12vw, 160px)", marginTop: "0.5rem" }}>
              →
            </span>
          </div>
          <div>
            <h2 className="v7-h2" style={{ marginBottom: "1rem" }}>
              Book a site visit. <span className="v7-italic">No callout fee.</span>
            </h2>
            <p className="v7-lede" style={{ maxWidth: "55ch" }}>
              Fill in the form, call, or WhatsApp us. We respond within one
              business hour during working days (9:00 - 18:00 LK).
            </p>
          </div>
        </div>

        <div className="v7-contact-grid">
          {/* Info panel */}
          <div className="v7-contact-info">
            <div className="v7-contact-info-row">
              <span className="v7-contact-info-label">Phone</span>
              <a className="v7-contact-info-value" href="tel:+9477300200">+94 77 300 2000</a>
            </div>
            <div className="v7-contact-info-row">
              <span className="v7-contact-info-label">WhatsApp</span>
              <a className="v7-contact-info-value" href="https://wa.me/9477300200" target="_blank" rel="noopener noreferrer">+94 77 300 2000</a>
            </div>
            <div className="v7-contact-info-row">
              <span className="v7-contact-info-label">Email</span>
              <a className="v7-contact-info-value" href="mailto:hello@celsius.lk">hello@celsius.lk</a>
            </div>
            <div className="v7-contact-info-row">
              <span className="v7-contact-info-label">Showroom</span>
              <span className="v7-contact-info-value">No. 142, Galle Road, Colombo 04</span>
            </div>
            <div className="v7-contact-info-row">
              <span className="v7-contact-info-label">Hours</span>
              <span className="v7-contact-info-value">Mon - Sat · 9:00 - 18:00</span>
            </div>
            <div className="v7-contact-info-row">
              <span className="v7-contact-info-label">Coverage</span>
              <span className="v7-contact-info-value">Colombo · Gampaha · Kalutara · Kandy</span>
            </div>
          </div>

          {/* Form */}
          <div className="v7-contact-form">
            {submitted ? (
              <div
                style={{
                  border: "2px solid var(--v7-mint)",
                  background: "rgba(45, 165, 90, 0.08)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--v7-serif)",
                    fontSize: 28,
                    color: "var(--v7-mint)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Got it.
                </p>
                <p style={{ fontSize: 15, color: "var(--v7-ink)" }}>
                  We will call you back within one business hour during working
                  hours. For urgent enquiries, call or WhatsApp{" "}
                  <a href="tel:+9477300200" style={{ color: "var(--v7-navy)", textDecoration: "underline" }}>
                    +94 77 300 2000
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                noValidate
              >
                <div className="v7-contact-field">
                  <label htmlFor="v7-name">Your name</label>
                  <input id="v7-name" name="name" type="text" required placeholder="e.g. Anjali Perera" />
                </div>
                <div className="v7-contact-field">
                  <label htmlFor="v7-phone">Phone</label>
                  <input id="v7-phone" name="phone" type="tel" required placeholder="e.g. 077 300 2000" />
                </div>
                <div className="v7-contact-field">
                  <label htmlFor="v7-type">Job type</label>
                  <select id="v7-type" name="type" defaultValue="residential">
                    <option value="residential">Residential install</option>
                    <option value="commercial">Commercial install</option>
                    <option value="service">Servicing</option>
                    <option value="repair">Repair</option>
                    <option value="vrf">VRF / Industrial</option>
                  </select>
                </div>
                <div className="v7-contact-field">
                  <label htmlFor="v7-message">Brief</label>
                  <textarea
                    id="v7-message"
                    name="message"
                    rows={4}
                    placeholder="Number of rooms, approximate area, current AC unit, preferred brand..."
                  />
                </div>
                <button type="submit" className="v7-btn" style={{ width: "100%", justifyContent: "center" }}>
                  Send enquiry
                  <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
