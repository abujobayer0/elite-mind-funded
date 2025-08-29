import {
  Header,
  Footer,
  AffiliateProgramSection,
  AffiliateTiersSection,
  AffiliateBonusSection,
  AffiliateHowItWorksSection,
} from "@/components";

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <AffiliateProgramSection />
        <AffiliateTiersSection />
        <AffiliateBonusSection />
        <AffiliateHowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
