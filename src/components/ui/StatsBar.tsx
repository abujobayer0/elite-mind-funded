import React from "react";

interface StatItem {
  label: string;
  value: string;
}

export default function StatsBar() {
  const stats: StatItem[] = [
    { label: "Total Accounts", value: "100K+" },
    { label: "Active Traders", value: "50K+" },
    { label: "Total Payouts", value: "$5M+" },
  ];

  return (
    <div className="max-w-5xl w-full mx-auto mt-10">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(8,8,9,0)] to-[rgba(246,169,28,0.06)] px-6 py-6 md:px-10 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {s.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
