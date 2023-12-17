import React from 'react'
function Profile({data}) {
  return (
    <div className='cursor-pointer min-width pt-12 pb-4 dark:bg-gray-900 flex flex-col items-center rounded-xl'>
            <img className='w-48 h-48  rounded-full object-cover' src={data.pic} alt="" />
        <p className='text-white font-bold text-xl mt-8'>{data.name}</p>
        <p className='text-white opacity-60'>{data.pro}</p>
    </div>
  )
}

export default Profile