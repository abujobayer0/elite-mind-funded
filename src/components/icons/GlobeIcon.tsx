import React from "react";

interface GlobeIconProps {
  size?: number;
  className?: string;
}

export default function GlobeIcon({
  size = 18,
  className = "",
}: GlobeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask4_globe"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="19"
      >
        <path d="M18 0.5H0V18.5H18V0.5Z" fill="white" />
      </mask>
      <g mask="url(#mask4_globe)">
        <path
          d="M15.1125 2.188H2.8125C1.5375 2.188 0.5625 3.163 0.5625 4.438V14.562C0.5625 15.837 1.5375 16.812 2.8125 16.812H15.1875C16.4625 16.812 17.4375 15.837 17.4375 14.562V4.438C17.3625 3.163 16.3875 2.188 15.1125 2.188Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.062 9.013C11.062 9.013 8.96201 9.088 8.13701 8.188C7.31201 7.288 7.23701 6.313 7.83701 5.788C8.43701 5.188 9.33701 5.188 10.237 6.088C11.212 6.988 11.062 9.013 11.062 9.013Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0625 9.013C11.0625 9.013 13.0875 9.088 14.0625 8.188C15.0375 7.288 14.9625 6.313 14.3625 5.788C13.7625 5.188 12.8625 5.188 11.9625 6.088C11.0625 6.988 11.0625 9.013 11.0625 9.013Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0625 9.012C11.0625 9.012 12.1875 11.188 13.9875 11.413"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0617 9.012C11.0617 9.012 9.93672 11.188 8.13672 11.413"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0625 2.188V16.812"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5625 9.012H17.3625"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
