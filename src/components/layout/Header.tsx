"use client";

import Link from "next/link";
import Image from "next/image";
import { GridIcon } from "@/components";

export default function Header() {
  return (
    <header className="bg-black/90 backdrop-blur-sm h-[114px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12">
                <img src="/assets/EMF-logo.png" alt="" className="h-full" />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#f6a91b] bg-[#1e1b15] px-4 py-2 rounded-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-[#a2a09d] hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/affiliate"
              className="text-[#a2a09d] hover:text-white transition-colors"
            >
              Affiliate Program
            </Link>
            <Link
              href="/faqs"
              className="text-[#a2a09d] hover:text-white transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-[#a2a09d] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-white hover:text-white/90 transition-colors text-base "
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className="bg-[#f6a91b] hover:bg-[#f6a91b]/90 text-[#191c49] text-base rounded-lg font-normal transition-colors flex items-center space-x-2 w-[132px] h-[46px] justify-center"
            >
              <GridIcon width={16} height={16} fillColor="#191c49" />
              <span>Client Area</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
