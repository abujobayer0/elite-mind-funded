"use client";

import { useMemo, useState } from "react";
import {
  RangeSlider,
  Button,
  GradientSection,
  SectionHeader,
} from "@/components";

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
    <GradientSection>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionHeader
            badge="Profit Calculator"
            title={
              <>
                Calculate Your{" "}
                <span className="text-[#f6a91b]">Potential Profits</span> With
                EMF
              </>
            }
            subtitle="Explore How Much You Can Earn With A Funded Account. No Risk, Just Opportunities!"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border border-[#f6a91b]/70 rounded-2xl p-3">
          {/* Left: Controls */}
          <div className="rounded-2xl border border-white/10 p-6 md:p-8">
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
          <div className="rounded-2xl border border-white/10 p-6 md:p-8  flex items-center justify-center">
            <div className="bg-gradient-to-bl from-[#f6a91b]/10 to-transparent border border-[#f6a91b]/30 w-full h-full rounded-2xl">
              <div className="space-y-4 p-4 h-full flex flex-col items-center justify-center">
                {/* Golden Profit Card */}
                <div className="rounded-2xl bg-gradient-to-r from-[#f6a91b] to-[#e6971a] px-8 py-4 text-center ring-5 ring-[#f6a91b]/20">
                  <p className="text-black/70 text-sm font-medium mb-2">
                    Your Calculated Profit:
                  </p>
                  <p className="text-black text-5xl font-bold">
                    {calculatedProfit.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>

                {/* Challenge Cost */}
                <div className="text-center">
                  <p className="text-white text-md font-normal mb-2">
                    Challenge Cost:
                  </p>
                  <p className="text-white text-4xl font-bold">
                    {challengeCost.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GradientSection>
  );
}
