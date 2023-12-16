import React from 'react'
import Button from './Components/Button'
import Event from './Components/Event'

function AboutUs() {
  return (
    <>
        <div className="flex flex-col md:flex-row justify-between items-center px-32 py-16 font-family: Roboto,  'Helvetica Neue', system-ui, Arial, sans-serif ">
            <div className="flex-1 md:mr-20 md:pr-20">
                <div>
                    <p className='font-bold'>About Us</p>
                    <hr className='border-yellow-500 w-8 border-2 mt-2' />
                    <h1 className='text-4xl font-bold my-6'>Welcome to Skill Spectrum</h1>
                </div>
                <p className='mt-8'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores officia vitae eaque numquam 
                    rem temporibus dolore est fuga eius suscipit quaerat quas harum culpa ratione reprehenderit, quasi recusandae inventore. Ipsum?
                </p>
                <p className='my-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam earum veniam neque, eligendi eos 
                    laboriosam cupiditate ullam sit voluptate et velit, ex est perspiciatis. Ex ratione et quaerat aliquam laudantium.
                </p>
                <Button />
            </div>
            <div className='flex-1 px-16 pt-8 md:pt-4 pb-12 my-8 opacity-7 sm:w-full shadow-[0_2px_4px_rgba(81,107,152,0.3)]'>
                <div>
                    <h1 className='text-4xl font-bold mb-8'>Events</h1>
                    <Event 
                        noHR
                        Date={ "1 December 2023"}
                        Time={"10:00 AM - 3:00 PM"}
                        Location={"Rc Auditorim"}
                    />
                    <Event 
                        Date={ "2 December 2023"}
                        Time={"10:00 AM - 3:00 PM"}
                        Location={"Rc Auditorim"}
                    />
                    <Event 
                        Date={"3 December 2023"}
                        Time={"10:00 AM - 3:00 PM"}
                        Location={"Rc Auditorim"}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs