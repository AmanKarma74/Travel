import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import '../styles/login.scss'

function Register() {

const handleLogin = (e) => {
    e.preventDefault();
}

const [name, setName] = useState("")
const [username, setUsername] = useState("")
const [number, setNumber] = useState()
const [password, setPassword] = useState("")

  return (
    <div className="loginContainer loginFormMain">
    <div className="loginHeading">
      <h2>logo.</h2>
      <p className="loginHeader">Sign Up to see <br/> more</p>

      <form className='loginForm' onSubmit={handleLogin}>
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="full name" className="detail" /><br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="username" className="detail" /><br />
        <input value={number} onChange={(e) => setNumber(e.target.value)} name="number" type="tel" inputMode='numeric' placeholder="number" className="detail" /><br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" className="detail" />
        <input type="submit" className="btn int" id="signupbtn" value="Sign Up" />
      </form>

      <footer>
        <p>
          By continuing, you agree to Trove's
          <b>Terms of Service, Privacy policy.</b>
        </p>
        <hr />
        <Link to='/login' id="logintext">Already on Trove? Login</Link>
        
      </footer>
    </div>
  </div>
  )
}

export default Register