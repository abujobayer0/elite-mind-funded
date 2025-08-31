import React from "react";

interface ArrowsIconProps {
  className?: string;
  size?: number;
}

const ArrowsIcon: React.FC<ArrowsIconProps> = ({ className, size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.30307 1.917L4.85516 4.365H18.3329V6.031H4.86557L7.31349 8.479L6.13498 9.658L2.84852 6.371L2.84331 6.377L1.66479 5.198L6.12456 0.738L7.30307 1.917Z"
        fill="currentColor"
      />
      <path
        d="M15.4773 3.636H2.01001V1.969H15.4878L13.0398 -0.479L14.2183 -1.658L18.6782 2.802L17.4996 3.981L17.4944 3.976L14.2079 7.262L13.0294 6.083L15.4773 3.636Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowsIcon;
