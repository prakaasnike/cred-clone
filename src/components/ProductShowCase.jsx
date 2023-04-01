import React from 'react'
import ShowcaseBG from '../assets/images/product-showcase/video-bg.webp'

const ProductShowCase = () => {
    return (
        <div className='product-showcase w-screen h-[800px] relative overflow-hidden bg-cover bg-right '>
            <div className="showcase-wrapper flex h-[70%]">
                <img className='showcase-ui showcase-mockup-1 -bottom-[400px] absolute inset-0 m-auto' src="/src/assets/images/product-showcase/neopop-left-1.webp" alt="" style={{ left: '-800px' }} />
                <img className='showcase-ui showcase-mockup-2 -bottom-[250px] absolute inset-0 m-auto' src="/src/assets/images/product-showcase/neopop-left-2.webp" alt="" style={{ left: '-500px' }} />
                <img className='showcase-ui showcase-mockup-3 -bottom-[100px] absolute inset-0 m-auto z-20' src="/src/assets/images/product-showcase/neopop-center.webp" alt="" />
                <img className='showcase-ui showcase-mockup-4 -bottom-[250px] absolute inset-0 m-auto z-10' src="/src/assets/images/product-showcase/neopop-right-1.webp" alt="" style={{ right: '-500px' }} />
                <img className='showcase-ui showcase-mockup-5 -bottom-[400px] absolute inset-0 m-auto' src="/src/assets/images/product-showcase/neopop-right-2.webp" alt="" style={{ right: '-800px' }} />
            </div>
        </div>
    )
}

export default ProductShowCase