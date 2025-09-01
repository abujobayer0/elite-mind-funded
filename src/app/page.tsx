"use client";
import { motion } from "motion/react";

const Page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/background-image.jpg')",
        }}
      />

      {/* Dark Overlay to make image darker */}
      <div className="absolute inset-0 bg-black bg-opacity-80" />

      {/* Large Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 z-10">
        <img
          src="/assets/EMF-logo.png"
          alt="Elite Mind Funding Background Logo"
          className="w-96 h-96 md:w-[600px] md:h-[600px] object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 flex items-center justify-center mb-8 mx-auto">
            <img
              src="/assets/EMF-logo.png"
              alt="Elite Mind Funding Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f6a91b]">
            Elite Mind Funding
          </h1>
        </div>

        {/* Coming Soon Text */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We&apos;re launching Elite Mind Funding - the ultimate platform for
            funded trading accounts.
            <br className="flex md:hidden" />
            <span className="text-[#f6a91b] font-semibold underline">
              {" "}
              Stay Tuned.
            </span>
          </p>

          {/* Loading Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <span className="text-[#f6a91b] text-xl font-semibold">
                Loading...
              </span>
            </div>

            {/* Progress bar container - rectangular like in image */}
            <div className="w-full max-w-md mx-auto">
              <div className="h-6 bg-transparent border-2 border-[#f6a91b] overflow-hidden relative p-0.5">
                <motion.div
                  className="h-full bg-[#f6a91b]"
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{
                    duration: 2.5,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
