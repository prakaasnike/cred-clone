import React, { useEffect, useRef, useState } from 'react';
import LeftImage1 from '../../assets/images/product-showcase/neopop-left-1.webp';
import LeftImage2 from '../../assets/images/product-showcase/neopop-left-2.webp';
import CenterImage from '../../assets/images/product-showcase/neopop-center.webp';
import RightImage1 from '../../assets/images/product-showcase/neopop-right-1.webp';
import RightImage2 from '../../assets/images/product-showcase/neopop-right-2.webp';
import clsx from 'clsx';

const ProductShowCase = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);

    const toggleAnimation = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setShowAnimation(true);
            }
        });
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);
        if (!showAnimation) {
            if (ref.current) {
                observer.observe(ref.current);
            }
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [showAnimation, options]);

    return (
        <div
            ref={ref}
            className={clsx(
                `product-showcase w-screen  md:h-screen  relative overflow-hidden bg-cover bg-right ${
                    showAnimation ? 'scale-in-bottom' : ''
                } `
            )}
        >
            <div className="showcase-wrapper flex">
                <img
                    className="showcase-ui showcase-mockup-1 -bottom-[400px] md:left-[-800px] absolute inset-0 m-auto"
                    src={LeftImage1}
                    alt=""
                />
                <img
                    className="showcase-ui showcase-mockup-2 -bottom-[250px] md:left-[-500px] absolute inset-0 m-auto"
                    src={LeftImage2}
                    alt=""
                />
                <img
                    className="showcase-ui showcase-mockup-3 -bottom-[100px] absolute inset-0 m-auto z-10"
                    src={CenterImage}
                    alt=""
                />
                <img
                    className="showcase-ui showcase-mockup-5 -bottom-[400px] md:right-[-800px] absolute inset-0 m-auto"
                    src={RightImage1}
                    alt=""
                />
                <img
                    className="showcase-ui showcase-mockup-4 -bottom-[250px] md:right-[-500px] absolute inset-0 m-auto"
                    src={RightImage2}
                    alt=""
                />
            </div>
        </div>
    );
};

export default ProductShowCase;
