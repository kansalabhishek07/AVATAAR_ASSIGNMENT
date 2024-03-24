import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'


import slide_image_1 from './assets/slide_image_1.jpg'
import slide_image_2 from './assets/slide_image_2.jpg'
import slide_image_3 from './assets/slide_image_3.jpg'
import slide_image_4 from './assets/slide_image_4.jpg'
import slide_image_5 from './assets/slide_image_5.jpg'


export default function Carousel() {

  return (
    <>
      <div className="slider-container">
        <div className="main">
            <h1 className="heading">FEATURED PRODUCTS</h1>
            <p>EXPLORE AND DISCOVER A VARIETY OF PRODUCTS</p>
        </div>
        <Swiper
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
           loop={true}
           slidesPerView={'auto'}
           coverflowEffect={{
             rotate: 0,
             stretch: 0,
             depth: 100,
             modifier: 7,
           }}

           pagination={{ el: '.swiper-pagination', clickable: true }}
           navigation={{
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
             clickable: true,
           }}
           modules={[EffectCoverflow, Pagination, Navigation]}
           className="swiper_container"
        >
            <SwiperSlide >
                <img src={slide_image_1} alt="flowerImage1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image_2} alt="flowerImage2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image_3} alt="flowerImage3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image_4} alt="flowerImage4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image_5} alt="flowerImage5" />
            </SwiperSlide>
           

            <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <FaArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
          <FaArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>

        </Swiper>
      </div>
    </>
  );
}