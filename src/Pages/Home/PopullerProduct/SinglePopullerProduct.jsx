import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const SinglePopullerProduct = ({popullerP}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={popullerP.url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{popullerP?.title?.slice(0, 10)} <ArrowLongRightIcon className='h-6 w-6' /></h2>
                
               
            </div>
            </div>
        </div>
    );
};

export default SinglePopullerProduct;