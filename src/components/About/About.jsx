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
        <p className='page'>
        I am a recent graduate of a frontend development bootcamp, where I acquired hands-on experience in building web applications and developed skills in modern frontend technologies such as HTML, CSS, JavaScript, and popular frontend frameworks such as reactjs.
         My education in software engineering and passion for web development led me to transition into frontend development. I am excited to bring my understanding of software development concepts, problem-solving abilities, and eagerness to learn to my new career. I am now able to create visually appealing and responsive user interfaces, design with accessibility in mind, 
        work with frontend libraries and framework and use modern tools for development workflow.
         I am eager to apply my skills in real-world projects and continue learning and growing as a frontend developer.
        </p>
        <a href='#contacts' className='btn btn-primary'>Lets talk</a>
      </div>
    </div>   
    </section>
  )
}

export default About
