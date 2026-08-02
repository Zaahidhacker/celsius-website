"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Global floating version switcher.
 *
 * Always visible in the bottom-right corner of every page (V1–V6).
 * Collapses to a single pill showing the active version, expands on hover/focus
 * to reveal all six versions. Uses a premium dark-glass aesthetic that doesn't
 * conflict with any version's own navbar design.
 *
 * Why this exists: V4/V5/V6 navbars have no in-nav version switcher, and V3's
 * pill is missing V4–V6. This guarantees the user can always switch versions
 * from any page without hunting for a control.
 */
const VERSIONS = [
  { label: "V1", href: "/", tag: "Editorial" },
  { label: "V2", href: "/v2", tag: "Magazine" },
  { label: "V3", href: "/v3", tag: "Atelier" },
  { label: "V4", href: "/v4", tag: "Studio" },
  { label: "V5", href: "/v5", tag: "Modern" },
  { label: "V6", href: "/v6", tag: "Editorial+" },
];

export default function GlobalVersionSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const active =
    VERSIONS.find((v) => v.href === pathname) ??
    VERSIONS.find((v) => pathname.startsWith(v.href + "/")) ??
    VERSIONS[0];

  return (
    <div
      className="gvs-root"
      data-open={open ? "true" : "false"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="gvs-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Switch design version (current: ${active.label})`}
      >
        <span className="gvs-trigger-dot" aria-hidden />
        <span className="gvs-trigger-label">
          <span className="gvs-trigger-version">{active.label}</span>
          <span className="gvs-trigger-text">Versions</span>
        </span>
        <svg
          className="gvs-trigger-chevron"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="gvs-panel" role="listbox" aria-label="Design versions">
        <div className="gvs-panel-header">
          <span className="gvs-panel-eyebrow">Design Versions</span>
          <span className="gvs-panel-count">6 builds</span>
        </div>
        <ul className="gvs-list">
          {VERSIONS.map((v) => {
            const isActive = v.label === active.label;
            return (
              <li key={v.label}>
                <Link
                  href={v.href}
                  className={`gvs-item ${isActive ? "is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="gvs-item-badge">{v.label}</span>
                  <span className="gvs-item-meta">
                    <span className="gvs-item-label">Version {v.label.replace("V", "")}</span>
                    <span className="gvs-item-tag">{v.tag}</span>
                  </span>
                  {isActive && (
                    <span className="gvs-item-active-mark" aria-hidden>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="gvs-panel-footer">
          <span className="gvs-panel-footer-dot" aria-hidden />
          <span>Celsius · HVAC Design System</span>
        </div>
      </div>
    </div>
  );
}
