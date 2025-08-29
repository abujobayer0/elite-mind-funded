import React from "react";

interface AffiliateFeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  highlighted?: boolean;
}

export default function AffiliateFeatureCard({
  icon,
  title,
  subtitle,
  highlighted = false,
}: AffiliateFeatureCardProps) {
  return (
    <div
      className={
        "rounded-2xl border p-6 md:p-8 transition-all duration-300 " +
        (highlighted
          ? "border-[#f6a91b]/40 bg-gradient-to-b from-[#1a1710] to-[#0b0a08] shadow-[0_0_40px_rgba(246,169,27,0.08)]"
          : "border-white/10 bg-[#0f0f0f]")
      }
    >
      <div className="w-12 h-12 rounded-xl bg-[#1f1808] ring-1 ring-[#f6a91b]/30 flex items-center justify-center text-[#f6a91b] mb-6">
        {icon ?? <span>🔗</span>}
      </div>
      <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
    </div>
  );
}
