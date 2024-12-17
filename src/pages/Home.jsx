import React, { useEffect, useState } from 'react'
import '../styles/home.scss'

//import icons
import {GrLocation} from 'react-icons/gr'
import {HiSearch} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

//fade up animation
import Aos from 'aos'
import 'aos/dist/aos.css'
import Card from '../components/Card'

// assets
import {img, img2, img3, img4, img5, img6, video} from '../assets/index'

function Home() {

  useEffect(() => {
    Aos.init({duration:1500})
  },[])

  const [price, setPrice] = useState("30000")
  const [date, setDate] = useState(Date.now())
  const [location, setLocation] = useState("")
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
  ]

  return (
<>
    <section className="home">

<div className="overlay"></div>

<video src={video} muted autoPlay loop typeof='video/mp4'></video>

<div className="homeContent container">
  <div className="textDiv">

    <span data-aos="fade-up" className="smallText">
      Our Packages
    </span>

    <h1 data-aos="fade-up" className="homeTitle">
      Search Your Holiday
    </h1>

  </div>

  <div data-aos="fade-up" className="cardDiv grid">
      <div className="destinationInput">
        <label htmlFor="city">
          Search your destination:
        </label>
        <div className="input flex">
          <input type="text" placeholder='Enter name here...' value={location} onChange={(e) => setLocation(e.target.value)} />
          <GrLocation className='icon' />
        </div>
      </div>

      <div className="dateInput">
        <label htmlFor="date">
          Select your date:
        </label>
        <div className="input flex">
          <input className='dateInput' type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
      </div>

      <div className="priceInput">
        <div className="label_total flex">
          <label htmlFor="price">
            Max price:
          </label>
          <h3 className="total">₹{price}</h3>
        </div>
        <div className="input flex">
          <input type="range" max='200000' min='30000' onChange={(e) => setPrice(e.target.value)} />
        </div>
      </div>

      <div className="searchOptions flex">
        <HiSearch className='icon' />
        <span>SEARCH DESTINATION</span>
      </div>

  </div>

  <div data-aos="fade-up" className="homeFooterIcons flex">
    <div className="rightIcons">
      <FiFacebook className='icon' />
      <AiOutlineInstagram className='icon' />
      <SiTripadvisor className='icon' />
    </div>

    <div className="leftIcons">
      <BsListTask className='icon' />
      <TbApps className='icon' />

    </div>
  </div>

</div>

    </section>

    <section className="main container section">

    <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
    </div>

    <Card Data={Data} />
    </section>
</>
  )
}

export default Home