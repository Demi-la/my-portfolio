import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer__logo'>DEMILADE</a>

      <ul className='links'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contacts'>Contact</a></li>
      </ul>

      
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/adebiyi-oluwaseun-demilade-1b823a251/'><AiFillLinkedin/></a>
    
        <a href='https://twitter.com/__Demmie__'><AiOutlineTwitter /></a>
      </div>
      <div className='footer__copywrite'>
        <small>&copy; Demilade portfolio, All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
