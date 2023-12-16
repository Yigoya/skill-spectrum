import React from 'react'

function Header() {
  return (
    <>
        {/* <header className='flex justify-evenly bg-gray-50 h-16 items-center'>
            <img src="#" alt="Logo" />
            <div className='flex gap-6' >
                <a href="#">Home</a>
                <a href="#">Pages</a>
                <a href="#">Courses</a>
                <a href="#">Services</a>
            </div>
        </header> */}
  
    <header className="bg-white p-4 font-medium text-black shadow-[0_2px_4px_rgba(81,107,152,0.3)] font-family: 'Helvetica Neue', system-ui, Roboto, Arial, sans-serif"> 
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="w-32"><img src="https://thepixelcurve.com/html/edubin/images/logo.png" alt="Logo" /></div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-pink-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header