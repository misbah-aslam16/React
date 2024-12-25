import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Navbar/navbar'
import Hero from './components/Herosection/hero'
import Menu from './components/Menu/menu'
import Dishsec from './components/Dishsection/dishsec'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Menu/>
    <Dishsec/>
    </>
  )
}

export default App
