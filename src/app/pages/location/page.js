import TopBar from '@/app/components/top-bar';
import ProgressBar from '@/app/components/ProgressBar';
import React from 'react';
import Navbar from '@/app/components/navbar';

const Location = () => {
    const currentStep = 2;

    return (
        <div>
            <div className='bg-[#F8F9E9] px-5'>
                <TopBar />
                {/* 
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62015.919438934645!2d100.5573373!3d13.7187545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1a5c9887b3%3A0x230edac05ae63ab7!2sQueen%20Sirikit%20National%20Convention%20Center!5e0!3m2!1sen!2sth!4v1731724520679!5m2!1sen!2sth" 
                width="400" height="300" className="" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                */}
                <ProgressBar currentStep={currentStep} />

            </div>
            <Navbar />
        </div>
        
    );
};

export default Location;