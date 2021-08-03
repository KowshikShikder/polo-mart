import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { EffectCoverflow } from 'swiper';
import React, { useState } from 'react'
import './ImageSlide.css'
import '../../../node_modules/swiper/components/effect-coverflow/effect-coverflow.min.css'
import '../../../node_modules/swiper/components/effect-coverflow/effect-coverflow.less'
import '../../../node_modules/swiper/components/effect-coverflow/effect-coverflow.scss'


import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);
export default function ImageSlide() {

  const [Stretch, setStretch] = useState(window.innerWidth > 700 ? 75 : window.innerWidth>500 ? 60 : window.innerWidth > 400 ? 50 : 38.5)
  const [Depth, setDepth] = useState(window.innerWidth > 700 ? 146 : window.innerWidth>500 ? 100 : window.innerWidth > 400 ? 82 : 70)





  return (
    <>
      <div className="image-slider-main">

        <div className="title gallery-title">
            Gallery
        </div>

          <Swiper
                className="slider-container"
                id="slide"
                spaceBetween={0}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3800 }}
                effect="coverflow"
                coverflowEffect={{
                  modifier: 1,
                  slideShadows:true,
                  rotate: 10,

                  stretch: Stretch,
                  depth: Depth


                  //width: > 701

                      // stretch: 75,
                      // depth: 146,


                  //width: 501 -- 700

                      // stretch:60,
                      // depth: 100, 
                  


                  // width: 401 -- 500

                      // stretch:50,
                      // depth:82


                  //width: < 400

                      // stretch: 38.5,
                      // depth: 70, 
                }}
                loop={true}
                  >
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/polo-mart/Images/slider1.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/polo-mart/Images/slider2.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/polo-mart/Images/slider3.jpg`} alt="" />   </SwiperSlide>
                <SwiperSlide className="slider-img">  <img src={`${window.location.origin}/polo-mart/Images/slider4.jpg`} alt="" />   </SwiperSlide>
                
          </Swiper>
          </div>


    </>
  )
}
