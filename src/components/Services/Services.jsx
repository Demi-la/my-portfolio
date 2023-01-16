import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
     <h5>what i offer</h5>
     <h2>Services</h2>

     <div className='container services__container'>
      <article className='services'>
        <div className='service__head'>
          <h3>WEB DEVELOPMENT</h3>
        </div>
        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Website development: I can develop and design responsive and visually
               appealing websites that work well on a variety of devices  </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Website maintenance: I can help clients keep their websites up-to-date 
              with the latest features, security updates, and design changes. </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Landing page development: I can create simple, 
              effective landing pages for digital marketing campaigns. </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur </p>
          </li>
        </ul>
      </article>
     </div>
      </section>
  )
}

export default Services
