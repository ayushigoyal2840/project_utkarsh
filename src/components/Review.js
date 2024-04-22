import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import './ReviewStyles.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
  return (
    <div className='Review'>
        
      <h1 className='head'>Listen from our Clients</h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <h1>Himanshu</h1>
            <h2>CEO @ <em className="company">Ispaze pvt ltd</em></h2>
            <p><em> "Augere Technologies transformed our brand identity, exceeding our expectations with their creativity and professionalism."</em></p>
        </SwiperSlide>
        <SwiperSlide>
        <h1>Ashish</h1>
            <h2>CMO @ <em className="company">Synexus Technologies pvt ltd</em></h2>
            <p><em> "Exceptional service from Augere Technologies; their strategic insights propelled our business to new heights."</em></p>
        </SwiperSlide>
        <SwiperSlide>
        <h1>Nikhil</h1>
            <h2>Owner @ <em className="company">RBL Manufacturers pvt ltd</em></h2>
            <p><em> "Augere Technologies delivered outstanding results, demonstrating their commitment to our success." </em></p>
        </SwiperSlide>
        <SwiperSlide>
        <h1>Rajesh</h1>
            <h2>Owner @ <em className="company">MKBK Manufacturers pvt ltd</em></h2>
            <p><em> "Highly impressed with Augere Technologies' innovative solutions and dedicated support; a true partner in our growth journey." </em></p>
        </SwiperSlide>
        <SwiperSlide>
        <h1>Nitesh</h1>
            <h2>Owner @ <em className="company">Computer Empire Pvt Ltd</em></h2>
            <p><em> "Augere Technologies exceeded all our expectations, delivering top-notch digital solutions that elevated our brand." </em></p>
        </SwiperSlide>
        <SwiperSlide>
        <h1>Rajneesh</h1>
            <h2>Owner @ <em className="company">Mobile Doctor pvt ltd</em></h2>
            <p><em> "Augere Technologies' personalized approach and attention to detail truly set them apart; they are a valuable asset to any business." </em></p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Review
