"use client";

import { Badge, TimelineStep } from "@/components";

export default function AffiliateHowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Generate your affiliate link",
      description:
        "Purchase any challenge on our app and you will automatically be eligible for a unique link to start promoting on your favourite platform.",
      position: "right" as const,
      highlighted: true,
    },
    {
      step: 2,
      title: "Promote EMF",
      description:
        "Promote EMF online using any social media platform, a unique cookie will be set on the users side so even if they buys later, you will be eligible for a commission.",
      position: "left" as const,
    },
    {
      step: 3,
      title: "Monitor Results",
      description:
        "You can track all the purchases that have happened through your link by visiting the affiliate dashboard.",
      position: "right" as const,
    },
    {
      step: 4,
      title: "Reward Time",
      description:
        "You can request for a reward on the rewards page when you are eligible for a reward.",
      position: "left" as const,
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="w-[120px] h-[30px] bg-[#1a1a1a] border border-white/10">
            How It Works
          </Badge>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            How <span className="text-[#f6a91b]">EMF</span> Affiliate Works?
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Learn And Grow Together In A Community Of Experienced And Aspiring
            Traders Alike.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((s, idx) => (
            <div key={s.step} className="mb-16 last:mb-0">
              <TimelineStep
                step={s.step}
                title={s.title}
                description={s.description}
                position={s.position}
                highlighted={s.highlighted}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
