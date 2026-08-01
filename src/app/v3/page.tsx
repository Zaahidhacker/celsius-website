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
  title: "V3 — Climate Atelier (Premium Edition)",
  description:
    "Celsius V3 — a premium HVAC studio redesign. Cool glacial canvas, sky-blue accent, Fraunces editorial serif. Premium air conditioning supply, install & service across Sri Lanka since 2019.",
  alternates: { canonical: "/v3" },
  openGraph: {
    title: "Celsius V3 — Climate Atelier (Premium Edition)",
    description:
      "Premium HVAC studio redesign of the Celsius website. Air conditioning supply, install & service across Sri Lanka.",
    url: "/v3",
    type: "website",
  },
};

export default function V3Page() {
  return (
    <main className="v3-root relative min-h-screen flex flex-col">
      <V3Navbar />
      <V3Hero />
      <div className="v3-cva"><V3About /></div>
      <div className="v3-cva"><V3Stats /></div>
      <div className="v3-cva"><V3Services /></div>
      <div className="v3-cva"><V3Brands /></div>
      <div className="v3-cva"><V3Solutions /></div>
      <div className="v3-cva"><V3Ceo /></div>
      <div className="v3-cva"><V3CaseStudies /></div>
      <div className="v3-cva"><V3Contact /></div>
      <V3Footer />
    </main>
  );
}
