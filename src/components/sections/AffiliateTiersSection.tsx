"use client";

import { motion } from "framer-motion";
import {
  CalendarTimeIcon,
  GradientSection,
  ProfitIcon,
  SectionHeader,
  TierCard,
} from "@/components";

export default function AffiliateTiersSection() {
  const tiers = [
    {
      title: "Starter",
      stats: [
        { label: "Commission", value: "8%", icon: <ProfitIcon /> },
        {
          label: "Monthly Referrals",
          value: "1-40",
          icon: <CalendarTimeIcon />,
        },
        { label: "Free Challenge", value: "-" },
      ],
      description:
        "Start earning right away with a flat 10% commission on all sales you refer. This tier is available to all affiliates, no minimum requirements—just share your link.",
    },
    {
      title: "Pro",
      stats: [
        { label: "Commission", value: "10%", icon: <ProfitIcon /> },
        {
          label: "Monthly Referrals",
          value: "41-100",
          icon: <CalendarTimeIcon />,
        },
        { label: "Free Challenge", value: "-" },
      ],
      description:
        "Start earning right away with a flat 10% commission on all sales you refer. This tier is available to all affiliates, no minimum requirements—just share your link.",
    },
    {
      title: "Elite",
      stats: [
        { label: "Commission", value: "12.5%", icon: <ProfitIcon /> },
        {
          label: "Monthly Referrals",
          value: "101-300",
          icon: <CalendarTimeIcon />,
        },
        { label: "Free Challenge", value: "-" },
      ],
      description:
        "Start earning right away with a flat 10% commission on all sales you refer. This tier is available to all affiliates, no minimum requirements—just share your link.",
    },
  ];

  return (
    <GradientSection>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            badge="Affiliates"
            title={
              <>
                Our <span className="text-[#f6a91b]">Affiliate</span> Tiers
              </>
            }
            subtitle="Join Our Affiliate Program, Refer Your Unique Link To Your Community"
            className="text-center mb-10"
          />
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-18 md:gap-8 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {tiers.map((tier) => (
            <TierCard
              key={tier.title}
              title={tier.title}
              stats={tier.stats}
              description={tier.description}
            />
          ))}
        </motion.div>
      </div>
    </GradientSection>
  );
}
