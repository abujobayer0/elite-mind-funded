import React from "react";

interface MetricBoxProps {
  label: string;
  value: string;
  highlighted?: boolean;
}

export default function MetricBox({
  label,
  value,
  highlighted = false,
}: MetricBoxProps) {
  return (
    <div
      className={
        "rounded-xl border p-6 text-center " +
        (highlighted
          ? "border-[#f6a91b]/40 bg-gradient-to-b from-[#1e1a12] to-[#0d0b07]"
          : "border-white/10 bg-[#0f0f0f]")
      }
    >
      <div className="text-white/80 mb-2">{label}</div>
      <div className={highlighted ? "text-[#191c49]" : "text-white"}>
        <div
          className={
            "inline-flex items-center justify-center rounded-lg px-6 py-4 " +
            (highlighted
              ? "bg-[#f6a91b] text-[#191c49] text-3xl md:text-4xl font-extrabold"
              : "text-3xl md:text-4xl font-bold")
          }
        >
          {value}
        </div>
      </div>
    </div>
  );
}
