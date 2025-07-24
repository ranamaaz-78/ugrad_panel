import { useState, useEffect } from 'react';

const CircularProgressbarWithChildren = ({ percentage = 80 }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    const size = 102;
    const strokeWidth = 7;
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
                <svg width={size} height={size} className="transform -rotate-90">
                    {/* Background Trail */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#d1d5db" // Tailwind gray-300
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />

                    {/* Progress Path */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#003E3E" // Dark teal color
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                    />
                </svg>

                {/* Centered Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#003E3E]">
                    <span className="font-bold" style={{ fontSize: '16px', color: '#113025' }}>{Math.round(animatedPercentage)}%</span>
                <span className="text-sm" style={{ fontSize: '10px', color: '#113025' }}>Completed</span>
            </div>
        </div>
    </div >
  );
};

export default CircularProgressbarWithChildren;
