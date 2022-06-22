import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/colirio2.jpg'
import AVT2 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'João Rigon',
    review: 'Muito prestativo e atencioso, sempre preocupado com as minhas necessidades.'
  },
  {
    avatar: AVT2,
    name: 'Iraci',
    review: 'Dedicado e Prestativo!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Depoimento de Clientes</h5>
      <h2>Reviews</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>            
                </div>
                <h5 className='cliente__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )            
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials