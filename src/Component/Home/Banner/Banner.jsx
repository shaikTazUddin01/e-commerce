import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper h-[500px]">
            <SwiperSlide className='h-[500px] bg-red-600'>Slide 1</SwiperSlide>
            <SwiperSlide className='h-[500px] bg-blue-600'>Slide 2</SwiperSlide>
            <SwiperSlide className='h-[500px] bg-green-600'>Slide 3</SwiperSlide>
            <SwiperSlide className='h-[500px] bg-yellow-600'>Slide 4</SwiperSlide>
            
        </Swiper>
    );
};

export default Banner;