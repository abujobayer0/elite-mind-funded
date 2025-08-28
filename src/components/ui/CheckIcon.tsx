interface CheckIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
}

export default function CheckIcon({
  width = 17,
  height = 17,
  className = "",
  strokeColor = "white",
  fillColor = "none",
}: CheckIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_144_537)">
        <path
          d="M14.8197 8.49984C14.8197 4.81794 11.8349 1.83317 8.15299 1.83317C4.4711 1.83317 1.48633 4.81794 1.48633 8.49984C1.48633 12.1817 4.4711 15.1665 8.15299 15.1665C11.8349 15.1665 14.8197 12.1817 14.8197 8.49984Z"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <path
          d="M5.48633 8.83333L7.15299 10.5L10.8197 6.5"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_144_537">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.153076 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
