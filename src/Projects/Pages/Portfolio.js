import React, {useState} from 'react'
import Cards from '../Components/Cards'
import { data } from '../Config/Data'
import Fade from "react-reveal/Fade"
import "../Styles/Portfolio.css"
import img from "../Images/Portfolio.png"
import {useNavigate} from "react-router-dom"
import Details from '../Components/Details'

const Portfolio = () => {
  {/*Show Projects Details Page Work*/}
  const [modal, setModal] = useState(false);
  const navigate= useNavigate()


const toggleModal = () => {
  setModal(!modal);
};

if(modal) {
  document.body.classList.add('active-modal')
} else {
  document.body.classList.remove('active-modal')
}

  return (
    <div id='portfolio'>
      <div className='main__portfolio'>
          <div className='main__second'>
            <h2 className='main__head'>Projects</h2>
            <p className='main__parag'>As a Software House that designs and develops website, mobile apps, and UI/UX design, we have been trusted by our clients from all around the world.</p>
          </div>
        
             <div className='image__div'>
              <Fade top>
                <img src={img} alt='' />
              </Fade>
             </div>
      </div>
      <Fade bottom>
      <h2 className='flex flex-wrap justify-center mt-16 font-bold text-4xl text-blue-900'>Our Projects</h2>
      <p className='flex flex-wrap justify-center mt-2 font-semibold text-lg text-gray-400'>We are ready to scale up your business with our great work result.</p>
      </Fade>
      <br />
      <br />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <Details />
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

      <div onClick={toggleModal} className='flex flex-wrap gap-14 justify-center mt-5'>
      {data.map((it)=>{
        return <div onClick={()=>navigate("/Details",{state:it})}  className='main__card'>
          <Cards ImgSrc={it.img} Projects={it.Projects} Name={it.Name}/>
        </div>
      })}
      </div>
      <br />
    </div>
  )
}

export default Portfolio