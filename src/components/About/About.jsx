import React from 'react'
import './About.css'
import photo2 from '../../assets/photo2.JPG'
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
          <img src={photo2} alt='me'></img>
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
            <small>0-1 years</small>
          </article>

          <article className='about__card'>
           <AiFillFolder className='about__icon'/>
            <h5>projects</h5>
            <small>10+</small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quisquam 
          sed fugit, natus vitae tenetur quas cupiditate veritatis rerum aspernatur, nobis ad quod. Aut blanditiis quia iure
          , in recusandae accusamus?
          </p>
        <a href='#contacts' className='btn btn-primary'>Lets talk</a>
      </div>
    </div>   
    </section>
  )
}

export default About
