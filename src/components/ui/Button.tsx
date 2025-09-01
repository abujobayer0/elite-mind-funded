import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "community" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  disabled = false,
  type = "button",
  icon,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-normal transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-[#f6a91b] text-black hover:bg-[#e59a1a] focus:ring-[#f6a91b]",
    secondary:
      "bg-[#71706f] text-black hover:bg-[#5a5958] focus:ring-[#71706f]",
    outline:
      "bg-transparent border-2 border-[#f6a91b] text-white hover:bg-[#f6a91b] hover:text-black focus:ring-[#f6a91b]",
    community:
      "bg-transparent border-2 border-[#71706f] text-[#71706f] hover:bg-[#71706f] hover:text-white focus:ring-[#71706f]",
    ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white/20",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm h-[40px] w-[120px]",
    md: "px-4 py-4 text-[16px] h-[50px] w-[160px]",
    lg: "px-6 py-5 text-lg h-[60px] w-[200px]",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="mr-1 sm:mr-2 scale-75 sm:scale-100">{icon}</span>
      )}
      {children}
    </button>
  );
}
