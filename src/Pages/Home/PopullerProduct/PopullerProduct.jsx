import React, { useEffect, useState } from 'react';
import SinglePopullerProduct from './SinglePopullerProduct';

const PopullerProduct = () => {
    const [popullerProduct, setPopullerProduct] = useState([]);
    console.log("pp",popullerProduct)
    useEffect(()=>{
        fetch('/projects1.json')
        .then(res =>res.json())
        .then(data => setPopullerProduct(data))
    },[])
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold mt-12'>VistaPrint Picks: Popular products. Unbeatable value.</h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 pt-8   pb-10'>
           {
            popullerProduct?.map(popullerP => <SinglePopullerProduct key={popullerP.id} popullerP={popullerP} ></SinglePopullerProduct>)
           }
        </div>
        </div>
        
    );
};

export default PopullerProduct;