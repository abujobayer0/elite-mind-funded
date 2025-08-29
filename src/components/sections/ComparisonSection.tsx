"use client";

import ComparisonTable from "@/components/ui/ComparisonTable";
import CheckIcon from "../ui/CheckIcon";

export default function ComparisonSection() {
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
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="mx-auto w-[140px] h-[30px] text-[12px] flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white/80 border border-white/10">
            Comparison Table
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Why <span className="text-[#f6a91b]">Elite Mind Funding</span>?
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Be A Part Of The EMF Community And Experience The Most Competitive
            Demo Trading Environment.
          </p>
        </div>

        <ComparisonTable rows={comparisonData} />
      </div>
    </section>
  );
}
