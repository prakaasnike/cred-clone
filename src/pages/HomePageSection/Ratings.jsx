import React from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi2';
import { DiApple } from 'react-icons/di';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import clsx from 'clsx';
const Ratings = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4">
                <div className="grid md:grid-cols-2">
                    <div className="p-12 space-y-6 flex flex-col items-center justify-center h-full  rounded-md">
                        <div className="space-x-4 flex items-center justify-center h-full ">
                            <span className="md:text-9xl text-8xl font-black">
                                4.8
                            </span>
                            <span className="md:text-6xl text-4xl font-bold">
                                app
                                <br />
                                store
                            </span>
                        </div>
                        <div className="flex space-x-2 ">
                            <HiStar className="h-8 w-8" />
                            <HiStar className="h-8 w-8" />
                            <HiStar className="h-8 w-8" />
                            <HiStar className="h-8 w-8" />
                            <HiOutlineStar className="h-8 w-8" />
                        </div>
                        <button
                            className={clsx(
                                `flex justify-center items-center space-x-2 pt-2 pb-2`
                            )}
                        >
                            <DiApple className="text-4xl pr-2" />
                            Download the app
                        </button>
                    </div>
                    <div className="p-12 space-y-6 flex flex-col items-center justify-center h-full  rounded-md">
                        <div className="space-x-4 flex items-center justify-center h-full ">
                            <span className="md:text-9xl text-8xl font-black">
                                4.7
                            </span>
                            <span className="md:text-6xl text-4xl font-bold">
                                play
                                <br />
                                store
                            </span>
                        </div>
                        <div className="flex space-x-2 ">
                            <HiStar className="h-8 w-8" />
                            <HiStar className="h-8 w-8" />
                            <HiStar className="h-8 w-8" />
                            <HiStar className="h-8 w-8" />
                            <HiOutlineStar className="h-8 w-8" />
                        </div>
                        <button
                            className={clsx(
                                `flex justify-center items-center space-x-2 pt-2 pb-2`
                            )}
                        >
                            <IoLogoGooglePlaystore className="text-4xl pr-2" />
                            Download the app
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ratings;
