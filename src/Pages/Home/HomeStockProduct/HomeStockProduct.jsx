import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';

const HomeStockProduct = () => {
    const [strokProduct, setStrokProduct] = useState([]);
    console.log(strokProduct)
    useEffect(()=>{
        fetch('/products.json')
        .then(res =>res.json())
        .then(data => setStrokProduct(data))
    },[])
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold mt-12'>Stock up on essentials before the holiday rush</h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 pt-8   pb-10'>
           {
            strokProduct?.map(products => <SingleProject key={products.id} products={products} ></SingleProject>)
           }
        </div>
        </div>
        
    );
};

export default HomeStockProduct;