import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';


const Section3 = () => {
    return (
        <div className=' w-11/12  mx-auto pb-10'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <h1 className='text-5xl font-semibold mb-10'>Browse Help Center</h1>
                    <div className='grid grid-cols-2'>
                    <div className='mr-10'>
                        <h3 className='text-xl font-semibold mb-5 link-hover '>What's New</h3>
                        <div className='flex justify-between items-center  border-b py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Updates to My Account</p>
                            
                        </div>
                        <div className='flex justify-between items-center  border-b  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            
                        </div>
                        <div className='flex justify-between items-center  border-b  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            
                        </div>
                        <div className='flex justify-between items-center  border-b  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            
                        </div>
                        <div>
                            <p className='font-bold text-lg link-hover'>See all <span><ArrowLongRightIcon className='w-6 h-6 ml-3 inline font-bold' /></span></p>
                        </div>
                        
                        
                    </div>
                    <div>
                    <h3 className='text-xl font-semibold mb-5 link-hover'>My Order</h3>
                        <div className='flex justify-between items-center  border-b  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Updates to My Account</p>
                            
                        </div>
                        <div className='flex justify-between items-center  border-b  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            
                        </div>
                        <div className='flex justify-between items-center  border-b  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            
                        </div>
                        <div className='flex justify-between items-center  border-b  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            
                        </div>
                        <div>
                            <p className='font-bold text-lg link-hover'>See all <span><ArrowLongRightIcon className='w-6 h-6 ml-3 inline font-bold' /></span></p>
                        </div>
                        
                    </div>
                        
                    </div>
                </div>
                <div>
                <h1 className='text-5xl font-bold mb-10'>Live Chat</h1>

                <div>
                    <h3 className='text-3xl font-semibold mb-5'>Online</h3>
                    <p className='text-lg my-6'>A Customer Care Specialist is ready to chat.</p>
                    <button className='btn inline bg-black text-white pt-6 pb-10 px-32 rounded-full'>Start chart</button>
                    <hr className='border-b my-10' />
                    <h3 className='text-3xl font-semibold mb-5'>Email</h3>
                    <p className='text-lg my-6'>Our VistaPrint Customer Care Team is here to help.</p>
                    <button className='btn inline bg-black text-white pt-6 pb-10 px-32 rounded-full'>Send email</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;