"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
import GridIcon from "../ui/GridIcon";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

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
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive("/")
                  ? "text-[#f6a91b] bg-[#1e1b15]"
                  : "text-[#a2a09d] hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/pricing")
                  ? "text-[#f6a91b] bg-[#1e1b15]"
                  : "text-[#a2a09d] hover:text-white"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/affiliate"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/affiliate")
                  ? "text-[#f6a91b] bg-[#1e1b15]"
                  : "text-[#a2a09d] hover:text-white"
              }`}
            >
              Affiliate Program
            </Link>
            <Link
              href="/faqs"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/faqs")
                  ? "text-[#f6a91b] bg-[#1e1b15]"
                  : "text-[#a2a09d] hover:text-white"
              }`}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/contact")
                  ? "text-[#f6a91b] bg-[#1e1b15]"
                  : "text-[#a2a09d] hover:text-white"
              }`}
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
