import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
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
      <TrustSection />
      <ServicesSection />
      <SolutionsSection />
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
