import React from 'react';
import NeoPopImage from '../../assets/images/neopop-image-mock.webp';

const NeoPop = () => {
    return (
        <div
            className="rewards py-20 px-8 h-[70vh] bg-[#1a61e9] bg-right bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${NeoPopImage})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="max-w-6xl mx-auto h-full mt-20 md:mt-0"></div>
        </div>
    );
};

export default NeoPop;
