import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "default" | "textarea";
  rows?: number;
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    { label, error, variant = "default", className = "", rows = 4, ...props },
    ref
  ) => {
    const baseClasses =
      "w-full bg-white/[0.02] border border-white/10 rounded-[6px] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f6a91b] transition-colors duration-200";

    const textareaClasses = `${baseClasses} resize-none`;

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-white text-sm font-medium">
            {label}
          </label>
        )}

        {variant === "textarea" ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows}
            className={`${textareaClasses} ${className}`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={`${baseClasses} ${className}`}
            {...props}
          />
        )}

        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
