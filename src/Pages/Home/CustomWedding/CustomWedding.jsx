import React, { useEffect, useState } from 'react';
import SingleCustomWedding from './SingleCustomWedding';

const CustomWedding = () => {
    const [customProducts, setCustomProducts] = useState([]);
    // console.log("pp",popullerProduct)
    useEffect(()=>{
        fetch('/CustomWedding.json')
        .then(res =>res.json())
        .then(data => setCustomProducts(data))
    },[])
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold mt-12'>Custom wedding invites start at under $1</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 pt-8   pb-10'>
           {
            customProducts?.map(customPd => <SingleCustomWedding key={customPd.id} customPd={customPd} ></SingleCustomWedding>)
           }
        </div>
        </div>
        
    );
};

export default CustomWedding;