import React, { ReactNode } from "react";

interface GradientSectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}

const GradientSection: React.FC<GradientSectionProps> = ({
  children,
  className = "",
  as: Component = "section",
}) => {
  return (
    <Component
      className={`relative bg-black py-20 ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 169, 28, 0.1) 0%, rgba(8, 8, 9, 0) 100.01%)",
        borderTop: "1px solid",
        borderImage: "radial-gradient(circle, #f6a91b 30%, transparent 100%) 1",
      }}
    >
      {children}
    </Component>
  );
};

export default GradientSection;
