import React, { useState } from 'react';
import ScreenText from './ScreenText';

const scrollData = [
    {
        heading: "we've got your back.",
        description:
            'gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.',
        mobile_img: '/src/assets/images/mobile-scroll/neopop-fold1.webp',
    },
    {
        heading: 'begin your winning streak.',
        description:
            'use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.',
        mobile_img: '/src/assets/images/mobile-scroll/neopop-fold2.webp',
    },
];
const MobileScroll = () => {
    const [currentImg, setCurrentImg] = useState(0);
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto h-full md:mt-0 px-4">
                <div className="grid grid-col-1 md:grid-cols-2 gap-4   justify-between h-full items-center">
                    <div>
                        {scrollData.map((screen, i) => (
                            <div
                                className="h-screen flex flex-col justify-center"
                                key={i}
                            >
                                <ScreenText
                                    screen={screen}
                                    i={i}
                                    setCurrentImg={setCurrentImg}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mobile-mockup-wrapper  flex-col justify-center items-center hidden md:block">
                        {/* <div className="mobile-mockup sticky h-[600px] w-[320px] pl-20 max-h-screen bg-black border-gray-700 rounded-3xl top-[180px] shadow-lg  ">
                            <div className="mobile-mockup-screen flex relative items-center">
                                <img
                                    className=""
                                    src={scrollData[currentImg].mobile_img}
                                    alt=""
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileScroll;
