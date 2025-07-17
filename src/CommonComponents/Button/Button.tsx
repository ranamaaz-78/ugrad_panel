import React from "react";
import type { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  label?: string | ReactNode; // Accepts both string and ReactNode
  startIcon?: ReactNode | string; // Accepts both ReactNode and string
  endIcon?: ReactNode | string; // Accepts both ReactNode and string
  borderWidth?: string;
  borderColor?: string;
  background?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onStartIconClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  onEndIconClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({
  label = "",
  startIcon,
  endIcon,
  borderWidth = "1px",
  borderColor = "transparent",
  background = "transparent",
  disabled = false,
  onClick,
  onStartIconClick,
  onEndIconClick,
  className = "",
  iconClassName = "",
  labelClassName = "",
  type = "button",
}) => {
  const handleStartIconClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onStartIconClick?.(e);
  };

  const handleEndIconClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onEndIconClick?.(e);
  };

  // Helper function to render icon
  const renderIcon = (icon: ReactNode | string | undefined) => {
    if (!icon) return null;

    if (typeof icon === "string") {
      return <span className={iconClassName}>{icon}</span>;
    }

    return icon;
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        rounded transition-all duration-200
        h-12
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}
        ${className}
      `}
      style={{
        borderWidth,
        borderColor,
        background,
        padding: `${borderWidth} calc(0.75rem + ${borderWidth})`,
      }}
    >
      {startIcon && (
        <span
          onClick={onStartIconClick ? handleStartIconClick : undefined}
          className={`flex items-center ${iconClassName}`}
        >
          {renderIcon(startIcon)}
        </span>
      )}

      {label && (
        <span className={`flex-1 text-center ${labelClassName}`}>{label}</span>
      )}

      {endIcon && (
        <span
          onClick={onEndIconClick ? handleEndIconClick : undefined}
          className={`flex items-center ${iconClassName}`}
        >
          {renderIcon(endIcon)}
        </span>
      )}
    </button>
  );
};

export default Button;
