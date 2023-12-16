import React from 'react'

function AboutUs() {
  return (
    <>
        <div className='flex justify-between items-center px-32 py-16'>
            <div className='flex-1 mr-20 pr-20'>
                <div>
                    <p className='font-bold'>About Us</p>
                    <hr className='border-yellow-500 w-8 my-2' />
                    <h1 className='text-4xl font-bold my-6'>Welcome to Skill Spectrum</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores officia vitae eaque numquam 
                    rem temporibus dolore est fuga eius suscipit quaerat quas harum culpa ratione reprehenderit, quasi recusandae inventore. Ipsum?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam earum veniam neque, eligendi eos 
                    laboriosam cupiditate ullam sit voluptate et velit, ex est perspiciatis. Ex ratione et quaerat aliquam laudantium.
                </p>
            </div>
            <div className='flex-1'>
                <div>
                    <h2>Events</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore accusamus, deleniti nam ipsum 
                    quasi molestias, neque corporis iure a est cum reprehenderit qui eligendi modi. Impedit est magnam saepe maxime!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs