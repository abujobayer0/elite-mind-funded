"use client";

import { SectionHeader } from "@/components";

export default function WhyUsSection() {
  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionHeader
            badge="Why Us"
            title={
              <>
                Why <span className="text-[#f6a91b]">Elite Mind Funding?</span>
              </>
            }
            subtitle="Be A Part Of The EMF Community And Experience The Most Competitive
            Demo Trading Environment."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[1060px] lg:min-h-[320px] md:min-h-[740px] sm:min-h-[600px]">
          <div
            className="rounded-2xl transition-all duration-300 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(131.19deg, rgba(246, 169, 28, 0.1) 0.49%, rgba(0, 0, 0, 0) 99.51%)",
              border: "1px solid rgba(246, 169, 28, 0.2)",
              backdropFilter: "blur(25px)",
              borderRadius: "10px",
            }}
          >
            <div className="absolute top-0 left-0 right-0 z-50">
              <img
                src="/assets/why/testing-4.svg"
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-50">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Real Trading Expertise
                </h3>
                <p className="text-gray-300 text-[12px]">
                  Elite Mind Funding is led and advised by Professionals from
                  Central Banks, Leading Brokers, and Top Prop Firms.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl transition-all duration-300 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(131.19deg, rgba(246, 169, 28, 0.1) 0.49%, rgba(0, 0, 0, 0) 99.51%)",
              border: "1px solid rgba(246, 169, 28, 0.2)",
              backdropFilter: "blur(25px)",
              borderRadius: "10px",
            }}
          >
            <div className="absolute top-0 left-0 right-0 z-50">
              <img
                src="/assets/why/testing-5.svg"
                alt=""
                className="w-full h-full object-contain4"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-50">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Competitive Spread & High Leverage
                </h3>
                <p className="text-gray-300 text-[12px]">
                  Trade with spreads starting from 0.0 Pips and up to 1:100
                  Leverage.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl transition-all duration-300 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(131.19deg, rgba(246, 169, 28, 0.1) 0.49%, rgba(0, 0, 0, 0) 99.51%)",
              border: "1px solid rgba(246, 169, 28, 0.2)",
              backdropFilter: "blur(25px)",
              borderRadius: "10px",
            }}
          >
            <div className="absolute top-0 left-0 right-0 z-50">
              <img
                src="/assets/why/testing-3.svg"
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-50">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Multi-Asset Trading
                </h3>
                <p className="text-gray-300 text-[12px]">
                  Trade across forex, digital assets, indices, and commodities
                  with precision.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 min-h-[660px] sm:min-h-[800px] md:min-h-[280px] lg:min-h-[360px]">
          <div
            className="rounded-2xl transition-all duration-300 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(131.19deg, rgba(246, 169, 28, 0.1) 0.49%, rgba(0, 0, 0, 0) 99.51%)",
              border: "1px solid rgba(246, 169, 28, 0.2)",
              backdropFilter: "blur(25px)",
              borderRadius: "10px",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 z-50">
              <img
                src="/assets/why/testing.svg"
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
            <div className="absolute top-0 left-0 right-0 z-50">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Lightning-Fast Execution
                </h3>
                <p className="text-gray-300 text-[12px]">
                  Global server mesh routes orders in &lt; 5 ms. You hit price,
                  not slippage.
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl transition-all duration-300 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(131.19deg, rgba(246, 169, 28, 0.1) 0.49%, rgba(0, 0, 0, 0) 99.51%)",
              border: "1px solid rgba(246, 169, 28, 0.2)",
              backdropFilter: "blur(25px)",
              borderRadius: "10px",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 z-50">
              <img
                src="/assets/why/testing-2.svg"
                alt=""
                className="w-full h-full object-contain pl-6 -mb-8"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 z-50">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Best Trading Platforms
                </h3>
                <p className="text-gray-300 text-[12px]">
                  Trade on the industry&apos;s Most Popular Trading Platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
