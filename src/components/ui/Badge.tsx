interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <div className="flex justify-center">
      <div
        className={`bg-[#191c49] px-5 h-[40px] flex items-center justify-center rounded-lg mx-auto mb-4 ${className}`}
      >
        <span className="text-white text-[14px] font-normal">{children}</span>
      </div>
    </div>
  );
}
