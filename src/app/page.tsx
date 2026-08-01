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
