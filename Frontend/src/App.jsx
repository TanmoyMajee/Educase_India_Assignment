import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingScreen from './pages/LandingScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingScreen />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
