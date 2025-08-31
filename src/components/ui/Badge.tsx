import ShinyText from "../TextAnimations/ShinyText/ShinyText";

interface BadgeProps {
  children: string;
  className?: string;
  position?: "center" | "start" | "end";
}

export default function Badge({
  children,
  className = "",
  position = "center",
}: BadgeProps) {
  return (
    <div className={`flex justify-${position}`}>
      <div
        className={`bg-[#191c49] px-5 h-[40px] flex items-center justify-center rounded-lg mb-4 ${className}`}
      >
        <ShinyText
          text={children}
          disabled={false}
          speed={3}
          className="text-[14px] font-normal"
        />
      </div>{" "}
    </div>
  );
}
