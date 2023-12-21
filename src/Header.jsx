import React from 'react'
import logo from "/images/logo.png"

function Header() {
  return (
    <>  
    <header className="-top-0 sticky z-50 bg-white p-4 font-medium text-black shadow-[0_2px_4px_rgba(81,107,152,0.3)] font-family: 'Helvetica Neue', system-ui, Roboto, Arial, sans-serif"> 
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="w-32"><img src="https://thepixelcurve.com/html/edubin/images/logo.png" alt="Logo" /></div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-yellow-500">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header