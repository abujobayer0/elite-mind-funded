"use client";

import { motion } from "framer-motion";
import { SectionHeader, BonusCard, RangeSlider, MetricBox } from "@/components";
import { useMemo, useState } from "react";

export default function AffiliateBonusSection() {
  const [referrals, setReferrals] = useState(100);

  const estimatedEarnings = useMemo(() => {
    // Example model: average payout $21 per referral
    return referrals * 21;
  }, [referrals]);

  const items = [
    { title: "50k", subtitle: "2 Step Account", badge: "After 100 Referrals" },
    {
      title: "50k",
      subtitle: "2 Step Account + $500",
      badge: "After 300 Referrals",
    },
    {
      title: "$100k",
      subtitle: "2 Step Account + $1500",
      badge: "After 500 Referrals",
    },
    {
      title: "$50k",
      subtitle: "Instant Funding + $3000",
      badge: "After 1000 Referrals",
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
            badge="Bonus"
            title={
              <>
                <span className="text-[#f6a91b]">Elite Mind Funding</span> Bonus
              </>
            }
            subtitle="Whether You're Looking For Speed, Accessibility, Structure, Or Flexibility."
            className="text-center mb-10"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {items.map((b) => (
            <BonusCard
              key={b.badge}
              title={b.title}
              subtitle={b.subtitle}
              badge={b.badge}
            />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 rounded-2xl border border-[#f6a91b]/70 p-4 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8">
            <h3 className="text-white text-2xl font-semibold mb-6">
              How Much Can You Make?
            </h3>
            <RangeSlider
              label="Referrals"
              min={0}
              max={1000}
              step={10}
              value={referrals}
              onChange={setReferrals}
            />
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8 flex items-center justify-center">
            <MetricBox
              label="Estimated Average Earnings"
              value={estimatedEarnings.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
