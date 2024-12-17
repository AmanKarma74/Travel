import React, {useEffect} from 'react'
import '../styles/memories.scss'

// assets
import {trip1, trip2, trip3} from '../assets/index'

//fade up animation
import Aos from 'aos'
import 'aos/dist/aos.css'

function Memories() {

  useEffect(() => {
    Aos.init({duration:1500})
  },[])

  return (
    
    <div className='mainMemories'>
        <div className="secTitle heading">
            <h3 className="title">
            Memories
            </h3>
        </div>
        <div className="card-container">
            <div data-aos="fade-up" className="image-card"> <img className="image" src={trip1} alt='Image' / > </div> 
            <div data-aos="fade-up" className="image-card"> <img className="image" src={trip2} alt='Image' / > </div> 
            <div data-aos="fade-up" className="image-card"> <img className="image" src={trip3} alt='Image' / > </div> 
        </div>
        <h1>GROUP 2020</h1>
    </div>
  )
}

export default Memories;