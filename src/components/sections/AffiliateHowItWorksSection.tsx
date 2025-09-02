"use client";

import { motion } from "framer-motion";
import { Badge, FramerScrollProgressSteps } from "@/components";

export default function AffiliateHowItWorksSection() {
  const steps = [
    {
      id: "generate-link",
      title: "Generate your affiliate link",
      description:
        "Purchase any challenge on our app and you will automatically be eligible for a unique link to start promoting on your favourite platform.",
      color: "#f6a91b",
    },
    {
      id: "promote-emf",
      title: "Promote EMF",
      description:
        "Promote EMF online using any social media platform, a unique cookie will be set on the users side so even if they buys later, you will be eligible for a commission.",
      color: "#4ade80",
    },
    {
      id: "monitor-results",
      title: "Monitor Results",
      description:
        "You can track all the purchases that have happened through your link by visiting the affiliate dashboard.",
      color: "#3b82f6",
    },
    {
      id: "reward-time",
      title: "Reward Time",
      description:
        "You can request for a reward on the rewards page when you are eligible for a reward.",
      color: "#8b5cf6",
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge>How It Works</Badge>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            How <span className="text-[#f6a91b]">EMF</span> Affiliate Works?
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Learn And Grow Together In A Community Of Experienced And Aspiring
            Traders Alike.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <FramerScrollProgressSteps steps={steps} />
        </motion.div>
      </div>
    </section>
  );
}
