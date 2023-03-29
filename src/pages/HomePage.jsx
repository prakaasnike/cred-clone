import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>My Page Title</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <Hero />

        </div>
    );
};

export default HomePage;
