import React from "react";

interface RangeSliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  suffix?: string; // e.g., "$", "%", "k"
  onChange: (value: number) => void;
}

export default function RangeSlider({
  label,
  min,
  max,
  step = 1,
  value,
  suffix,
  onChange,
}: RangeSliderProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
        <span>{label}</span>
        <span className="text-white">
          {suffix ? `${value}${suffix}` : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 appearance-none bg-[#2a2a2a] rounded outline-none [--thumb:#f6a91b]"
        style={{ accentColor: "#f6a91b" }}
      />
    </div>
  );
}
