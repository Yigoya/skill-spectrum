import React from 'react'

function OurService() {
    const data = [
        {
          name:'learn basic react from start for beginner',
          img:'https://thepixelcurve.com/html/edubin/images/course/cu-1.jpg',

        },
        {
          name:'learn basic flutter from start for beginner',
          img:'https://thepixelcurve.com/html/edubin/images/course/cu-4.jpg',
        },
        {
          name:'learn basic javascript from start for beginner',
          img:'https://thepixelcurve.com/html/edubin/images/course/cu-3.jpg',

        },
        {
          name:'learn basic python from start for beginner',
          img:'https://thepixelcurve.com/html/edubin/images/course/cu-1.jpg',
        },
        {
          name:'learn basic javascript from start for beginner',
          img:'https://thepixelcurve.com/html/edubin/images/course/cu-3.jpg',

        },
      ]
  return (
    <div className='services px-36 pt-8 '>
        <h1 className='text-5xl font-bold '>Our Service</h1>
        <div className='flex flex-row gap-8 overflow-scroll scrollbar-hide'>
            {data.map((item,index)=>(
                <div className='cursor-pointer min-width pt-8 pb-4 dark:bg-gray-900 flex flex-col items-center rounded-xl'>
                <img className='w-full object-cover' src={item.img} alt="" />
                <p className='text-white font-bold text-xl mt-4'>{item.name}</p>
        </div>
            ))}
        </div>
    </div>
  )
}

export default OurService