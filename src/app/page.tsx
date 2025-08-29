import {
  Header,
  HeroSection,
  EvaluationSection,
  FundingJourneySection,
  WhyUsSection,
  DashboardSection,
  ProfitCalculatorSection,
  PayoutsSection,
  ComparisonSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <EvaluationSection />
        <FundingJourneySection />
        <WhyUsSection />
        <DashboardSection />
        <ProfitCalculatorSection />
        <PayoutsSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
