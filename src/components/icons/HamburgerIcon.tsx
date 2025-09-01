interface HamburgerIconProps {
  width?: number;
  height?: number;
  className?: string;
  isOpen?: boolean;
}

export default function HamburgerIcon({
  width = 24,
  height = 24,
  className = "",
  isOpen = false,
}: HamburgerIconProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </div>
    </div>
  );
}
