"use client";

import Link from "next/link";
import { CheckIcon, StarIcon } from "@/components";

export default function HeroSection() {
  return (
    <section className="relative bg-black min-h-[calc(100vh-114px)] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#191c49] w-[142px] h-[40px] flex items-center justify-center rounded-lg mx-auto">
          <span className="text-white text-[14px] font-normal">
            Elite Mind Funding
          </span>
        </div>

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/get-funded"
            className="bg-transparent border-2 border-[#f6a91b] text-white hover:bg-[#f6a91b] hover:text-black px-4 py-4 rounded-lg font-normal text-[16px] transition-all duration-300  w-[160px] h-[50px] flex items-center justify-center"
          >
            Get Funded Now
          </Link>
          <Link
            href="/community"
            className="bg-transparent border-2 border-[#71706f] text-[#71706f] hover:bg-[#71706f] hover:text-black px-4 py-4 rounded-lg font-normal text-[16px] transition-all duration-300 w-[160px] h-[50px] flex items-center justify-center"
          >
            Join Community
          </Link>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
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
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} width={20} height={20} fillColor="#10B981" />
              ))}
            </div>
            <span className="text-white font-medium">Excellent</span>
            <span className="text-gray-400">Trustpilot</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-gray-300">Listed On Propfirmmatch.com</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 gradient_bg_dark rounded-2xl p-8 border border-white/50">
          {/* Total Accounts */}
          <div className="text-center">
            <div className="">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                100K+
              </div>
              <div className="text-gray-300 text-lg">Total Accounts</div>
            </div>
          </div>

          {/* Active Traders */}
          <div className="text-center">
            <div className="">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50K+
              </div>
              <div className="text-gray-300 text-lg">Active Traders</div>
            </div>
          </div>

          {/* Total Payouts */}
          <div className="text-center">
            <div className="">
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
