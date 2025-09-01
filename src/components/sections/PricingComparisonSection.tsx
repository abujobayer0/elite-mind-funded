"use client";

import {
  Badge,
  GradientSection,
  ChartIcon,
  MoneyIcon,
  DollarRefreshIcon,
  HandsHeartIcon,
  GlobeIcon,
  CheckCircleIcon,
  CrossCircleIcon,
  SectionHeader,
} from "@/components";

export default function PricingComparisonSection() {
  const comparisonData = [
    {
      feature: "Profit Split",
      icon: ChartIcon,
      eliteMindFunding: "90% standard",
      ftmo: "80%",
      industryStandard: "80%",
    },
    {
      feature: "Reward Guarantee",
      icon: GlobeIcon,
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
    {
      feature: "120% Refunds",
      icon: DollarRefreshIcon,
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
    {
      feature: "Charity",
      icon: HandsHeartIcon,
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
    {
      feature: "Receive Gifts",
      icon: MoneyIcon,
      eliteMindFunding: "✓",
      ftmo: "✗",
      industryStandard: "✗",
    },
  ];

  return (
    <GradientSection>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Comparison"
          title={
            <>
              Why <span className="text-[#f6a91b]">Elite Mind Funding?</span>
            </>
          }
          subtitle="Whether You're Looking For Speed, Accessibility, Structure, Or Flexibility."
          className="text-center mb-10"
        />

        <div className="h-8"></div>

        <div className="bg-white/[0.02] border border-white/10 backdrop-filter backdrop-blur-md rounded-[32px] p-8 mx-auto w-5xl">
          {/* Comparison Rows */}
          <div className="grid grid-cols-4 w-full relative">
            <div className="col-span-1">
              <div className="h-[100px]"></div>
              {comparisonData.map((row, index) => {
                const IconComponent = row.icon;
                return (
                  <>
                    <div
                      key={index + row.feature}
                      className="text-center h-[58px] flex items-center gap-3 relative z-10"
                    >
                      <IconComponent size={20} className="text-[#f6a91b]" />
                      <span className="text-white font-medium text-lg">
                        {row.feature}
                      </span>
                    </div>
                    {index < comparisonData.length - 1 && (
                      <div className="border-b border-white/10 my-3"></div>
                    )}
                  </>
                );
              })}
            </div>
            <div className="col-span-1 relative">
              <div className="absolute top-[-50px] bottom-[-50px] left-0 right-0 bg-gradient-to-r from-[#1e2048] to-[#926932] rounded-[24px] "></div>
              <div className="h-[100px] relative z-10">
                <div className="flex items-center justify-center h-full">
                  <div className="w-16 h-16">
                    <img
                      src="/assets/EMF-logo-white.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              {comparisonData.map((row, index) => {
                return (
                  <>
                    <div
                      key={index + row.eliteMindFunding}
                      className="text-center h-[58px] flex items-center justify-center relative z-10"
                    >
                      {row.eliteMindFunding === "✓" ? (
                        <CheckCircleIcon size={24} />
                      ) : (
                        <span className="text-white text-lg">
                          {row.eliteMindFunding}
                        </span>
                      )}
                    </div>
                    {index < comparisonData.length - 1 && (
                      <div className="border-b border-white/10 my-3 relative z-10"></div>
                    )}
                  </>
                );
              })}
            </div>
            <div className="col-span-1">
              <div className="h-[100px] text-center flex items-center justify-center">
                <span className="text-white font-semibold text-lg">FTMO</span>
              </div>
              {comparisonData.map((row, index) => {
                return (
                  <>
                    <div
                      key={index + row.ftmo}
                      className="text-center h-[58px] flex items-center justify-center"
                    >
                      {row.ftmo === "✗" ? (
                        <CrossCircleIcon size={24} />
                      ) : (
                        <span className="text-white text-lg">{row.ftmo}</span>
                      )}
                    </div>
                    {index < comparisonData.length - 1 && (
                      <div className="border-b border-white/10 my-3"></div>
                    )}
                  </>
                );
              })}
            </div>
            <div className="col-span-1">
              <div className="h-[100px] text-center flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  Industry Standard
                </span>
              </div>
              {comparisonData.map((row, index) => {
                return (
                  <>
                    <div
                      key={index + row.industryStandard}
                      className="text-center h-[58px] flex items-center justify-center"
                    >
                      {row.industryStandard === "✗" ? (
                        <CrossCircleIcon size={24} />
                      ) : (
                        <span className="text-white text-lg">
                          {row.industryStandard}
                        </span>
                      )}
                    </div>
                    {index < comparisonData.length - 1 && (
                      <div className="border-b border-white/10 my-3"></div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </GradientSection>
  );
}
