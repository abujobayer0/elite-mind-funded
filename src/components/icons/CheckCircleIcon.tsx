interface CheckCircleIconProps {
  size?: number;
  className?: string;
}

export default function CheckCircleIcon({
  size = 20,
  className = "",
}: CheckCircleIconProps) {
  return (
    <svg
      width={size}
      height={Math.round((size * 19) / 20)}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.3337 9.43001C18.3337 14.0323 14.6027 17.7633 10.0003 17.7633C5.39795 17.7633 1.66699 14.0323 1.66699 9.43001C1.66699 4.82764 5.39795 1.09668 10.0003 1.09668C14.6027 1.09668 18.3337 4.82764 18.3337 9.43001Z"
        fill="#F6A91C"
      />
      <path
        d="M6.25033 9.43001L8.75033 11.93L13.7503 6.93001M18.3337 9.43001C18.3337 14.0323 14.6027 17.7633 10.0003 17.7633C5.39795 17.7633 1.66699 14.0323 1.66699 9.43001C1.66699 4.82764 5.39795 1.09668 10.0003 1.09668C14.6027 1.09668 18.3337 4.82764 18.3337 9.43001Z"
        stroke="#F6A91C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 9.42993L8.75 11.93L13.75 6.92993"
        stroke="#0F0F11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
