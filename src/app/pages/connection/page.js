import Navbar from '@/app/components/navbar';
import TopBar from '@/app/components/top-bar';
import React from 'react';

function Connection() {
    return (
        <div className='bg-[#F8F9E9]'>
            <div className='px-5'>
            <TopBar />
            <h1 className='text-black'>Ajouter deux boutons de connection :
            1. pour metamask
            2. pour ledger</h1>
            </div>
            <Navbar />
        </div>
    );
}

export default Connection;