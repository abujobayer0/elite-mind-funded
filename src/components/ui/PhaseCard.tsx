import React from "react";
import Button from "./Button";

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
    <div className="bg-[#1a1a1a] border border-[#f6a91b]/20 rounded-xl p-6 hover:border-[#f6a91b]/40 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>

      {/* Requirements */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 flex items-center">
            📊 Profit Target
          </span>
          <span className="text-white font-semibold">{profitTarget}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 flex items-center">
            📅 Minimum Trading Days
          </span>
          <span className="text-white font-semibold">{minTradingDays}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Maximum Loss</span>
          <span className="text-white font-semibold">{maxLoss}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Maximum Daily Loss</span>
          <span className="text-white font-semibold">{maxDailyLoss}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300">News Trading</span>
          <span className="text-white font-semibold">{newsTrading}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-1">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-lg text-gray-500 line-through">
            {originalPrice}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{accountSize}</p>
      </div>

      {/* Start Evaluation Button */}
      <Button
        variant="primary"
        size="md"
        className="w-full"
        onClick={onStartEvaluation}
      >
        Start Evaluation
      </Button>
    </div>
  );
}
