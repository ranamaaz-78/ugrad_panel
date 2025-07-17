import React, { type ReactNode } from "react";

interface ScrollableRowProps {
  children: ReactNode;
  className?: string;
  scrollable?: boolean;
  gap?: "sm" | "md" | "lg";
  snap?: boolean; // Add snap-to-item behavior
}

const ScrollableRow = ({
  children,
  className = "",
  scrollable = true,
  gap = "md",
  snap = false,
}: ScrollableRowProps) => {
  const gapClasses = {
    sm: "gap-2 sm:gap-2",
    md: "gap-3 sm:gap-4",
    lg: "gap-4 sm:gap-6",
  };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className={`
          flex flex-nowrap items-stretch
          ${gapClasses[gap]}
          p-4
          ${scrollable ? "overflow-x-auto scrollbar-hide" : "flex-wrap"}
          ${snap ? "snap-x snap-mandatory" : ""}
          w-[calc(100%+24px)]// Adjust for proper scrolling boundaries
        `}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className={`flex-none ${snap ? "snap-start" : ""}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableRow;
