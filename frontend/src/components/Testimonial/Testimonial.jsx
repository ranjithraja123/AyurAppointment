import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../pages/pages.css';
import patientAvt from '../../assets/images/profile.jpg'
import { HiStar } from "react-icons/hi";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Testimonial() {
  // return (
  //   <>
  //     <Swiper
  //       slidesPerView={3}
  //       spaceBetween={30}
  //       freeMode={true}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       breakpoints={{
  //         // when window width is >= 320px
  //         320: {
  //           slidesPerView: 1,
  //           spaceBetween: 10,
  //         },
  //         // when window width is >= 640px
  //         640: {
  //           slidesPerView: 2,
  //           spaceBetween: 20,
  //         },
  //         // when window width is >= 1024px
  //         1024: {
  //           slidesPerView: 3,
  //           spaceBetween: 30,
  //         },
  //       }}
  //       modules={[FreeMode, Pagination]}
  //       className="mySwiper py-5"
  //     >
  //       {[...Array(5)].map((_, index) => (
  //         <SwiperSlide key={index} style={{ background: "transparent" }}>
  //           <div className='p-3 d-flex flex-column align-items-center text-center slide-container'>
  //             <div className='virtual'>
  //               <img className='virtual rounded-5' src={patientAvt} alt='Patient Avatar' />
  //               <div><h4>Ranjith Raja</h4></div>
  //             </div>
  //             <div className='d-flex w-25 justify-content-center'>
  //               {[...Array(5)].map((_, starIndex) => (
  //                 <HiStar key={starIndex} fontSize={50} color='orange' />
  //               ))}
  //             </div>
  //             <div>
  //               <p>Providing best medical services. Ayurveda, often referred to as the "science of life," is an ancient holistic healing system that originated in India over 5,000 years ago.</p>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </>
  // );
}
