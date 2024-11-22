import React from 'react';
import { carousaldata } from './carousaldata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Maincarousal() {
    const items = carousaldata.map((item) => (
        <img src={item.image} role='presentation' alt="carousel-item" className="cursor-pointer w-full h-full object-cover object-top" />
    ));

    return (
        <div>
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
                autoPlay
                infinite
                autoPlayInterval={2000}
            />
        </div>
    );
}

export default Maincarousal;
