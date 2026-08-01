import type { Metadata } from "next";
import V4ScrollProvider from "@/components/v4/V4ScrollProvider";
import V4Loader from "@/components/v4/V4Loader";
import V4Navbar from "@/components/v4/V4Navbar";
import V4Hero from "@/components/v4/V4Hero";
import V4Brands from "@/components/v4/V4Brands";
import V4Vision from "@/components/v4/V4Vision";
import V4Manifesto from "@/components/v4/V4Manifesto";
import V4Services from "@/components/v4/V4Services";
import V4Stats from "@/components/v4/V4Stats";
import V4Ceo from "@/components/v4/V4Ceo";
import V4Contact from "@/components/v4/V4Contact";
import V4Footer from "@/components/v4/V4Footer";
import "@/components/v4/v4.css";

export const metadata: Metadata = {
  title: "V4 — Atelier × Overlay Edition (Most Premium)",
  description:
    "Celsius V4 — the most premium edition yet. Inspired by overlay.com's design DNA: editorial serif, sticky stacking panels, scattered card formations, smooth Lenis scroll, GSAP ScrollTrigger animations. HVAC supply, install & service across Sri Lanka.",
  alternates: { canonical: "/v4" },
  openGraph: {
    title: "Celsius V4 — Atelier × Overlay Edition",
    description:
      "The most premium Celsius edition — editorial design, sticky stacking sections, scattered card animations. HVAC supply, install & service across Sri Lanka.",
    url: "/v4",
    type: "website",
  },
};

export default function V4Page() {
  return (
    <V4ScrollProvider>
      <main className="v4-root">
        <V4Loader />
        <V4Navbar />
        <V4Hero />
        <V4Brands />
        <V4Vision />
        <V4Manifesto />
        <V4Services />
        <V4Stats />
        <V4Ceo />
        <V4Contact />
        <V4Footer />
      </main>
    </V4ScrollProvider>
  );
}
