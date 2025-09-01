"use client";

import {
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
          className="text-center mb-8 sm:mb-10"
        />

        <div className="h-6 sm:h-8"></div>

        {/* Desktop Layout */}
        <div className="hidden md:block bg-white/[0.02] border border-white/10 backdrop-filter backdrop-blur-md rounded-[32px] p-6 lg:p-8 mx-auto">
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
                      <span className="text-white font-medium text-base lg:text-lg">
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
                        <span className="text-white text-base lg:text-lg">
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
                <span className="text-white font-semibold text-base lg:text-lg">
                  FTMO
                </span>
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
                        <span className="text-white text-base lg:text-lg">
                          {row.ftmo}
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
            <div className="col-span-1">
              <div className="h-[100px] text-center flex items-center justify-center">
                <span className="text-white font-semibold text-base lg:text-lg">
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
                        <span className="text-white text-base lg:text-lg">
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

        {/* Mobile/Tablet Layout */}
        <div className="md:hidden space-y-6">
          {/* Elite Mind Funding Card - Featured */}
          <div className="bg-white/[0.02] border border-white/10 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6 relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-[#1e2048] to-[#926932] rounded-2xl -z-10"></div>
            <div className="text-center mb-4 relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2">
                <img
                  src="/assets/EMF-logo-white.png"
                  alt="Elite Mind Funding"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-lg sm:text-xl">
                Elite Mind Funding
              </h3>
            </div>
            <div className="space-y-3 relative z-10">
              {comparisonData.map((row, index) => {
                const IconComponent = row.icon;
                return (
                  <div
                    key={index + row.feature}
                    className={`flex items-center justify-between p-3 sm:p-4 ${
                      index !== comparisonData.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <IconComponent
                        size={16}
                        className="text-[#f6a91b] flex-shrink-0"
                      />
                      <span className="text-white font-medium text-sm sm:text-base">
                        {row.feature}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {row.eliteMindFunding === "✓" ? (
                        <CheckCircleIcon size={20} />
                      ) : (
                        <span className="text-white text-sm sm:text-base font-semibold">
                          {row.eliteMindFunding}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FTMO Card */}
          <div className="bg-white/[0.01] border border-white/10 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6">
            <div className="text-center mb-4">
              <h3 className="text-white font-bold text-lg sm:text-xl">FTMO</h3>
            </div>
            <div className="space-y-3">
              {comparisonData.map((row, index) => {
                const IconComponent = row.icon;
                return (
                  <div
                    key={index + row.feature + "ftmo"}
                    className={`flex items-center justify-between p-3 sm:p-4 ${
                      index !== comparisonData.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <IconComponent
                        size={16}
                        className="text-white/40 flex-shrink-0"
                      />
                      <span className="text-white/80 font-medium text-sm sm:text-base">
                        {row.feature}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {row.ftmo === "✗" ? (
                        <CrossCircleIcon size={20} />
                      ) : (
                        <span className="text-white text-sm sm:text-base font-semibold">
                          {row.ftmo}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Industry Standard Card */}
          <div className="bg-white/[0.01] border border-white/10 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6">
            <div className="text-center mb-4">
              <h3 className="text-white font-bold text-lg sm:text-xl">
                Industry Standard
              </h3>
            </div>
            <div className="space-y-3">
              {comparisonData.map((row, index) => {
                const IconComponent = row.icon;
                return (
                  <div
                    key={index + row.feature + "industry"}
                    className={`flex items-center justify-between p-3 sm:p-4 ${
                      index !== comparisonData.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <IconComponent
                        size={16}
                        className="text-white/40 flex-shrink-0"
                      />
                      <span className="text-white/80 font-medium text-sm sm:text-base">
                        {row.feature}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {row.industryStandard === "✗" ? (
                        <CrossCircleIcon size={20} />
                      ) : (
                        <span className="text-white text-sm sm:text-base font-semibold">
                          {row.industryStandard}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </GradientSection>
  );
}
