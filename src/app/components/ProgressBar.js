// src/app/components/ProgressBar.js
import React from 'react';
import Image from 'next/image';

const ProgressBar = ({ currentStep }) => {
    return (
        <div className="flex my-5">
            <Image
                src="/check-out.png"
                alt="order food"
                width={50}
                height={50}
            />
            <Image
                src="/cooking.png"
                alt="cooking"
                width={50}
                height={50}
            />
            <Image
                src="/fast-delivery.png"
                alt="delivery"
                width={50}
                height={50}
            />
            <Image
                src="/delivery-man.png"
                alt="order delivered"
                width={50}
                height={50}
            />
        </div>
    );
};

export default ProgressBar;