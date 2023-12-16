import React from 'react'
import image1 from '../assets/cu-3.jpg'
import { Star } from '@mui/icons-material';
function CourseItem({data,start,setStart}) {
    const image = React.lazy(() => import('../assets/cu-3.jpg'));
    if(start+3>data.length || start<0){
        setStart(0)
       
    }
    data = data.slice(start,start+3);
    console.log(start,start+2)
  return (
    <div className='flex flex-row gap-8 justify-center'>
        {
            data.map((item,index)=>(
            <div key={index} className='bg-white rounded-lg w-96'>
                    <div className='relative'>
                        <img className='pb-8 w-full rounded-lg' src={image1} alt="" />
                        <p className='absolute bottom-0 right-8 font-bold bg-yellow-200 rounded-full  px-4 py-5'>Free</p>
                    </div>
            
                <div className='px-6'>
                <Star style={{color:'yellow'}}/>
                <Star style={{color:'yellow'}}/>
                <Star style={{color:'yellow'}}/>
                <Star style={{color:'yellow'}}/>
                <Star style={{color:'yellow'}}/>
                (20 Reviews)
                <h1 className='text-3xl font-bold pt-4 pb-6'>{item.title}</h1>
                <hr />
                <div className='py-8 flex flex-row items-center'>
                    <img className='w-10 rounded-full' src={item.profile} alt="" />
                    <p className='pl-4'>{item.instractor}</p>
                </div>
            </div>
        </div>
            ))
        }
    </div>
  )
}

export default CourseItem