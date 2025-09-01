import React from "react";
import CheckIcon from "./CheckIcon";

export default function ComparisonTable() {
  const comparisonData = [
    {
      parameter: "Profit Target",
      eliteMindFunding: "6-7%",
      others: "8%",
    },
    {
      parameter: "Daily Loss Limit",
      eliteMindFunding: "3%",
      others: "2%",
    },
    {
      parameter: "Trailing Max Drawdown",
      eliteMindFunding: "4-5%",
      others: "3-4%",
    },
    {
      parameter: "Activation Fee",
      eliteMindFunding: "Starter Only",
      others: (
        <div className="w-6 h-6 rounded-full bg-[#2a2a2a] flex items-center justify-center">
          <CheckIcon width={16} height={16} strokeColor="white" />
        </div>
      ),
    },
    {
      parameter: "Scaling Rule",
      eliteMindFunding: "Reset Fee",
      others: "Same Fee As Initial Price",
    },
    {
      parameter: "Minimum Trading Days",
      eliteMindFunding: "3-4 Days",
      others: "5 Days",
    },
  ];
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        {/* Parameters Card */}
        <div className="flex-1">
          <div className="h-4"></div>
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 flex items-center ${
                idx !== comparisonData.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="text-white/80 font-medium">{row.parameter}</span>
            </div>
          ))}
        </div>

        {/* Elite Mind Funding Card */}
        <div className="flex-1 bg-black/20 rounded-2xl border relative border-[#f6a91b] outline outline-[#f6a91b]/70 outline-offset-[12px]">
          <div className="w-[88px] h-[88px] rounded-full bg-[#f6a91b] mx-auto mb-3 flex items-center justify-center absolute -top-14 left-1/2 transform -translate-x-1/2">
            <div className="w-[44px]">
              <img
                src="/assets/EMF-logo-black.png"
                alt="EMF-logo-black"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="h-4"></div>
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 flex items-center justify-center ${
                idx !== comparisonData.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="text-white font-semibold">
                {row.eliteMindFunding}
              </span>
            </div>
          ))}
        </div>

        {/* Others Card */}
        <div className="flex-1 relative">
          <div className="mx-auto mb-3 flex items-center justify-center absolute -top-14 left-0 w-full">
            <span className="text-white font-semibold text-center pt-6">
              When you trade <br /> with Others
            </span>
          </div>
          <div className="h-4"></div>
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 flex items-center justify-center ${
                idx !== comparisonData.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              {typeof row.others === "string" ? (
                <span className="text-white font-semibold">{row.others}</span>
              ) : (
                row.others
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="md:hidden space-y-6">
        {/* Elite Mind Funding Card - Featured */}
        <div className="bg-black/20 rounded-2xl border border-[#f6a91b] outline outline-[#f6a91b]/70 outline-offset-[8px] relative">
          <div className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#f6a91b] mx-auto mb-3 flex items-center justify-center absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-[32px] sm:w-[40px]">
              <img
                src="/assets/EMF-logo-black.png"
                alt="EMF-logo-black"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="pt-8 sm:pt-10">
            <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-4">
              Elite Mind Funding
            </h3>
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 flex items-center justify-between ${
                  idx !== comparisonData.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="text-white/80 font-medium text-sm sm:text-base">
                  {row.parameter}
                </span>
                <span className="text-white font-semibold text-sm sm:text-base">
                  {row.eliteMindFunding}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Others Card */}
        <div className="bg-black/10 rounded-2xl border border-white/20 relative">
          <div className="pt-4">
            <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-4">
              When you trade with Others
            </h3>
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 flex items-center justify-between ${
                  idx !== comparisonData.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="text-white/80 font-medium text-sm sm:text-base">
                  {row.parameter}
                </span>
                <div className="flex items-center">
                  {typeof row.others === "string" ? (
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {row.others}
                    </span>
                  ) : (
                    row.others
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
