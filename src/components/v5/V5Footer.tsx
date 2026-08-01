"use client";

export default function V5Footer() {
  return (
    <footer className="v5-footer">
      <div className="v5-container">
        <div className="v5-footer-top">
          <div>
            <div className="v5-footer-brand">
              <span className="v5-footer-brand-mark">C</span>
              Celsius
            </div>
            <p className="v5-footer-tagline">
              Sri Lanka&apos;s premier HVAC studio — engineering comfort for homes,
              businesses, and industry since 2019.
            </p>
          </div>
          <div>
            <h4 className="v5-footer-col-title">Services</h4>
            <a href="#v5-services" className="v5-footer-link">Supply & install</a>
            <a href="#v5-services" className="v5-footer-link">Service & maintenance</a>
            <a href="#v5-services" className="v5-footer-link">Gas & breakdown</a>
            <a href="#v5-services" className="v5-footer-link">VRF & industrial</a>
          </div>
          <div>
            <h4 className="v5-footer-col-title">Company</h4>
            <a href="#v5-about" className="v5-footer-link">About</a>
            <a href="#v5-process" className="v5-footer-link">Process</a>
            <a href="#v5-testimonial" className="v5-footer-link">Testimonial</a>
            <a href="#v5-contact" className="v5-footer-link">Contact</a>
          </div>
          <div>
            <h4 className="v5-footer-col-title">Get in touch</h4>
            <a href="tel:+94777136560" className="v5-footer-link">+94 777 136 560</a>
            <a href="mailto:ijazniyaz1234@gmail.com" className="v5-footer-link">ijazniyaz1234@gmail.com</a>
            <span className="v5-footer-link" style={{ cursor: "default" }}>Kalubowila, Colombo</span>
            <span className="v5-footer-link" style={{ cursor: "default" }}>Mon – Sat · 8:30am – 6:30pm</span>
          </div>
        </div>
        <div className="v5-footer-bottom">
          <span>© {new Date().getFullYear()} Celsius · Aircon Celsius Pvt (Ltd)</span>
          <div className="v5-footer-bottom-links">
            <a href="/" className="v5-footer-link" style={{ padding: 0 }}>V1</a>
            <a href="/v2" className="v5-footer-link" style={{ padding: 0 }}>V2</a>
            <a href="/v3" className="v5-footer-link" style={{ padding: 0 }}>V3</a>
            <a href="/v4" className="v5-footer-link" style={{ padding: 0 }}>V4</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
