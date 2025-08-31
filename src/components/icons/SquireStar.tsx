import React from "react";

interface SquireStarProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
}

export default function SquireStar({
  width = 24,
  height = 24,
  className = "",
  strokeColor = "white",
}: SquireStarProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.99976"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke={strokeColor}
        strokeWidth="1.5"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 7.99976 16)"
        stroke={strokeColor}
        strokeWidth="1.5"
      />
      <path
        d="M11.9998 8V6"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9998 18V16"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5978 9.5L17.3298 8.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66956 15.5L8.40161 14.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5978 14.4999L17.3298 15.4999"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66956 8.49994L8.40161 9.49994"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
