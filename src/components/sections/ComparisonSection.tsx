"use client";

import { SectionHeader, ComparisonTable } from "@/components";
import CheckIcon from "../ui/CheckIcon";

export default function ComparisonSection() {
  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-22 xl:px-32">
        <SectionHeader
          badge="Comparison Table"
          title={
            <>
              Why <span className="text-[#f6a91b]">Elite Mind Funding</span>?
            </>
          }
          subtitle="Be A Part Of The EMF Community And Experience The Most Competitive Demo Trading Environment."
          className="text-center mb-10"
        />

        <div className="h-10"></div>
        <ComparisonTable />
      </div>
    </section>
  );
}
