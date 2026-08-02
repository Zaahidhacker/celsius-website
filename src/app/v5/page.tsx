import type { Metadata } from "next";
import "@/styles/v5.css";
import {
  V5ScrollProvider,
  V5Navbar,
  V5Hero,
  V5Services,
  V5Brands,
  V5Projects,
  V5Solutions,
  V5Quote,
  V5Contact,
  V5Footer,
} from "@/components/v5/V5SectionsNew";

export const metadata: Metadata = {
  title: "V5 — Kinetic Magazine Edition",
  description:
    "Celsius V5 — Kinetic Magazine edition. Mixed Playfair italic display with hot pink and mustard accents, horizontal-scroll service index, magazine page-number markers. Premium AC supply, install & service across Sri Lanka since 2019.",
  alternates: { canonical: "/v5" },
  openGraph: {
    title: "Celsius V5 — Kinetic Magazine Edition",
    description:
      "Kinetic Magazine redesign of the Celsius HVAC website. Premium AC supply, install & service across Sri Lanka.",
    url: "/v5",
    type: "website",
  },
};

export default function V5Page() {
  return (
    <main className="v5-root">
      <V5ScrollProvider>
        <V5Navbar />
        <V5Hero />
        <V5Services />
        <V5Brands />
        <V5Projects />
        <V5Solutions />
        <V5Quote />
        <V5Contact />
        <V5Footer />
      </V5ScrollProvider>
    </main>
  );
}
