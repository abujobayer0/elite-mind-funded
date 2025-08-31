import React from "react";

interface GitBranchIconProps {
  className?: string;
  size?: number;
}

const GitBranchIcon: React.FC<GitBranchIconProps> = ({
  className,
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.99996 0.5C7.90829 0.5 10.3191 2.628 10.7608 5.413C11.74 4.437 13.0916 3.833 14.5833 3.833H18.3333V5.917C18.3333 8.908 15.9083 11.333 12.9166 11.333H10.8333V15.5H9.16663V8.833H7.49996C4.27829 8.833 1.66663 6.222 1.66663 3V0.5H4.99996ZM16.6666 5.5H14.5833C12.5125 5.5 10.8333 7.179 10.8333 9.25V9.667H12.9166C14.9875 9.667 16.6666 7.988 16.6666 5.917V5.5ZM4.99996 2.167H3.33329V3C3.33329 5.301 5.19913 7.167 7.49996 7.167H9.16663V6.333C9.16663 4.033 7.30079 2.167 4.99996 2.167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GitBranchIcon;
