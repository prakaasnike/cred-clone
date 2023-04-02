import React, { useState } from 'react';
import Logo from '../../../src/assets/images/logo/cred-logo.webp';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Header = () => {
    const [opened, setOpened] = useState(false);

    return (
        <nav className="text-white pt-12 py-4">
            <div className="max-w-6xl px-6 md:px-6 md:p-2 mx-auto flex justify-between items-center">
                {/* brand icon */}
                <div>
                    <Link to={"/"}>
                        <img className="w-[49px] h-[66px]" src={Logo} alt="Cred Logo" />
                    </Link>
                </div>

                <div>
                    {/* desktop navigation */}
                    <div className='flex'>
                        <div className="hidden md:block items-center gap-8 font-bold text-lg text-gray-200 opacity-90">
                            <a href="#" className="mr-4">credit score check</a>
                            <a href="#" className="px-4 py-2">CRED pay</a>
                        </div>
                    </div>
                    {/* Hamburger Animated Icon */}
                    <div className={clsx(`tham tham-e-squeeze tham-w-6 `, { 'tham-active': opened, 'z-50': !opened })} onClick={() => setOpened(!opened)}>
                        <div className="tham-box block md:hidden z-50">
                            <div className="tham-inner bg-gray-200" />
                        </div>
                        {/* mobile navigation drawer */}
                        <div className={clsx(`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform transition-transform ease-in-out duration-300 `, { 'translate-x-full': !opened })} >
                            <div className='max-w-6xl px-6 md:px-6 mx-auto flex flex-col justify-center items-center h-full' >
                                <Link to={"/creditcheck"} className="text-3xl  font-bold text-white mb-8">credit score check</Link>
                                <a href="#" className="text-3xl font-bold text-white mb-8">CRED pay</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </nav>
    );
};

export default Header;
