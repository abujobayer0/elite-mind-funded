"use client";

import { Badge, StepCard } from "@/components";

export default function DashboardSection() {
  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge>Our Dashboard</Badge>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Trading Made Easy, <span className="text-[#f6a91b]">For You.</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Your Skills With Our Risk. You’re Not Liable For Any Losses.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121212] to-black p-4 md:p-6 mb-10">
          <div className="h-[320px] md:h-[420px] rounded-xl bg-black/60 border border-white/10 relative overflow-hidden">
            {/* Left rail */}
            <div className="absolute left-0 top-0 bottom-0 w-56 bg-black/60 border-r border-white/10 p-4 space-y-3 hidden md:block">
              <div className="h-10 rounded-lg bg-[#f6a91b] text-black font-medium flex items-center px-3">
                Dashboard
              </div>
              {[
                "Overview",
                "Leaderboard",
                "Watchlist",
                "Competitions",
                "Affiliate Program",
              ].map((item) => (
                <div
                  key={item}
                  className="h-9 rounded-md bg-white/5 text-white/70 flex items-center px-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Header badge */}
            <div className="absolute right-4 top-4 w-10 h-10 rounded-lg bg-white/10" />
            {/* Body rows (placeholders) */}
            <div className="absolute inset-0 md:left-56 p-4 md:p-6">
              <div className="text-white/90 font-semibold">Dashboard</div>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-8 w-28 rounded-full bg-white/5" />
                <div className="h-8 w-24 rounded-full bg-white/5" />
                <div className="h-8 w-24 rounded-full bg-white/5" />
              </div>
              <div className="mt-6 h-40 rounded-lg bg-white/5" />
              <div className="mt-4 h-28 rounded-lg bg-white/5" />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StepCard
            title="Trade & Get Paid"
            description="Our Dedicated Support team is always here to help."
            step="3 Step"
          />
          <StepCard
            title="Unlock Capital"
            description="Receive Payouts with a High Profit Split."
            step="2 Step"
          />
          <StepCard
            title="Take a Challenge"
            description="Trade you with our capital without being liable."
            step="1 Step"
          />
        </div>
      </div>
    </section>
  );
}
