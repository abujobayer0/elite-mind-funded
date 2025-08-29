import React from "react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  emphasis?: boolean;
  contentPosition?: "top" | "bottom";
}

export default function FeatureCard({
  title,
  subtitle,
  children,
  emphasis = false,
  contentPosition = "bottom",
}: FeatureCardProps) {
  const titleContent = (
    <div className="text-left">
      <h4 className="text-white font-semibold text-lg md:text-xl">{title}</h4>
      <p className="text-gray-400 text-sm mt-2 leading-relaxed">{subtitle}</p>
    </div>
  );

  return (
    <div
      className={
        "rounded-xl border transition-all duration-300 " +
        (emphasis
          ? "border-[#f6a91b]/25 bg-gradient-to-b from-[#171511] to-[#0b0a08] shadow-[0_0_40px_rgba(246,169,27,0.06)]"
          : "border-white/10 bg-[#0f0f0f]")
      }
    >
      {contentPosition === "top" && (
        <div className="p-5 md:p-6 lg:p-7">{titleContent}</div>
      )}
      <div
        className={`h-[140px] md:h-[160px] rounded-lg bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-0 ${
          contentPosition === "top" ? "mt-5" : "mb-5"
        }`}
      >
        {children}
      </div>

      {contentPosition === "bottom" && (
        <div className="p-5 md:p-6 lg:p-7">{titleContent}</div>
      )}
    </div>
  );
}
