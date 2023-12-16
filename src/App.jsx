import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Landing from './Landing'
import Courses from './Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Landing />
      <AboutUs />
      <Courses />
      <Footer />
    </>
  )
}

export default App
