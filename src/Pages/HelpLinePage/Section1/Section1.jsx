import React from 'react';
import { Link } from 'react-router-dom';

const Section1 = () => {
    return (
        <div className='bg-[#0075C2] flex justify-center items-center'>
            <div className=' py-10 text-center'>
                <h1 className='text-6xl font-bold text-white mb-7 '>Help is here.</h1>
                <input type="text" className='w-[700px] py-3 px-4 rounded-full text-xl' placeholder='Search of and airticle and answer' />
                <div className='flex justify-center items-center text-white py-2'>
                    <p><span className='text-xl font-semibold'>Need help tracking an order?</span> <Link className='link text-lg ml-2'>Find and track an order</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Section1;