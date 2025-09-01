import React from "react";

interface ChartIconProps {
  size?: number;
  className?: string;
}

export default function ChartIcon({
  size = 19,
  className = "",
}: ChartIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_chart"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="19"
        height="20"
      >
        <path d="M19 0.5H0V19.5H19V0.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_chart)">
        <path
          d="M10.6875 1.6875V8.8125H17.8125C17.8125 6.92283 17.0618 5.11056 15.7256 3.77436C14.3894 2.43817 12.5772 1.6875 10.6875 1.6875Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.3125 4.0625C6.90331 4.0625 5.52577 4.48037 4.35407 5.26328C3.18237 6.04618 2.26914 7.15896 1.72986 8.46088C1.19059 9.7628 1.04949 11.1954 1.32441 12.5775C1.59933 13.9596 2.27792 15.2292 3.27437 16.2256C4.27082 17.2221 5.54037 17.9007 6.92248 18.1756C8.3046 18.4505 9.7372 18.3094 11.0391 17.7701C12.341 17.2309 13.4538 16.3176 14.2367 15.1459C15.0196 13.9742 15.4375 12.5967 15.4375 11.1875H8.3125V4.0625Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
