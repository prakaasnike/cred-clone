import React from 'react'

const RewardsSection = () => {
    return (
        <div className=" py-20 px-8">
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-col-1 md:grid-cols-2'>
                    <div >
                        <div className='space-y-2 leading-[22px]'>
                            <h1 className='font-extrabold text-8xl '>feel special more often.</h1>
                            <h4 className='font-bold text-3xl'>exclusive rewards for paying your bills</h4>
                            <p>every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.</p>
                        </div>
                        <button className='mt-6'>Explore rewards</button>
                    </div>
                    <div>2</div>
                </div>
            </div>
        </div>
    )
}

export default RewardsSection