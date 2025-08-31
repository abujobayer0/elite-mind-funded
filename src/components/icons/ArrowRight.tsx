import React from "react";

interface ArrowRightProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
}

export default function ArrowRight({
  width = 29,
  height = 22,
  className = "",
  strokeColor = "white",
}: ArrowRightProps) {
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
        d="M1.92477 10.9824L27.5686 10.9824M27.5686 10.9824L17.9522 20.5988M27.5686 10.9824L17.9522 1.36597"
        stroke={strokeColor}
        strokeWidth="2.40411"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
