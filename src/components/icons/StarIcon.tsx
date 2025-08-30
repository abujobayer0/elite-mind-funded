interface StarIconProps {
  width?: number;
  height?: number;
  className?: string;
  fillColor?: string;
}

export default function StarIcon({
  width = 16,
  height = 16,
  className = "",
  fillColor = "white",
}: StarIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.96102 11.6499L10.826 11.0314L12.1511 15.2173L7.65815 11.8673L2.98999 15.2173L4.80183 9.71023L0.0585938 6.30673H5.92139L7.73248 0.799316L9.54432 6.30673H15.4067L7.96102 11.6499Z"
        fill={fillColor}
      />
    </svg>
  );
}
