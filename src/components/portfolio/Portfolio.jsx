import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.jpg'
import img6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image:img1,
    title:'Online Drum Kit',
    github:'https://github.com/AswiniVerma/drum-kit.git',
    demo:'https://aswiniverma.github.io/drum-kit/',
  },
  {
    id:2,
    image:img2,
    title:'Your Personal Journal',
    //github:'https://github.com',
    demo:'https://murmuring-tundra-73771.herokuapp.com/',
  },
  {
    id:3,
    image:img3,
    title:'Online Doctor Booking',
    github:'https://github.com/AswiniVerma/DoctorAppointmentSystem',
    demo:'https://dapper-melomakarona-654f35.netlify.app/',
  },
  {
    id:4,
    image:img4,
    title:'Online Movie Ticket Booking',
    github:'https://github.com/AswiniVerma/Movie-Booking-System.git',
   // demo:'https://github.com',
  },
  {
    id:5,
    image:img5,
    title:'A Menu Design',
    github:'https://github.com/AswiniVerma/MenuDesign.git',
    demo:'https://serene-hummingbird-b4f976.netlify.app/',
  },
  {
    id:6,
    image:img6,
    title:'Save Kush Game',
    github:'https://github.com/AswiniVerma/SavaKush-PythonGame.git',
    //demo:'https://github.com',
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
            )
              
            
          })
        }
            
          
        
      </div>
    </section>
  )
}

export default Portfolio
