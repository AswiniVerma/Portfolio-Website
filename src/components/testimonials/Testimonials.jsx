import React from 'react'
import './testimonials.css'
import a1 from '../../assets/avatar1.jpg'
import a2 from '../../assets/avatar2.jpg'
import a3 from '../../assets/avatar3.jpg'
import a4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Pagination, Navigation } from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar:a1,
    name:'Neha Verma',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum sequi magnam laboriosam quidem, at aliquid ipsa odit necessitatibus nobis deleniti beatae eligendidolorem provident suscipit sunt voluptatum illo animi?'
  },
  {
    avatar:a2,
    name:'Harsh Verma',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum sequi magnam laboriosam quidem, at aliquid ipsa odit necessitatibus nobis deleniti beatae eligendidolorem provident suscipit sunt voluptatum illo animi?'
  },
  {
    avatar:a3,
    name:'Rabindra Verma',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum sequi magnam laboriosam quidem, at aliquid ipsa odit necessitatibus nobis deleniti beatae eligendidolorem provident suscipit sunt voluptatum illo animi?'
  },
  {
    avatar:a4,
    name:'Guddo Verma',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum sequi magnam laboriosam quidem, at aliquid ipsa odit necessitatibus nobis deleniti beatae eligendidolorem provident suscipit sunt voluptatum illo animi?'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        Review from people
      </h5>
      <h2>
        Testimonials
      </h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar one"  />
          </div>
          <h5 className='client__name'>{name}</h5>
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
