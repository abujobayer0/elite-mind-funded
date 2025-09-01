"use client";

import { SectionHeader, ComparisonTable } from "@/components";

export default function ComparisonSection() {
  return (
    <section className="relative bg-black py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl w-full mx-auto px-4 px-6 lg:px-8">
        <SectionHeader
          badge="Comparison Table"
          title={
            <>
              Why <span className="text-[#f6a91b]">Elite Mind Funding</span>?
            </>
          }
          subtitle="Be A Part Of The EMF Community And Experience The Most Competitive Demo Trading Environment."
          className="text-center mb-8 sm:mb-10"
        />

        <div className="h-6 sm:h-8 md:h-10"></div>
        <ComparisonTable />
      </div>
    </section>
  );
}
