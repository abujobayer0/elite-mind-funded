import React from "react";

interface TierStat {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface TierCardProps {
  title: string;
  stats: TierStat[];
  description: string;
}

export default function TierCard({ title, stats, description }: TierCardProps) {
  return (
    <div className="relative rounded-[16px] border p-[34px_24px_24px] gap-6 transition-all duration-300 outline-1 outline-[#f6a91b]/60 outline-offset-8 bg-gradient-to-b from-[rgba(9,5,42,0)] to-[rgba(255,255,255,0.07)] backdrop-blur-[25px] hover:bg-gradient-to-b hover:from-[rgba(9,5,42,0)] hover:to-[rgba(246,169,28,0.3)] hover:shadow-[0_0_40px_rgba(246,169,27,0.08)]">
      {/* emblem */}
      <div className="absolute -top-[36px] left-1/2 -translate-x-1/2 w-[54px] h-[54px] rounded-[9px] bg-gradient-to-b from-[#1b150b] to-[#6c4c12] border border-[#F6A91C] backdrop-blur-[16.6232px] flex items-center justify-center">
        <img
          src="/assets/EMF-logo-white.png"
          alt=""
          className="w-full h-full object-contain p-3"
        />
      </div>

      <h3 className="text-white text-2xl font-semibold text-center mt-2 mb-6">
        {title}
      </h3>

      <div className="space-y-4 border-y border-white/10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between py-3 border-t "
          >
            {s.icon ? (
              <div className="flex items-center gap-2">
                {s.icon}
                <span className="text-gray-300 text-sm">{s.label}</span>
              </div>
            ) : (
              <span className="text-gray-300 text-sm">{s.label}</span>
            )}

            <span className="text-white font-medium">{s.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-gray-400 text-xs leading-relaxed">
        {description}
      </div>
    </div>
  );
}
