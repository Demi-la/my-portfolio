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
            <p>Lorem ipsum dolor, sit amet consectetur </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur </p>
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
