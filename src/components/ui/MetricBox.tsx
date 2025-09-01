import React from "react";

interface MetricBoxProps {
  label: string;
  value: string;
}

export default function MetricBox({ label, value }: MetricBoxProps) {
  return (
    <div className="rounded-xl border py-4 px-8 text-center bg-[#f6a91b]">
      <div className="text-black/80 pb-2">{label}</div>
      <div className="text-[#191c49]">
        <div className="inline-flex items-center justify-center rounded-lg px-6   text-[#191c49] text-3xl md:text-4xl font-bold">
          {value}
        </div>
      </div>
    </div>
  );
}
