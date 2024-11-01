import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Homesectioncard from './Homesectioncard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';


export default function Homecardcarousal({data,sectionName}) {
    const carouselRef = useRef(null); // Ref to control AliceCarousel
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    const items = data.slice(0, 10).map((item, index) => (
        <Homesectioncard key={index} product={item} />
    ));

    const slidenext = () => {
        const nextIndex = activeIndex + 1;
        setActiveIndex(nextIndex);
        carouselRef.current.slideTo(nextIndex); // Move to next slide
    };

    const slidepreview = () => {
        const prevIndex = activeIndex - 1;
        setActiveIndex(prevIndex);
        carouselRef.current.slideTo(prevIndex); // Move to previous slide
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className="border">
            <h2 className=' text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef} // Attach ref here
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                />

                {activeIndex !== items.length - responsive[1024].items && (
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={slidenext}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(-20%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <ChevronRightIcon
                            className="text-blue-700"
                            sx={{ transform: "rotate(-90deg)" }}
                        />
                    </Button>
                )}

                {activeIndex !== 0 && (
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={slidepreview}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-70%) rotate(-90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="previous"
                    >
                        <ChevronLeftIcon
                            className="text-blue-700"
                            sx={{ transform: "rotate(90deg)" }}
                        />
                    </Button>
                )}
            </div>
        </div>
    );
}
