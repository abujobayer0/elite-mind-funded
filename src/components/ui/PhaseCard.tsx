import React from "react";
import Button from "./Button";
import ProfitIcon from "../icons/ProfitIcon";
import CalendarTimeIcon from "../icons/CalendarTimeIcon";

interface PhaseCardProps {
  title: string;
  profitTarget: string;
  minTradingDays: string;
  maxLoss: string;
  maxDailyLoss: string;
  newsTrading: string;
  price: string;
  originalPrice: string;
  accountSize: string;
  onStartEvaluation: () => void;
}

export default function PhaseCard({
  title,
  profitTarget,
  minTradingDays,
  maxLoss,
  maxDailyLoss,
  newsTrading,
  price,
  originalPrice,
  accountSize,
  onStartEvaluation,
}: PhaseCardProps) {
  return (
    <div
      className="bg-[#1a1a1a] border border-[#f6a91b]/20 rounded-xl p-6 hover:border-[#f6a91b]/40 transition-all duration-300 outline-[0.5px] outline-offset-[12px] outline-[#f6a91b]/80"
      style={{
        background:
          "linear-gradient(180deg, rgba(8, 8, 9, 0) 0%, rgba(246, 169, 28, 0.1) 100%)",
        border: "0.5px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(25px)",
        borderRadius: "16px",
      }}
    >
      <h3 className="text-2xl font-medium text-white mb-6">{title}</h3>
      <div className="h-px bg-white/10 my-2" />
      {/* Requirements */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 flex items-center gap-1 text-sm">
            <ProfitIcon />
            Profit Target
          </span>
          <span className="text-white font-semibold">{profitTarget}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 flex items-center gap-1 text-sm">
            <CalendarTimeIcon />
            Minimum Trading Days
          </span>
          <span className="text-white font-semibold">{minTradingDays}</span>
        </div>
        <div className="h-px bg-white/10 my-2" />
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Maximum Loss</span>
          <span className="text-white font-semibold">{maxLoss}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Maximum Daily Loss</span>
          <span className="text-white font-semibold">{maxDailyLoss}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">News Trading</span>
          <span className="text-white font-semibold">{newsTrading}</span>
        </div>
      </div>
      <div className="h-px bg-white/10 my-2" />
      {/* Pricing */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-md text-white/40 line-through">
            {originalPrice}
          </span>
        </div>
        <div>
          <p className="text-white text-[12px]">{accountSize}</p>
        </div>
      </div>

      {/* Start Evaluation Button */}
      <Button
        variant="outline"
        size="md"
        className="w-full rounded-full border-1"
        onClick={onStartEvaluation}
      >
        Start Evaluation
      </Button>
    </div>
  );
}
