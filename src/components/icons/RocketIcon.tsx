import React from "react";

interface RocketIconProps {
  className?: string;
  size?: number;
}

const RocketIcon: React.FC<RocketIconProps> = ({ className, size = 39 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.5641 25.3334L13.3333 19.9489M18.5641 25.3334C20.9996 24.3799 23.3361 23.1773 25.5385 21.7438M18.5641 25.3334V34.3077C18.5641 34.3077 23.8471 33.3205 25.5385 30.718C27.4215 27.8103 25.5385 21.7438 25.5385 21.7438M13.3333 19.9489C14.2611 17.471 15.4295 15.0958 16.8205 12.8593C18.8521 9.51548 21.681 6.76226 25.0381 4.8616C28.3951 2.96093 32.1688 1.97598 36 2.00044C36 6.88242 34.64 15.4618 25.5385 21.7438M13.3333 19.9489H4.61538C4.61538 19.9489 5.57436 14.5105 8.10253 12.7696C10.9271 10.8311 16.8205 12.7696 16.8205 12.7696M5.48718 28.0257C2.87179 30.2872 2 37 2 37C2 37 8.52099 36.1025 10.7179 33.4102C11.9559 31.9026 11.9385 29.5872 10.561 28.1872C9.88329 27.5214 8.99061 27.1366 8.05409 27.1068C7.11771 27.077 6.20358 27.4042 5.48718 28.0257Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RocketIcon;
