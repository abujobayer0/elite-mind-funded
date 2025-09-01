import React from "react";

interface ChallengeProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
}

export default function Challenge({
  width = 25,
  height = 24,
  className = "",
  strokeColor = "white",
  fillColor = "white",
}: ChallengeProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12.6665" cy="12" r="2" fill={fillColor} />
      <path
        d="M12.6665 12L22.6665 2M18.6665 12C18.6665 15.3137 15.9802 18 12.6665 18C9.3528 18 6.6665 15.3137 6.6665 12C6.6665 8.68629 9.3528 6 12.6665 6C15.9802 6 18.6665 8.68629 18.6665 12ZM22.6665 12C22.6665 17.5228 18.1894 22 12.6665 22C7.14366 22 2.6665 17.5228 2.6665 12C2.6665 6.47715 7.14366 2 12.6665 2C18.1894 2 22.6665 6.47715 22.6665 12Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
