import React from 'react'
import './Header.css'
import CTA from './CTA'
import profile from '../../assets/profile.JPG'
import Socials from './Socials'
const Header = () => {
  return (
    <header>
       <div className='container header__container'>
        <h5 className='text'>Hello I'm</h5>
        <h1 className='text'>Adebiyi Oluwaseun</h1>
        <h5 className='text-light'>Front-end Developer</h5>
        <CTA />
        <Socials />
        <div className='photos'>
          <img src={profile} alt='me'/>
         <a href='#contact' className='scroll__down'>Scroll </a>
         
        </div>
       </div>
    </header>
  )
}

export default Header
