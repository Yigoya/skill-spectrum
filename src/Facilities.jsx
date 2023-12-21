import React from 'react'
import book from "/images/book.png"
import almunai from "/images/almunai.png"
import certificate from "/images/certificate.png"


function Facilities() {
  return (
    <div className="flex flex-col md:flex-row font-family: Roboto,  'Helvetica Neue', system-ui, Arial, sans-serif">
        <div className='flex-1'>
            <img src="https://thepixelcurve.com/html/edubin/images/news/n-1.jpg" alt="" className='w-full' />
        </div>
        <div className='flex-1 dark:bg-gray-900 text-white '>
            <div className='mx-24 my-16'>
                <div className='flex'>
                    <img src={certificate} alt="" />
                    <div className='pl-6'>
                        <h2 className='font-bold'>Certificate</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita 
                        blanditiis, obcaecati eligendi, qui alias tempora placeat </p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <img src={almunai} alt="" />
                    <div className='pl-6'>
                        <h2 className='font-bold'>Almunai</h2>
                        <p>doloremque voluptatibus suscipit tempore impedit ex voluptate provident quasi 
                        beatae hic iusto! Laborum.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <img src={book} alt="" />
                    <div className='pl-6'>
                        <h2 className='font-bold'>Resources</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita 
                        blanditiis, obcaecati eligendi, qui alias tempora placeat</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities