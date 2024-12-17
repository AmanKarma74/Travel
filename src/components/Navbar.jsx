import React, { useState } from 'react'
import '../styles/navbar.scss'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [active, setActive] = useState('navBar')

    //function to toggle Navbar
    const showNavbar = () => {
        setActive('navBar activeNavbar')
    }
    const removeNavbar = () => {
        setActive('navBar')
    }
  return (
    <section className='navBarSection'>
        <header className='header flex'>

            <div className="logoDiv">
                <a href="#" className='logo'> 
                <h1><MdOutlineTravelExplore className='icon' /> Travel. </h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <NavLink to='/' className="navLink">Home</NavLink>
                    </li>

                    <li className="navItem">
                        <NavLink to='/packages'  className="navLink">Packages</NavLink>
                    </li>

                    <li className="navItem">
                        <NavLink to='/memories'  className="navLink">Memories</NavLink>
                    </li>

                    <button className='btn'>
                        <NavLink >Enquiry</NavLink>
                    </button>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon' />
                </div>
            </div>

            <div onClick={showNavbar} className="toggleNavbar">
                <TbGridDots className='icon' />
            </div>

        </header>
    </section>
  )
}

export default Navbar