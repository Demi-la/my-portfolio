import React from 'react'
import './Portfolio.css'
import image1 from '../../assets/notification.png'
import image2 from '../../assets/pricing.png'
import market from '../../assets/Screenshot (52).png'
import image3 from '../../assets/dogs.png'
import image4 from '../../assets/advice.png'
import image5 from '../../assets/loop.jpg'
import image6 from '../../assets/knife.png'
import image7 from '../../assets/order.png'



const data =[
  {
   id: 1,
   image: image1,
   title: 'Notification App',
   github: 'https://github.com/Demi-la/notification',
   demo: 'https://notification-git-master-demi-la.vercel.app/'
  },
{
  id: 2,
  image: image2,
  title: 'Pricing App',
  github: 'https://github.com/Demi-la/Pricing-app',
  demo: 'https://pricing-app-git-master-demi-la.vercel.app/'
 },
 {
  id: 3,
  image: market,
  title: 'Market Express',
  github: 'https://github.com/Demi-la/Market-express',
  demo: 'https://market-express-demi-la.vercel.app',
 },
 
   {
    id: 4,
    image: image3,
    title: 'Dog Breed',
    github: 'https://github.com/Demi-la/Dog-breed',
    demo: 'https://dog-breed-git-master-demi-la.vercel.app/'
   },
   {
    id: 5,
    image: image4,
    title: 'Advice Generator',
    github: 'https://github.com/Demi-la/Advice-Generator',
    demo: 'https://advice-generator-rose-eight.vercel.app/'
   },
   {
    id: 6,
    image: image5,
    title: 'Loopstudio',
    github:  'https://github.com/Demi-la/loopstudio-landing-page',
    demo: 'http://github.com'
   },
   {
    id: 7,
    image: image6,
    title: 'Knife Case',
    github: 'https://github.com/Demi-la/knife-case',
    demo: 'http://github.com',
   },
   {
    id: 8,
    image: image7,
    title: 'Order Summary',
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
               <a href={demo} className='btn btn-primary' target='_blank' rel=" noreferrer">live demo</a>
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
