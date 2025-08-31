import React from "react";

interface MinusCircleIconProps {
  className?: string;
  size?: number;
}

const MinusCircleIcon: React.FC<MinusCircleIconProps> = ({
  className,
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.66663 8.33333C1.66663 3.73095 5.39758 0 9.99996 0C14.6023 0 18.3333 3.73095 18.3333 8.33333C18.3333 12.9357 14.6023 16.6667 9.99996 16.6667C5.39758 16.6667 1.66663 12.9357 1.66663 8.33333ZM9.99996 1.66667C6.31806 1.66667 3.33329 4.65143 3.33329 8.33333C3.33329 12.0152 6.31806 15 9.99996 15C13.6819 15 16.6666 12.0152 16.6666 8.33333C16.6666 4.65143 13.6819 1.66667 9.99996 1.66667Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.83325 8.33333C5.83325 7.87309 6.20635 7.5 6.66659 7.5H13.3333C13.7935 7.5 14.1666 7.87309 14.1666 8.33333C14.1666 8.79357 13.7935 9.16667 13.3333 9.16667H6.66659C6.20635 9.16667 5.83325 8.79357 5.83325 8.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MinusCircleIcon;
