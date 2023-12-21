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
import Member from './Member'
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
      <Member />
      <TestimonialSlider />
      <Test />
      <Footer />
    </>
  )
}

export default App
