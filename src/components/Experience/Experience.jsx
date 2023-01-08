import React from 'react'
import './Experience.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>my skills</h5>
      <h2>my experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            
          <article className='experience__details'>
               <BsFillCheckSquareFill className='experience__details-icon'/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsFillCheckSquareFill  className='experience__details-icon'/>
               <div>
                <h4>CSS</h4>
                <small className='text-light'>Experience</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsFillCheckSquareFill  className='experience__details-icon'/>
               <div>
               <h4>JAVASCRIPT</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsFillCheckSquareFill  className='experience__details-icon'/>
               <div>
               <h4>REACTJS</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsFillCheckSquareFill  className='experience__details-icon'/>
               <div>
               <h4>GIT</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsFillCheckSquareFill  className='experience__details-icon'/>
               <div>
               <h4>GITHUB</h4>
               <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience
