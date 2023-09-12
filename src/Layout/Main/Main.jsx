import React from 'react';
import Header from '../../SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;