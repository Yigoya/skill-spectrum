import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Facilities from './Facilities'
import Landing from './Landing'
import Courses from './Courses'
import TestimonialSlider from './TestimonialSlider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Landing />
      <AboutUs />
      <Courses />
      <Facilities />
      <TestimonialSlider />
      <Footer />
    </>
  )
}

export default App
