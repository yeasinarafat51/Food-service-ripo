import React from 'react';
import Usetitle from '../../../hooks/Usetitle';
import About from '../../about/About';
import Banner from '../../banner/Banner';
import Deleviry from '../../delebary/Deleviry';
import Services from '../services/Services';

const Home = () => {
    Usetitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Deleviry></Deleviry>
            <Services></Services>
        </div>
    );
};

export default Home;