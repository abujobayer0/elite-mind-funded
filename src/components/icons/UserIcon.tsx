import React from "react";

interface UserIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
}

const UserIcon: React.FC<UserIconProps> = ({
  width = 20,
  height = 20,
  stroke = "white",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0003 17.5003C13.222 17.5003 15.8337 16.1945 15.8337 14.5837C15.8337 12.9728 13.222 11.667 10.0003 11.667C6.77866 11.667 4.16699 12.9728 4.16699 14.5837C4.16699 16.1945 6.77866 17.5003 10.0003 17.5003Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 9.16666C11.8413 9.16666 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16666 10.0003 9.16666Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
