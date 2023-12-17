import React, { useEffect, useState } from 'react'
import './slidecontainer.css'
function SlideItems({data}) {
  const [classname,setClassname] = useState('')
    useEffect(()=>{
      setClassname('slideitem')
      setTimeout(()=>{
        setClassname('')
      },3000)
    },[data])
  return (
    
    <div className={classname}>
      <div className='relative w-full'>
      <img className='object-cover w-full' src={data.picture} alt="" />
        <div className='absolute top-0 left-0 m-40 w-700 overflow-hidden'>
          <h1 className='text-6xl font-bold text-white pb-8 anime-h w-700'>{data.title}</h1>
          <p className='text-xl font-bold text-white pb-10 w-700 anime-h-1'>{data.desc}</p>
          <div>
            <button className='text-xl font-bold bg-yellow-400 py-4 px-8 rounded-lg mr-6 anime-v' >Read More</button>
            <button className='text-xl font-bold bg-yellow-400 py-4 px-8 rounded-lg mr-6 anime-v-1'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideItems