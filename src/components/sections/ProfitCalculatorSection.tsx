"use client";

import { useMemo, useState } from "react";
import RangeSlider from "@/components/ui/RangeSlider";
import MetricBox from "@/components/ui/MetricBox";
import Button from "@/components/ui/Button";

export default function ProfitCalculatorSection() {
  const [accountSize, setAccountSize] = useState(100);
  const [profitPct, setProfitPct] = useState(10);

  const calculatedProfit = useMemo(() => {
    const base = accountSize * 1000; // in dollars
    const profit = (base * profitPct) / 100;
    return profit;
  }, [accountSize, profitPct]);

  const challengeCost = useMemo(() => {
    // simple placeholder formula; can be replaced with real tiers
    const tiers: Record<number, number> = {
      10: 38,
      25: 90,
      50: 180,
      100: 360,
      200: 720,
    };
    const key = accountSize in tiers ? accountSize : 100;
    return tiers[key];
  }, [accountSize]);

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="mx-auto w-[128px] h-[30px] text-[12px] flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white/80 border border-white/10">
            Profit Calculator
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Calculate Your{" "}
            <span className="text-[#f6a91b]">Potential Profits</span> With EMF
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Explore How Much You Can Earn With A Funded Account. No Risk, Just
            Opportunities!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left: Controls */}
          <div className="rounded-2xl border border-[#f6a91b]/30 bg-[#0f0f0f] p-6 md:p-8">
            <h3 className="text-white text-2xl font-semibold mb-6">
              How Much Can You Get?
            </h3>
            <div className="space-y-6">
              <RangeSlider
                label="Account Size"
                min={10}
                max={200}
                step={5}
                value={accountSize}
                suffix="k"
                onChange={setAccountSize}
              />
              <RangeSlider
                label="Profit Made"
                min={1}
                max={50}
                step={1}
                value={profitPct}
                suffix="%"
                onChange={setProfitPct}
              />
            </div>

            <p className="text-gray-500 text-xs mt-6">
              Calculate Your Profit With Our AuraPips Profit Calculator
            </p>

            <div className="mt-6">
              <Button
                href="/get-funded"
                variant="primary"
                size="md"
                className="w-full"
              >
                Get Funded Now
              </Button>
            </div>
          </div>

          {/* Right: Results */}
          <div className="rounded-2xl border border-[#f6a91b]/30 bg-[#0f0f0f] p-6 md:p-8">
            <div className="rounded-xl border border-white/10 p-6 md:p-8">
              <MetricBox
                label="Your Calculated Profit:"
                value={calculatedProfit.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
                highlighted
              />
              <div className="mt-6" />
              <MetricBox
                label="Challenge Cost:"
                value={challengeCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
