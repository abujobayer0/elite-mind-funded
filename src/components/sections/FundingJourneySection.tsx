"use client";

import { Badge, PlanCard, StatsBar } from "@/components";

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
    <section
      className="relative bg-black py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 169, 28, 0.1) 0%, rgba(8, 8, 9, 0) 100.01%)",
        borderTop: "1px solid",
        borderImage: "radial-gradient(circle, #f6a91b 30%, transparent 100%) 1",
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge>Choose Your Account</Badge>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">
            Your <span className="text-[#f6a91b]">Funding Journey</span> Starts
            Here
          </h2>
          <p className="text-white/95 mt-3 max-w-3xl mx-auto text-lg font-normal">
            Choose The Account Plan That Best Fits Your Trading Style, Goals,
            And Personal Preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-22">
          {cards.map((c, index) => (
            <div
              className={`${
                index === 1 ? "transform md:scale-108 md:-my-4 z-10" : ""
              }`}
              key={c.title}
            >
              <PlanCard
                index={index}
                title={c.title}
                subtitle={c.subtitle}
                highlighted={c.highlighted}
                features={c.features}
                onStart={() => console.log("Start Challenge", c.title)}
              />
            </div>
          ))}
        </div>

        <StatsBar />
      </div>
    </section>
  );
}
