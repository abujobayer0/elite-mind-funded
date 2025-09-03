"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
import UserIcon from "../icons/UserIcon";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        {/* Upper Section - Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left Column - Branding and Social */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14">
                <Image
                  src="/assets/EMF-logo.png"
                  alt="Elite Mind Funding"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {[
                { href: "#", src: "/assets/social/X.png", alt: "X (Twitter)" },
                {
                  href: "#",
                  src: "/assets/social/Insta.png",
                  alt: "Instagram",
                },
                {
                  href: "#",
                  src: "/assets/social/Discord.png",
                  alt: "Discord",
                },
                { href: "#", src: "/assets/social/tele.png", alt: "Telegram" },
                {
                  href: "#",
                  src: "/assets/social/youtube.png",
                  alt: "YouTube",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-[34px] h-[34px] bg-gradient-to-br from-[rgba(246,169,28,0)] to-[rgba(246,169,28,0.1)] rounded-[8px] flex items-center justify-center text-white hover:opacity-80 transition-colors border border-[#f6a91b]/10"
                  style={{
                    background:
                      "linear-gradient(130deg, rgba(246, 169, 28, 0) 0%, rgba(246, 169, 28, 0.1) 100%)",
                  }}
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </Link>
              ))}
            </div>

            <Button
              href="/get-funded"
              variant="outline"
              size="sm"
              className="w-auto px-6 py-3"
            >
              Get Funded Now
            </Button>
          </div>

          {/* Middle Columns - Navigation */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Our Links",
                links: [
                  { href: "/pricing", text: "Our Pricing" },
                  { href: "/dashboard", text: "Our Dashboard" },
                  { href: "/partner", text: "Become A Partner" },
                  { href: "/about", text: "About Us" },
                ],
              },
              {
                title: "Our Policies",
                links: [
                  { href: "/terms", text: "Terms Of Service" },
                  { href: "/privacy", text: "Privacy Policy" },
                  { href: "/refund", text: "Refund Policy" },
                ],
              },
              {
                title: "Contact Us",
                links: [
                  { href: "/email", text: "Our Email" },
                  { href: "/chat", text: "Live Chat" },
                  { href: "/faqs", text: "FAQs" },
                ],
              },
            ].map((column, columnIndex) => (
              <div key={columnIndex}>
                <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">
                  {column.title}
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="block hover:text-white transition-colors text-sm md:text-base"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Subscription and Payment */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <div className="flex gap-2 items-stretch">
                <div className="flex-1 flex items-center gap-3 px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus-within:border-orange-400 min-w-0">
                  <UserIcon />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm md:text-base min-w-0"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base flex-shrink-0 w-22"
                  onClick={() => {
                    // Handle subscription logic here
                    console.log("Subscription submitted");
                  }}
                >
                  Submit
                </Button>
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

            <div className="flex items-center space-x-2 md:space-x-3">
              <span className="text-gray-400 text-xs md:text-sm">
                Proudly Powered By
              </span>
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright, Policies, and Disclaimer */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          {/* Copyright and Policy Links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 mb-4 md:mb-6">
            <div className="text-gray-400 text-sm md:text-base">
              © 2025 Elite Mind Funding
            </div>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
              <Link
                href="/refund"
                className="hover:text-white transition-colors text-sm md:text-base"
              >
                Refund Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors text-sm md:text-base"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors text-sm md:text-base"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-800 pt-4 md:pt-6">
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed text-justify">
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
