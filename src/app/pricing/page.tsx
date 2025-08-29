import {
  Header,
  Footer,
  PricingHeroSection,
  FeaturesSection,
  PricingComparisonSection,
} from "@/components";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <PricingHeroSection />
        <FeaturesSection />
        <PricingComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
