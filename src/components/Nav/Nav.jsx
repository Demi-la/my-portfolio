import React from 'react'
import './Nav.css'
import{FaHome} from 'react-icons/fa'
import{AiOutlineUser} from 'react-icons/ai'
import {AiFillAccountBook} from 'react-icons/ai'
import{RiServiceLine} from 'react-icons/ri'
import{MdOutlineContactSupport} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
  <nav>
    <a href='a' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
    <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href='#experience'  onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><AiFillAccountBook/></a>
    <a href='#services'  onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
    <a href='#contacts'  onClick={() => setActiveNav('#contacts')}  className={activeNav === '#contacts' ? 'active' : ''}><MdOutlineContactSupport/></a>
  </nav>
  )
}

export default Nav
