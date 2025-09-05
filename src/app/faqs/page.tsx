"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Footer, SectionHeader } from "@/components";
import { ChevronDown, Search } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "what-is-elite-mind-funding",
    question: "What is Elite Mind Funding?",
    answer:
      "Elite Mind Funding is a proprietary trading firm that empowers traders by providing access to simulated capital for trading forex, futures, indices, and select cryptocurrencies. Pass our challenges or opt for instant funding to trade and keep a high share of the profits.",
    category: "General",
  },
  {
    id: "trading-options",
    question: "What are the trading options with Elite Mind Funding?",
    answer:
      "We offer three programs: Two-Step Challenge, One-Step Challenge, and Instant Funding.",
    category: "Programs",
  },
  {
    id: "two-step-rules",
    question: "What are the rules for the Two-Step Challenge?",
    answer:
      "Phase 1: 8% profit target (min 3 days). Phase 2: 5% profit target (min 3 days). Risk: 5% daily, 10% max trailing. Leverage: 1:100. Profit Split: 90/10.",
    category: "Programs",
  },
  {
    id: "one-step-rules",
    question: "What are the rules for the One-Step Challenge?",
    answer:
      "Profit Target: 10% (min 3 days). Risk: 4% daily, 7% max trailing. Leverage: 1:50. Profit Split: 100%.",
    category: "Programs",
  },
  {
    id: "instant-funding-rules",
    question: "What are the rules for Instant Funding?",
    answer:
      "Min 3 trading days. Risk: 3% daily, 6% total. Leverage: 1:50. Profit Split: 100%. Consistency Reward available.",
    category: "Programs",
  },
  {
    id: "trailing-drawdown",
    question: "What is a trailing drawdown?",
    answer:
      "Trailing drawdown follows your highest balance. Example: If $50k account grows to $55k, max 10% drawdown is $49.5k.",
    category: "Trading Rules",
  },
  {
    id: "trading-instruments",
    question: "Which instruments can I trade?",
    answer: "Forex, futures, indices, select cryptocurrencies.",
    category: "Trading Rules",
  },
  {
    id: "trading-strategies",
    question: "Are there restrictions on trading strategies?",
    answer:
      "Hedging, EAs, Martingale not allowed. Restrictions on news trading, HFT, and over-leveraging.",
    category: "Trading Rules",
  },
  {
    id: "participation-cost",
    question: "How much does it cost to participate?",
    answer: "Fees vary by program and account size ($5k–$200k).",
    category: "Pricing",
  },
  {
    id: "payouts",
    question: "How do payouts work?",
    answer:
      "Two-Step: 90% trader. One-Step & Instant: 100% trader. Weekly or on-demand payouts via bank/crypto.",
    category: "Payouts",
  },
  {
    id: "challenge-failure",
    question: "What happens if I fail a challenge?",
    answer: "Breaching risk rules means challenge failure; repurchase needed.",
    category: "Rules & Violations",
  },
  {
    id: "account-scaling",
    question: "Can I scale my account?",
    answer: "Yes, consistent traders may qualify for scaling up to $500k.",
    category: "Account Management",
  },
  {
    id: "trading-platforms",
    question: "Which trading platforms are supported?",
    answer: "MetaTrader 5. Stable internet required (50 Mbps).",
    category: "Technical Requirements",
  },
  {
    id: "funded-account-breach",
    question: "What happens if I breach rules in a funded account?",
    answer: "Account suspension; restart challenge or opt for instant funding.",
    category: "Rules & Violations",
  },
  {
    id: "is-broker",
    question: "Is Elite Mind Funding a broker?",
    answer: "No, we are a proprietary trading firm.",
    category: "General",
  },
  {
    id: "support",
    question: "What support do you offer?",
    answer: "Support via email, live chat, and Discord community.",
    category: "Support",
  },
  {
    id: "weekend-trading",
    question: "Can I trade on weekends or hold positions overnight?",
    answer:
      "Depends on program; some Instant Funding accounts allow overnight and weekend trading.",
    category: "Trading Rules",
  },
];

const categories = [
  "All",
  "General",
  "Programs",
  "Trading Rules",
  "Pricing",
  "Payouts",
  "Rules & Violations",
  "Account Management",
  "Technical Requirements",
  "Support",
];

interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordion({ item, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <motion.div
      className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
      >
        <h3 className="text-white font-medium text-lg pr-4">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2">
              <p className="text-gray-300 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQs, setOpenFAQs] = useState<Set<string>>(new Set());

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-black pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionHeader
                badge="Frequently Asked Questions"
                title={
                  <>
                    Get Answers to Your{" "}
                    <span className="text-[#f6a91b]">Questions</span>
                  </>
                }
                subtitle="Find everything you need to know about Elite Mind Funding, our trading programs, rules, and support."
              />
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Filter */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f6a91b] focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-[#f6a91b] text-black"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* FAQ List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <FAQAccordion
                      item={faq}
                      isOpen={openFAQs.has(faq.id)}
                      onToggle={() => toggleFAQ(faq.id)}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-400 text-lg">
                    No FAQs found matching your search criteria.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-[#f6a91b]/10 to-transparent rounded-lg p-8 border border-[#f6a91b]/20">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-300 mb-6">
                  Can't find the answer you're looking for? Our support team is
                  here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#f6a91b] text-[#f6a91b] rounded-lg hover:bg-[#f6a91b] hover:text-black transition-colors"
                  >
                    Contact Support
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#f6a91b] text-black rounded-lg hover:bg-[#f6a91b]/90 transition-colors"
                  >
                    Join Discord Community
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
