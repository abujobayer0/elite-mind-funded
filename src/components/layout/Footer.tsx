"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upper Section - Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Left Column - Branding and Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14">
                <img src="/assets/EMF-logo.png" alt="" className="h-full" />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <Image
                  src="/assets/social/X.png"
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <Image
                  src="/assets/social/Insta.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <Image
                  src="/assets/social/Discord.png"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <Image
                  src="/assets/social/tele.png"
                  alt="Telegram"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <Image
                  src="/assets/social/youtube.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </Link>
            </div>

            <Link
              href="/get-funded"
              className="inline-block bg-transparent border border-[#f6a91c] text-[#f6a91c] hover:bg-[#f6a91c] hover:text-black px-6 py-3 rounded-lg transition-colors font-medium"
            >
              Get Funded Now
            </Link>
          </div>

          {/* Middle Columns - Navigation */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">
                Our Links
              </h3>
              <div className="space-y-3">
                <Link
                  href="/pricing"
                  className="block hover:text-white transition-colors"
                >
                  Our Pricing
                </Link>
                <Link
                  href="/dashboard"
                  className="block hover:text-white transition-colors"
                >
                  Our Dashboard
                </Link>
                <Link
                  href="/partner"
                  className="block hover:text-white transition-colors"
                >
                  Become A Partner
                </Link>
                <Link
                  href="/about"
                  className="block hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">
                Our Policies
              </h3>
              <div className="space-y-3">
                <Link
                  href="/terms"
                  className="block hover:text-white transition-colors"
                >
                  Terms Of Service
                </Link>
                <Link
                  href="/privacy"
                  className="block hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/refund"
                  className="block hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">
                Contact Us
              </h3>
              <div className="space-y-3">
                <Link
                  href="/email"
                  className="block hover:text-white transition-colors"
                >
                  Our Email
                </Link>
                <Link
                  href="/chat"
                  className="block hover:text-white transition-colors"
                >
                  Live Chat
                </Link>
                <Link
                  href="/faqs"
                  className="block hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Subscription and Payment */}
          <div className="space-y-6">
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                />
                <button className="px-6 py-3 bg-transparent border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black rounded-r-lg transition-colors font-medium">
                  Submit
                </button>
              </div>
            </div>

            <div>
              <div className="flex space-x-3">
                <div className="w-[36px] h-[27px]">
                  <Image
                    src="/assets/footer/Image.png"
                    alt="Mastercard"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[36px] h-[27px]">
                  <Image
                    src="/assets/footer/Image-1.png"
                    alt="Maestro"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[36px] h-[27px]">
                  <Image
                    src="/assets/footer/visa.png"
                    alt="Visa"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[36px] h-[27px]">
                  <Image
                    src="/assets/footer/tether.png"
                    alt="Tether"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[36px] h-[27px]">
                  <Image
                    src="/assets/footer/bitcoin.png"
                    alt="Bitcoin"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[36px] h-[27px]">
                  <Image
                    src="/assets/footer/paypal.png"
                    alt="PayPal"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Proudly Powered By</span>
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright, Policies, and Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright and Policy Links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <div className="text-gray-400">© 2025 Elite Mind Funding</div>
            <div className="flex space-x-6">
              <Link
                href="/refund"
                className="hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm leading-relaxed text-justify">
              This website contains hypothetical performance results and is for
              educational purposes only. Past performance does not guarantee
              future results. Trading involves substantial risk of loss and is
              not suitable for all investors. The risk of loss in trading can be
              substantial. You should therefore carefully consider whether such
              trading is suitable for you in light of your financial condition.
              EMF funded accounts are simulated accounts and do not involve real
              money trading. All trades are executed in a simulated environment
              for educational and testing purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
