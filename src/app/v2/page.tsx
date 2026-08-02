import type { Metadata } from "next";
import "@/styles/v2.css";
import {
  V2ScrollProvider,
  V2Navbar,
  V2Hero,
  V2Services,
  V2Brands,
  V2Projects,
  V2Solutions,
  V2Quote,
  V2Contact,
  V2Footer,
} from "@/components/v2/V2SectionsNew";

export const metadata: Metadata = {
  title: "V2 — Swiss Brutalist Edition",
  description:
    "Celsius V2 — Swiss Brutalist edition. Müller-Brockmann grid system, pure black on white with a single red accent. Premium AC supply, install & service across Sri Lanka since 2019.",
  alternates: { canonical: "/v2" },
  openGraph: {
    title: "Celsius V2 — Swiss Brutalist Edition",
    description:
      "Swiss Brutalist redesign of the Celsius HVAC website. Premium AC supply, install & service across Sri Lanka since 2019.",
    url: "/v2",
    type: "website",
  },
};

export default function V2Page() {
  return (
    <main className="v2-root">
      <V2ScrollProvider>
        <V2Navbar />
        <V2Hero />
        <V2Services />
        <V2Brands />
        <V2Projects />
        <V2Solutions />
        <V2Quote />
        <V2Contact />
        <V2Footer />
      </V2ScrollProvider>
    </main>
  );
}
