import React, { useEffect, useState } from 'react'
import './slidecontainer.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SlideItems from './SlideItems';
function SlideContainer({data}) {
  const [count,setCount] = useState(0)
  setInterval(()=>{
    setCount(count<data.length-1 ? count+1:0)
  },10000)
  console.log(count)
  return (
    <div className='contaner'>
      <div className='slidebtn'>
        <button onClick={()=>setCount(count<data.length-1 ? count+1:0)} className='btn1'><KeyboardArrowLeftIcon style={{ color: 'white'}}/></button>
        <button onClick={()=>setCount(count<=0 ? data.length-1: count-1)} className='btn2'><KeyboardArrowRightIcon style={{ color: 'white'}}/></button>
      </div>
      <SlideItems data={data[count]}/>
    </div>
  )
}

export default SlideContainer