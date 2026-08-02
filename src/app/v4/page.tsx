import type { Metadata } from "next";
import "@/styles/v4.css";
import {
  V4ScrollProvider,
  V4Navbar,
  V4Hero,
  V4Services,
  V4Brands,
  V4Projects,
  V4Solutions,
  V4Quote,
  V4Contact,
  V4Footer,
} from "@/components/v4/V4SectionsNew";

export const metadata: Metadata = {
  title: "V4 — Tech Noir Terminal Edition",
  description:
    "Celsius V4 — Tech Noir Terminal edition. Monospace display, dark mode, electric lime accent, terminal log aesthetic. Premium AC supply, install & service across Sri Lanka since 2019.",
  alternates: { canonical: "/v4" },
  openGraph: {
    title: "Celsius V4 — Tech Noir Terminal Edition",
    description:
      "Tech Noir Terminal redesign of the Celsius HVAC website. Premium AC supply, install & service across Sri Lanka.",
    url: "/v4",
    type: "website",
  },
};

export default function V4Page() {
  return (
    <main className="v4-root">
      <V4ScrollProvider>
        <V4Navbar />
        <V4Hero />
        <V4Services />
        <V4Brands />
        <V4Projects />
        <V4Solutions />
        <V4Quote />
        <V4Contact />
        <V4Footer />
      </V4ScrollProvider>
    </main>
  );
}
