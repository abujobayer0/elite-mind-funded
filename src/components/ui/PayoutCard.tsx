import React from "react";
import Image from "next/image";

interface PayoutCardProps {
  imageSrc: string;
  amount: string;
}

export default function PayoutCard({ imageSrc, amount }: PayoutCardProps) {
  return (
    <div className="relative h-[380px] md:h-[420px] rounded-2xl overflow-hidden border border-[#f6a91b]/30 bg-black/40">
      <Image
        src={imageSrc}
        alt="Payout"
        fill
        sizes="(max-width: 768px) 90vw, 33vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
