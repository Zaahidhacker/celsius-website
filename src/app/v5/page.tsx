import type { Metadata } from "next";
import V5ScrollProvider from "@/components/v5/V5ScrollProvider";
import V5Navbar from "@/components/v5/V5Navbar";
import V5Hero from "@/components/v5/V5Hero";
import V5TrustBar from "@/components/v5/V5TrustBar";
import V5Services from "@/components/v5/V5Services";
import V5About from "@/components/v5/V5About";
import V5Stats from "@/components/v5/V5Stats";
import V5Process from "@/components/v5/V5Process";
import V5Marquee from "@/components/v5/V5Marquee";
import V5Testimonial from "@/components/v5/V5Testimonial";
import V5CtaBanner from "@/components/v5/V5CtaBanner";
import V5Contact from "@/components/v5/V5Contact";
import V5Footer from "@/components/v5/V5Footer";
import "@/components/v5/v5.css";

export const metadata: Metadata = {
  title: "V5 — Airstead × Celsius Edition (Service Studio)",
  description:
    "Celsius V5 — inspired by the Airstead HVAC template. Year-round cooling engineered for Sri Lanka. Licensed technicians, upfront estimates, 24/7 emergency support. 9 brands, 40+ clients, Sri Lanka-wide.",
  alternates: { canonical: "/v5" },
  openGraph: {
    title: "Celsius V5 — Airstead × Celsius Edition",
    description:
      "Year-round cooling engineered for Sri Lanka. Licensed technicians, upfront estimates, 24/7 emergency support.",
    url: "/v5",
    type: "website",
  },
};

export default function V5Page() {
  return (
    <V5ScrollProvider>
      <main className="v5-root">
        <V5Navbar />
        <V5Hero />
        <V5TrustBar />
        <V5Services />
        <V5About />
        <V5Stats />
        <V5Process />
        <V5Marquee />
        <V5Testimonial />
        <V5CtaBanner />
        <V5Contact />
        <V5Footer />
      </main>
    </V5ScrollProvider>
  );
}
