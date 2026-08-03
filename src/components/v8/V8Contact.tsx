"use client";

import { useState } from "react";

export default function V8Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="v8-section v8-section--paper" id="contact">
      <div className="v8-container">
        <div style={{ marginBottom: "clamp(48px, 6vw, 80px)", maxWidth: "65ch" }}>
          <span className="v8-eyebrow">Get in touch</span>
          <h2 className="v8-h2" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Book a site visit. <span className="v8-italic">No callout fee.</span>
          </h2>
          <p className="v8-italic" style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5 }}>
            Fill in the form, call, or WhatsApp us. We respond within one
            business hour during working days (9:00 - 18:00 LK).
          </p>
        </div>

        <div className="v8-contact">
          {/* Info — navy panel */}
          <div className="v8-section--navy" style={{ padding: "2rem 2.5rem", borderRadius: 16 }}>
            <div className="v8-contact-info-block">
              <span className="v8-contact-info-label">Phone</span>
              <a className="v8-contact-info-value" href="tel:+9477300200">+94 77 300 2000</a>
            </div>
            <div className="v8-contact-info-block">
              <span className="v8-contact-info-label">WhatsApp</span>
              <a className="v8-contact-info-value" href="https://wa.me/9477300200" target="_blank" rel="noopener noreferrer">+94 77 300 2000</a>
            </div>
            <div className="v8-contact-info-block">
              <span className="v8-contact-info-label">Email</span>
              <a className="v8-contact-info-value" href="mailto:hello@celsius.lk">hello@celsius.lk</a>
            </div>
            <div className="v8-contact-info-block">
              <span className="v8-contact-info-label">Showroom</span>
              <span className="v8-contact-info-value">No. 142, Galle Road, Colombo 04</span>
            </div>
            <div className="v8-contact-info-block">
              <span className="v8-contact-info-label">Hours</span>
              <span className="v8-contact-info-value">Mon - Sat · 9:00 - 18:00</span>
            </div>
            <div className="v8-contact-info-block">
              <span className="v8-contact-info-label">Coverage</span>
              <span className="v8-contact-info-value">Colombo · Gampaha · Kalutara · Kandy</span>
            </div>
          </div>

          {/* Form */}
          <div className="v8-form">
            {submitted ? (
              <div
                style={{
                  border: "1px solid var(--v8-mint)",
                  background: "rgba(45, 165, 90, 0.08)",
                  padding: "2rem",
                  borderRadius: 12,
                  textAlign: "center",
                }}
              >
                <p style={{ fontFamily: "var(--v8-serif)", fontSize: 28, color: "var(--v8-mint)", marginBottom: "0.5rem" }}>
                  Got it.
                </p>
                <p style={{ fontSize: 15, color: "var(--v8-ink)" }}>
                  We will call you back within one business hour during working
                  hours. For urgent enquiries, call or WhatsApp{" "}
                  <a href="tel:+9477300200" style={{ color: "var(--v8-navy)", textDecoration: "underline" }}>
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
                <div className="v8-form-field">
                  <label htmlFor="v8-name">Your name</label>
                  <input id="v8-name" name="name" type="text" required placeholder="e.g. Anjali Perera" />
                </div>
                <div className="v8-form-field">
                  <label htmlFor="v8-phone">Phone</label>
                  <input id="v8-phone" name="phone" type="tel" required placeholder="e.g. 077 300 2000" />
                </div>
                <div className="v8-form-field">
                  <label htmlFor="v8-type">Job type</label>
                  <select id="v8-type" name="type" defaultValue="residential">
                    <option value="residential">Residential install</option>
                    <option value="commercial">Commercial install</option>
                    <option value="service">Servicing</option>
                    <option value="repair">Repair</option>
                    <option value="vrf">VRF / Industrial</option>
                  </select>
                </div>
                <div className="v8-form-field">
                  <label htmlFor="v8-message">Brief</label>
                  <textarea
                    id="v8-message"
                    name="message"
                    rows={4}
                    placeholder="Number of rooms, approximate area, current AC unit, preferred brand..."
                  />
                </div>
                <button type="submit" className="v8-btn" style={{ width: "100%", justifyContent: "center" }}>
                  Send enquiry <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
