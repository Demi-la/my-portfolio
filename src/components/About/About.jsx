import React from 'react'
import './About.css'
import AboutPic from '../../assets/AboutPic.JPG'
import{FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={AboutPic} alt='me'></img>
        </div>
      </div>
      
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
           <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>0-1 years</small>
          </article>

          <article className='about__card'>
           <FiUsers className='about__icon'/>
            <h5>Client</h5>
            <small>1</small>
          </article>

          <article className='about__card'>
           <AiFillFolder className='about__icon'/>
            <h5>projects</h5>
            <small>10+</small>
          </article>
        </div>
        <p className='page'>
        Hello, I am passionate frontend developer experienced in building web applications using HTML, CSS, and JavaScript. I specialize
         in frameworks like ReactJS and Next.js, creating dynamic and performant user interfaces. With expertise in frontend libraries like 
         Chakra UI and Styled Components, I focus on creating visually appealing designs. I enjoy collaborating with teams to deliver
          outstanding digital experiences. Let's work together to create impactful web applications!
        </p>
        <a href='#contacts' className='btn btn-primary'>Lets talk</a>
      </div>
    </div>   
    </section>
  )
}

export default About
