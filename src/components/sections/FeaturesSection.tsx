"use client";

import { Badge, FeatureCard } from "@/components";

export default function FeaturesSection() {
  const features = [
    {
      title: "Lowest Reward Target",
      subtitle:
        "Our simulated trading accounts do not have any commissions on your trading lots.",
      icon: "🚀",
      highlighted: false,
    },
    {
      title: "Scaling Plan Feature",
      subtitle:
        "The pride funding promises to send the Reward within 24hr after your approval.",
      icon: "$",
      highlighted: true,
    },
    {
      title: "Reward Protection",
      subtitle:
        "Our funded accounts has lowest spread compare to any other prop trading firms.",
      icon: "📄",
      highlighted: false,
    },
    {
      title: "Reward System",
      subtitle:
        "The pride funding offers 24/7 live chat support for any kind of queries by traders.",
      icon: "🔄",
      highlighted: false,
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="w-[100px] h-[30px] bg-[#1a1a1a] border border-white/10">
            Features
          </Badge>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Elite Mind Funding <span className="text-[#f6a91b]">Features</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Whether You're Looking For Speed, Accessibility, Structure, Or
            Flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              subtitle={feature.subtitle}
              highlighted={feature.highlighted}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1f1808] ring-1 ring-[#f6a91b]/30 flex items-center justify-center text-[#f6a91b] text-2xl font-bold">
                {feature.icon}
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
