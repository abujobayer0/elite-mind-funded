"use client";

import Link from "next/link";
import { Button, Badge, CheckIcon, StarIcon } from "@/components";
import HeroGlow from "../icons/HeroGlow";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-black h-[780px] flex items-center justify-center overflow-hidden">
      <div className="w-full h-full  absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <HeroGlow />
        </div>
        <div className="absolute bottom-0 top-0 left-1/2 transform -translate-x-1/2 min-w-[1800px] w-full h-full mx-auto  md:flex items-center justify-between gap-60 hidden">
          <div className="transform 4xl:translate-y-[0%] 3xl:translate-y-[20%] translate-y-[41.5%] w-1/2 h-full">
            <Image
              src="/assets/hero-left-shape.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full object-fill"
            />
          </div>
          <div className="transform 4xl:translate-y-[0%] 3xl:translate-y-[20%] translate-y-[41.5%] w-1/2 h-full">
            <Image
              src="/assets/hero-right-shape.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge>Elite Mind Funding</Badge>

        {/* Main Headline */}
        <div className="mb-4 mt-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            We Fund Traders
            <img
              className="inline-block h-[62px] object-contain"
              src="/assets/hero-icons.png"
              alt=""
            />
            Up to $200k
          </h1>
        </div>

        {/* Supporting Text */}
        <p className="text-lg md:text-md text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Prove Your Trading Skills In Our Evaluation. Get Funded With Up To
          200K. Keep <br /> Up To 100% Of Your Profits —{" "}
          <span className="text-[#f6a91b] font-semibold">
            Paid In Real Cash.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button href="/get-funded" variant="outline">
            Get Funded Now
          </Button>
          <Button href="/community" variant="community">
            Join Community
          </Button>
        </div>

        {/* Key Benefits */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <div className="flex items-center justify-center space-x-3 gradient_bg_dark h-[50px] w-[200px] rounded-xl ">
            <CheckIcon width={16} height={16} strokeColor="white" />
            <span className="text-white text-[14px] font-medium">
              100% Profit Split
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3 gradient_bg_dark h-[50px] w-[200px] rounded-xl">
            <CheckIcon width={16} height={16} strokeColor="white" />
            <span className="text-white text-[14px] font-medium">
              4 Hr Average Payout
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3 gradient_bg_dark h-[50px] w-[200px] rounded-xl">
            <CheckIcon width={16} height={16} strokeColor="white" />
            <span className="text-white text-[14px] font-medium">
              Get Paid Every 7 Days
            </span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-18">
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm font-medium">Excellent</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 flex items-center justify-center bg-[#10B981]"
                >
                  <StarIcon width={20} height={20} fillColor="#fff" />
                </div>
              ))}
            </div>
            <StarIcon width={20} height={20} fillColor="#10B981" />
            <span className="text-white text-xs font-bold">Trustpilot</span>
          </div>
          <div className="hidden sm:block w-[2px] h-7 bg-white/20"></div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-300 text-sm flex gap-1 items-center">
              Listed On{" "}
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/assets/icon-1.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </span>{" "}
              Propfirmmatch.com
            </p>
          </div>
        </div>

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
    </section>
  );
}
