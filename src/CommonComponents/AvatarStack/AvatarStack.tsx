import React from "react";

interface AvatarStackProps {
  imageUrls: [string, string, string];
  size?: "sm" | "md" | "lg";
  overlap?: number;
}

const AvatarStack: React.FC<AvatarStackProps> = ({
  imageUrls,
  size = "md",
  overlap = 8,
}) => {
  // Size classes
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <div className="flex items-center">
      {/* First avatar (backmost) */}
      <div
        className={`relative rounded-full border-2 border-white ${sizeClasses[size]}`}
        style={{
          zIndex: 1,
          marginRight: `-${overlap}px`,
          backgroundImage: `url(${imageUrls[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Second avatar (middle) */}
      <div
        className={`relative rounded-full border-2 border-white ${sizeClasses[size]}`}
        style={{
          zIndex: 2,
          marginRight: `-${overlap}px`,
          backgroundImage: `url(${imageUrls[1]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Third avatar (frontmost) */}
      <div
        className={`relative rounded-full border-2 border-white ${sizeClasses[size]}`}
        style={{
          zIndex: 3,
          backgroundImage: `url(${imageUrls[2]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default AvatarStack;
