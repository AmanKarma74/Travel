import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import '../styles/login.scss'

function Login() {

  const [msg, setMsg] = useState('');


//    Old one which was not working
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     const formData = new URLSearchParams();
//     formData.append('value', event.target[0].value);

//     const response = await fetch('http://localhost:3000/api/v1/users/login/', {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       method: 'POST',
//       body: formData.toString(),
//     });
//     const data = await response.json();
//     setMsg(data.msg);
//     console.log(data)
//   };

// const [name, setName] = useState("")
// const [password, setPassword] = useState("")



  const onSubmitHandler = async (event) => {
    event.preventDefault();
  
    // Collect data from the state
    const formData = new URLSearchParams();
    formData.append('username', name);
    formData.append('password', password);
  
    try {
      const response = await fetch('http://localhost:3000/api/v1/users/login/', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body: formData.toString(),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setMsg(data.msg);
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setMsg('There was a problem with the login request.');
    }
  };
  

const [name, setName] = useState("")
const [password, setPassword] = useState("")

  return (
    <div className="loginContainer loginFormMain">
    <div className="loginHeading">
      <h2>logo.</h2>
      <p className="loginHeader">LogIn to see <br/> more</p>

      <form className='loginForm' onSubmit={onSubmitHandler}>
        <input value={name} onChange={(e) => setName(e.target.value)} name="username" type="text" placeholder="username" className="detail" /><br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" className="detail" />
        <input type="submit" className="btn int" id="signupbtn" value="Log In" />
      </form>

      <footer>
        <p>
          By continuing, you agree to Trove's
          <b>Terms of Service, Privacy policy.</b>
        </p>
        <hr />
        <Link to='/register' id="logintext">Not on Trove yet? Signup</Link>
        
      </footer>
    </div>
  </div>
  )
}

export default Login