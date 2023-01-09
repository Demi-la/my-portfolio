import React from 'react';
import './Contacts.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contacts = () => {
  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l262ust', 'template_w1jmn9a', form.current, 'vSnq1YjhSfmHOrQ38')

    e.target.reset()
      
  };
  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
           <article className='contact__option'>
            <AiOutlineMail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adebiyio28@gmail.com</h5>
            <a href='mailto:adebiyio28@gmail.com' target="_blank">send a message</a>
           </article>

           <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messangers </h4>
            <h5>Demilade Oluwaseun</h5>
            <a href='https://m.me/profile.php?id=100088926499611' target="_blank">send a message</a>
           </article>

           <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatSapp</h4>
            {/* <h5>adebiyio28@gmail.com</h5> */}
            <a href='https://api.whatsapp.com/send?phone=+2349039674397' target="_blank">send a message</a>
           </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
      </section>
  )
}

export default Contacts
