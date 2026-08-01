"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Compact pill-style V1 | V2 | V3 | V4 | V5 switcher for the navbar.
 * Highlights the active version. Clicking navigates to the other route.
 * Theme: "light" for dark backgrounds (V1 hero), "dark" for light backgrounds.
 */
export default function VersionSwitcher({ theme = "light" }: { theme?: "light" | "dark" }) {
  const pathname = usePathname();
  const versions = [
    { label: "V1", href: "/" },
    { label: "V2", href: "/v2" },
    { label: "V3", href: "/v3" },
    { label: "V4", href: "/v4" },
    { label: "V5", href: "/v5" },
  ];
  const active = versions.find(v => v.href === pathname)?.label ?? "V1";

  const base = "relative px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors rounded-full";
  const inactive = theme === "dark"
    ? "text-white/60 hover:text-white"
    : "text-[rgba(15,47,99,0.55)] hover:text-[rgba(15,47,99,0.95)]";
  const activeStyle = "bg-[var(--accent-amber)] text-[var(--brand-deep)] shadow-[0_2px_8px_rgba(245,166,35,0.4)]";

  return (
    <div
      className={`inline-flex items-center gap-0.5 p-1 rounded-full border ${
        theme === "dark"
          ? "bg-white/5 border-white/15 backdrop-blur-md"
          : "bg-white/70 border-[rgba(15,47,99,0.1)] backdrop-blur-md"
      }`}
    >
      {versions.map(v => (
        <Link
          key={v.label}
          href={v.href}
          className={`${base} ${v.label === active ? activeStyle : inactive}`}
          aria-current={v.label === active ? "page" : undefined}
        >
          {v.label}
        </Link>
      ))}
    </div>
  );
}
