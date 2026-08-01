import type { Metadata } from "next";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import ProductRangeSection from "@/components/ProductRangeSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import SelectionGuideSection from "@/components/SelectionGuideSection";
import CeoSection from "@/components/CeoSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Celsius — AC Supply, Install & Service in Sri Lanka",
  description:
    "Celsius is Sri Lanka's premier HVAC company since 2019. We supply, install, and service premium air conditioning systems — Midea, Daikin, Panasonic, Mitsubishi, LG & more. Domestic, commercial, industrial cooling experts.",
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
    <main className="relative min-h-screen flex flex-col" style={{ zIndex: 2 }}>
      <ScrollProgress />
      <Loader />
      <Navbar />
      <Hero />
      <MarqueeStrip variant="amber" />
      <AboutSection />
      <TrustSection />
      <ProductRangeSection />
      <ServicesSection />
      <SolutionsSection />
      <SelectionGuideSection />
      <CeoSection />
      <CaseStudiesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
