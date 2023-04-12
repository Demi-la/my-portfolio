import React from 'react'
import './Portfolio.css'
import image1 from '../../assets/Screenshot.png'
import image2 from '../../assets/knife.png'
import image3 from '../../assets/dogs.png'
import image4 from '../../assets/loop.jpg'
import image5 from '../../assets/pricing.png'
import image6 from '../../assets/order.png'

const data =[
  {
   id: 1,
   image: image1,
   title: 'first project',
   github: 'https://github.com/Demi-la/notification',
   demo: 'http://github.com'
  },
  {
    id: 2,
    image: image2,
    title: 'second project',
    github: 'https://github.com/Demi-la/knife-case',
    demo: 'http://github.com'
   },
   {
    id: 3,
    image: image3,
    title: 'third project',
    github: 'https://github.com/Demi-la/Dog-breed',
    demo: 'http://github.com'
   },
   {
    id: 4,
    image: image4,
    title: 'fourth project',
    github: 'https://github.com/Demi-la/loopstudio-landing-page',
    demo: 'http://github.com'
   },
   {
    id: 5,
    image: image5,
    title: 'fifth project',
    github: 'https://github.com/Demi-la/Pricing-app',
    demo: 'https://pricing-app-git-master-demi-la.vercel.app/'
   },
   {
    id: 6,
    image: image6,
    title: 'sixth project',
    github: 'https://github.com/Demi-la/order-summary',
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
