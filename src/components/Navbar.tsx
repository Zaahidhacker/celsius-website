"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import CelsiusLogo from "./CelsiusLogo";

const navItems: { label: string; hasDropdown?: boolean; href: string }[] = [
  { label: "Services", hasDropdown: true, href: "#services" },
  { label: "Products", hasDropdown: false, href: "#products" },
  { label: "Solutions", hasDropdown: true, href: "#solutions" },
  { label: "Projects", hasDropdown: false, href: "#case-studies" },
  { label: "About", hasDropdown: false, href: "#about" },
  { label: "Contact", hasDropdown: true, href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      {/* Left side — spacer for centering (logo on desktop) */}
      <div className="flex-1 hidden md:block">
        <a href="#top" aria-label="Celsius home">
          <CelsiusLogo />
        </a>
      </div>

      {/* Center menu */}
      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            <a href={item.href}>{item.label}</a>
            {item.hasDropdown && (
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile logo */}
      <div className="md:hidden">
        <a href="#top" aria-label="Celsius home">
          <span className="font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">
            Celsius
          </span>
        </a>
      </div>

      {/* Right — Book Demo / Get Quote button */}
      <div className="flex-1 flex justify-end">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.a>
      </div>
    </nav>
  );
}
