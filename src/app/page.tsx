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

const FloatingChartElements = () => {
  return (
    <>
      {/* Left side candlesticks */}
      <Candlestick
        height={40}
        isGreen={true}
        delay={0.5}
        x="left-20"
        y="top-1/4"
      />
      <Candlestick
        height={60}
        isGreen={false}
        delay={1}
        x="left-32"
        y="top-1/3"
      />
      <Candlestick
        height={35}
        isGreen={true}
        delay={1.5}
        x="left-16"
        y="top-1/2"
      />
      <Candlestick
        height={50}
        isGreen={true}
        delay={2}
        x="left-28"
        y="top-3/5"
      />

      {/* Right side candlesticks */}
      <Candlestick
        height={45}
        isGreen={false}
        delay={0.8}
        x="right-20"
        y="top-1/4"
      />
      <Candlestick
        height={55}
        isGreen={true}
        delay={1.3}
        x="right-32"
        y="top-1/3"
      />
      <Candlestick
        height={40}
        isGreen={false}
        delay={1.8}
        x="right-16"
        y="top-1/2"
      />
      <Candlestick
        height={65}
        isGreen={true}
        delay={2.3}
        x="right-28"
        y="top-3/5"
      />

      {/* Floating price indicators */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-green-400 text-sm font-mono opacity-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        +2.45%
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-red-400 text-sm font-mono opacity-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        -1.23%
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 text-[#f6a91b] text-sm font-mono opacity-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        $50,000
      </motion.div>
    </>
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

      {/* Spotlight from top-right corner */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="w-full h-full bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

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

      <div className="absolute inset-0 z-5 hidden md:block">
        <FloatingChartElements />
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
            funded trading accounts. Get ready to trade with up to $200K in
            capital and keep up to 100% of your profits.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
