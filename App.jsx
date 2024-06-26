import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenets/Navbar'
import Hero from './Componenets/Hero'
import OurClient from './Componenets/OurClient'
import ManageCom from './Componenets/ManageCom'
import Middle from './Componenets/Middle'
import Helping from './Componenets/Helping'
import Customers from './Componenets/Customers'
import Caring from './Componenets/Caring'
import Demo from './Componenets/Demo'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <OurClient/>
      <ManageCom/>
      <Middle/>
      <Helping/>
      <Middle/>
      <Customers/>
      <Caring/>
      <Demo/>
    </>
  )
}

export default App
