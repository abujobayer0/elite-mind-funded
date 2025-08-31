import React, { ReactNode } from "react";
import { Badge } from "@/components";

interface SectionHeaderProps {
  badge: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  className = "",
  badgeClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div className={` ${className}`}>
      {/* Badge */}
      <Badge className={badgeClassName}>{badge}</Badge>

      {/* Main Title */}
      <h2
        className={`font-bold text-white mb-6 text-4xl md:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {/* Subtitle */}
      {subtitle && (
        <div
          className={`text-md md:text-lg text-gray-300 mb-12 leading-relaxed text-center ${subtitleClassName}`}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
