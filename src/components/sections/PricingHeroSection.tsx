"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  SectionHeader,
  EvaluationModelSelector,
  RangeSlider,
  PhaseCard,
  PaymentOptions,
  StepOneIcon,
  BoltIcon,
  TwoStepIcon,
  AccountSlider,
} from "@/components";
import StarIcon from "../icons/StarIcon";

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

export default function PricingHeroSection() {
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

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            badge="Pricing"
            title={
              <>
                <span className="text-[#f6a91b]"> Elite Mind Funding</span>{" "}
                Pricing
              </>
            }
            subtitle="EMF Is A Leading Trading Firm Committed To Providing Unparalleled Opportunities."
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Button href="/get-funded" variant="outline">
            Get Funded Now
          </Button>
          <Button href="/community" variant="community">
            Join Community
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-18"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm font-medium">Excellent</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 flex items-center justify-center bg-[#10B981]"
                >
                  <StarIcon width={20} height={20} fillColor="#fff" />
                </div>
              ))}
            </div>
            <StarIcon width={20} height={20} fillColor="#10B981" />
            <span className="text-white text-xs font-bold">Trustpilot</span>
          </div>
          <div className="hidden sm:block w-[2px] h-7 bg-white/20"></div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-300 text-sm flex gap-1 items-center">
              Listed On{" "}
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/assets/icon-1.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </span>{" "}
              Propfirmmatch.com
            </p>
          </div>
        </motion.div>

        {/* Evaluation Model Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <EvaluationModelSelector
            models={evaluationModels}
            selectedModel={selectedModel}
            onModelSelect={setSelectedModel}
          />
        </motion.div>

        {/* Account Size Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <AccountSlider
            accountSizes={accountSizes}
            selectedAccountSize={selectedAccountSize}
            onAccountSizeChange={setSelectedAccountSize}
          />
        </motion.div>

        {/* Phase Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 mx-[12px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
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
        </motion.div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          <PaymentOptions />
        </motion.div>
      </div>
    </section>
  );
}
