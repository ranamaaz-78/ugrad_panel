import React, { useState } from "react";
import { FiBookmark } from "react-icons/fi";

interface CareerCardProps {
  title: string;
  description: string;
  hoverIcon?: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  number?: number | string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title = "Real-World Skill Tracks",
  description = "Learn what the industry actually uses - no fluff, just the skills that matter",
  hoverIcon,
  className = "",
  number = "01",
  icon = <FiBookmark className="text-lg" />,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        ${className}
        rounded-lg p-4 cursor-pointer
        border-2 border-gray-200
        flex flex-col justify-between
        transition-all duration-200 ease-in-out
        hover:bg-primary-NavyBlue hover:border-primary-NavyBlue
        bg-white
        group
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top number and icon section */}
      <div className="flex items-center justify-between w-full">
        <div>
          {isHovered && hoverIcon
            ? React.isValidElement(hoverIcon)
              ? React.cloneElement(hoverIcon as React.ReactElement<any>, {
                  className: "text-lg w-8 h-8 text-white",
                })
              : hoverIcon
            : React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement<any>, {
                className: `text-lg w-8 h-8 ${
                  isHovered ? "text-white" : "text-current"
                }`,
              })
            : icon}
        </div>
        <div
          className={`
          text-2xl font-sans font-normal 
          ${isHovered ? "text-white" : "text-brand-grayNatural600"}
        `}
        >
          {number}
        </div>
      </div>

      {/* Content section */}
      <div>
        <div
          className={`
          text-xl font-normal font-sans
          ${isHovered ? "text-white" : "text-brand-grayNatural600"}
        `}
        >
          {title}
        </div>
        <div
          className={`
          text-sm font-normal font-sans
          ${isHovered ? "text-white" : "text-brand-grayNatural600"}
        `}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
