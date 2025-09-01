interface ExportIconProps {
  size?: number;
  className?: string;
}

export default function ExportIcon({
  size = 20,
  className = "",
}: ExportIconProps) {
  return (
    <svg
      width={size}
      height={Math.round((size * 22) / 20)}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 15C6 17.828 6 19.243 6.879 20.121C7.52 20.763 8.447 20.936 10 20.983M6 7C6 4.172 6 2.757 6.879 1.879C7.757 1 9.172 1 12 1H13C15.828 1 17.243 1 18.121 1.879C19 2.757 19 4.172 19 7V15C19 17.828 19 19.243 18.121 20.121C17.353 20.89 16.175 20.986 14 20.998M1 8.5L1 13.5C1 15.857 1 17.035 1.732 17.768C2.464 18.501 3.643 18.5 6 18.5M1.732 4.232C2.464 3.5 3.643 3.5 6 3.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 11H13M13 11L10.5 13.5M13 11L10.5 8.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
