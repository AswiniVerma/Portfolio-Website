import React from 'react'
import CTA from './CTA'
import Pic from '../../assets/pic3.png'
import HeaderSocials from './HeaderSocials'
import './header.css'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello I am 
        </h5>
        <h1>
          Aswini Verma
        </h1>
        <h5 className='text-light'>
          FullStack Developer
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Pic} alt="ME" />
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
