import React from "react";

interface DollarRefreshIconProps {
  size?: number;
  className?: string;
}

export default function DollarRefreshIcon({
  size = 18,
  className = "",
}: DollarRefreshIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask2_dollar"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path d="M18 0H0V18H18V0Z" fill="white" />
      </mask>
      <g mask="url(#mask2_dollar)">
        <path
          d="M5.33263 3.515C3.16204 4.779 1.70312 7.131 1.70312 9.824C1.70312 13.855 4.97013 17.122 9.00021 17.122C13.0303 17.122 16.2973 13.855 16.2973 9.824C16.2973 5.794 13.0303 2.527 9.00021 2.527H7.54642"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.60613 11.489C7.76851 11.702 7.97995 11.874 8.22252 11.988C8.46509 12.102 8.73165 12.157 8.99963 12.146C9.85388 12.146 10.5469 11.626 10.5469 10.985C10.5469 10.344 9.85388 9.826 8.99963 9.826C8.14538 9.826 7.45312 9.306 7.45312 8.665C7.45312 8.023 8.14613 7.504 8.99963 7.504C9.26757 7.493 9.53418 7.547 9.77678 7.662C10.0194 7.776 10.2308 7.947 10.3931 8.161"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.145V12.917"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 6.73V7.504"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.00043 0.879L7.35156 2.528L9.00043 4.177"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
