import type { Metadata } from "next";
import "@/styles/v1.css";
import {
  V1ScrollProvider,
  V1Navbar,
  V1Hero,
  V1Dateline,
  V1About,
  V1Services,
  V1Brands,
  V1Projects,
  V1Ceo,
  V1Solutions,
  V1Testimonial,
  V1Contact,
  V1Footer,
} from "@/components/v1/V1Sections";

export const metadata: Metadata = {
  title: "Celsius — AC Supply, Install & Service in Sri Lanka",
  description:
    "Celsius is Sri Lanka's premier HVAC company since 2019. We supply, install, and service premium air conditioning systems: Midea, Daikin, Panasonic, Mitsubishi, LG and more. Domestic, commercial, industrial cooling experts.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Celsius — AC Supply, Install & Service in Sri Lanka",
    description:
      "Sri Lanka's premier HVAC company since 2019. Premium AC brands, expert installation, and reliable service across domestic, commercial, and industrial sectors.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="v1">
      <V1ScrollProvider>
        <V1Navbar />
        <V1Hero />
        <V1Dateline />
        <V1About />
        <V1Services />
        <V1Brands />
        <V1Projects />
        <V1Ceo />
        <V1Solutions />
        <V1Testimonial />
        <V1Contact />
        <V1Footer />
      </V1ScrollProvider>
    </main>
  );
}
