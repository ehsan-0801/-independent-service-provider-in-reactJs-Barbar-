import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services id="services"></Services>
            <Contact id="contact" ></Contact>
        </div>
    );
};

export default Home;