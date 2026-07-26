"use client";

import CelsiusLogo from "./CelsiusLogo";

const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Supply & Installation", href: "#services" },
      { label: "Service & Maintenance", href: "#services" },
      { label: "Gas Leak Repair", href: "#case-studies" },
      { label: "VRF Systems", href: "#solutions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Domestic", href: "#solutions" },
      { label: "Commercial", href: "#solutions" },
      { label: "Industrial", href: "#solutions" },
      { label: "Selection Guide", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "CEO Profile", href: "#ceo" },
      { label: "Vision & Mission", href: "#ceo" },
      { label: "Case Studies", href: "#case-studies" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+94 777 136 560", href: "tel:+94777136560" },
      { label: "ijazniyaz1234@gmail.com", href: "mailto:ijazniyaz1234@gmail.com" },
      { label: "Kalubowila, Dehiwala", href: "#contact" },
      { label: "Book Demo", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[rgba(30,50,90,0.95)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <CelsiusLogo variant="light" />
            <p className="text-sm text-white/70 leading-relaxed font-normal max-w-sm">
              Experts in keeping things cool. Celsius is a premier air
              conditioning company in Colombo, Sri Lanka — supplying, installing,
              and servicing high-quality HVAC systems since 2019.
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-[11px] uppercase tracking-wider text-white/50">
                Operating Hours
              </span>
              <span className="text-sm text-white/85 font-normal">
                Monday – Saturday · 8:30am – 6:30pm
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="text-[11px] uppercase tracking-wider text-white/50">
                  {col.title}
                </span>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm text-white/75 hover:text-white transition-colors font-normal"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="text-[12px] text-white/55 font-normal">
            © {new Date().getFullYear()} Celsius — Aircon Celsius Pvt (Ltd).
            All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[12px] text-white/55 font-normal">
              Colombo, Sri Lanka
            </span>
            <span className="text-[12px] text-white/40">·</span>
            <span className="text-[12px] text-white/55 font-normal italic">
              Where cooling meets craftsmanship.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
