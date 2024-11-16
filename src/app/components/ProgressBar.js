// src/app/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ currentStep }) => {
    return (
        <div className="flex justify-between my-5">
            {[1, 2, 3, 4].map((step) => (
                <div 
                    key={step} 
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 
                                ${currentStep >= step ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
                >
                    {step}
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;