import type { Metadata } from "next";
import V3Navbar from "@/components/v3/V3Navbar";
import V3Hero from "@/components/v3/V3Hero";
import V3About from "@/components/v3/V3About";
import V3Stats from "@/components/v3/V3Stats";
import V3Services from "@/components/v3/V3Services";
import V3Brands from "@/components/v3/V3Brands";
import V3Solutions from "@/components/v3/V3Solutions";
import V3Ceo from "@/components/v3/V3Ceo";
import V3CaseStudies from "@/components/v3/V3CaseStudies";
import V3Contact from "@/components/v3/V3Contact";
import V3Footer from "@/components/v3/V3Footer";

export const metadata: Metadata = {
  title: "Celsius V3 — Tactical Telemetry",
  description:
    "Celsius V3 — a tactical telemetry / dark tech redesign. OLED black, monospace metadata, hazard amber accent. Completely distinct from V1 and V2.",
};

export default function V3Page() {
  return (
    <main className="v3-root relative min-h-screen flex flex-col">
      <V3Navbar />
      <V3Hero />
      <V3About />
      <V3Stats />
      <V3Services />
      <V3Brands />
      <V3Solutions />
      <V3Ceo />
      <V3CaseStudies />
      <V3Contact />
      <V3Footer />
    </main>
  );
}
