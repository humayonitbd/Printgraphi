import React, { useEffect, useState } from 'react';
import SingleOthersSection from './SingleOthersSection';

const OthersSection = () => {
    const [othersSection, setOthersSection] = useState([]);
    // console.log("pp",popullerProduct)
    useEffect(()=>{
        fetch('/OthersSection.json')
        .then(res =>res.json())
        .then(data => setOthersSection(data))
    },[])
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-3xl font-bold mt-12'>Merch they’ll bring everywhere</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 pt-8   pb-10'>
           {
            othersSection?.map(others => <SingleOthersSection key={others.id} others={others} ></SingleOthersSection>)
           }
        </div>
        </div>
        
    );
};

export default OthersSection;