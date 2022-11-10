import React from 'react';
import Usetitle from '../../../hooks/Usetitle';
import Services from '../services/Services';

const Home = () => {
    Usetitle('Home')
    return (
        <div>
            <Services></Services>
        </div>
    );
};

export default Home;