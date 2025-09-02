"use client";

import { motion } from "framer-motion";
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
    },
    {
      id: 2,
      title: "Scaling Plan Feature",
      subtitle:
        "The pride funding promises to send the Reward within 24hr after your approval.",
      icon: DollarSignIcon,
    },
    {
      id: 3,
      title: "Reward Protection",
      subtitle:
        "Our funded accounts has lowest spread compare to any other prop trading firms.",
      icon: ClockIcon,
    },
    {
      id: 4,
      title: "Reward System",
      subtitle:
        "The pride funding offers 24/7 live chat support for any kind of queries by traders.",
      icon: SecurityIcon,
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl text-left bg-white/5 p-[34px] border border-transparent transition-all duration-300 hover:border-[#F6A91C] cursor-pointer"
              >
                <div
                  className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-[#1a1a1a]`}
                >
                  <IconComponent className="text-[#f6a91b]" size={32} />
                </div>
                <h3 className="mb-2 text-white text-lg font-medium">
                  {feature.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-gray-400">
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
