import React from "react";

export default function StatsBar() {
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row items-start p-6 md:p-[24px_44px] max-w-[1060px] w-full md:h-[135px] mx-auto mt-8 bg-gradient-to-b from-[rgba(8,8,9,0)] to-[rgba(246,169,28,0.1)] border-[0.5px] border-white/10 rounded-[16px] outline outline-[rgba(246,169,28,0.2)] outline-offset-12">
        {/* Mobile Layout (flex-col) and Desktop Layout (flex-row) */}
        <div className="flex flex-col space-y-8 md:hidden w-full">
          {/* First Row: Total Accounts and Active Traders */}
          <div className="flex justify-between border-b border-white/10 pb-4">
            {/* Total Accounts */}
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-white mb-1">100K+</div>
              <div className="text-gray-300 text-sm">Total Accounts</div>
            </div>

            {/* Divider */}
            <div className="w-px bg-white/10 mx-2"></div>

            {/* Active Traders */}
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-300 text-sm">Active Traders</div>
            </div>
          </div>

          {/* Second Row: Total Payouts */}
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">$5M+</div>
            <div className="text-gray-300 text-sm">Total Payouts</div>
          </div>
        </div>

        {/* Desktop Layout (Original) */}
        <div className="hidden md:flex md:flex-row w-full">
          {/* Total Accounts */}
          <div className="text-center flex-1">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              100K+
            </div>
            <div className="text-gray-300 text-lg">Total Accounts</div>
          </div>

          {/* Active Traders */}
          <div className="text-center flex-1">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              50K+
            </div>
            <div className="text-gray-300 text-lg">Active Traders</div>
          </div>

          {/* Total Payouts */}
          <div className="text-center flex-1">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              $5M+
            </div>
            <div className="text-gray-300 text-lg">Total Payouts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
