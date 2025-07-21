import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignUp from './Components/Signup'
import { useEffect } from 'react'
import Homepage from './Components/Homepage'
import{Route,Routes} from 'react-router-dom'
import Title from './Components/Title'
import NavBar from './Components/Navbar'
import About from './Components/About'
import Planner from './Components/Planner'
import Login from './Components/Login'

function App() {
 
  return (
    <>
    <Title />
    <NavBar />
   <Routes>
    <Route path="/" element ={<Homepage />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/about" element={<About />} />
    <Route path="/planner" element={<Planner />}/>
    <Route path="/login" element={<Login />}/>
   </Routes>

    </>
  )
}

export default App
