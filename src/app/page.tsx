import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductRangeSection from "@/components/ProductRangeSection";
import SolutionsSection from "@/components/SolutionsSection";
import SelectionGuideSection from "@/components/SelectionGuideSection";
import CeoSection from "@/components/CeoSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductRangeSection />
      <SolutionsSection />
      <SelectionGuideSection />
      <CeoSection />
      <VisionMissionSection />
      <CaseStudiesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
