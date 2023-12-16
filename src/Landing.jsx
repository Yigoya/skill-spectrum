import React from 'react'
import SlideContainer from './components/SlideContainer'

function Landing() {
  const data = [
    {
      title:"choose the right theme for education",
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. lorem dolor sit amet consectetur ",
      picture:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title:"the right educatio is there",
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. lorem dolor sit amet consectetur ",
      picture:"https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  return (
    <div className='landing'>
      <SlideContainer data={data}/>

    </div>
  )
}

export default Landing