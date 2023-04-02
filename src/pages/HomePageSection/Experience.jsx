import React from 'react'
import ExperienceBG from "../../assets/images/money-matters-bg.webp"
const Experience = () => {
    return (
        <div
            className="rewards py-20 px-8 md:h-screen h-full bg-[#1a61e9] bg-right bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ExperienceBG})` }}
        >
            <div className="max-w-6xl mx-auto h-full mt-20 md:mt-0 ">
                <div className="grid grid-col-1 md:grid-cols-2 h-full  justify-center items-center">
                    <div className='p-4 w-full'>
                        <div className="space-y-4  ">
                            <h1 className="font-extrabold text-4xl md:text-7xl ">
                                we take your money matters seriously.
                            </h1>
                            <h4 className="font-extrabold text-lg md:text-3xl">
                                so that you don’t have to.
                            </h4>
                            <p className='font-semibold leading-[22px]'>
                                never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.
                            </p>
                        </div>
                        <button className="mt-6">Experience the upgrade</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Experience