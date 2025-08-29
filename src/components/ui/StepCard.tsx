import React from "react";

interface StepCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  step: string; // e.g., "3 Step"
}

export default function StepCard({
  icon,
  title,
  description,
  step,
}: StepCardProps) {
  return (
    <div className="relative rounded-xl border border-[#f6a91b]/20 bg-[#0f0f0f] p-6 md:p-7">
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-full bg-[#1f1808] ring-1 ring-[#f6a91b]/30 flex items-center justify-center text-[#f6a91b]">
          {icon ?? <span>⚙️</span>}
        </div>
        <div className="px-3 py-1 rounded-full text-xs text-white/80 border border-white/10 bg-black/30">
          {step}
        </div>
      </div>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
