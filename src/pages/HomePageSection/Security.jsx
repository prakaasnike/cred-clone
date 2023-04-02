import React from 'react'
import SecurityBG from "../../assets/images/security-bg.webp"
const Security = () => {
    return (
        <div
            className="rewards py-20 px-8 md:h-screen h-full bg-[#5a1ecb] bg-right bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${SecurityBG})` }}
        >
            <div className="max-w-6xl mx-auto h-full ">
                <div className="grid grid-col-1 md:grid-cols-2 h-full  justify-center items-center">
                    <div className='p-4 w-full'>
                        <div className="space-y-4 w:3/4 ">
                            <h1 className="font-extrabold text-4xl md:text-7xl md:mb-0 mb-48 ">
                                security first.
                                and second.
                            </h1>
                            <h4 className="font-extrabold text-lg md:text-3xl">
                                what’s yours remains only yours.
                            </h4>
                            <p className='font-semibold leading-[22px]'>
                                CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any.
                            </p>
                        </div>
                        <button className="mt-6">Become a member</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Security