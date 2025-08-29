import React from "react";

interface BonusCardProps {
  title: string; // e.g., "50k" or "$100k"
  subtitle: string; // e.g., "2 Step Account" or "Instant Funding + $3000"
  badge?: string; // e.g., "After 100 Referrals"
}

export default function BonusCard({ title, subtitle, badge }: BonusCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
          🏆
        </div>
        {badge ? (
          <div className="px-3 py-1 rounded-full bg-[#f6a91b] text-[#191c49] text-xs font-semibold">
            {badge}
          </div>
        ) : null}
      </div>
      <div className="text-white text-4xl font-bold">{title}</div>
      <div className="text-gray-300 mt-3">{subtitle}</div>
    </div>
  );
}
