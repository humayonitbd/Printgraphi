import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
const SingleOthersSection = ({others}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={others.thumbnail} className='w-full h-40' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{others?.name} <ArrowLongRightIcon className='h-6 w-6' /></h2>
                
               
            </div>
            </div>
        </div>
    );
};

export default SingleOthersSection;