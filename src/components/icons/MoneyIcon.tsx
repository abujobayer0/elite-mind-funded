import React from "react";

interface MoneyIconProps {
  size?: number;
  className?: string;
}

export default function MoneyIcon({
  size = 18,
  className = "",
}: MoneyIconProps) {
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
        id="mask1_money"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path d="M18 0H0V18H18V0Z" fill="white" />
      </mask>
      <g mask="url(#mask1_money)">
        <path
          d="M0.5625 10.6875V17.4375"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5625 16.3125H12.9375C12.9375 15.7158 12.7004 15.1435 12.2785 14.7215C11.8565 14.2996 11.2842 14.0625 10.6875 14.0625H7.875C7.875 13.4658 7.63795 12.8935 7.21599 12.4715C6.79403 12.0496 6.22174 11.8125 5.625 11.8125H0.5625"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.0625 14.0625H7.875"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.97253 0.5625H16.4025C16.6797 0.5665 16.9441 0.6798 17.138 0.878C17.3318 1.0761 17.4395 1.3428 17.4375 1.62V8.13C17.4395 8.4072 17.3318 8.6739 17.138 8.872C16.9441 9.0701 16.6797 9.1836 16.4025 9.1875H4.97253C4.69535 9.1836 4.43099 9.0701 4.2371 8.872C4.04321 8.6739 3.93552 8.4072 3.93753 8.13V1.62C3.93552 1.3428 4.04321 1.0761 4.2371 0.878C4.43099 0.6798 4.69535 0.5665 4.97253 0.5625Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 4.875C9 5.3225 9.17779 5.7518 9.49426 6.0682C9.81073 6.3847 10.2399 6.5625 10.6875 6.5625C11.1351 6.5625 11.5643 6.3847 11.8807 6.0682C12.1972 5.7518 12.375 5.3225 12.375 4.875C12.375 4.4275 12.1972 3.9982 11.8807 3.6818C11.5643 3.3653 11.1351 3.1875 10.6875 3.1875C10.2399 3.1875 9.81073 3.3653 9.49426 3.6818C9.17779 3.9982 9 4.4275 9 4.875Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 3H7.125"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 6.75H15.375"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
