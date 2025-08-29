"use client";
import { motion } from "motion/react";

const Candlestick = ({
  height,
  isGreen,
  delay = 0,
  x,
  y,
}: {
  height: number;
  isGreen: boolean;
  delay?: number;
  x: string;
  y: string;
}) => {
  return (
    <motion.div
      className={`absolute ${x} ${y} w-3 opacity-30`}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 0.3, scaleY: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {/* Candlestick wick */}
      <motion.div
        className={`w-0.5 mx-auto ${isGreen ? "bg-green-400" : "bg-red-400"}`}
        style={{ height: height + 20 }}
        animate={{ scaleY: [1, 1.1, 1] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {/* Candlestick body */}
      <motion.div
        className={`w-3 ${
          isGreen ? "bg-green-500" : "bg-red-500"
        } absolute top-2 left-0`}
        style={{ height: height - 10 }}
        animate={{ scaleY: [1, 1.05, 1] }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/background-image.jpg')",
        }}
      />

      {/* Dark Overlay to make image darker */}
      <div className="absolute inset-0 bg-black bg-opacity-80" />

      {/* Additional subtle spotlight glow */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <motion.div
          className="w-full h-full bg-gradient-radial from-[#f6a91b]/15 via-[#f6a91b]/5 to-transparent rounded-full blur-xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Large Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 z-10">
        <motion.img
          src="/assets/EMF-logo.png"
          alt="Elite Mind Funding Background Logo"
          className="w-96 h-96 md:w-[600px] md:h-[600px] object-contain"
          animate={{
            scale: [0.95, 1.05, 0.95],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Brand */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-20 h-20 flex items-center justify-center mb-8 mx-auto"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/assets/EMF-logo.png"
              alt="Elite Mind Funding Logo"
              className="w-20 h-20 object-contain"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[#f6a91b]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Elite Mind Funding
          </motion.h1>
        </motion.div>

        {/* Coming Soon Text */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Coming Soon
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            We&apos;re launching Elite Mind Funding - the ultimate platform for
            funded trading accounts.
            <motion.span
              className="text-[#f6a91b] font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {" "}
              Stay Tuned.
            </motion.span>
          </motion.p>

          {/* Loading Bar */}
          <motion.div
            className="mt-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <div className="text-center mb-6">
              <span className="text-[#f6a91b] text-xl font-semibold">
                Loading...
              </span>
            </div>

            {/* Progress bar container - rectangular like in image */}
            <div className="w-full max-w-md mx-auto">
              <div className="h-6 bg-transparent border-2 border-[#f6a91b] overflow-hidden relative p-0.5">
                <div className="h-full bg-[#f6a91b] w-1/2" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
