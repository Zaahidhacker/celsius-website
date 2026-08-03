import type { Metadata } from "next";
import V9Navbar from "@/components/v9/V9Navbar";
import V9Hero from "@/components/v9/V9Hero";
import V9Reviews from "@/components/v9/V9Reviews";
import V9Services from "@/components/v9/V9Services";
import V9About from "@/components/v9/V9About";
import V9Contact from "@/components/v9/V9Contact";
import V9Footer from "@/components/v9/V9Footer";
import "@/components/v9/v9.css";

export const metadata: Metadata = {
  title: "V9 — Off-Kilter Bento × Celsius",
  description:
    "Celsius V9 — Off-Kilter Bento edition. Tilted cards, polaroid reviews, paper-tape, hand-drawn underlines. Real installs from Wellawatta, Prime Residencies, residential 12000 BTU, and Havelock Dental Centre.",
  alternates: { canonical: "/v9" },
  openGraph: {
    title: "Celsius V9 — Off-Kilter Bento Edition",
    description:
      "Tilted bento cards and polaroid-style customer reviews. Real HVAC installs from across Sri Lanka.",
    url: "/v9",
    type: "website",
  },
};

export default function V9Page() {
  return (
    <main className="v9-root">
      <div className="v9-grain" aria-hidden />
      <V9Navbar />
      <V9Hero />
      <V9Reviews />
      <V9Services />
      <V9About />
      <V9Contact />
      <V9Footer />
    </main>
  );
}
