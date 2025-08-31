"use client";

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
        className="w-full h-[2px] appearance-none rounded outline-none range-slider"
        style={{
          background: `linear-gradient(to right, #f6a91c 0%, #f6a91c ${
            ((value - min) / (max - min)) * 100
          }%, #6e4f14 ${((value - min) / (max - min)) * 100}%, #6e4f14 100%)`,
        }}
      />
      <style jsx>{`
        .range-slider::-webkit-slider-track {
          height: 2px;
          border-radius: 2px;
        }

        .range-slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 10px;
          background: #f6a91c;
          border-radius: 10px;
          cursor: pointer;
          border: none;
        }

        .range-slider::-moz-range-track {
          height: 2px;
          border-radius: 2px;
          border: none;
        }

        .range-slider::-moz-range-thumb {
          width: 24px;
          height: 10px;
          background: #f6a91c;
          border-radius: 10px;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
