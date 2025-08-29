"use client";

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 flex items-center justify-center mb-4 mx-auto">
            <img
              src="/assets/EMF-logo.png"
              alt="Elite Mind Funding Logo"
              className="w-12 h-12 object-contain"
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
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re launching Elite Mind Funding - the ultimate platform for
            funded trading accounts. Get ready to trade with up to $200K in
            capital and keep up to 100% of your profits.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center pb-8">
        <p className="text-gray-400 text-sm">
          © 2024 Elite Mind Funding. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Page;
