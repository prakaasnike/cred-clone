import React from 'react'
import TrustBG from "../../assets/images/trust-bg.webp"
const Trust = () => {
    return (
        <div
            className="rewards py-20 px-8 md:h-screen h-full bg-[#027757] bg-right-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${TrustBG})` }}
        >
            <div className="max-w-6xl mx-auto h-full ">
                <div className="grid grid-col-1 md:grid-cols-2 h-full  justify-center items-center">
                    <div className='md:p-12 w-full'>
                        <div className="space-y-4 w:3/4 ">
                            <h1 className="font-extrabold text-4xl md:text-6xl ">
                                the story of
                                CRED begins
                                with trust.
                            </h1>

                        </div>
                        <button className="mt-14 mb-10">Learn more about us</button>
                    </div>
                    <div className='space-y-4 md:p-12'>
                        <p>trust as a virtue has consistently played an essential role in every great human achievement. and consistently, its importance has been overlooked. not just by individuals, but by entire societies. we felt it was time someone gave it the spotlight it deserves. especially for the ones who live by this virtue: the trustworthy.</p>
                        <p>so we thought of creating a system that rewards its members for doing good and being trustworthy. this way, trust as a virtue becomes something to aspire to, just the way it should be. then we went one step ahead: we built it. we know we are on the right track because here you are.</p>
                        <p>if you make it to CRED, congratulations and welcome. we have a lot of things planned for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust