"use client";

import { Badge } from "@/components";

export default function PricingComparisonSection() {
  const comparisonData = [
    {
      feature: "Profit Split",
      icon: "⏰",
      eliteMindFunding: "90% standard",
      ftmo: "80%",
      industryStandard: "80%",
    },
    {
      feature: "Reward Guarantee",
      icon: "🎁",
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
    {
      feature: "120% Refunds",
      icon: "⏰",
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
    {
      feature: "Charity",
      icon: "💝",
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
    {
      feature: "Receive Gifts",
      icon: "🎁",
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="w-[100px] h-[30px] bg-[#1a1a1a] border border-white/10">
            Comparison
          </Badge>
          <h2 className="text-[#f6a91b] text-3xl md:text-5xl font-bold mt-4">
            Why Elite Mind Funding?
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Whether You&apos;re Looking For Speed, Accessibility, Structure, Or
            Flexibility.
          </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-center pb-8 w-1/3">
                    <div className="w-20 h-20 bg-gradient-to-b from-[#191c49] to-[#8B4513] rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto">
                      EM
                    </div>
                    <div className="text-white font-semibold text-lg mt-3">
                      Elite Mind Funding
                    </div>
                    <div className="text-white/80 text-sm mt-1">
                      90% standard
                    </div>
                  </th>
                  <th className="text-center pb-8 w-1/3">
                    <div className="text-white font-semibold text-lg">FTMO</div>
                  </th>
                  <th className="text-center pb-8 w-1/3">
                    <div className="text-white font-semibold text-lg">
                      Industry Standard
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <td className="py-6 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-[#f6a91b] text-xl">
                          {row.icon}
                        </span>
                        <span className="text-white font-medium text-lg">
                          {row.feature}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 text-center">
                      <span className="text-white text-lg">
                        {row.eliteMindFunding}
                      </span>
                    </td>
                    <td className="py-6 text-center">
                      <span className="text-white text-lg">{row.ftmo}</span>
                    </td>
                    <td className="py-6 text-center">
                      <span className="text-white text-lg">
                        {row.industryStandard}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
