import React from "react";

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  position: "left" | "right";
  highlighted?: boolean;
}

export default function TimelineStep({
  step,
  title,
  description,
  position,
  highlighted = false,
}: TimelineStepProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex-1 text-right">
        {position === "left" && (
          <>
            <div className="text-white font-semibold text-lg mb-2">{title}</div>
            <div className="text-gray-300 text-sm leading-relaxed">
              {description}
            </div>
          </>
        )}
      </div>
      <div className="relative">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
            highlighted
              ? "bg-[#f6a91b] text-[#191c49]"
              : "bg-[#2a2a2a] text-white"
          }`}
        >
          {step.toString().padStart(2, "0")}
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-white/10"></div>
      </div>
      <div className="flex-1 text-left">
        {position === "right" && (
          <>
            <div className="text-white font-semibold text-lg mb-2">{title}</div>
            <div className="text-gray-300 text-sm leading-relaxed">
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
