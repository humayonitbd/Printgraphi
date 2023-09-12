import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Section2 = () => {
    return (
        <div className=' w-11/12  mx-auto py-20'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <h1 className='text-5xl font-semibold mb-10'>Popular Questions</h1>
                    <div className='grid grid-cols-2'>
                    <div className='mr-10'>
                        <div className='flex justify-between items-center border py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        
                        
                    </div>
                    <div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        <div className='flex justify-between items-center border  py-4 px-2 mb-4'>
                            <p className='mr-10 text-lg link-hover'>Getting Started With Calendars</p>
                            <p><ChevronRightIcon className='h-4 w-4' /></p>
                        </div>
                        
                        
                    </div>
                        
                    </div>
                </div>
                <div>
                <h1 className='text-5xl font-bold mb-10'>Contact us</h1>

                <div>
                    <h3 className='text-3xl font-semibold mb-5'>Phone</h3>
                    <div className=''>
                    <p className='text-lg'>Mon - Fri <span className='ml-14 '>7:00 AM - 3:00 AM EST</span></p>
                    <p className='text-lg'>Sat - Sun <span className='ml-14 '>8:00 AM - 8:00 PM EST</span></p>
                    </div>
                    <p className='text-lg my-6'>Please fill out a call request. We will typically call you back in less than a minute.</p>
                    <button className='btn inline bg-black text-white pt-6 pb-10 px-32 rounded-full'>Request Callback</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;