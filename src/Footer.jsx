import { Container } from 'postcss'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import HouseIcon from '@mui/icons-material/House';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900" >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8" >
            <div className="md:flex md:justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Skill Spectrum</span>
                    </a>
                </div>

                {/* <div className="flex justify-between"> */}

                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4 transition-transform duration-400 ease-in-out hover:translate-x-2 hover:text-yellow-500">
                        <a href="#"><span className='text-yellow-500'><ChevronRightIcon /></span>Resource 1</a>
                        </li>
                        <li className='transition-transform duration-400 ease-in-out hover:translate-x-2 hover:text-yellow-500'>
                        <a href="#"><span className='text-yellow-500'><ChevronRightIcon /></span>Resource 2</a>
                        </li>
                    </ul>
                </div>
            
                <div className='mt-6 md:mt-0'>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4 transition-transform duration-400 ease-in-out hover:translate-x-2 hover:text-yellow-500">
                        <a href="#"><span className='text-yellow-500'><ChevronRightIcon /></span>Telegram</a>
                        </li>
                        <li className='transition-transform duration-400 ease-in-out hover:translate-x-2 hover:text-yellow-500'>
                        <a href="#"><span className='text-yellow-500'><ChevronRightIcon /></span>Instagram</a>
                        </li>
                    </ul>
                </div>
            
                <div className='mt-6 md:mt-0'>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                        <li className="mb-4">
                            <p><span className='pr-4 text-yellow-500'><HouseIcon /></span> AASTU, Addis Ababa</p>
                        </li>
                        <li className="mb-2">
                            <p><span className='pr-4 text-yellow-500'><CallIcon /></span> +251-961304325</p>
                        </li>
                        <li className="mb-2">
                            <p><span className='pr-4 text-yellow-500'><MailOutlineIcon /></span> yttaye100@gmail.com</p>
                        </li>
                    </ul>
                </div>
                    
                {/* </div> */}
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 <a href="#" className="hover:underline">Skill Spectrum</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0 text-white">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-pink-400 ms-5"><TelegramIcon /></a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-pink-400 ms-5"><InstagramIcon /></a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-pink-400 ms-5"><FacebookIcon /></a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-pink-400 ms-5"><GitHubIcon /></a>
                </div>
            </div> 
      </div>
    </footer>
  );
}

export default Footer