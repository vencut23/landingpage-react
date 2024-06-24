import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenets/Navbar'
import Hero from './Componenets/Hero'
import OurClient from './Componenets/OurClient'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <OurClient/>
    </>
  )
}

export default App
