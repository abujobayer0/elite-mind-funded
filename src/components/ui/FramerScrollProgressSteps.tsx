"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

interface ProgressStep {
  id: string;
  title: string;
  description: string;
  color?: string;
}

interface FramerScrollProgressStepsProps {
  steps: ProgressStep[];
  className?: string;
}

interface StepIndicatorInlineProps {
  index: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}

function StepIndicatorInline({
  index,
  totalSteps,
  scrollYProgress,
}: StepIndicatorInlineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
    margin: "-10% 0px -10% 0px",
  });

  // Calculate when this step should be active based on scroll position
  const stepStart = index / totalSteps;
  const stepEnd = (index + 1) / totalSteps;
  const stepMidpoint = (stepStart + stepEnd) / 2;

  const scrollActive = useTransform(
    scrollYProgress,
    [stepStart, stepMidpoint, stepEnd],
    [0, 1, 1],
    { clamp: true }
  );

  const borderColor = useTransform(
    scrollActive,
    [0, 1],
    ["rgb(75, 85, 99)", "#f6a91b"]
  );

  const backgroundColor = useTransform(
    scrollActive,
    [0, 1],
    ["rgb(42, 42, 42)", "#f6a91b"]
  );

  const boxShadow = useTransform(
    scrollActive,
    [0, 1],
    ["0 0 0 rgba(246, 169, 27, 0)", "0 0 20px rgba(246, 169, 27, 0.5)"]
  );

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={
        isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.7 }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="w-12 h-12 rounded-full border-2 bg-[#1a1a1a] relative z-10 flex items-center justify-center"
        style={{
          borderColor,
          backgroundColor,
          boxShadow,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.span
          className="text-sm font-bold"
          style={{
            color: useTransform(
              scrollActive,
              [0, 1],
              ["rgb(156, 163, 175)", "black"]
            ),
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function FramerScrollProgressSteps({
  steps,
  className = "",
}: FramerScrollProgressStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress to step progress with better easing
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"], {
    clamp: true,
  });

  return (
    <div
      ref={containerRef}
      className={`scroll-progress-container relative ${className}`}
    >
      {/* Steps Content with integrated indicators */}
      <div className="relative">
        {/* Progress Line - positioned relative to content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 z-0"
          style={{
            top: "0px",
            height: `calc(100% - ${steps.length > 1 ? "0px" : "0px"})`,
          }}
        >
          {/* Background line */}
          <div className="w-full h-full bg-gray-700/30 rounded-full" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#f6a91b] to-[#f6a91b]/60 rounded-full origin-top"
            style={{ height: progressHeight }}
          />
        </div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className={`relative flex items-center ${
              index !== steps.length - 1 ? "mb-16 md:mb-20 lg:mb-24" : ""
            }`}
          >
            {/* Step Indicator - positioned at the top of each step */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
              <StepIndicatorInline
                index={index}
                totalSteps={steps.length}
                scrollYProgress={scrollYProgress}
              />
            </div>

            {/* Step Content */}
            <StepContent
              step={step}
              index={index}
              isAlternating={index % 2 === 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

interface StepContentProps {
  step: ProgressStep;
  index: number;
  isAlternating: boolean;
}

function StepContent({ step, index, isAlternating }: StepContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "-15% 0px -15% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={`step-content w-full flex items-center ${
        isAlternating ? "flex-row-reverse" : "flex-row"
      }`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Left/Right content area */}
      <div
        className={`w-full max-w-md ${
          isAlternating
            ? "ml-auto mr-8 md:mr-12 lg:mr-16"
            : "mr-auto ml-8 md:ml-12 lg:ml-16"
        }`}
      >
        <motion.div
          className="step-card rounded-lg p-6 backdrop-filter backdrop-blur-sm shadow-lg"
          initial={{
            scale: 0.95,
            filter: "blur(6px)",
            borderColor: "rgb(31, 41, 55)",
          }}
          animate={
            isInView
              ? {
                  scale: 1,
                  filter: "blur(0px)",
                  borderColor: "rgb(75, 85, 99)",
                }
              : {
                  scale: 0.95,
                  filter: "blur(6px)",
                  borderColor: "rgb(31, 41, 55)",
                }
          }
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.02,
            borderColor: "#f6a91b",
            boxShadow: "0 10px 30px rgba(246, 169, 27, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.h3
            className="text-white text-lg md:text-xl font-semibold mb-3"
            initial={{ opacity: 0, x: isAlternating ? 20 : -20 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isAlternating ? 20 : -20 }
            }
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {step.title}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, x: isAlternating ? 20 : -20 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isAlternating ? 20 : -20 }
            }
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {step.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
