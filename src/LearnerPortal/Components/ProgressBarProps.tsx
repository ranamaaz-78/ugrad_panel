import React from 'react';
import './ProgressBarProps.scss';
interface ProgressBarProps {
    value: number; // from 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
    const clampValue = Math.min(100, Math.max(0, value));

    return (
        <div className="enroll-progress-bar">
            <div className="bar">
                <div className="enroll-progress" style={{ width: `${clampValue}%` }}></div>
            </div>
            <span>{clampValue}%</span>
        </div>
    );
};

export default ProgressBar;
