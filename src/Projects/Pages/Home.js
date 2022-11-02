import React from 'react'
import pic from "../Images/slider1.jpg"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import {FaWhatsapp, FaSkype, FaLinkedinIn, FaPhoneAlt, FaRegEnvelopeOpen} from "react-icons/fa"
import "../Styles/Home.css"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id=''>
          <img src={pic} className="image" alt='' />
          <div className='main__text'>
            <Fade left>
            <h2 className='text'>I'm<span className='text-red-500'> Muhammad</span> Nasir</h2>
            </Fade>
            <Fade right>
            <p className='text1'>Worked in<span className='text-red-500'> Flutter</span></p>
            </Fade>
          </div>

          <div className='icons'>
            <Bounce>
            <li>
              <a href='https://whatsapp.com/+923451184105'>
            <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href='+923451184105'>
            <FaPhoneAlt />
              </a>
            </li>
            <li>
              <a href='nasiruetian.pk@gmail.com'>
            <FaRegEnvelopeOpen />
              </a>
            </li>
            <li>
              <a href='https://join.skype.com/invite/F31gE311XpTj'>
            <FaSkype />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/muhammad-nasir-970926177'>
            <FaLinkedinIn />
              </a>
            </li>
            </Bounce>
          </div>

          <div>
            <Fade right>
            <button className='button__hire'><Link spy={true} to='contacts'>HIRE ME</Link></button>
            </Fade>
          </div>
    </div>
  )
}

export default Home