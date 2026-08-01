"use client";

export default function V4Footer() {
  return (
    <footer className="v4-footer">
      <div className="v4-container">
        <div className="v4-footer-inner">
          <div className="v4-footer-top">
            <div>
              <div className="v4-footer-mega">
                Celsius<span className="v4-footer-mega-italic">.</span>
              </div>
              <p className="v4-body" style={{ marginTop: "1rem", maxWidth: "30rem" }}>
                Sri Lanka's premier HVAC studio — engineering comfort for homes, businesses,
                and industry since 2019.
              </p>
            </div>
            <div>
              <a
                href="#v4-contact"
                className="v4-btn v4-btn-primary"
                style={{ marginBottom: "1rem" }}
              >
                Start a project →
              </a>
            </div>
          </div>
          <div className="v4-footer-bottom">
            <span>© {new Date().getFullYear()} Celsius · Aircon Celsius Pvt (Ltd)</span>
            <div className="v4-footer-links">
              <a href="https://github.com/Zaahidhacker/celsius-website" className="v4-footer-link" target="_blank" rel="noopener">
                GitHub
              </a>
              <a href="/v2" className="v4-footer-link">V2</a>
              <a href="/v3" className="v4-footer-link">V3</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
