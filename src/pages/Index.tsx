
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { WhySebastien } from "@/components/WhySebastien";
import { FAQ } from "@/components/FAQ";
import { YouTubeSection } from "@/components/YouTubeSection";
import { Integrations } from "@/components/Integrations";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <WhySebastien />
      <FAQ />
      <YouTubeSection />
      <Integrations />
      <FinalCTA />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
