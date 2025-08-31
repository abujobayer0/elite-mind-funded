import React from "react";

interface ArrowLeftProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
}

export default function ArrowLeft({
  width = 29,
  height = 22,
  className = "",
  strokeColor = "white",
}: ArrowLeftProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.0752 10.9824L1.4314 10.9824M1.4314 10.9824L11.0478 1.366M1.4314 10.9824L11.0478 20.5989"
        stroke={strokeColor}
        strokeWidth="2.40411"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
