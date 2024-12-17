import React, { useEffect } from 'react'
import Card from '../components/Card'
import '../styles/packages.scss'

// assets
import {img, img2, img3, img4, img5, img6, img7, img8, img9, video} from '../assets/index'

const Data = [
    {
      id:1,
      imgSrc: img,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '₹700,000',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities.'
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Santorini',
      location: 'Greece',
      grade: 'ROMANTIC ESCAPE',
      fees: '₹500,000',
      description: 'Famous for its stunning sunsets and pristine white buildings overlooking the Aegean Sea, Santorini is a must-visit destination for couples and honeymooners.'
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Kyoto',
      location: 'Japan',
      grade: 'CULTURAL IMMERSION',
      fees: '₹600,000',
      description: 'With its breathtaking temples, traditional tea houses, and stunning cherry blossoms, Kyoto offers a serene escape into Japanese culture and history.'
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'ADVENTURE DISCOVERY',
      fees: '₹800,000',
      description: 'Hidden high in the Andes Mountains, Machu Picchu is an ancient Incan citadel surrounded by breathtaking natural beauty, making it a bucket-list destination for adventurers.'
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: 'Paris',
      location: 'France',
      grade: 'CULTURAL ROMANCE',
      fees: '₹650,000',
      description: 'The City of Love, Paris is renowned for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral, offering visitors a perfect blend of culture and romance.'
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: 'Maui',
      location: 'Hawaii, USA',
      grade: 'TROPICAL PARADISE',
      fees: '₹750,000',
      description: 'Maui, with its stunning beaches, lush rainforests, and majestic waterfalls, offers visitors a true tropical paradise experience.'
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: 'Amalfi Coast',
      location: 'Italy',
      grade: 'COASTAL RETREAT',
      fees: '₹850,000',
      description: 'Stretching along the southern coast of Italy, the Amalfi Coast boasts charming cliffside villages, crystal-clear waters, and delectable Italian cuisine.'
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: 'Rio de Janeiro',
      location: 'Brazil',
      grade: 'VIBRANT CULTURE',
      fees: '₹600,000',
      description: 'Known for its lively atmosphere, stunning beaches, and iconic landmarks like Christ the Redeemer, Rio de Janeiro offers visitors a vibrant cultural experience.'
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: 'Queenstown',
      location: 'New Zealand',
      grade: 'ADVENTURE CAPITAL',
      fees: '₹650,000',
      description: 'Surrounded by majestic mountains and crystal-clear lakes, Queenstown is a mecca for adventure enthusiasts, offering activities like bungee jumping, skiing, and skydiving.'
    }
  ]

//fade up animation
import Aos from 'aos'
import 'aos/dist/aos.css'

function Packages() {

  useEffect(() => {
    Aos.init({duration:1500})
  },[])


  return (
    <section className="main container section">

    <div className="secTitle">
        <h3 className="title">
          Our Packages
        </h3>
        <input className='packageSearch' type="text" placeholder='search..' />
    </div>

    <Card Data={Data} />
    </section>
  )
}

export default Packages