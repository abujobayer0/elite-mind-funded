import React from "react";

interface AffiliateFeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AffiliateFeatureCard({
  icon,
  title,
  subtitle,
}: AffiliateFeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8 transition-all duration-300 hover:border-[#f6a91b]/90 bg-gradient-to-b from-[#1f1602] to-[#0b0a08] hover:shadow-[0_0_40px_rgba(246,169,27,0.1)]">
      <div className="w-[54.52px] h-[53.86px] rounded-[9.30901px] bg-gradient-to-b from-[rgba(15,15,17,0)] to-[rgba(246,169,28,0.4)] shadow-[0px_0px_10px_rgba(246,169,28,0.2)] backdrop-blur-[16.6232px] flex items-center justify-center text-[#f6a91b] mb-6">
        {icon}
      </div>
      <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
    </div>
  );
}
