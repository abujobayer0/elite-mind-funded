import React from "react";

interface ComparisonRow {
  parameter: string;
  eliteMindFunding: string | React.ReactNode;
  others: string | React.ReactNode;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="rounded-2xl border border-[#f6a91b]/30 bg-[#0f0f0f] overflow-hidden">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {/* Header */}
        <div className="p-6 md:p-8 text-center">
          <div className="text-white/60 text-sm font-medium">Parameters</div>
        </div>
        <div className="p-6 md:p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#f6a91b] mx-auto mb-3 flex items-center justify-center">
            <span className="text-[#191c49] font-bold text-xl">EM</span>
          </div>
          <div className="text-white font-semibold text-lg">
            Elite Mind Funding
          </div>
        </div>
        <div className="p-6 md:p-8 text-center">
          <div className="text-white font-semibold text-lg">
            When You Trade With Others
          </div>
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10"
        >
          <div className="p-6 md:p-8 flex items-center">
            <span className="text-white/80 font-medium">{row.parameter}</span>
          </div>
          <div className="p-6 md:p-8 flex items-center justify-center">
            <span className="text-white font-semibold">
              {row.eliteMindFunding}
            </span>
          </div>
          <div className="p-6 md:p-8 flex items-center justify-center">
            {typeof row.others === "string" ? (
              <span className="text-white font-semibold">{row.others}</span>
            ) : (
              row.others
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
