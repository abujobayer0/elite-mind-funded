"use client";

import { Badge, Button, AffiliateFeatureCard } from "@/components";

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
        <div className="text-center mb-10">
          <Badge className="w-[132px] h-[30px] bg-[#1a1a1a] border border-white/10">
            Affiliate Program
          </Badge>
          <h1 className="text-white text-3xl md:text-6xl font-bold mt-4">
            Refer & Earn <span className="text-[#f6a91b]">Big</span> With EMF
          </h1>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Profit From The Biggest Revolution In Trading. It’s Super Simple.
            Get Started Today!
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
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
        </div>

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
