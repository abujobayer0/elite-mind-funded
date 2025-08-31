import React from "react";
import Image from "next/image";

interface PayoutCardProps {
  imageSrc: string;
  amount: string;
}

export default function PayoutCard({ imageSrc, amount }: PayoutCardProps) {
  return (
    <div className="relative h-[380px] md:h-[420px] rounded-[14.9592px] overflow-hidden border border-[#F6A91C]">
      <Image
        src={imageSrc}
        alt="Payout"
        fill
        sizes="(max-width: 768px) 90vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F6A91C] via-transparent to-transparent opacity-40" />
      <div className="absolute left-6 bottom-6 text-left">
        <div className="text-white/90 text-xl md:text-2xl font-semibold">
          Total Payout
        </div>
        <div className="text-white text-4xl md:text-5xl font-bold mt-2">
          {amount}
        </div>
      </div>
    </div>
  );
}
