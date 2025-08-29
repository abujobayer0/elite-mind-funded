"use client";

import { Badge, TierCard } from "@/components";

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
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge>Affiliates</Badge>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Our <span className="text-[#f6a91b]">Affiliate</span> Tiers
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Join Our Affiliate Program, Refer Your Unique Link To Your Community
          </p>
        </div>

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
    </section>
  );
}
