import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
    <main className="min-h-screen bg-[#f0f0f0] flex flex-col">
      <Loader />
      <Navbar />
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <TrustSection />
      <ProductRangeSection />
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
