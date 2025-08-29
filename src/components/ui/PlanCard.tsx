import React from "react";
import Button from "./Button";
import { CheckIcon } from "@/components";

interface PlanCardProps {
  title: string;
  subtitle: string;
  highlighted?: boolean;
  features: string[];
  onStart: () => void;
}

export default function PlanCard({
  title,
  subtitle,
  highlighted = false,
  features,
  onStart,
}: PlanCardProps) {
  return (
    <div
      className={
        "relative rounded-xl border p-6 md:p-8 transition-all duration-300 " +
        (highlighted
          ? "border-[#f6a91b]/30 bg-gradient-to-b from-[#1a1a1a] to-black shadow-[0_0_40px_rgba(246,169,27,0.08)]"
          : "border-white/10 bg-[#0f0f0f]")
      }
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#1f1808] ring-1 ring-[#f6a91b]/30 flex items-center justify-center">
          <span className="text-[#f6a91b]">🏷️</span>
        </div>
        <div className="text-left">
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm mt-1 max-w-sm">{subtitle}</p>
        </div>
      </div>

      <div className="h-px w-full bg-white/10 my-6" />

      <ul className="space-y-3 text-left">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-300">
            <CheckIcon width={16} height={16} strokeColor="#c8c8c8" />
            <span className="text-sm md:text-[15px]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          variant="outline"
          size="md"
          className="w-full"
          onClick={onStart}
        >
          Start Challenge
        </Button>
      </div>
    </div>
  );
}
