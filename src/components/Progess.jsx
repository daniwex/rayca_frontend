import React from 'react'

export default function Progess({progress}) {
  return (
    <div className='bg-[#47474a] w-full rounded-md h-2 my-2 relative'>
      <div className={`absolute left-0 bg-white h-full rounded-md`} style={{width:progress}}></div>
    </div>
  )
}
