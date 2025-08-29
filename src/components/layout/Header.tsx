"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, GridIcon } from "@/components";

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
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-[#f6a91b] bg-[#1e1b15] px-4 py-2 rounded-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-[#a2a09d] hover:text-white px-4 py-2 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/affiliate"
              className="text-[#a2a09d] hover:text-white px-4 py-2 transition-colors"
            >
              Affiliate Program
            </Link>
            <Link
              href="/faqs"
              className="text-[#a2a09d] hover:text-white px-4 py-2 transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-[#a2a09d] hover:text-white px-4 py-2 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              href="/login"
              variant="ghost"
              size="sm"
              className="w-auto h-auto px-0 py-0"
            >
              Login
            </Button>
            <Button
              href="/dashboard"
              variant="primary"
              size="sm"
              className="w-[132px] h-[46px]"
            >
              <GridIcon width={16} height={16} fillColor="#191c49" />
              <span>Client Area</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
