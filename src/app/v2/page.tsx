import type { Metadata } from "next";
import V2Navbar from "@/components/v2/V2Navbar";
import V2Hero from "@/components/v2/V2Hero";
import V2About from "@/components/v2/V2About";
import V2Stats from "@/components/v2/V2Stats";
import V2Services from "@/components/v2/V2Services";
import V2Brands from "@/components/v2/V2Brands";
import V2Solutions from "@/components/v2/V2Solutions";
import V2Ceo from "@/components/v2/V2Ceo";
import V2CaseStudies from "@/components/v2/V2CaseStudies";
import V2Testimonials from "@/components/v2/V2Testimonials";
import V2Contact from "@/components/v2/V2Contact";
import V2Footer from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "V2 — Studio Edition (Editorial Redesign)",
  description:
    "Celsius V2 — a complete editorial redesign of the Sri Lankan HVAC company website. Playfair Display typography, blue/white palette with amber accents. Premium AC supply, install & service.",
  alternates: { canonical: "/v2" },
  openGraph: {
    title: "Celsius V2 — Studio Edition (Editorial Redesign)",
    description:
      "Editorial redesign of the Celsius HVAC website. Premium AC supply, install & service across Sri Lanka since 2019.",
    url: "/v2",
    type: "website",
  },
};

export default function V2Page() {
  return (
    <main className="relative min-h-screen flex flex-col bg-white v2-font-sans">
      <V2Navbar />
      <V2Hero />
      <V2About />
      <V2Stats />
      <V2Services />
      <V2Brands />
      <V2Solutions />
      <V2Ceo />
      <V2CaseStudies />
      <V2Testimonials />
      <V2Contact />
      <V2Footer />
    </main>
  );
}
