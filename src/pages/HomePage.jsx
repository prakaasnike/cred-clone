import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProductShowCase from './HomePageSection/ProductShowCase';
import RewardsSection from './HomePageSection/RewardsSection';
import Ratings from './HomePageSection/Ratings';
import Testimonials from './HomePageSection/Testimonials';
import BrandLogo from './HomePageSection/BrandLogo';
import Experience from './HomePageSection/Experience';
import Security from './HomePageSection/Security';
import Trust from './HomePageSection/Trust';
import NeoPop from './HomePageSection/NeoPop';


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
            {/* Brand Logo */}
            <BrandLogo />
            {/* Experience Upgrade */}
            <Experience />
            {/* Mobile Intersection tab */}
            {/* parallelx bg */}
            <NeoPop />
            {/* Become a member */}
            <Security />
            {/* the story of cred */}
            <Trust />
            {/* ratings */}
            <Ratings />
            {/* testimonials */}
            <Testimonials />

        </div>
    );
};

export default HomePage;
