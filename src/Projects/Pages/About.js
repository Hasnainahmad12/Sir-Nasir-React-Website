import React from 'react'
import "../Styles/About.css"
import nasir from "../Images/me.jpg";
import Fade from "react-reveal/Fade";
import resume from "../Images/resume.pdf"

const About = () => {
  return (
          <div id='about' className='owner__main'>
            <Fade left>
            <div className='owner__message'>
              <h2 className='text-3xl pt-4'>About Me</h2>
            <p className='font-semibold tracking-wider pt-10 p-8'>A dynamic, hands-on, detail-oriented computer engineer with over 1+ years of experience in the industry. Project Management and Data Validation, service delivery,  project life-cycles, data gathering, and code documentation. Solid reputation for diligence regarding project accuracy and enhanced end-user functionality. An exemplary verbal and written communicator who demonstrates professionalism and clearly conveys project parameters to clients and team members.</p><br/>
            <h2 className='owner__heading'>Muhammad Nasir</h2><br/>
           
           <div className='flex flex-wrap gap-5 pt-8'>
            <div>
            <button className="button1">HIRE ME</button>
            </div>
            <div>
            <button className="button2"><a href={resume} >RESUME</a></button>
            </div>
           </div>
          {/* <h2 className='owner__heading'>BS-Information Technology (AUP Peshawar)</h2><br/> */}
           </div>            
            </Fade>

            <div className='left__side'>
              <Fade right>
                <img src={nasir} className='h-[500px] w-[620px]' alt='' />
              </Fade>
            </div>

        </div>
  )
}

export default About