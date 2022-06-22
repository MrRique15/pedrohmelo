import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/colirio2.jpg'

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
    review: 'cara top'
  },
  {
    avatar: AVT1,
    name: 'Little John',
    review: 'Definivamente o programador mais lindo e gostoso da região, eu penso todos os dias em largar minha namorada pra tentar uma oportunidade com esse gatoOooO'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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