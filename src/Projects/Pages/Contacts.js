import React, { useRef } from 'react'
import "../Styles/Contacts.css"
import { SocialIcon } from 'react-social-icons';
import Bounce from "react-reveal/Bounce"
import Fade from "react-reveal/Fade"
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FaSkype } from "react-icons/fa"

const Contacts = () => {
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Message, setMessage] = useState();

    const [done , setDone] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kj8einb', 'template_6fvf2c6', form.current, 'yAzxC3-DjbCtoArTI')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

        setFirstName("");
        setLastName("");
        setMessage("");
  
    };

  return (
    <div id='contacts' className='flex flex-wrap justify-center gap-10'>
        <Fade top>
        <div className='first__contact'>
            <div className='pt-10 pl-7 '>
                <p className='text-2xl font-medium'>Call:</p>
                <p className='pl-4 pt-3 text-lg'>+923451184105</p>
            </div>
            <div className='pt-10 pl-7 '>
                <p className='text-2xl font-medium'>Email:</p>
                <p className='pl-4 pt-3 text-lg'>nasiruetian.pk@gmail.com</p>
            </div>
    
        </div>
        </Fade>

        <Fade bottom>
        <div className='first__contact mt-10'>
            <div className='pt-10 pl-7 '>
                <p className='text-2xl font-medium'>Social Media </p>
                
                <div className='pt-3 pl-2'>
                <Bounce>
                <SocialIcon  url="https://facebook.com/" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SocialIcon  url="https://twitter.com/" /><br />
                <li className='list-none'>
                    <a href='https://join.skype.com/invite/F31gE311XpTj'>
                <FaSkype className='h-12 w-14 text-blue-600 rounded-full hover:cursor-pointer'/><br />
                    </a>
                </li>
                <SocialIcon  url="https://email.com/nasiruetian.pk@gmail.com" />
                <SocialIcon className=' mt-5' url="https://whatsapp.com/+923451184105" />
                <SocialIcon className='mt-5' url="https://www.linkedin.com/in/muhammad-nasir-970926177" />
                <SocialIcon className='mt-5' url="https://github.com/MuhammadNasir44" />
                </Bounce>
                </div>
            </div>
    
        </div>
        </Fade>

        <Fade right>
        <div className='first__contact'>
            <div>
            <h2 className='flex flex-wrap justify-center mt-6 text-2xl font-serif'>Wants to write something</h2>
            <p className='font-thin pl-10 pt-2'>You can write to me directly.</p>
            </div>

            <div>
                <form ref={form}  onSubmit={sendEmail}>
                    <input className='input' type="text" value={FirstName}  name="user_name"  placeholder='Your Name' required/>
                    <input className='input' type="text" value={LastName} name="user_email" placeholder='Your Email' required/>
                    <textarea placeholder='Description' value={Message} name="message"  rows="4" cols="50" className='area' required/>
                    <input type="submit" value="Send Message" className='form__button' />
                    <div className='send__message'>
                    <span>{done && 'Thanks for Contacting me...'}</span>
                    </div>
                </form>
            </div>
        </div>
    </Fade>
    </div>
  )
}

export default Contacts