import type { Metadata } from "next";
import V6ScrollProvider from "@/components/v6/V6ScrollProvider";
import V6Loader from "@/components/v6/V6Loader";
import V6Navbar from "@/components/v6/V6Navbar";
import V6Hero from "@/components/v6/V6Hero";
import V6Manifesto from "@/components/v6/V6Manifesto";
import V6Services from "@/components/v6/V6Services";
import V6Brands from "@/components/v6/V6Brands";
import V6Solutions from "@/components/v6/V6Solutions";
import V6Projects from "@/components/v6/V6Projects";
import V6Ceo from "@/components/v6/V6Ceo";
import V6Contact from "@/components/v6/V6Contact";
import V6Footer from "@/components/v6/V6Footer";
import "@/components/v6/v6.css";

export const metadata: Metadata = {
  title: "V6 — Antique Editorial × Celsius (Shopify.Design Edition)",
  description:
    "Celsius V6 — inspired by shopify.design. Massive serif headlines, bento-grid media, marquee pill buttons, depth parallax. Precision cooling engineered for Sri Lanka since 2019.",
  alternates: { canonical: "/v6" },
  openGraph: {
    title: "Celsius V6 — Antique Editorial Edition",
    description:
      "Editorial design language meets HVAC engineering. Supply, installation & maintenance of premium AC systems across Sri Lanka.",
    url: "/v6",
    type: "website",
  },
};

export default function V6Page() {
  return (
    <V6ScrollProvider>
      <V6Loader />
      <main className="v6-root">
        <V6Navbar />
        <V6Hero />
        <V6Manifesto />
        <V6Services />
        <V6Brands />
        <V6Solutions />
        <V6Projects />
        <V6Ceo />
        <V6Contact />
        <V6Footer />
      </main>
    </V6ScrollProvider>
  );
}
