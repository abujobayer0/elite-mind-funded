"use client";

import { motion } from "framer-motion";
import { Button, SectionHeader, StatsBar } from "@/components";
import HeroGlow from "../icons/HeroGlow";
import CheckIcon from "../ui/CheckIcon";
import StarIcon from "../icons/StarIcon";
import HeroRightShape from "../shapes/HeroRightShape";
import HeroLeftShape from "../shapes/HeroLeftShape";

export default function HeroSection() {
  return (
    <section className="relative bg-black h-[900px] md:h-[780px] flex items-center justify-center overflow-hidden">
      <div className="w-full h-full  absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <HeroGlow />
        </div>
        <div className="absolute bottom-0 top-0 left-1/2 transform -translate-x-1/2 min-w-[1800px] w-full h-full mx-auto  md:flex items-center justify-between gap-60 hidden">
          <div className="transform 4xl:translate-y-[26%] translate-y-[39.5%] w-1/2 h-full ">
            <HeroLeftShape />
          </div>
          <div className="transform 4xl:translate-y-[26%] translate-y-[39.5%] w-1/2 h-full ">
            <HeroRightShape />
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            badge="Elite Mind Funding"
            title={
              <>
                We Fund Traders
                <img
                  className="h-[62px] object-contain hidden sm:inline-block"
                  src="/assets/hero-icons.png"
                  alt=""
                />
                <br className="sm:hidden" />
                <span className="text-[#f6a91b] sm:text-white">
                  Up to $200k
                </span>
              </>
            }
            subtitle={
              <>
                Prove Your Trading Skills In Our Evaluation. Get Funded With Up
                To 200K. Keep <br /> Up To 100% Of Your Profits —{" "}
                <span className="text-[#f6a91b] font-semibold">
                  Paid In Real Cash.
                </span>
              </>
            }
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-row gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Button href="/get-funded" variant="outline">
            Get Funded Now
          </Button>
          <Button href="/community" variant="community">
            Join Community
          </Button>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mb-4">
            <div className="flex items-center justify-center space-x-3 gradient_bg_dark h-[50px] w-[170px] sm:w-[200px] rounded-xl">
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
            <div className="flex items-center justify-center space-x-3 gradient_bg_dark h-[50px] w-[200px] rounded-xl col-span-2 md:col-span-1">
              <CheckIcon width={16} height={16} strokeColor="white" />
              <span className="text-white text-[14px] font-medium">
                Get Paid Every 7 Days
              </span>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-18"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <StatsBar />
        </motion.div>
      </div>
    </section>
  );
}
