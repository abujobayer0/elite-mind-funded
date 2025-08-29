"use client";

import FeatureCard from "@/components/ui/FeatureCard";

export default function WhyUsSection() {
  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="mx-auto w-[110px] h-[30px] text-[12px] flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white/80 border border-white/10">
            Why Us
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Why <span className="text-[#f6a91b]">Elite Mind Funding</span>?
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Be A Part Of The EMF Community And Experience The Most Competitive
            Demo Trading Environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            title="Real Trading Expertise"
            subtitle="Elite Mind Funding is led and advised by Professionals from Central Banks, Leading Brokers, and Top Prop Firms."
            emphasis
          >
            <span className="text-[#f6a91b] text-sm">CFDs</span>
          </FeatureCard>

          <FeatureCard
            title="Competitive Spread & High Leverage"
            subtitle="Trade with spreads starting from 0.0 Pips and up to 1:100 Leverage."
            emphasis
          >
            <div className="w-full h-16 rounded-full border border-[#f6a91b]/40 flex items-center justify-center text-[#f6a91b]">
              Gauge
            </div>
          </FeatureCard>

          <FeatureCard
            title="Multi-Asset Trading"
            subtitle="Trade across forex, digital assets, indices, and commodities with precision."
            emphasis
          >
            <div className="w-full h-12 bg-white/5 rounded" />
          </FeatureCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6">
          <FeatureCard
            title="Lightning-Fast Execution"
            subtitle="Global server mesh routes orders in < 5 ms. You hit price, not slippage."
          >
            <div className="w-full h-24 bg-gradient-to-tr from-[#f6a91b]/20 to-transparent rounded" />
          </FeatureCard>

          <div className="md:col-span-2">
            <FeatureCard
              title="Best Trading Platforms"
              subtitle="Trade on the industry's Most Popular Trading Platforms."
            >
              <div className="w-full h-24 bg-white/5 rounded" />
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}
