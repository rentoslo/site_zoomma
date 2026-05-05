import { I18nProvider } from "@/lib/i18n/context";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Method from "@/components/landing/Method";
import Features from "@/components/landing/Features";
import MidCTA from "@/components/landing/MidCTA";
import Trust from "@/components/landing/Trust";
import Comparison from "@/components/landing/Comparison";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppFAB from "@/components/landing/WhatsAppFAB";
import JsonLd from "@/components/landing/JsonLd";

export default function Home() {
  return (
    <I18nProvider>
      <JsonLd />
      <Navbar />
      <main className="bg-page relative">
        <Hero />
        <Problem />
        <Solution />
        <Method />
        <Features />
        <MidCTA />
        <Trust />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </I18nProvider>
  );
}
