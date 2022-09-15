import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Have Done</h5>
      <h2>Experiences</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Capgemini- Fullstack Java Developer</h3>
            <h5>April,2022 - June,2022</h5>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learned concepts of Core JAVA, JAVA 8, JavaScript, NodeJS, OOPS, SQL and MongoDB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learned Frontend Technologies - ReactJS along with HTML, CSS and Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learned Backend Technologies – Spring Boot, MVC along with Hibernate and PostgreSQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed an Application Online Movie Ticket Booking using Spring MVC</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed an Application Online Doctor Booking using ReactJS </p>
            </li>
            
          </ul>
        </article>
        {/* end of capgemini */}
        <article className="service">
          <div className="service__head">
            <h3>Exposys Data Labs -FullStack Developer</h3>
            <h5>April, 2021 - May, 2021</h5>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learned about DDoS (Distributed Denial of Service) Attack which is a cybercrime</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learned Basic Concepts about Computer Networks, Botnet and how to create a botnet in Kali Linux</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed a Python Script which could change the IP Address of the victim system if a DDoS is detected</p>
            </li>
           
           
          </ul>
        </article>
         {/* end of exposys */}
      {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
           
          </ul>
        </article> */}
         {/* end of content creation */}

      </div>
    </section>
  )
}

export default Services
