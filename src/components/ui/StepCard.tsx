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
    <div className="relative rounded-xl border border-[#f6a91b]/50 bg-[#0f0f0f] p-6 md:p-7">
      <div className="flex justify-between items-center mb-6">
        <div className="w-[50px] h-[50px] rounded-full bg-[rgba(246,169,28,0.04)] shadow-[0px_0px_0px_2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1),inset_0px_0.5px_0px_#FFCC00] backdrop-blur-[2.5px] flex items-center justify-center text-[#f6a91b]">
          {icon ?? <span>⚙️</span>}
        </div>
        <div className="flex flex-row justify-center items-center px-[10px] py-[8px] gap-[10px] w-[56px] h-[30px] bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.1)] shadow-[inset_0px_2px_2px_rgba(255,255,255,0.1)] rounded-[100px] text-xs text-white/80">
          <span className="text-[10px] text-white">{step}</span>
        </div>
      </div>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
