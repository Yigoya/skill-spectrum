import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Event({Date, Time, Location, noHR}) {
  return (
    <div>
        <div>
            {noHR ? null : <hr className="opacity-25  my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />}
            <p className='text-gray-500 text-sm'><span className='text-yellow-500 text-sm'><CalendarMonthIcon style={{ fontSize: 16 }} className='mr-1'/></span>{Date}</p>
            <h1 className='text-2xl font-bold mt-1 mb-3 font-family: Montserrat hover:text-yellow-500'>Tech Sumbit</h1>
            <div className='flex'>
                <p className='text-gray-500 text-sm'><span className='text-yellow-500'><AccessTimeIcon style={{ fontSize: 16 }} className='mr-1' /></span> {Time}</p>
                <p className='text-gray-500 ml-2 text-sm'><span className='text-yellow-500'> <LocationOnIcon style={{ fontSize: 16 }} className='mr-1'/> </span> {Location}</p>
            </div>
        </div>
    </div>
  )
}

export default Event