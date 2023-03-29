import React from 'react';
import Logo from '../../../src/assets/images/logo/cred-logo.webp';

const Header = () => {
    return (

        <nav className="text-white pt-12">
            <div className="max-w-6xl px-6 md:px-6 md:p-2 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className='w-[49px] h-[66px]' src={Logo} alt="Cred Logo" />
                </div>
                <div className="flex items-center gap-8 font-bold text-lg text-gray-200 opacity-90">
                    <a href="#" className="mr-4 ">
                        credit score check
                    </a>
                    <a href="#" className="px-4 py-2">
                        CRED pay
                    </a>
                </div>
            </div>
        </nav>

    );
};

export default Header;