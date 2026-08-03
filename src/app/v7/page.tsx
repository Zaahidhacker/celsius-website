import type { Metadata } from "next";
import V7ScrollProvider from "@/components/v7/V7ScrollProvider";
import V7Navbar from "@/components/v7/V7Navbar";
import V7Hero from "@/components/v7/V7Hero";
import V7Reviews from "@/components/v7/V7Reviews";
import V7Services from "@/components/v7/V7Services";
import V7About from "@/components/v7/V7About";
import V7Contact from "@/components/v7/V7Contact";
import V7Footer from "@/components/v7/V7Footer";
import "@/components/v7/v7.css";

export const metadata: Metadata = {
  title: "V7 — Editorial Brutalist × Celsius",
  description:
    "Celsius V7 — Editorial Brutalist edition. Exposed grid, hard offset shadows, mono case files. Real customer reviews from Wellawatta, Prime Residencies, residential 12000 BTU installs, and Havelock Dental Centre.",
  alternates: { canonical: "/v7" },
  openGraph: {
    title: "Celsius V7 — Editorial Brutalist Edition",
    description:
      "Brutalist editorial design language meets HVAC engineering. Real customer installs from across Sri Lanka, presented as case files.",
    url: "/v7",
    type: "website",
  },
};

export default function V7Page() {
  return (
    <V7ScrollProvider>
      <main className="v7-root">
        <div className="v7-grid-overlay" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <V7Navbar />
        <V7Hero />
        <V7Reviews />
        <V7Services />
        <V7About />
        <V7Contact />
        <V7Footer />
      </main>
    </V7ScrollProvider>
  );
}
