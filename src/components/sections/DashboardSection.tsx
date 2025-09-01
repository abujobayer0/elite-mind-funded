"use client";

import {
  SectionHeader,
  StepCard,
  DollarCircleIcon,
  StarRatingIcon,
  NetworkIcon,
  GitBranchIcon,
  CardIcon,
  ArrowsIcon,
  MinusCircleIcon,
  ChallengeIcon,
} from "@/components";
import ETHIcon from "../icons/ETHIcon";
import MATICIcon from "../icons/MATICIcon";
import { EllipsisVertical } from "lucide-react";
import GiveIcon from "../icons/GiveIcon";
import SquireStar from "../icons/SquireStar";

export default function DashboardSection() {
  return (
    <section
      className="relative bg-black py-20"
      style={{
        background:
          "radial-gradient(72.22% 28.41% at 50% 21.59%, rgba(255, 204, 0, 0.15) 0%, rgba(1, 1, 2, 0) 100%)",
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Dashboard"
          title={
            <>
              Trading Made Easy,{" "}
              <span className="text-[#f6a91b]">For You.</span>
            </>
          }
          subtitle="Your Skills With Our Risk. You're Not Liable For Any Losses."
          className="text-center mb-10"
        />
        <div className="relative">
          {/* Dashboard Mockup */}
          <div className="px-6">
            <div className="rounded-4xl p-2 mb-10 bg-white/10 backdrop-blur-sm border border-white/10">
              <div className=" h-[260px] xl:h-[600px] lg:h-[460px] md:h-[400px] sm:h-[300px] bg-black/70 relative overflow-hidden rounded-3xl border border-white/10">
                <img src="/assets/dashboard.svg" alt="" className="w-full" />

                {/* <div className="absolute left-0 top-0 bottom-0 w-64 bg-black/80 backdrop-blur-sm border-r border-white/10 p-4 space-y-2 hidden md:block">
                  <div className="h-3"></div>
                  {[
                    {
                      name: "Dashboard",
                      icon: CardIcon,
                      active: true,
                    },
                    { name: "Overview", icon: MinusCircleIcon },
                    { name: "Leaderboard", icon: DollarCircleIcon },
                    { name: "Watchlist", icon: StarRatingIcon },
                    { name: "Competitions", icon: NetworkIcon },
                    { name: "Affiliate Program", icon: GitBranchIcon },
                    { name: "Swap", icon: ArrowsIcon },
                  ].map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className={`h-10 rounded-lg flex items-center px-4 text-sm gap-3 transition-all duration-200 ${
                        item.active
                          ? "bg-gradient-to-r from-[#f6a91b] to-[#ff8c00] text-black font-semibold shadow-lg"
                          : "bg-transparent text-white/60 hover:bg-white/5 hover:text-white/80"
                      }`}
                    >
                      <item.icon
                        size={16}
                        className={item.active ? "text-black" : "text-white/40"}
                      />
                      {item.name}
                    </div>
                  ))}
                </div> */}

                {/* <div className="absolute inset-0 md:left-64 p-6 overflow-hidden">
                  <div className="h-6"></div>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h1 className="text-white text-2xl font-bold mb-1">
                        Dashboard
                      </h1>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src="/assets/EMF-logo-white.png"
                          alt=""
                          className="w-full object-contain h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-white/60 text-sm font-medium mb-2">
                      Portfolio Value
                    </div>
                    <div className="text-white text-4xl font-bold">
                      $27,437.19
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-white text-xl font-semibold">
                        Assets
                      </h2>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 border border-white/20 h-[50px] rounded-full">
                          <span className="text-white/80 text-sm">
                            List view
                          </span>
                          <svg
                            className="w-4 h-4 text-white/60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center rounded-full overflow-hidden border border-white/20 p-1 h-[50px]">
                          <div className="bg-white/10 px-4 py-2 rounded-full">
                            <span className="text-white/80 text-sm">
                              All Trades
                            </span>
                          </div>
                          <div className="bg-transparent px-4 py-2 text-white/40 rounded-full">
                            <span className="text-white/80 text-sm">
                              Accounts
                            </span>
                          </div>
                          <div className="bg-transparent px-4 py-2 text-white/40 rounded-full">
                            <span className="text-white/80 text-sm">
                              Funded Accounts
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] w-full bg-white/10 mb-4"></div>

                    <div className="bg-[#ffffff09] rounded-2xl border border-white/10 overflow-hidden">
                      <div className="grid grid-cols-4 gap-6 px-6 py-4 border-b border-white/10">
                        <div className="text-white/80 text-sm font-medium flex items-center">
                          Assets <EllipsisVertical size={16} />
                        </div>
                        <div className="text-white/80 text-sm font-medium">
                          Portfolio %
                        </div>
                        <div className="text-white/80 text-sm font-medium">
                          Price
                        </div>
                        <div className="text-white/80 text-sm font-medium text-right">
                          Balance
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-6 px-6 py-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                          <ETHIcon />
                          <div>
                            <div className="text-white font-medium">ETH</div>
                            <div className="text-white/60 text-sm">
                              Ethereum
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-bold">39.34%</div>
                        <div className="text-white font-bold">$1,996.55</div>
                        <div className="text-white text-right font-bold">
                          $10,793.78
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-6 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <MATICIcon />
                          <div>
                            <div className="text-white font-medium">MATIC</div>
                            <div className="text-white/60 text-sm">
                              Ethereum
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-bold">11.60%</div>
                        <div className="text-white font-bold">$0.65</div>
                        <div className="text-white text-right font-bold">
                          $5,926.43
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* </div> */}

          <div
            className="absolute bottom-0 top-[46%] w-full h-auto z-5"
            style={{
              background:
                "linear-gradient(180deg, rgba(9, 9, 9, 0) 0%,rgba(9, 9, 9, 1) 40%, rgba(9, 9, 9, 1) 100%)",
            }}
          ></div>
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 -mt-[140px] relative z-10">
            <StepCard
              title="Trade & Get Paid"
              description="Our Dedicated Support team is always here to help."
              step="3 Step"
              icon={<GiveIcon />}
            />
            <StepCard
              title="Unlock Capital"
              description="Receive Payouts with a High Profit Split."
              step="2 Step"
              icon={<SquireStar />}
            />
            <StepCard
              title="Take a Challenge"
              description="Trade you with our capital without being liable."
              step="1 Step"
              icon={<ChallengeIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
