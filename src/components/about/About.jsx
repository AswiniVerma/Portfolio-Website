import React from 'react'
import './about.css'
import pic4 from '../../assets/pic4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pic4} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="#experience">
              <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Starting out</small>
            </article>
            </a>
            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Internships</h5>
              <small>3 till now</small>
            </article> */}
            <a href="#portfolio">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>  Projects</h5>
              <small> 10+ completed</small>
            </article>
            </a>
          </div>
          <p>
            I am a ..Bachelor of Engineering - Computer Science..
            graduate from <a href="https://www.acharya.ac.in/" target="__blank">
              Acharya Institute of Technology.
              </a><br />
            From an early age I’ve always been deeply interested in applications. 
            It was my teacher, introducing me to the computer applications  that first sparked 
            this interest. I can always remember the feeling of wanting to know just how 
            they worked, why they worked and what else they could do...
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
