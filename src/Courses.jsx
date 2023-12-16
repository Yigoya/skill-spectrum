import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CourseItem from './components/CourseItem';
function Courses() {
  const [count, setCount] = useState(0)
  console.log('first')
  const data = [
    {
      title:'learn basic react from start for beginner',
      rating:20,
      instractor:'Mark anthem',
      poeple:30,
      like:10,
      img:'cu-3.jpg',
      profile:'https://thepixelcurve.com/html/edubin/images/course/teacher/t-4.jpg'
    },
    {
      title:'learn basic flutter from start for beginner',
      rating:20,
      instractor:'Mark anthem',
      poeple:30,
      like:10,
      img:'cu-4.jpg',
      profile:'https://thepixelcurve.com/html/edubin/images/course/teacher/t-2.jpg'
    },
    {
      title:'learn basic javascript from start for beginner',
      rating:20,
      instractor:'Mark anthem',
      poeple:30,
      like:10,
      img:'cu-5.jpg',
      profile:'https://thepixelcurve.com/html/edubin/images/course/teacher/t-4.jpg'
    },
    {
      title:'learn basic python from start for beginner',
      rating:20,
      instractor:'Mark anthem',
      poeple:30,
      like:10,
      img:'cu-4.jpg',
      profile:'https://thepixelcurve.com/html/edubin/images/course/teacher/t-2.jpg'
    },
  ]
  return (
    <div className='bg-gray-200 flex flex-col items-center pt-12'>
      <div className=' flex flex-col '>
        <p className='font-bold w-full'>Our course</p>
        <hr className='border-yellow-500 w-8 my-2' />
        <div className='flex flex-row justify-between min-width max-width  md:min-w-30 mb-12'>
          <h1 className='text-5xl font-bold'>Featured courses</h1>
          <div>
          <button className='rounded-md border-2 border-gray-500 p-1.5 hover:bg-yellow-300 hover:p-2 duration-300 transition-all mr-4 '  onClick={()=>setCount(count<0 ? data.length+1: count-1)} ><KeyboardArrowLeftIcon style={{ color: 'grey'}}/></button>
            <button className='rounded-md border-2 border-gray-500 p-1.5 hover:bg-yellow-300 hover:p-2 duration-300 transition-all mr-4 ' onClick={()=>setCount(count<data.length-1 ? count+1:0)} ><KeyboardArrowRightIcon style={{ color: 'grey'}}/></button>
          </div>
        </div>
      </div>
      <CourseItem data={data} start={count} setStart={setCount}/>
    </div>
  )
}

export default Courses