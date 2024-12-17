import React, { useState } from 'react'
import '../styles/card.scss'

// icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { GiAirplaneDeparture } from "react-icons/gi";
import { AiTwotoneDelete } from "react-icons/ai";
import AddData from './AddData';

function Card(props) {
  const {Data} = props;

const [isAdmin, setIsAdmin] = useState(false)

  return(
    <>
    <div className="secContent grid">
        {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
          return(
            <div data-aos="fade-up" key={id} className="singleDestination">

              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                {isAdmin? 
                <button className="btn flex">
                DELETE <AiTwotoneDelete className='icon' />
              </button> :
              <button className="btn flex">
              BOOK <GiAirplaneDeparture className='icon' />
            </button>
                }


              </div>
            </div>
          )
        })}
    </div>

    {isAdmin? <AddData />: null}
    </>
  )
}

export default Card