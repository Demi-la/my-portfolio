import React from 'react'
import './Header.css'
import CTA from './CTA'
import photo1 from '../../assets/photo2.JPG'
import Socials from './Socials'
const Header = () => {
  return (
    <header>
       <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Adebiyi Oluwaseun</h1>
        <h5 className='text-light'>Front-end Developer</h5>
        <CTA />
        <Socials />
        <div className='photos'>
          <img src={photo1} alt='me'/>
         <a href='#contact' className='scroll__down'>Scroll Down</a>
         
        </div>
       </div>
    </header>
  )
}

export default Header
