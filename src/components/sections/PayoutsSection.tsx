"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { SectionHeader, PayoutCard } from "@/components";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

export default function PayoutsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const originalItems = [
    { imageSrc: "/assets/traders/image.png", amount: "$9,765" },
    { imageSrc: "/assets/traders/person2.png", amount: "$2,987" },
    { imageSrc: "/assets/traders/person3.png", amount: "$3,816" },
    { imageSrc: "/assets/traders/person4.png", amount: "$5,204" },
    { imageSrc: "/assets/traders/person5.png", amount: "$7,112" },
  ];

  // Create infinite loop by duplicating items (clone before and after)
  const items = [
    ...originalItems, // Clone at beginning for seamless previous navigation
    ...originalItems, // Original items
    ...originalItems, // Clone at end for seamless next navigation
  ];

  // Calculate card width based on screen size
  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 320;
    if (window.innerWidth >= 1024) return containerWidth * 0.32; // lg: 32%
    if (window.innerWidth >= 640) return containerWidth * 0.48; // sm: 48%
    return containerWidth * 0.8; // mobile: 80%
  }, [containerWidth]);

  const getGap = useCallback(() => {
    if (typeof window === "undefined") return 24;
    return 24; // 1.5rem = 24px
  }, []);

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setContainerWidth(newWidth);
        if (!isInitialized && newWidth > 0) {
          setIsInitialized(true);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isInitialized]);

  // Initialize to middle section (second set of items) for infinite loop
  useEffect(() => {
    if (containerWidth > 0 && isInitialized && currentIndex === 0) {
      const startIndex = originalItems.length; // Start at second set
      const newCardWidth = getCardWidth();
      const newGap = getGap();
      const newX = -startIndex * (newCardWidth + newGap);
      x.set(newX);
      setCurrentIndex(startIndex);
    }
  }, [
    containerWidth,
    isInitialized,
    currentIndex,
    originalItems.length,
    getCardWidth,
    getGap,
    x,
  ]);

  // Update position when container size changes
  useEffect(() => {
    if (containerWidth > 0 && isInitialized && currentIndex > 0) {
      // Recalculate position based on current index to avoid jumps
      const newCardWidth = getCardWidth();
      const newGap = getGap();
      const newX = -currentIndex * (newCardWidth + newGap);

      // Set position without animation for resize
      x.set(newX);
    }
  }, [
    containerWidth,
    currentIndex,
    items.length,
    x,
    isInitialized,
    getCardWidth,
    getGap,
  ]);

  // Calculate card dimensions
  const cardWidth = getCardWidth();
  const gap = getGap();

  // Navigate functions with infinite loop logic
  const goToSlide = (index: number, skipAnimation = false) => {
    if (isTransitioning) return;

    const newX = -index * (cardWidth + gap);

    if (skipAnimation) {
      x.set(newX);
      setCurrentIndex(index);
      return;
    }

    setIsTransitioning(true);

    // Animate to the new position smoothly
    const controls = animate(x, newX, {
      type: "spring",
      stiffness: 400,
      damping: 40,
      mass: 1,
      onComplete: () => {
        setIsTransitioning(false);
        // Handle infinite loop reset
        if (index >= originalItems.length * 2) {
          // At end, jump to beginning of second set
          const resetIndex = originalItems.length;
          const resetX = -resetIndex * (cardWidth + gap);
          x.set(resetX);
          setCurrentIndex(resetIndex);
        } else if (index < originalItems.length) {
          // At beginning, jump to end of second set
          const resetIndex = originalItems.length * 2 - 1;
          const resetX = -resetIndex * (cardWidth + gap);
          x.set(resetX);
          setCurrentIndex(resetIndex);
        }
      },
    });

    setCurrentIndex(index);
    return controls;
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    goToSlide(currentIndex - 1);
  };

  // Handle drag end
  const handleDragEnd = (_: unknown, info: { velocity: { x: number } }) => {
    if (isTransitioning) return;

    const currentX = x.get();
    const slideWidth = cardWidth + gap;

    // Calculate velocity-based index change
    const velocity = info.velocity.x;
    const velocityThreshold = 500;

    let newIndex = Math.round(Math.abs(currentX) / slideWidth);

    // Adjust index based on velocity for more natural feel
    if (Math.abs(velocity) > velocityThreshold) {
      if (velocity > 0) {
        newIndex = currentIndex - 1; // Moving right (showing previous)
      } else {
        newIndex = currentIndex + 1; // Moving left (showing next)
      }
    }

    // Clamp to valid range for our tripled array
    newIndex = Math.max(0, Math.min(newIndex, items.length - 1));

    goToSlide(newIndex);
  };

  // Calculate indicators based on original items
  const totalSlides = originalItems.length;

  // Get current indicator index (map from actual index to original items)
  const getCurrentIndicatorIndex = () => {
    const actualIndex = currentIndex % originalItems.length;
    return actualIndex;
  };

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            badge="Payouts"
            title={
              <>
                Trusted By Traders{" "}
                <span className="text-[#f6a91b]">Worldwide</span>
              </>
            }
            subtitle="Hear Directly From Traders Who Have Profited With EMF Funding. Real Stories, Real Results!"
            className="text-center mb-10"
          />
        </motion.div>
        {/* Carousel */}
        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Carousel Container */}
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            style={{
              x,
              opacity: isInitialized ? 1 : 0,
            }}
            drag="x"
            dragConstraints={{
              left: -(cardWidth + gap) * (items.length - 1),
              right: 0,
            }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            animate={{
              opacity: isInitialized ? 1 : 0,
            }}
            transition={{
              opacity: { duration: 0.3 },
            }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0"
                style={{ width: cardWidth }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <PayoutCard imageSrc={item.imageSrc} amount={item.amount} />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for Overflow Indication */}
          <div className="absolute left-0 top-0 bottom-0 w-52 bg-gradient-to-r from-black/90 to-transparent pointer-events-none z-10 hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-52 bg-gradient-to-l from-black/90 to-transparent pointer-events-none z-10 hidden md:block" />
        </div>

        {/* Indicators with Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="w-[50px] h-[50px] bg-white/[0.02] border border-white/10 rounded-[9.61644px] text-white/80 hover:text-white flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowLeft width={24} height={24} />
          </motion.button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(originalItems.length + idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === getCurrentIndicatorIndex()
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="w-[50px] h-[50px] bg-white/[0.02] border border-white/10 rounded-[9.61644px] text-white/80 hover:text-white flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowRight width={24} height={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
