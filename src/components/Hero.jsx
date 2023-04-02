import React from 'react';
import Button from './Button';
import { ArrowDownLeftIcon } from '@heroicons/react/24/solid';
const Hero = () => {
    return (
        <div className="">
            <div className="md:flex-row flex-col justify-center flex gap-4 py-6 bg-gray-600 bg-opacity-30 items-center">
                <div>pay credit card bill.earn guranteed ₹200 back.</div>
                <div className="gap-2 flex cursor-pointer text-blue-400">
                    <span>claim now</span>
                    <span className="rotate-180">
                        <ArrowDownLeftIcon className="w-5 h-5" />
                    </span>
                </div>
            </div>
            <div className="max-w-7xl py-8 h-full  items-center mx-auto justify-center md:text-center flex flex-col px-10">
                <div className="space-y-9 md:pl-20 md:pr-20">
                    <div className="text-[55px] font-extrabold md:text-6xl lg:text-[106px] leading-[55px]  tracking-[-1.65px] md:tracking-[-3px] md:leading-[120px]">
                        rewards for paying credit card bills.
                    </div>
                    <div className="font-semibold md:font-bold text-lg md:text-3xl">
                        join 9M+ members who win rewards and cashbacks everyday
                    </div>
                    <Button buttonText="Download CRED" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
