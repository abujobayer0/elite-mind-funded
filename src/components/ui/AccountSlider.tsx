"use client";

import React from "react";
import { motion } from "framer-motion";

interface AccountSize {
  id: string;
  size: string;
  isSelected: boolean;
}

interface AccountSliderProps {
  accountSizes: AccountSize[];
  selectedAccountSize: string;
  onAccountSizeChange: (accountSizeId: string) => void;
  className?: string;
}

const AccountSlider: React.FC<AccountSliderProps> = ({
  accountSizes,
  selectedAccountSize,
  onAccountSizeChange,
  className = "",
}) => {
  const getSliderPosition = (selectedId: string) => {
    const index = accountSizes.findIndex((size) => size.id === selectedId);
    if (index === -1) return 0;

    // CSS Grid creates equal columns, dots are centered in each column
    // For 5 columns: Column 1: 0-20% (center at 10%), Column 2: 20-40% (center at 30%), etc.
    return 10 + index * (80 / (accountSizes.length - 1));
  };

  return (
    <div className={`mb-14 ${className}`}>
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Slider Track */}
        <div className="w-full h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#f6a91b] rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${getSliderPosition(selectedAccountSize)}%`,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-1/2 w-4 h-4 bg-[#f6a91b] rounded-full outline-1 outline-white"
          initial={{ left: "0%" }}
          animate={{ left: `${getSliderPosition(selectedAccountSize)}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Account Size Options */}
      <div
        className="grid gap-0 mt-9 max-w-2xl mx-auto relative"
        style={{ gridTemplateColumns: `repeat(${accountSizes.length}, 1fr)` }}
      >
        {/* Dividers between labels */}
        {accountSizes.slice(1).map((_, index) => {
          const position = ((index + 1) / accountSizes.length) * 100;
          return (
            <div
              key={`divider-${index}`}
              className="absolute top-7 w-[24px] h-[3px] bg-[#2a2a2a] transform -translate-x-1/2"
              style={{ left: `${position}%` }}
            />
          );
        })}

        {accountSizes.map((account) => (
          <div
            key={account.id}
            className="flex flex-col items-center justify-self-center"
          >
            <div className="relative">
              {selectedAccountSize === account.id && (
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[#f6a91b] text-xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▲
                </motion.div>
              )}
              <motion.button
                onClick={() => onAccountSizeChange(account.id)}
                className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  selectedAccountSize === account.id
                    ? "bg-[#f6a91b] outline-1 outline-offset-3 outline-[#f6a91b]"
                    : "bg-transparent outline-1 outline-white hover:bg-[#3a3a3a]"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{account.size}</span>
              </motion.button>
            </div>

            {/* Account Size Label */}
            <motion.span
              className={`text-sm transition-colors duration-300 mt-2 ${
                selectedAccountSize === account.id
                  ? "text-[#f6a91b]"
                  : "text-gray-400"
              }`}
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: selectedAccountSize === account.id ? 1 : 0.7,
                scale: selectedAccountSize === account.id ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {account.size}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSlider;
