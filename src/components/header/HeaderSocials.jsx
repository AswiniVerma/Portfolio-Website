import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/aswini-verma-376a71132/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/AswiniVerma" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/aswini__verma/?hl=en" target="_blank"><BsInstagram/></a>
      <a href="https://www.youtube.com/channel/UCbLU2vdWfXUJ9rD0WzF-srQ" target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials
