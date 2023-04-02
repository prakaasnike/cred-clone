
import React from 'react'
import BrandLogos from "../../assets/images/logo/brands-desktop.png"
import BrandLogosMobile from "../../assets/images/logo/brands-mobile.png"
const BrandLogo = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-6xl mx-auto py-16 px-8'>
                <div className='space-y-6'>
                    <h2 className='text-xl text-gray-700 font-bold'>rewards from brands you love.</h2>
                    <img className='w-full hidden md:block' src={BrandLogos} alt="" />
                    <img className='w-full block md:hidden p-10' src={BrandLogosMobile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BrandLogo