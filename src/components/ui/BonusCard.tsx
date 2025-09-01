import React from "react";
import { TrophyIcon } from "@/components";

interface BonusCardProps {
  title: string; // e.g., "50k" or "$100k"
  subtitle: string; // e.g., "2 Step Account" or "Instant Funding + $3000"
  badge?: string; // e.g., "After 100 Referrals"
}

export default function BonusCard({ title, subtitle, badge }: BonusCardProps) {
  return (
    <div className="border border-white/10 p-6 md:p-8 transition-all duration-300 hover:bg-gradient-to-b hover:from-[rgba(3,0,31,0)] hover:to-[rgba(246,169,28,0.2)]">
      <div className="flex items-center justify-between mb-6">
        <div className="w-9 h-9 flex items-center justify-center">
          <TrophyIcon />
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
