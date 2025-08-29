import React from "react";

interface TierStat {
  label: string;
  value: string;
}

interface TierCardProps {
  title: string;
  stats: TierStat[];
  description: string;
  highlighted?: boolean;
}

export default function TierCard({
  title,
  stats,
  description,
  highlighted = false,
}: TierCardProps) {
  return (
    <div
      className={
        "relative rounded-2xl border p-6 md:p-8 transition-all duration-300 " +
        (highlighted
          ? "border-[#f6a91b]/40 bg-gradient-to-b from-[#1a1710] to-[#0b0a08] shadow-[0_0_40px_rgba(246,169,27,0.08)]"
          : "border-white/10 bg-[#0f0f0f]")
      }
    >
      {/* emblem */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#f6a91b] ring-4 ring-black/40 flex items-center justify-center text-[#191c49] font-extrabold">
        EM
      </div>

      <h3 className="text-white text-2xl font-semibold text-center mt-2 mb-6">
        {title}
      </h3>

      <div className="space-y-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between py-3 border-t border-white/10 first:border-t-0"
          >
            <span className="text-gray-300 text-sm">{s.label}</span>
            <span className="text-white font-medium">{s.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-gray-400 text-sm leading-relaxed">
        {description}
      </div>
    </div>
  );
}
