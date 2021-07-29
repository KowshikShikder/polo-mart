import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { EffectCoverflow } from 'swiper';
import React from 'react'
import './ImageSlide.css'
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);
export default function ImageSlide() {
  return (
    <>
      <div className="image-slider-main">

        <div className="title gallery-title">
            Gallery
        </div>

          <Swiper
                className="slider-container"
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3800 }}
                effect="coverflow"
                  >
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider1.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider2.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider3.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider4.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider1.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider2.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider3.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider4.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider1.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider2.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/Images/slider3.jpg`} alt="" />   </SwiperSlide>
                
          </Swiper>
          </div>


    </>
  )
}
