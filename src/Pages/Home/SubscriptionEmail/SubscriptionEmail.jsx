import React from 'react';
import { Link } from 'react-router-dom';
import './SubscriptionEmail.css'

const SubscriptionEmail = () => {
    return (
        <div>
           <div className='flex'>
            <div className=' w-1/2'>
                <div className='bgsubscriptionImage'></div>
            </div>
            <div className='w-1/2 px-10 text-center flex justify-center items-center'>
                <div className=''>
                <h1 className='text-3xl font-bold'>It's good to be on the list.</h1>
                <h3 className='text-xl font-semibold my-5'>Get 15% off your order when you sign up for our emails</h3>
                <input type="text" placeholder="Subscription email..." className="input input-bordered w-full " />
                <p className='my-3'>Yes, I'd like to receive special offer emails from VistaPrint, as well as news about products, services and my designs in progress. Read our <Link className='link'> Privacy and Cookie policy</Link>.</p>
                <button className='btn border border-sta rounded-full px-20 mt-3'>Submit</button>
                </div>
            </div>
           </div>
           <div className='flex bg-[#F8F8F8]'>
            <div className='w-1/2'>
                <div className='m-32'>
                <h1 className='font-semibold text-5xl mb-5'>VistaPrint: Here for small business since 1995.</h1>
                <p className='text-xl'>For more than 20 years, VistaPrint has helped small business owners, entrepreneurs and dreamers create custom designs and professional marketing. Our online printing services are intended to help you find custom products you need – business cards, promotional marketing and more – to create a look you love.</p>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='m-32'>
                <h4 className='text-xl font-semibold mb-3'>Easy Design</h4>
                <p className='text-xl mb-5'>Our online tools make the process as simple and clear as possible, and we’re working to improve your experience all the time.</p>
                
                <h4 className='text-xl font-semibold mb-3'>Make It Match</h4>
                <p className='text-xl mb-5'>Our designs can be used across multiple printed products, which makes it easier for you to create consistent, professional marketing.</p>

                <h4 className='text-xl font-semibold mb-3'>Absolutely Guaranteed</h4>
                <p className='text-xl mb-5'>We stand by everything we sell. So if you’re not satisfied, we’ll make it right. <Link className='link'>Learn more</Link></p>
                </div>


            </div>
           </div>
        </div>
    );
};

export default SubscriptionEmail;