import React from 'react';

const ScreenText = ({ screen, setCurrentImg, i }) => {
    return (
        <div className="px-8">
            <div className="screen-heading md:text-6xl text-5xl  font-black md:py-0 py-8 md:w-full w-80">
                {screen.heading}
            </div>
            <div className="mobile-mockup-wrapper flex flex-col ">
                <div className="mobile-mockup block md:hidden  fixed h-[600px] w-[320px] max-h-screen bg-black border-gray-700 rounded-3xl top-[180px] shadow-lg ">
                    <div className="mobile-mockup-screen   ">
                        <img className="" src={screen.mobile_img} alt="" />
                    </div>
                </div>
            </div>
            <div>{screen.description}</div>
        </div>
    );
};

export default ScreenText;
