"use client";

import {
  SectionHeader,
  Button,
  AffiliateFeatureCard,
  ExportIcon,
  ShareIcon,
  DollarCircleIcon,
} from "@/components";
import Link from "next/link";

export default function AffiliateProgramSection() {
  const features = [
    {
      title: "Sign Up",
      subtitle: "Create your Profile quickly.",
      icon: <ExportIcon />,
    },
    {
      title: "Share your Link",
      subtitle: "Share your unique Link on social media.",
      icon: <ShareIcon />,
    },
    {
      title: "Get Paid",
      subtitle: "Get Paid up to 20% of all revenue.",
      icon: (
        <span className="relative w-full h-full">
          <DollarCircleIcon
            className="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[10px]"
            size={26}
          />
        </span>
      ),
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Affiliate Program"
          title={
            <>
              <span className="text-[#f6a91b]"> Refer </span> & Earn{" "}
              <span className="text-[#f6a91b]">Big</span> With{" "}
              <span className="text-[#f6a91b]"> EMF</span>
            </>
          }
          subtitle={
            <>
              <p className="mb-6">
                Profit From The Biggest Revolution In Trading. It&apos;s Super
                Simple. Get Started Today!
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="/affiliate"
                  className="relative flex flex-row justify-center items-center px-6 py-[10px] gap-[6px] w-[213.86px] h-[42px] bg-gradient-to-t from-[rgba(246,169,28,0.4)] to-[rgba(246,169,28,0)] backdrop-blur-[25px] rounded-[999px] text-white text-normal text-sm overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(246,169,28,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(246,169,28,0)] to-[rgba(246,169,28,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[999px]"></div>
                  <span className="relative z-10">Become An Affiliate</span>
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                  >
                    <path
                      d="M8.90518 15.6189L14.2385 6.38135M14.2385 6.38135L15.7026 11.8454M14.2385 6.38135L8.77441 7.84545"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/affiliate/login"
                  className="relative flex flex-row justify-center items-center px-6 py-[10px] gap-[6px] w-[171.86px] h-[42px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.2)] backdrop-blur-[25px] rounded-[999px] text-sm text-normal text-white overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,255,255,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[999px]"></div>
                  <span className="relative z-10">Affiliate Login</span>
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                  >
                    <path
                      d="M8.90518 15.6189L14.2385 6.38135M14.2385 6.38135L15.7026 11.8454M14.2385 6.38135L8.77441 7.84545"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </>
          }
          className="text-center mb-10"
          titleClassName="text-3xl md:text-6xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <AffiliateFeatureCard
              key={f.title}
              title={f.title}
              subtitle={f.subtitle}
              icon={f.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
