import React from 'react'
import './Gallery.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectFlip, EffectFade } from 'swiper';

import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectFlip, EffectFade ]);




export default function Gallery() {
    return (
        <>
            <div className="gallery-main">
                <div className="title gallery-title">
                    Gallery
                </div>
                <div className="gallery-container">
                    <div>
                    <Swiper
                        className="gallery"
                        spaceBetween={50}
                        speed={600}
                        autoplay={{ delay: 5000 }}
                        slidesPerView={1}
                        loop="true"
                        effect="cube"
                        >
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (1).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (3).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (2).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (4).jpg`}  alt="" /> </SwiperSlide>
                    </Swiper>
                    


                    </div>

                                 {/* < TWO >  3  </ TWO > */}

                    <div className="gallery-only"> <img src={`${window.location.origin}/polo-mart/Images/squire (1).jpg`}  alt="" />  </div>




                                {/* < THREE >  3  </ THREE > */}

                    <div>
                    <Swiper
                        className="gallery"
                        spaceBetween={1}
                        speed={600}
                        autoplay={{ delay: 4500 }}
                        slidesPerView={1}
                        // navigation
                        // scrollbar={{ draggable: true }}
                        loop="true"
                        effect="slide"
                        >
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (7).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (6).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (5).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (4).jpg`}  alt="" /> </SwiperSlide>
                    </Swiper>
                    

                    </div>

                                {/* < FOUR >  4  </ FOUR > */}

                    <div>
                    <Swiper
                        className="gallery"
                        spaceBetween={1}
                        speed={1000}
                        autoplay={{ delay: 3800 }}
                        slidesPerView={1}
                        // navigation
                        // pagination={{ clickable: true, dynamicBullets:true }}
                        // scrollbar={{ draggable: true }}
                        loop="true"
                        effect="coverflow"
                        >
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (2).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (4).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (5).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/squire (6).jpg`}  alt="" /> </SwiperSlide>
                    </Swiper>
                    

                    </div>



                                                     {/* < FIVE >  5  </ FIVE > */}

                    <div className="gallery-only"> <img src={`${window.location.origin}/polo-mart/Images/squire (3).jpg`}  alt="" />  </div>


                                                    {/* < SIX >  4  </ SIX > */}

                    <div>
                    <Swiper
                        className="gallery"
                        spaceBetween={5}
                        speed={500}
                        autoplay={{ delay: 2600 }}
                        slidesPerView={1}
                        loop="true"
                        effect="flip"
                        >
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/stand (1).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/stand (2).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/stand (3).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/stand (4).jpg`}  alt="" /> </SwiperSlide>
                    </Swiper>
                    

                    </div>


                         {/* < SEVEN >  7  </ SEVEN > */}

                    <div className="gallery-only"> <img src={`${window.location.origin}/polo-mart/Images/squire (6).jpg`}  alt="" />  </div>


                    
                                                                        {/* < EIGHT >  4  </ EIGHT > */}

                    <div>
                        <Swiper
                            className="gallery"
                            spaceBetween={5}
                            speed={500}
                            autoplay={{ delay: 4200 }}
                            slidesPerView={1}
                            loop="true"
                            effect="fade"
                            >
                                <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (3).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (2).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (1).jpg`}  alt="" /> </SwiperSlide>
                            <SwiperSlide className="gallery-img"> <img src={`${window.location.origin}/polo-mart/Images/vertical (5).jpg`}  alt="" /> </SwiperSlide>
                        </Swiper>
                    

                    </div>

                    {/* < NINE >  7  </  NINE > */}

                    <div className="gallery-only"> <img src={`${window.location.origin}/polo-mart/Images/squire (2).jpg`}  alt="" />  </div>


                     {/* < TEN >  7  </  TEN > */}

                     <div className="gallery-only"> <img src={`${window.location.origin}/polo-mart/Images/vertical (4).jpg`}  alt="" />  </div>


                </div>




            </div>
        </>
    )
}
