"use client";

import {
  SectionHeader,
  RocketIcon,
  DollarSignIcon,
  ClockIcon,
  SecurityIcon,
} from "@/components";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Lowest Reward Target",
      subtitle:
        "Our simulated trading accounts do not have any commissions on your trading lots.",
      icon: RocketIcon,
      highlighted: false,
    },
    {
      id: 2,
      title: "Scaling Plan Feature",
      subtitle:
        "The pride funding promises to send the Reward within 24hr after your approval.",
      icon: DollarSignIcon,
      highlighted: true,
    },
    {
      id: 3,
      title: "Reward Protection",
      subtitle:
        "Our funded accounts has lowest spread compare to any other prop trading firms.",
      icon: ClockIcon,
      highlighted: false,
    },
    {
      id: 4,
      title: "Reward System",
      subtitle:
        "The pride funding offers 24/7 live chat support for any kind of queries by traders.",
      icon: SecurityIcon,
      highlighted: false,
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Features"
          title={
            <>
              Elite Mind Funding{" "}
              <span className="text-[#f6a91b]">Features</span>
            </>
          }
          subtitle="Whether You're Looking For Speed, Accessibility, Structure, Or Flexibility."
          className="text-center mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={feature.id}
                className={`rounded-2xl text-left bg-white/5  p-[34px] ${
                  feature.highlighted
                    ? " border border-[#F6A91C]"
                    : "bg-transparent p-6"
                }`}
              >
                <div
                  className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-[#1a1a1a]`}
                >
                  <IconComponent className="text-[#f6a91b]" size={32} />
                </div>
                <h3 className="mb-2 text-white text-lg font-medium">
                  {feature.title}
                </h3>
                <p
                  className={`text-sm font-normal leading-relaxed ${
                    feature.highlighted ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
