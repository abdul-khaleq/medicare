import React from 'react';
import Banner from '../Banner/Banner';
import Help from '../Help/Help';
import News from '../News/News';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Help></Help>
            <News></News>
        </div>
    );
};

export default Home;