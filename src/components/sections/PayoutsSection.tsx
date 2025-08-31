"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { SectionHeader, PayoutCard } from "@/components";

export default function PayoutsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const items = [
    { imageSrc: "/assets/traders/image.png", amount: "$9,765" },
    { imageSrc: "/assets/traders/person2.png", amount: "$2,987" },
    { imageSrc: "/assets/traders/person3.png", amount: "$3,816" },
    { imageSrc: "/assets/traders/person4.png", amount: "$5,204" },
    { imageSrc: "/assets/traders/person5.png", amount: "$7,112" },
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

  // Update position when container size changes
  useEffect(() => {
    if (containerWidth > 0 && isInitialized) {
      // Recalculate position based on current index to avoid jumps
      const newCardWidth = getCardWidth();
      const newGap = getGap();
      const newX = -currentIndex * (newCardWidth + newGap);
      const newMaxScroll = Math.max(
        0,
        (newCardWidth + newGap) * items.length - newGap - containerWidth
      );
      const clampedX = Math.max(-newMaxScroll, Math.min(0, newX));

      // Set position without animation for resize
      x.set(clampedX);
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

  // Calculate max scroll based on content
  const cardWidth = getCardWidth();
  const gap = getGap();
  const totalWidth = (cardWidth + gap) * items.length - gap;
  const maxScroll = Math.max(0, totalWidth - containerWidth);

  // Navigate functions
  const goToSlide = (index: number) => {
    const newX = -index * (cardWidth + gap);
    const clampedX = Math.max(-maxScroll, Math.min(0, newX));

    // Animate to the new position smoothly
    const controls = animate(x, clampedX, {
      type: "spring",
      stiffness: 400,
      damping: 40,
      mass: 1,
    });

    setCurrentIndex(index);
    return controls;
  };

  const nextSlide = () => {
    const nextIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex - 1 < 0 ? totalSlides - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  // Handle drag end
  const handleDragEnd = (_: unknown, info: { velocity: { x: number } }) => {
    const currentX = x.get();
    const slideWidth = cardWidth + gap;

    // Calculate velocity-based index change
    const velocity = info.velocity.x;
    const velocityThreshold = 500;

    let newIndex = Math.round(Math.abs(currentX) / slideWidth);

    // Adjust index based on velocity for more natural feel
    if (Math.abs(velocity) > velocityThreshold) {
      if (velocity > 0) {
        newIndex = Math.max(0, newIndex - 1); // Moving right (showing previous)
      } else {
        newIndex = Math.min(items.length - 1, newIndex + 1); // Moving left (showing next)
      }
    }

    const clampedIndex = Math.max(0, Math.min(newIndex, items.length - 1));
    goToSlide(clampedIndex);
  };

  // Calculate visible slides for indicators
  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const visibleSlides = getVisibleSlides();
  const totalSlides = Math.max(1, items.length - visibleSlides + 1);

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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
              left: -maxScroll,
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
                // whileHover={{
                //   scale: 1.02,
                //   transition: { duration: 0.2 },
                // }}
              >
                <PayoutCard imageSrc={item.imageSrc} amount={item.amount} />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for Overflow Indication */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" /> */}
        </div>

        {/* Indicators with Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm text-white/80 hover:text-white hover:border-white/40 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </motion.button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 h-2 bg-[#f6a91b]"
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
            className="w-10 h-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm text-white/80 hover:text-white hover:border-white/40 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
