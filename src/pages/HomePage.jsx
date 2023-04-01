import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProductShowCase from '../components/ProductShowCase';
import RewardsSection from '../components/RewardsSection';

const HomePage = () => {
    return (
        <div className='overflow-hidden'>
            <Helmet>
                <title>CRED - pay your credit card bills & earn rewards</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <Hero />
            <ProductShowCase />
            <RewardsSection />

        </div>
    );
};

export default HomePage;
