import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const SingleProject = ({products}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={products.url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{products?.title?.slice(0, 10)} <ArrowLongRightIcon className='h-6 w-6' /></h2>
                
               
            </div>
            </div>
        </div>
    );
};

export default SingleProject;