import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import TeesTalking from '../TeesTalking/TeesTalking';
import SubscriptionEmail from '../SubscriptionEmail/SubscriptionEmail';
import HomeStockProduct from '../HomeStockProduct/HomeStockProduct';
import PopullerProduct from '../PopullerProduct/PopullerProduct';
import CustomWedding from '../CustomWedding/CustomWedding';
import OthersSection from '../OthersSection/OthersSection';


const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeStockProduct />
            <PopullerProduct />
            <CustomWedding />
            <TeesTalking />
            <OthersSection />
            <SubscriptionEmail />
        </div>
    );
};

export default Home;