"use client";

import { useState } from "react";
import {
  Button,
  Badge,
  EvaluationModelSelector,
  RangeSlider,
  PhaseCard,
  PaymentOptions,
} from "@/components";
import StarIcon from "../icons/StarIcon";

export default function PricingHeroSection() {
  const [selectedModel, setSelectedModel] = useState("instant");
  const [selectedAccountSize, setSelectedAccountSize] = useState("25k");

  const evaluationModels = [
    {
      id: "1step",
      name: "1 Step",
      icon: "📊",
      isSelected: selectedModel === "1step",
    },
    {
      id: "instant",
      name: "Instant",
      icon: "⚡",
      isSelected: selectedModel === "instant",
    },
    {
      id: "2step",
      name: "Two Step",
      icon: "🔄",
      isSelected: selectedModel === "2step",
    },
  ];

  const accountSizes = [
    { id: "10k", size: "$10k", isSelected: selectedAccountSize === "10k" },
    { id: "25k", size: "$25k", isSelected: selectedAccountSize === "25k" },
    { id: "50k", size: "$50k", isSelected: selectedAccountSize === "50k" },
    { id: "100k", size: "$100k", isSelected: selectedAccountSize === "100k" },
    { id: "200k", size: "$200k", isSelected: selectedAccountSize === "200k" },
  ];

  const phaseData = [
    {
      id: "phase1",
      title: "Phase 1",
      profitTarget: "6%",
      minTradingDays: "0",
      maxLoss: "6%",
      maxDailyLoss: "3%",
      newsTrading: "Yes",
      price: "$60",
      originalPrice: "$119",
      accountSize: "For 10k Account",
    },
    {
      id: "phase2",
      title: "Phase 2",
      profitTarget: "6%",
      minTradingDays: "0",
      maxLoss: "6%",
      maxDailyLoss: "3%",
      newsTrading: "Yes",
      price: "$60",
      originalPrice: "$119",
      accountSize: "For 10k Account",
    },
    {
      id: "funded",
      title: "Funded",
      profitTarget: "6%",
      minTradingDays: "0",
      maxLoss: "6%",
      maxDailyLoss: "3%",
      newsTrading: "Yes",
      price: "$60",
      originalPrice: "$119",
      accountSize: "For 10k Account",
    },
  ];

  const handleStartEvaluation = (phaseTitle: string) => {
    console.log(
      `Starting ${phaseTitle} evaluation for ${selectedAccountSize} account`
    );
  };

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pricing Badge */}
        <Badge>Pricing</Badge>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Elite Mind Funding <span className="text-[#f6a91b]">Pricing</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          EMF Is A Leading Trading Firm Committed To Providing Unparalleled
          Opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button href="/get-funded" variant="outline">
            Get Funded Now
          </Button>
          <Button href="/community" variant="community">
            Join Community
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} width={20} height={20} fillColor="#10B981" />
              ))}
            </div>
            <span className="text-white font-medium">Excellent</span>
            <span className="text-gray-400">Trustpilot</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-gray-300">Listed On Propfirmmatch.com</span>
          </div>
        </div>

        {/* Evaluation Model Selection */}
        <EvaluationModelSelector
          models={evaluationModels}
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
        />

        {/* Account Size Slider */}
        <div className="mb-12">
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Slider Track */}
            <div className="w-full h-2 bg-[#2a2a2a] rounded-full">
              <div
                className="h-full bg-[#f6a91b] rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#f6a91b] rounded-full"
              style={{ left: "20%" }}
            ></div>
          </div>

          {/* Account Size Options */}
          <div className="flex justify-center space-x-8 mt-6">
            {accountSizes.map((account) => (
              <button
                key={account.id}
                onClick={() => setSelectedAccountSize(account.id)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  account.isSelected
                    ? "bg-[#f6a91b] ring-4 ring-[#f6a91b]/20"
                    : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                }`}
              >
                <span className="sr-only">{account.size}</span>
              </button>
            ))}
          </div>

          {/* Account Size Labels */}
          <div className="flex justify-center space-x-8 mt-2">
            {accountSizes.map((account) => (
              <span
                key={account.id}
                className={`text-sm transition-colors duration-300 ${
                  account.isSelected ? "text-[#f6a91b]" : "text-gray-400"
                }`}
              >
                {account.size}
              </span>
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 mx-[12px]">
          {phaseData.map((phase) => (
            <PhaseCard
              key={phase.id}
              title={phase.title}
              profitTarget={phase.profitTarget}
              minTradingDays={phase.minTradingDays}
              maxLoss={phase.maxLoss}
              maxDailyLoss={phase.maxDailyLoss}
              newsTrading={phase.newsTrading}
              price={phase.price}
              originalPrice={phase.originalPrice}
              accountSize={phase.accountSize}
              onStartEvaluation={() => handleStartEvaluation(phase.title)}
            />
          ))}
        </div>

        {/* Payment Options */}
        <PaymentOptions />
      </div>
    </section>
  );
}
