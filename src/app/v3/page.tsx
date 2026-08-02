import type { Metadata } from "next";
import "@/styles/v3.css";
import {
  V3ScrollProvider,
  V3Navbar,
  V3Hero,
  V3Services,
  V3Brands,
  V3Projects,
  V3Solutions,
  V3Quote,
  V3Contact,
  V3Footer,
} from "@/components/v3/V3SectionsNew";

export const metadata: Metadata = {
  title: "V3 — Warm Forest Studio Edition",
  description:
    "Celsius V3 — Warm Forest Studio edition. Deep forest green, warm bone paper, amber accent, Fraunces editorial serif. Premium AC supply, install & service across Sri Lanka since 2019.",
  alternates: { canonical: "/v3" },
  openGraph: {
    title: "Celsius V3 — Warm Forest Studio Edition",
    description:
      "Warm Forest Studio redesign of the Celsius HVAC website. Premium AC supply, install & service across Sri Lanka.",
    url: "/v3",
    type: "website",
  },
};

export default function V3Page() {
  return (
    <main className="v3-root">
      <V3ScrollProvider>
        <V3Navbar />
        <V3Hero />
        <V3Services />
        <V3Brands />
        <V3Projects />
        <V3Solutions />
        <V3Quote />
        <V3Contact />
        <V3Footer />
      </V3ScrollProvider>
    </main>
  );
}
