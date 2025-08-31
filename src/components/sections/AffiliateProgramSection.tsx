"use client";

import { SectionHeader, Button, AffiliateFeatureCard } from "@/components";

export default function AffiliateProgramSection() {
  const features = [
    {
      title: "Sign Up",
      subtitle: "Create your Profile quickly.",
      highlighted: false,
    },
    {
      title: "Share your Link",
      subtitle: "Share your unique Link on social media.",
      highlighted: true,
    },
    {
      title: "Get Paid",
      subtitle: "Get Paid up to 20% of all revenue.",
      highlighted: false,
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Affiliate Program"
          title={
            <>
              Refer & Earn <span className="text-[#f6a91b]">Big</span> With EMF
            </>
          }
          subtitle={
            <>
              <p className="mb-6">
                Profit From The Biggest Revolution In Trading. It&apos;s Super
                Simple. Get Started Today!
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button
                  href="/affiliate"
                  variant="primary"
                  size="md"
                  className="w-auto px-6"
                >
                  Become An Affiliate ↗
                </Button>
                <Button
                  href="/affiliate/login"
                  variant="ghost"
                  size="md"
                  className="w-auto px-6 border border-white/10"
                >
                  Affiliate Login ↗
                </Button>
              </div>
            </>
          }
          className="text-center mb-10"
          titleClassName="text-3xl md:text-6xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <AffiliateFeatureCard
              key={f.title}
              title={f.title}
              subtitle={f.subtitle}
              highlighted={f.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
