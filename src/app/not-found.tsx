"use client";

import { motion } from "framer-motion";
import { Header, Footer, Badge } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <motion.div
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* 404 Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <Badge>404 Error</Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            Page Not <span className="text-[#f6a91b]">Found</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <Link
              href="/"
              className="bg-[#f6a91b] text-black hover:bg-[#e59a1a] focus:ring-[#f6a91b] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Go Back Home
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-[#f6a91b] text-white hover:bg-[#f6a91b] hover:text-black focus:ring-[#f6a91b] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Support
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <p className="text-gray-500 text-sm mb-4">
              Or try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/pricing"
                className="text-[#f6a91b] hover:text-white transition-colors text-sm"
              >
                Pricing
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/affiliate"
                className="text-[#f6a91b] hover:text-white transition-colors text-sm"
              >
                Affiliate Program
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/faqs"
                className="text-[#f6a91b] hover:text-white transition-colors text-sm"
              >
                FAQs
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
