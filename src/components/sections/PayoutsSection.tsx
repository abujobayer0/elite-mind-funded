"use client";

import { useRef } from "react";
import PayoutCard from "@/components/ui/PayoutCard";

export default function PayoutsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  const items = [
    { imageSrc: "/assets/footer/Image.png", amount: "$9,765" },
    { imageSrc: "/assets/footer/Image-1.png", amount: "$2,987" },
    { imageSrc: "/assets/footer/visa.png", amount: "$3,816" },
    { imageSrc: "/assets/footer/tether.png", amount: "$5,204" },
    { imageSrc: "/assets/footer/bitcoin.png", amount: "$7,112" },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="mx-auto w-[86px] h-[30px] text-[12px] flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white/80 border border-white/10">
            Payouts
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mt-4">
            Trusted By Traders <span className="text-[#f6a91b]">Worldwide</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            Hear Directly From Traders Who Have Profited With EMF Funding. Real
            Stories, Real Results!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {items.map((it, idx) => (
              <div
                key={idx}
                className="min-w-[80%] sm:min-w-[48%] lg:min-w-[32%] snap-center"
              >
                <PayoutCard imageSrc={it.imageSrc} amount={it.amount} />
              </div>
            ))}
          </div>

          {/* Pager */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => scrollBy(-400)}
              className="w-10 h-10 rounded-lg border border-white/10 text-white/80 hover:text-white"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/50"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
            </div>
            <button
              onClick={() => scrollBy(400)}
              className="w-10 h-10 rounded-lg border border-white/10 text-white/80 hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
