"use client";

/**
 * V10Contact — contact section with company details + form-like CTA.
 */

import { company } from "@/lib/content";

export default function V10Contact() {
  return (
    <section className="v10-contact" id="contact">
      <div className="v10-section-inner">
        <div className="v10-contact-grid">
          <div className="v10-contact-left">
            <span className="v10-eyebrow">Start a conversation</span>
            <h2 className="v10-h2">
              Tell us about
              <br />
              <em>your space.</em>
            </h2>
            <p className="v10-lede">
              We&apos;ll spec the right unit, schedule the install, and keep it
              running for years. No call centres, no sub-contractors.
            </p>
          </div>

          <div className="v10-contact-right">
            <a href={company.phoneHref} className="v10-contact-row">
              <span className="v10-contact-label">Phone</span>
              <span className="v10-contact-value">{company.phone}</span>
            </a>
            <a href={company.emailHref} className="v10-contact-row">
              <span className="v10-contact-label">Email</span>
              <span className="v10-contact-value">{company.email}</span>
            </a>
            <div className="v10-contact-row">
              <span className="v10-contact-label">Workshop</span>
              <span className="v10-contact-value">
                {company.address.map((l) => (
                  <span key={l} style={{ display: "block" }}>
                    {l}
                  </span>
                ))}
              </span>
            </div>
            <div className="v10-contact-row">
              <span className="v10-contact-label">Hours</span>
              <span className="v10-contact-value">{company.hours}</span>
            </div>

            <a href={company.phoneHref} className="v10-btn v10-btn--primary v10-btn--block">
              Book a site visit →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
