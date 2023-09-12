import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
const SingleCustomWedding = ({customPd}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={customPd.thumbnail} className='w-full h-72' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{customPd?.name} <ArrowLongRightIcon className='h-6 w-6' /></h2>
                
               
            </div>
            </div>
        </div>
    );
};

export default SingleCustomWedding;