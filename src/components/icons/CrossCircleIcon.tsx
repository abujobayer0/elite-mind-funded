interface CrossCircleIconProps {
  size?: number;
  className?: string;
}

export default function CrossCircleIcon({
  size = 18,
  className = "",
}: CrossCircleIconProps) {
  return (
    <svg
      width={size}
      height={Math.round((size * 20) / 18)}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.9173 9.9987C16.9173 14.3709 13.3729 17.9154 9.00065 17.9154C4.62839 17.9154 1.08398 14.3709 1.08398 9.9987C1.08398 5.62644 4.62839 2.08203 9.00065 2.08203C13.3729 2.08203 16.9173 5.62644 16.9173 9.9987Z"
        fill="white"
      />
      <path
        d="M11.3757 7.6237L6.62565 12.3737M6.62565 7.6237L11.3757 12.3737M16.9173 9.9987C16.9173 14.3709 13.3729 17.9154 9.00065 17.9154C4.62839 17.9154 1.08398 14.3709 1.08398 9.9987C1.08398 5.62644 4.62839 2.08203 9.00065 2.08203C13.3729 2.08203 16.9173 5.62644 16.9173 9.9987Z"
        stroke="#FF3B30"
        strokeWidth="1.58333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
