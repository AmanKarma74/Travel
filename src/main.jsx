import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Packages from './pages/Packages.jsx'
import Memories from './pages/Memories.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Admin from './pages/Admin.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App />}>

      <Route path='' element={<Home />} />
      <Route path='packages' element={<Packages />} />
      <Route path='memories' element={<Memories />} />
      <Route path='admin' element={<Admin />} />

    </Route>

    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />


</>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
