import React from 'react'
import './Portfolio.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpeg'

const data =[
  {
   id: 1,
   image: image1,
   title: 'first project',
   github: 'http://github.com',
   demo: 'http://github.com'
  },
  {
    id: 2,
    image: image2,
    title: 'second project',
    github: 'http://github.com',
    demo: 'http://github.com'
   },
   {
    id: 3,
    image: image3,
    title: 'third project',
    github: 'http://github.com',
    demo: 'http://github.com'
   },
   {
    id: 4,
    image: image4,
    title: 'fourth project',
    github: 'http://github.com',
    demo: 'http://github.com'
   },
   {
    id: 5,
    image: image5,
    title: 'fifth project',
    github: 'http://github.com',
    demo: 'http://github.com'
   },
   {
    id: 6,
    image: image6,
    title: 'sixth project',
    github: 'http://github.com',
    demo: 'http://github.com'
   }
]
const Portfolio = () => {
  return (
   
      <section id='portfolio'>
        <h5>my recent work</h5>
        <h2>Portfolio</h2>
        
        <div className='container portfolio__container'>
         {
          data.map(({id, image, tittle, github, demo }) => {
            return(
              <article  key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
              <img src={image} alt={tittle}></img>
              </div>
               <h3>{tittle} </h3>
               <div className='portfolio__item-cta'>
               <a href={github} className='btn' target='_blank'>github</a>
               <a href={demo} className='btn btn-primary' target='_blank'>live demo</a>
               </div>
             </article>
 
            )
          })
         }

         
         






          
        </div>
      </section> 
  )
}

export default Portfolio
