import React from 'react';
import SecurityLogo from "../../assets/images/security-logos.webp"
import BrandLogo from "../../assets/images/logo/cred-logo.webp"
const Footer = () => {
    const date = new Date(Date.now()).getFullYear().toString();
    return (
        <div>
            {/* Footer */}
            <footer>
                <div className='bg-opacity-10 bg-white py-20 '>
                    <div className='mx-auto max-w-7xl md:text-lg opacity-80 space-y-4 p-4'>
                        <div className=''>
                            <span><strong className='pr-2'>calculators:</strong> SIP calculator | EMI calculator | PPF calculator | home loan calculator | car loan calculator | fixed deposit</span><br />
                            <span>calculator | recurring deposit calculator | simple loan calculator | compound interest calculator</span>
                        </div>
                        <div className='flex'>
                            <strong className='pr-2'>credit card bill payment: </strong>
                            <span>American Express | Standard Chartered | HDFC | ICICI | SBI | AXIS | RBL | PNB | YES Bank </span>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-16 ">
                    <div className='space-y-8'>
                        <div className='grid md:grid-cols-2  grid-flow-row p-2 md:justify-between justify-start text-lg space-y-2 md:space-y-0 '>
                            <div className='space-y-8 w-[420px]'>
                                <span >
                                    <img className='w-16' src={BrandLogo} alt="" />
                                </span>
                                <img className="w-96" src={SecurityLogo} alt="" />
                                <h3 className='font-bold text-2xl'>complete security. no asterisks.</h3>
                                <p className='opacity-30'>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
                            </div>
                            <div>
                                <div className='grid md:grid-cols-2 grid-flow-row p-2 md:justify-between justify-start text-lg space-y-2 md:space-y-0'>
                                    <div>
                                        <h3 className='font-black text-xl'>products</h3>
                                        <ul className='text-lg opacity-30 py-2 space-y-2'>
                                            <li className="cursor-pointer">CRED pay</li>
                                            <li className="cursor-pointer">credit score check</li>
                                        </ul>

                                    </div>
                                    <div>
                                        <h3 className='font-black text-xl'>CRED</h3>
                                        <ul className='text-lg opacity-30 py-2 space-y-2'>
                                            <li className="cursor-pointer">about</li>
                                            <li className="cursor-pointer">careers</li>
                                            <li className="cursor-pointer">IPL</li>
                                            <li className="cursor-pointer">customer care</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='grid md:grid-cols-2 grid-flow-row p-2 md:justify-between justify-start text-lg space-y-2 md:space-y-0'>
                                    <div>
                                        <h3 className='font-black text-xl'>resources</h3>
                                        <ul className='text-lg opacity-30 py-2 space-y-2'>
                                            <li className="cursor-pointer">articles</li>
                                            <li className="cursor-pointer">tech blogs</li>
                                            <li className="cursor-pointer">calculators</li>
                                            <li className="cursor-pointer">credit card payment guide</li>
                                            <li className="cursor-pointer">credit store guide</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='font-black text-xl'>policy</h3>
                                        <ul className='text-lg opacity-30 py-2 space-y-2'>
                                            <li className="cursor-pointer">security</li>
                                            <li className="cursor-pointer">transaction & user verification</li>
                                            <li className="cursor-pointer">google API disclosure</li>
                                            <li className="cursor-pointer">UPI faq & grievances</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //bottom footer */}
                        <div className="grid md:grid-cols-2 grid-flow-row p-2 md:justify-between justify-center text-lg space-y-2 md:space-y-0 ">
                            <div className='font-normal text-sm md:text-lg opacity-30'>
                                {' '}
                                <p>&copy;2020-{date} By Prakash Nayak</p>
                            </div>
                            <div >
                                <ul className='flex space-x-4 font-semibold text-sm md:text-lg opacity-60'>
                                    <li className='cursor-pointer hover:opacity-100'>privacy policy</li>
                                    <li className='cursor-pointer hover:text-white'>terms and conditions</li>
                                    <li className='cursor-pointer hover:text-white'>returns and refund</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
