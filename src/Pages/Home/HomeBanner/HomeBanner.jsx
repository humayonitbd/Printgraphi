import React from 'react';
// import bannerImage from '../../../assets/background-image.jpg';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='bgHomeBanner flex justify-start items-center '>
          <div className='w-11/12 mx-auto'>
            <h1 className='text-5xl font-bold text-white'>Feeling professional? We print that.</h1>
            <p className='text-lg my-5 text-white'>Create cards and more that look as good as you feel about your business. Choose from hundreds <br /> of designs, materials and finishes.</p>
            <button className='btn bg-white rounded-full px-10 mr-5'>Bussiness Cards</button>
            <button className='btn bg-inherit rounded-full px-10 text-white broder'>Custom Marketing</button>
          </div>

        </div>
    );
};

export default HomeBanner;