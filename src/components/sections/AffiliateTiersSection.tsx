"use client";

import { GradientSection, SectionHeader, TierCard } from "@/components";

export default function AffiliateTiersSection() {
  const tiers = [
    {
      title: "Starter",
      highlighted: false,
      stats: [
        { label: "Commission", value: "8%" },
        { label: "Monthly Referrals", value: "1-40" },
        { label: "Free Challenge", value: "-" },
      ],
      description:
        "Start earning right away with a flat 10% commission on all sales you refer. This tier is available to all affiliates, no minimum requirements—just share your link.",
    },
    {
      title: "Pro",
      highlighted: false,
      stats: [
        { label: "Commission", value: "10%" },
        { label: "Monthly Referrals", value: "41-100" },
        { label: "Free Challenge", value: "-" },
      ],
      description:
        "Start earning right away with a flat 10% commission on all sales you refer. This tier is available to all affiliates, no minimum requirements—just share your link.",
    },
    {
      title: "Elite",
      highlighted: true,
      stats: [
        { label: "Commission", value: "12.5%" },
        { label: "Monthly Referrals", value: "101-300" },
        { label: "Free Challenge", value: "-" },
      ],
      description:
        "Start earning right away with a flat 10% commission on all sales you refer. This tier is available to all affiliates, no minimum requirements—just share your link.",
    },
  ];

  return (
    <GradientSection>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier) => (
            <TierCard
              key={tier.title}
              title={tier.title}
              stats={tier.stats}
              description={tier.description}
              highlighted={tier.highlighted}
            />
          ))}
        </div>
      </div>
    </GradientSection>
  );
}
