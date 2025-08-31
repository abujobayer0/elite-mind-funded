"use client";

import { useState } from "react";
import {
  PhaseCard,
  PaymentOptions,
  EvaluationModelSelector,
  SectionHeader,
  AccountSlider,
} from "@/components";
import StepOneIcon from "../icons/StepOneIcon";
import BoltIcon from "../icons/BoltIcon";
import TwoStepIcon from "../icons/TwoStepIcon";

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

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          badge="Evaluations"
          title={
            <>
              Elite Mind Funding{" "}
              <span className="text-[#f6a91b]">Evaluations</span>
            </>
          }
          subtitle="Our Multiple Unique Evaluation Models Provide Traders The Opportunity To Trade Without Restrictions."
        />
        {/* Evaluation Model Selection */}
        <EvaluationModelSelector
          models={evaluationModels}
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
        />

        {/* Account Size Slider */}
        <AccountSlider
          accountSizes={accountSizes}
          selectedAccountSize={selectedAccountSize}
          onAccountSizeChange={setSelectedAccountSize}
        />

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
