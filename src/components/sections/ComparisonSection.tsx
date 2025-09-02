"use client";

import { motion } from "framer-motion";
import { SectionHeader, ComparisonTable } from "@/components";

export default function ComparisonSection() {
  return (
    <section className="relative bg-black py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl w-full mx-auto px-4 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            badge="Comparison Table"
            title={
              <>
                Why <span className="text-[#f6a91b]">Elite Mind Funding</span>?
              </>
            }
            subtitle="Be A Part Of The EMF Community And Experience The Most Competitive Demo Trading Environment."
            className="text-center mb-8 sm:mb-10"
          />
        </motion.div>

        <div className="h-6 sm:h-8 md:h-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <ComparisonTable />
        </motion.div>
      </div>
    </section>
  );
}
