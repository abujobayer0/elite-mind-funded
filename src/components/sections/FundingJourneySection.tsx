"use client";

import PlanCard from "@/components/ui/PlanCard";
import StatsBar from "@/components/ui/StatsBar";

export default function FundingJourneySection() {
  const cards = [
    {
      title: "One Step",
      subtitle:
        "Skip the evaluation phase. Start trading immediately with our simulated capital.",
      highlighted: false,
      features: [
        "50% Reward Split",
        "Bi-Weekly Reward Cycles",
        "Advanced Model",
        "Skip Evaluations",
      ],
    },
    {
      title: "Instant Funding",
      subtitle:
        "Skip the evaluation phase. Start trading immediately with our simulated capital.",
      highlighted: true,
      features: [
        "50% Reward Split",
        "Bi-Weekly Reward Cycles",
        "Quick Way To Simulated Funding",
        "Realistic Targets",
        "HFT Add-On Available",
      ],
    },
    {
      title: "Two Step",
      subtitle:
        "Skip the evaluation phase. Start trading immediately with our simulated capital.",
      highlighted: false,
      features: [
        "50% Reward Split",
        "Bi-Weekly Reward Cycles",
        "Advanced Model",
        "Skip Evaluations",
      ],
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="mx-auto w-[170px] h-[34px] text-[12px] flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white/80 border border-white/10">
            Choose Your Account
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Your <span className="text-[#f6a91b]">Funding Journey</span> Starts
            Here
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Choose The Account Plan That Best Fits Your Trading Style, Goals,
            And Personal Preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <PlanCard
              key={c.title}
              title={c.title}
              subtitle={c.subtitle}
              highlighted={c.highlighted}
              features={c.features}
              onStart={() => console.log("Start Challenge", c.title)}
            />
          ))}
        </div>

        <StatsBar />
      </div>
    </section>
  );
}
