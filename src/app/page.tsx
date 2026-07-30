import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import TrustSection from "@/components/TrustSection";
import ProductRangeSection from "@/components/ProductRangeSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import SelectionGuideSection from "@/components/SelectionGuideSection";
import StatsSection from "@/components/StatsSection";
import CeoSection from "@/components/CeoSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col" style={{ zIndex: 2 }}>
      <Loader />
      <Navbar />
      <Hero />
      <MarqueeStrip variant="amber" />
      <AboutSection />
      <VisionMissionSection />
      <TrustSection />
      <ProductRangeSection />
      <MarqueeStrip variant="navy" />
      <ServicesSection />
      <SolutionsSection />
      <SelectionGuideSection />
      <StatsSection />
      <CeoSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
