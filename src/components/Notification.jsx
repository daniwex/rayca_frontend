import React from 'react'

export default function Notification({num}) {
  return (
    <div className='text-white rounded-full bg-[#4270E7] h-5 w-5 flex justify-center items-center text-xs'>
      {num}
    </div>
  )
}
