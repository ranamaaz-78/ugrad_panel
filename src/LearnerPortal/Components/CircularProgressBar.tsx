import { useState, useEffect } from 'react';

const CircularProgressBar = ({ percentage = 89 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  const size = 58;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercentage / 100) * circumference;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#4ade80"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-1xl font-bold text-gray-800">
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;