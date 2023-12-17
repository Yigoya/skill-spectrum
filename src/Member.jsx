import React from 'react'
import Button from './Components/Button'
import Profile from './components/Profile'



function Member() {

  const data= [
    {
      name:'Mark Alen',
      pro:'Vice Chancellor',
      pic:'https://thepixelcurve.com/html/edubin/images/teachers/t-1.jpg'
    },
    {
      name:'David card',
      pro:'Pro Chancellor',
      pic:'https://thepixelcurve.com/html/edubin/images/teachers/t-2.jpg'
    },
    {
      name:'Rebeka Alig',
      pro:'Vice Chancellor',
      pic:'https://thepixelcurve.com/html/edubin/images/teachers/t-3.jpg'
    },
    {
      name:'Hanna Bein',
      pro:'Aerobic head',
      pic:'https://thepixelcurve.com/html/edubin/images/teachers/t-4.jpg'
    },

  ]

  return (
    <div className='py-16 mx-96'>
       <div className='w-700'>
          <p className='font-bold w-full'>Team</p>
          <hr className='border-yellow-500 w-8 my-2' />
          <h1 className='text-5xl font-bold mb-8 mt-6'>Our Members</h1>
          <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.
            auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris</p>
          <Button/>
       </div>
       <div className='flex flex-row gap-8 mt-10 overflow-scroll scrollbar-hide'>
          {data.map((item,index)=>(
            <Profile key={index} data={item}/>
          ))}
       </div>
    </div>
  )
}

export default Member