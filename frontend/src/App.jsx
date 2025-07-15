import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignUp from './Components/Signup'
import { useEffect } from 'react'
import Homepage from './Components/Homepage'
import{Route,Routes} from 'react-router-dom'
import Title from './Components/Title'
import NavBar from './Components/Navbar'


function App() {
 
  return (
    <>
    <Title />
    <NavBar />
   <Routes>
    <Route path="/" element ={<Homepage />}/>
    <Route path="/signup" element={<SignUp />}/>
   </Routes>

    </>
  )
}

export default App
