import React from 'react';
import { carousaldata } from './carousaldata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Maincarousal() {
    const items = carousaldata.map((item) => (
        <img src={item.image} alt="carousel-item" className="cursor-pointer" />
    ));

    return (
        <div>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </div>
    );
}

export default Maincarousal;
