import React from 'react'
import './Testimonials.css'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.PNG'

import {  Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    client: client1,
    name: 'Demi lade',
    review: "lonasllsziyirifhckjtikdkyshbyghjbv",
  },
  {
    client: client2,
    name: 'Demi lade',
    review: "lonasllsziyirifhckjtikdkyshbyghjbvxnxchiso;",
  },
  {
    client: client3,
    name: 'Demi lade',
    review: "lonasllsziyirifhckjtikdkyshbyghjb",
  },
  {
    client: client4,
    name: 'Demi lade',
    review: "lonasllsziyirifhckjtikdkyshbygh",
  },
]
const Testimonials = () => {
  return (
   <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className='container testimonials__container'>

    {/* modules={[ Pagination,  A11y]}
      spaceBetween={30}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
  
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')} */}
     {
      data.map(({client, name, review}, index) => {
        return(
          <SwiperSlide  key={index}className='testimonial'>
          <div className='client__avater'>
             <img src={client} alt='/'/>
          </div>
          <h5 className='client__name'>{name}</h5>
             <small className='client__review'>{review}</small>
        </SwiperSlide>
        )
      } )
     }

   


   

   



    
    </Swiper>
   </section>
  )
}

export default Testimonials
