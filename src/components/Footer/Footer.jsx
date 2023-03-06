import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DEMILADE</a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      
      <div className='footer__socials'>
        <a href='https://facebook.com'><AiFillFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><AiOutlineTwitter /></a>
      </div>
      <div className='footer__copywrite'>
        <small>&copy; Demilade portfolio, All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
