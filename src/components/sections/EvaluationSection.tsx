"use client";

import { useState } from "react";
import {
  Button,
  Badge,
  PhaseCard,
  PaymentOptions,
  EvaluationModelSelector,
} from "@/components";
import StepOneIcon from "../icons/StepOneIcon";
import BoltIcon from "../icons/BoltIcon";
import TwoStepIcon from "../icons/TwoStepIcon";
import { motion } from "framer-motion";

interface EvaluationModel {
  id: string;
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
}

interface AccountSize {
  id: string;
  size: string;
  isSelected: boolean;
}

interface PhaseData {
  id: string;
  title: string;
  profitTarget: string;
  minTradingDays: string;
  maxLoss: string;
  maxDailyLoss: string;
  newsTrading: string;
  price: string;
  originalPrice: string;
  accountSize: string;
}

export default function EvaluationSection() {
  const [selectedModel, setSelectedModel] = useState("instant");
  const [selectedAccountSize, setSelectedAccountSize] = useState("25k");

  const evaluationModels: EvaluationModel[] = [
    {
      id: "1step",
      name: "1 Step",
      icon: <StepOneIcon />,
      isSelected: selectedModel === "1step",
    },
    {
      id: "instant",
      name: "Instant",
      icon: <BoltIcon />,
      isSelected: selectedModel === "instant",
    },
    {
      id: "2step",
      name: "Two Step",
      icon: <TwoStepIcon />,
      isSelected: selectedModel === "2step",
    },
  ];

  const accountSizes: AccountSize[] = [
    { id: "10k", size: "$10k", isSelected: selectedAccountSize === "10k" },
    { id: "25k", size: "$25k", isSelected: selectedAccountSize === "25k" },
    { id: "50k", size: "$50k", isSelected: selectedAccountSize === "50k" },
    { id: "100k", size: "$100k", isSelected: selectedAccountSize === "100k" },
    { id: "200k", size: "$200k", isSelected: selectedAccountSize === "200k" },
  ];

  const phaseData: PhaseData[] = [
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

  const getSliderPosition = (selectedId: string) => {
    const index = accountSizes.findIndex((size) => size.id === selectedId);
    if (index === -1) return 0;

    // CSS Grid creates 5 equal columns, dots are centered in each column
    // Column 1: 0-20% (center at 10%), Column 2: 20-40% (center at 30%), etc.
    return 10 + index * 20;
  };

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Evaluations Badge */}
        <Badge>Evaluations</Badge>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Elite Mind Funding <span className="text-[#f6a91b]">Evaluations</span>
        </h2>

        {/* Subtitle */}
        <p className="text-md md:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Our Multiple Unique Evaluation Models Provide Traders The Opportunity
          To Trade Without Restrictions.
        </p>

        {/* Evaluation Model Selection */}
        <EvaluationModelSelector
          models={evaluationModels}
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
        />

        {/* Account Size Slider */}
        <div className="mb-14">
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Slider Track */}
            <div className="w-full h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#f6a91b] rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${getSliderPosition(selectedAccountSize)}%`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Slider Handle */}
            <motion.div
              className="absolute top-1/2 w-4 h-4 bg-[#f6a91b] rounded-full outline-1 outline-white"
              initial={{ left: "0%" }}
              animate={{ left: `${getSliderPosition(selectedAccountSize)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Account Size Options */}
          <div className="grid grid-cols-5 gap-0 mt-9 max-w-2xl mx-auto relative">
            {/* Dividers between labels */}
            <div className="absolute top-7 left-[20%] w-[24px] h-[3px] bg-[#2a2a2a] transform -translate-x-1/2"></div>
            <div className="absolute top-7 left-[40%] w-[24px] h-[3px] bg-[#2a2a2a] transform -translate-x-1/2"></div>
            <div className="absolute top-7 left-[60%] w-[24px] h-[3px] bg-[#2a2a2a] transform -translate-x-1/2"></div>
            <div className="absolute top-7 left-[80%] w-[24px] h-[3px] bg-[#2a2a2a] transform -translate-x-1/2"></div>

            {accountSizes.map((account) => (
              <div
                key={account.id}
                className="flex flex-col items-center justify-self-center"
              >
                <div className="relative">
                  {selectedAccountSize === account.id && (
                    <motion.div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[#f6a91b] text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▲
                    </motion.div>
                  )}
                  <motion.button
                    onClick={() => setSelectedAccountSize(account.id)}
                    className={`w-5 h-5 rounded-full transition-all duration-300 ${
                      selectedAccountSize === account.id
                        ? "bg-[#f6a91b] outline-1 outline-offset-3 outline-[#f6a91b]"
                        : "bg-transparent outline-1 outline-white hover:bg-[#3a3a3a]"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{account.size}</span>
                  </motion.button>
                </div>

                {/* Account Size Label */}
                <motion.span
                  className={`text-sm transition-colors duration-300 mt-2 ${
                    selectedAccountSize === account.id
                      ? "text-[#f6a91b]"
                      : "text-gray-400"
                  }`}
                  initial={{ opacity: 0.7 }}
                  animate={{
                    opacity: selectedAccountSize === account.id ? 1 : 0.7,
                    scale: selectedAccountSize === account.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {account.size}
                </motion.span>
              </div>
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
