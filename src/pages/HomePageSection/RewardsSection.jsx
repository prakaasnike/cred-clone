import React from 'react';
import ExploreRewardBG from '../../assets/images/rewards/deserve-more-bg.webp';

const RewardsSection = () => {
    return (
        <div
            className="rewards py-20 px-8 md:h-screen h-full bg-right bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ExploreRewardBG})` }}
        >
            <div className="max-w-6xl mx-auto h-full ">
                <div className="grid grid-col-1 md:grid-cols-2 h-full justify-center items-center">
                    <div className='p-4'>
                        <div className="space-y-4 ">
                            <h1 className="font-extrabold text-4xl md:text-7xl pb-32 md:pb-0">
                                feel special<br /> more often.
                            </h1>
                            <h4 className="font-bold text-lg md:text-3xl">
                                exclusive rewards for paying your bills
                            </h4>
                            <p className='font-semibold leading-[22px]'>
                                every time you pay your credit card bills on CRED, you receive
                                CRED coins. you can use these to win exclusive rewards or get
                                special access to curated products and experiences. on CRED,
                                good begets good.
                            </p>
                        </div>
                        <button className="mt-6">Explore rewards</button>
                    </div>
                    {/* <div>2</div> */}
                </div>
            </div>
        </div>
    );
};

export default RewardsSection;
