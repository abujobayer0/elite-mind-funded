import React from "react";

interface DollarSignIconProps {
  className?: string;
  size?: number;
}

const DollarSignIcon: React.FC<DollarSignIconProps> = ({
  className,
  size = 39,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="19.5"
        cy="19.5"
        r="17"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19.5 9.2998V29.6998M24.6 15.2498C24.6 12.9038 22.317 10.9998 19.5 10.9998C16.683 10.9998 14.4 12.9038 14.4 15.2498C14.4 17.5958 16.683 19.4998 19.5 19.4998C22.317 19.4998 24.6 21.4038 24.6 23.7498C24.6 26.0958 22.317 27.9998 19.5 27.9998C16.683 27.9998 14.4 26.0958 14.4 23.7498"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DollarSignIcon;
